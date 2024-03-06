﻿using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using OnlineBookStoreAPI.Data;
using OnlineBookStoreAPI.Models.Domain;
using System.Text;

namespace OnlineBookStoreAPI.Extensions
{
    public static class IdentityServiceExtensions
    {
        public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddTransient<IUserTwoFactorTokenProvider<AppUser>, DataProtectorTokenProvider<AppUser>>();
            services.AddDataProtection();

            services.AddIdentityCore<AppUser>()
                .AddEntityFrameworkStores<BookStoreDbContext>()
                .AddSignInManager<SignInManager<AppUser>>()
                .AddDefaultTokenProviders()
                .AddTokenProvider<DataProtectorTokenProvider<AppUser>>(TokenOptions.DefaultProvider);


            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"]))
                    };

                    //options.Events = new JwtBearerEvents
                    //{
                    //    OnMessageReceived = context =>
                    //    {
                    //        var accessToken = context.Request.Query["access_token"];
                    //        var path = context.HttpContext.Request.Path;
                    //        if (!string.IsNullOrEmpty(accessToken) && path.StartsWithSegments("/hubs"))
                    //        {
                    //            context.Token = accessToken;
                    //        }
                    //        return Task.CompletedTask;
                    //    }
                    //};

                });

            //services.AddAuthorization(opt =>
            //{
            //    opt.AddPolicy("RequireAdminRole", policy => policy.RequireRole("Admin"));
            //    opt.AddPolicy("ModeratePhotoRole", policy => policy.RequireRole("Admin", "Moderator"));
            //});

            return services;
        }
    }
}
