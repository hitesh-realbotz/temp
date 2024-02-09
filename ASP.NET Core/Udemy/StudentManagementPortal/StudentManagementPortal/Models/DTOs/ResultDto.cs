﻿using StudentManagementPortal.Models.Domain;

namespace StudentManagementPortal.Models.DTOs
{
    public class ResultDto
    {
        public int Id { get; set; }
        public string Year { get; set; } //2023-2024
        public int StudentId { get; set; }

        public StudentProfileDto Student { get; set; }

        public List<ResultSubjectDto> ResultSubjects { get; set; }
    }
}