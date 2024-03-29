﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Web_Api_Versioning_Url_based.API.Models.DTOs;

namespace Web_Api_Versioning_Url_based.API.V1.Controller
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class CountriesController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var countriesDomainModel = CountriesData.Get();
            var response = new List<CountryDtoV1>();

            foreach (var countryDomain in countriesDomainModel)
            {
                response.Add(new CountryDtoV1
                {
                    Id = countryDomain.Id,
                    Name = countryDomain.Name
                });
            }
            return Ok(response);
        }
    }
}
