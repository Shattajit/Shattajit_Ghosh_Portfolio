using Portfolio.Api.Models;

namespace Portfolio.Api.Data;

public static class ExperienceData
{
    public static List<ExperienceEntry> GetAll() => new()
    {
        new(
            Role: "Software Engineer Level-1",
            Organization: "Astha IT",
            OrganizationUrl: "https://asthait.com",
            Period: "Sep 2024 — Present",
            Badge: "Q1 \"Game Changer\" Award — top-performing engineer of the quarter",
            Projects: new List<ProjectHighlight>
            {
                new(
                    Title: "Docomate.AI",
                    Stack: "ASP.NET Core · REST API · OpenAI API · LlamaIndex · Prompt Engineering",
                    Bullets: new List<string>
                    {
                        "Integrated an **OpenAI-powered transliteration service** into the backend to accurately convert application text into Bangla.",
                        "Built a **LlamaParse-based template engine** that extracts content and structure from uploaded documents and maps them into reusable templates for automated processing.",
                        "Designed the document-processing pipeline using the **Strategy pattern** to route PDF, Excel, and CSV files to independently testable extractors — new formats plug in without touching existing code."
                    }),
                new(
                    Title: "Bengal Airlift Dashboard",
                    Stack: "ASP.NET Core 9 · EF Core · Dapper · GraphQL · Hangfire",
                    Bullets: new List<string>
                    {
                        "Owned the final phase: worked **directly with clients** to design reports with data synced via Airbyte into live dashboards.",
                        "Built file upload/download endpoints with template processing and **scheduled report generation** via Hangfire.",
                        "Optimized **GraphQL resolvers** for multi-SBU queries and implemented services across all business clusters with extended ledger logic.",
                        "Fixed broken multi-device logout by migrating to a **dedicated refresh-token table** — each device now keeps an independently revocable session."
                    }),
                new(
                    Title: "Pantry",
                    Stack: "ASP.NET Core MVC · Microservices · Production",
                    Bullets: new List<string>
                    {
                        "Reworked the pickup ordering flow to surface an **admin-editable capacity notice** instead of a confusing checkout-time failure once a distribution day filled up.",
                        "Built a date-range invoice report and **composition-based PDF batching** that removed manual order-sorting previously done by hand.",
                        "Added **role management** (client ⇄ admin switching) and category management to the MVC admin panel."
                    })
            }),
        new(
            Role: "Software Engineering Intern",
            Organization: "Astha IT",
            OrganizationUrl: "https://asthait.com",
            Period: "Jun 2024 — Sep 2024",
            Badge: null,
            Projects: new List<ProjectHighlight>
            {
                new(
                    Title: "Docomate.AI",
                    Stack: "ASP.NET Core 9 · REST API · EF Core · Dapper",
                    Bullets: new List<string>
                    {
                        "Learned C# and backend architecture patterns including **Clean Architecture, EF Core, and Dapper** for scalable API development.",
                        "Migrated filtering logic to Dapper, implemented date-range and template-name filtering, and **resolved email notification issues**."
                    })
            })
    };
}
