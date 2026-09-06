using Portfolio.Api.Models;

namespace Portfolio.Api.Data;

public static class SkillsData
{
    public static List<SkillCategory> GetAll() => new()
    {
        new("Languages", new List<string> { "C#", "C++", "JavaScript", "Java" }),
        new("Frameworks & Technologies", new List<string>
        {
            "ASP.NET Core", "Node.js", "Express.js", "React.js", "Next.js",
            "REST API", "GraphQL", "Microservices", "Git", "Linux", "Docker"
        }),
        new("Databases", new List<string> { "PostgreSQL", "MySQL", "MongoDB" })
    };
}
