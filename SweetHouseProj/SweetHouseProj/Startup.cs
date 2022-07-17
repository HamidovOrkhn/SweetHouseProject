using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SweetHouseProj.Resources.Abstracts;
using SweetHouseProj.Resources.Concretes;
using Swashbuckle.AspNetCore;
using SweetHouseProj.Middleware;
using SweetHouseProj.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
namespace SweetHouseProj
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews().AddNewtonsoftJson(options => options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
            services.AddScoped(typeof(IBaseService<>), typeof(BaseService<>));
            services.AddRouting(options => options.LowercaseUrls = true);
            services.AddMvc();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "SweetHouse App Services",
                    Version = "v1",
                    Contact = new OpenApiContact
                    {
                        Name = "Orxan Hamidov",
                        Email = "orxan.hamidov.orxan.hamidov@mail.ru"
                    },
                });
            }
                );
            services.AddDbContext<MainContext>(a => a.UseSqlServer(Configuration.GetConnectionString(nameof(MainContext))));
            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                app.UseSwagger();

                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "SweetHouse Api v1.0.0"));
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }

            app.UseStaticFiles();

            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseMiddleware<ErrorHandlerMiddleware>();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");

                
            });

            app.Map("/admin", admin =>
            {
                admin.UseRouting();

                admin.UseEndpoints(endpoints =>
                {
                    endpoints.MapControllerRoute(
                                      name: "areas",
                                      pattern: "{area:exists}/{controller=User}/{action=Login}/{id?}"
                                    );

                });

            });
            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
