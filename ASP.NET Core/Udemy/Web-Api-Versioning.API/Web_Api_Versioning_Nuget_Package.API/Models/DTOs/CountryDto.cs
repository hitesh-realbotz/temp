﻿namespace Web_Api_Versioning_Nuget_Package.API.Models.DTOs
{
    public class CountryDtoV1
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
    public class CountryDtoV2
    {
        public int Id { get; set; }
        public string CountryName { get; set; }
    }
}
