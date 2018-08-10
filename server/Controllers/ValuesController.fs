namespace server.Controllers

open System
open System.Collections.Generic
open System.Linq
open System.Threading.Tasks
open Microsoft.AspNetCore.Mvc
open System.Net.Http
open System.Net.Http.Headers

(*
[<Route("api/[controller]")>]
type ValuesController () =
    inherit Controller()

    [<HttpGet>]
    member this.Get() =
        [|"value1"; "value2"|]

    [<HttpGet("{id}")>]
    member this.Get(id:int) =
        "value"

    [<HttpPost>]
    member this.Post([<FromBody>]value:string) =
        ()

    [<HttpPut("{id}")>]
    member this.Put(id:int, [<FromBody>]value:string ) =
        ()

    [<HttpDelete("{id}")>]
    member this.Delete(id:int) =
        ()
*)

[<Route("/")>]
type ProxyController () = 
    inherit Controller()

    [<HttpGet>]
    member this.Get () = 
            async{
                use client = new HttpClient()

                client.BaseAddress <- new Uri("https://testapi.pfl.com")
                client.DefaultRequestHeaders.Authorization <- new AuthenticationHeaderValue("Basic", "bWluaXByb2plY3Q6UHIhbnQxMjM=")
                let! response = client.GetAsync("/Products?apikey=136085") |> Async.AwaitTask
            
                let! content = response.Content.ReadAsStringAsync() |> Async.AwaitTask
                return content
            }
