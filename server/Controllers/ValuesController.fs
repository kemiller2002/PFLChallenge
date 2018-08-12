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

    [<Route("{api}")>]
    [<HttpGet>]
    member this.Get (api:string) = 
            async{
                use client = new HttpClient()
                let subAddress = sprintf "/%s?apikey=136085" api
                client.BaseAddress <- new Uri("https://testapi.pfl.com")
                client.DefaultRequestHeaders.Authorization <- new AuthenticationHeaderValue("Basic", "bWluaXByb2plY3Q6UHIhbnQxMjM=")
                let! response = client.GetAsync(subAddress) |> Async.AwaitTask

                let! content = response.Content.ReadAsStringAsync() |> Async.AwaitTask
                return content
            }
    [<Route("{api}")>]
    [<HttpPost>]
    member this.Post (api:string)([<FromBody>]model:Object) = 
        async{
                use client = new HttpClient()
                let subAddress = sprintf "/%s?apikey=136085" api
                client.BaseAddress <- new Uri("https://testapi.pfl.com")
    
                let content = new StringContent(Newtonsoft.Json.JsonConvert.SerializeObject(model), System.Text.Encoding.UTF8, "application/json");

                client.DefaultRequestHeaders.Authorization <- new AuthenticationHeaderValue("Basic", "bWluaXByb2plY3Q6UHIhbnQxMjM=")
                
                let! response = client.PostAsync(subAddress, content) |> Async.AwaitTask

                let! content = response.Content.ReadAsStringAsync() |> Async.AwaitTask
                return content
              
            }