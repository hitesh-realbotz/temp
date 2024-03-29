﻿using DatingApp.Entities;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text.Json;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace DatingApp.Data
{
    public class Seed
    {
        //public static async Task SeedUsers(DataContext context)
        //{
        //    if (await context.Users.AnyAsync()) return;

        //    var userData = await File.ReadAllTextAsync("Data/UserSeedData.json");

        //    var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };

        //    var users = JsonSerializer.Deserialize<List<AppUser>>(userData);

        //    foreach (var user in users)
        //    {
        //        using var hmac = new HMACSHA512();

        //        user.UserName = user.UserName.ToLower();
        //        user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("Pa$$w0rd"));
        //        user.PasswordSalt = hmac.Key;

        //        context.Users.Add(user);
        //    }

        //    await context.SaveChangesAsync();
        //}

        //With ASP.NET Identity
        public static async Task SeedUsers(UserManager<AppUser> userManager, RoleManager<AppRole> roleManager)
        {
            if (await userManager.Users.AnyAsync()) return;

            var userData = await File.ReadAllTextAsync("Data/UserSeedData.json");

            var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };

            var users = JsonSerializer.Deserialize<List<AppUser>>(userData, options);

            var roles = new List<AppRole>
            {
                new AppRole{Name = "Member"},
                new AppRole{Name = "Admin"},
                new AppRole{Name = "Moderator"},
            };

            foreach (var role in roles)
            {
                await roleManager.CreateAsync(role);
            }

            foreach (var user in users)
            {
                user.UserName = user.UserName.ToLower();

                await userManager.CreateAsync(user, "Pa$$w0rd");
                await userManager.AddToRoleAsync(user, "Member");
            }

            var admin = new AppUser
            {
                UserName = "admin"
            };

            await userManager.CreateAsync(admin, "Pa$$w0rd");
            await userManager.AddToRolesAsync(admin, new[] { "Admin", "Moderator" });
        }
    }

}
