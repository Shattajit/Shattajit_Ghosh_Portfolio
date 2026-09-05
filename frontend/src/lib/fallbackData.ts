import { PortfolioResponse } from "./types";

// Used only if the ASP.NET Core API is unreachable, so the site still renders.
export const fallbackPortfolioData: PortfolioResponse = {
  experience: [
    {
      role: "Software Engineer Level-1",
      organization: "Astha IT",
      period: "Sep 2024 — Present",
      badge: 'Q1 "Game Changer" Award — top-performing engineer of the quarter',
      projects: [
        {
          title: "Docomate.AI",
          stack: "ASP.NET Core · REST API · OpenAI API · LlamaIndex · Prompt Engineering",
          bullets: [
            "Integrated an OpenAI-powered service into the backend to accurately transliterate application text into Bangla.",
            "Built a LlamaParse-based template engine that extracts content and structure from uploaded documents and maps them into reusable templates for automated processing.",
            "Designed the document-processing pipeline using the Strategy pattern to route PDF, Excel, and CSV files to independently testable extractors — new formats plug in without touching existing code.",
          ],
        },
        {
          title: "Bengal Airlift Dashboard",
          stack: "ASP.NET Core 9 · EF Core · Dapper · GraphQL · Hangfire",
          bullets: [
            "Owned the final phase: worked directly with clients to design reports with data synced via Airbyte into live dashboards.",
            "Built file upload/download endpoints with template processing and scheduled report generation via Hangfire.",
            "Optimized GraphQL resolvers for multi-SBU queries and implemented services across all business clusters with extended ledger logic.",
            "Fixed broken multi-device logout by migrating from a single per-user token column to a dedicated refresh-token table — each device now keeps an independently revocable session.",
          ],
        },
        {
          title: "Pantry",
          stack: "ASP.NET Core MVC · Microservices · Production",
          bullets: [
            "Reworked the pickup ordering flow to surface an admin-editable capacity notice instead of a confusing checkout-time failure once a distribution day filled up.",
            "Built a date-range invoice report and composition-based PDF batching that removed manual order-sorting previously done by hand.",
            "Added role management (client ⇄ admin switching) and category management to the MVC admin panel.",
          ],
        },
      ],
    },
    {
      role: "Software Engineering Intern",
      organization: "Astha IT",
      period: "Jun 2024 — Sep 2024",
      badge: null,
      projects: [
        {
          title: "Docomate.AI",
          stack: "ASP.NET Core 9 · REST API · EF Core · Dapper",
          bullets: [
            "Learned C# and backend architecture patterns including Clean Architecture, EF Core, and Dapper for scalable API development.",
            "Migrated filtering logic to Dapper, implemented date-range and template-name filtering, and resolved email notification issues.",
          ],
        },
      ],
    },
  ],
  personalProjects: [
    {
      title: "Omnitrix",
      subtitle: "MERN Stack E-commerce System",
      description:
        "Full e-commerce platform with product browsing, cart management, and order processing.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      repoUrl: "https://github.com/Shattajit/Omnitrix/tree/master",
    },
    {
      title: "Smart Attendance System",
      subtitle: "ML/DL-based Thesis Project",
      description:
        "Real-time attendance monitoring system built using machine learning and deep learning techniques.",
      technologies: ["Python", "Machine Learning", "Deep Learning"],
      repoUrl: "https://github.com/Shattajit/Thesis_based_project",
    },
  ],
  achievements: [
    { name: "AUST IUPC 2022", result: "46th" },
    { name: "UITS IUPC 2022", result: "11th" },
    { name: "JnU CSE Sports Carnival 2023", result: "2nd" },
    { name: "IEEEXtreme 17.0", result: "740th Global · 4th BD" },
    { name: "ICPC Dhaka Regional 2022", result: "102nd" },
    { name: "Codeforces", result: "Max Rating 1643" },
  ],
};
