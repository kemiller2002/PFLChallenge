namespace server

open System
open System.Collections.Generic
open System.Linq
open System.Threading.Tasks
open Microsoft.AspNetCore.Builder
open Microsoft.AspNetCore.Hosting
open Microsoft.Extensions.Configuration
open Microsoft.Extensions.DependencyInjection
open Microsoft.AspNetCore.Http
open Microsoft.AspNetCore.Cors


type Startup private () =
    new (configuration: IConfiguration) as this =
        Startup() then
        this.Configuration <- configuration

    // This method gets called by the runtime. Use this method to add services to the container.
    member this.ConfigureServices(services: IServiceCollection) =
        // Add framework services.
        let corsPolicyBuilder = 
            fun (builder:Infrastructure.CorsPolicyBuilder) -> 
                builder.AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowCredentials() 
                    .AllowAnyMethod()
                    .WithExposedHeaders("content-disposition")
                    |> ignore

        let corsPolicyOptions = 
            fun (options:Infrastructure.CorsOptions) ->
                    options.AddPolicy("CorsPolicy", 
                        Action<Infrastructure.CorsPolicyBuilder>(corsPolicyBuilder));

        services.AddCors(Action<Infrastructure.CorsOptions> (corsPolicyOptions)) |> ignore
        services.AddMvc() |> ignore


    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    member this.Configure(app: IApplicationBuilder, env: IHostingEnvironment) =
        
        app.UseCors("CorsPolicy") |> ignore
       
        
        app.UseMvc() |> ignore

    member val Configuration : IConfiguration = null with get, set