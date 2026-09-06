using Portfolio.Api.Models;

namespace Portfolio.Api.Data;

public static class EducationData
{
    public static List<EducationEntry> GetAll() => new()
    {
        new(
            Institution: "Jagannath University",
            Degree: "BSc, Computer Science & Engineering",
            Period: "Jan 2019 — Oct 2024",
            Coursework: "Object-Oriented Programming, Data Structures & Algorithms, DBMS, Computer Networking, Operating Systems, Machine Learning.")
    };
}
