using Portfolio.Api.Models;

namespace Portfolio.Api.Data;

public static class PortfolioDataProvider
{
    public static PortfolioResponse GetData() => new(
        Experience: new List<ExperienceEntry>
        {
            new(
                Role: "Software Engineer Level-1",
                Organization: "Astha IT",
                Period: "Sep 2024 — Present",
                Badge: "Q1 \"Game Changer\" Award — top-performing engineer of the quarter",
                Projects: new List<ProjectHighlight>
                {
                    new(
                        Title: "Docomate.AI",
                        Stack: "ASP.NET Core · REST API · OpenAI API · LlamaIndex · Prompt Engineering",
                        Bullets: new List<string>
                        {
                            "Integrated an OpenAI-powered service into the backend to accurately transliterate application text into Bangla.",
                            "Built a LlamaParse-based template engine that extracts content and structure from uploaded documents and maps them into reusable templates for automated processing.",
                            "Designed the document-processing pipeline using the Strategy pattern to route PDF, Excel, and CSV files to independently testable extractors — new formats plug in without touching existing code."
                        }),
                    new(
                        Title: "Bengal Airlift Dashboard",
                        Stack: "ASP.NET Core 9 · EF Core · Dapper · GraphQL · Hangfire",
                        Bullets: new List<string>
                        {
                            "Owned the final phase: worked directly with clients to design reports with data synced via Airbyte into live dashboards.",
                            "Built file upload/download endpoints with template processing and scheduled report generation via Hangfire.",
                            "Optimized GraphQL resolvers for multi-SBU queries and implemented services across all business clusters with extended ledger logic.",
                            "Fixed broken multi-device logout by migrating from a single per-user token column to a dedicated refresh-token table — each device now keeps an independently revocable session."
                        }),
                    new(
                        Title: "Pantry",
                        Stack: "ASP.NET Core MVC · Microservices · Production",
                        Bullets: new List<string>
                        {
                            "Reworked the pickup ordering flow to surface an admin-editable capacity notice instead of a confusing checkout-time failure once a distribution day filled up.",
                            "Built a date-range invoice report and composition-based PDF batching that removed manual order-sorting previously done by hand.",
                            "Added role management (client ⇄ admin switching) and category management to the MVC admin panel."
                        })
                }),
            new(
                Role: "Software Engineering Intern",
                Organization: "Astha IT",
                Period: "Jun 2024 — Sep 2024",
                Badge: null,
                Projects: new List<ProjectHighlight>
                {
                    new(
                        Title: "Docomate.AI",
                        Stack: "ASP.NET Core 9 · REST API · EF Core · Dapper",
                        Bullets: new List<string>
                        {
                            "Learned C# and backend architecture patterns including Clean Architecture, EF Core, and Dapper for scalable API development.",
                            "Migrated filtering logic to Dapper, implemented date-range and template-name filtering, and resolved email notification issues."
                        })
                })
        },
        PersonalProjects: new List<PersonalProject>
        {
            new(
                Title: "Omnitrix",
                Subtitle: "MERN Stack E-commerce System",
                Description: "Full e-commerce platform with product browsing, cart management, and order processing.",
                Technologies: new List<string> { "React", "Node.js", "Express", "MongoDB" },
                RepoUrl: "https://github.com/Shattajit/Omnitrix/tree/master"),
            new(
                Title: "Smart Attendance System",
                Subtitle: "ML/DL-based Thesis Project",
                Description: "Real-time attendance monitoring system built using machine learning and deep learning techniques.",
                Technologies: new List<string> { "Python", "Machine Learning", "Deep Learning" },
                RepoUrl: "https://github.com/Shattajit/Thesis_based_project")
        },
        Achievements: new List<Achievement>
        {
            new("AUST IUPC 2022", "46th"),
            new("UITS IUPC 2022", "11th"),
            new("JnU CSE Sports Carnival 2023", "2nd"),
            new("IEEEXtreme 17.0", "740th Global · 4th BD"),
            new("ICPC Dhaka Regional 2022", "102nd"),
            new("Codeforces", "Max Rating 1643")
        });
}
