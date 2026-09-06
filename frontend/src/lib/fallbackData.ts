import { PortfolioResponse } from "./types";

// Used only if the ASP.NET Core API is unreachable, so the site still renders.
export const fallbackPortfolioData: PortfolioResponse = {
  about: {
    paragraphs: [
      "I'm a Software Engineer at **Astha IT** in Dhaka, where I build backend systems on **ASP.NET Core** — from AI-integrated document pipelines to production dashboards used by real business clients. I care about clean architecture, pragmatic design patterns, and shipping code that's easy for the next engineer to extend.",
      "Before this, I spent years sharpening problem-solving fundamentals through competitive programming — **2200+ problems solved** across Codeforces, CodeChef, LeetCode, SPOJ and HackerRank, and multiple national-level ICPC/IUPC contests. That background shapes how I approach engineering: reduce a messy problem to its core, then build the simplest correct solution.",
      "I graduated with a **BSc in Computer Science & Engineering** from Jagannath University in 2024.",
    ],
    stats: [
      { value: "2200+", label: "Problems Solved" },
      { value: "10+", label: "National Contests" },
      { value: "5", label: "Production Projects" },
      { value: "1643", label: "Codeforces Max Rating" },
    ],
  },
  experience: [
    {
      role: "Software Engineer Level-1",
      organization: "Astha IT",
      organizationUrl: "https://asthait.com",
      period: "Sep 2024 — Present",
      badge: 'Q1 "Game Changer" Award — top-performing engineer of the quarter',
      projects: [
        {
          title: "Docomate.AI",
          stack: "ASP.NET Core · REST API · OpenAI API · LlamaIndex · Prompt Engineering",
          bullets: [
            "Integrated an **OpenAI-powered transliteration service** into the backend to accurately convert application text into Bangla.",
            "Built a **LlamaParse-based template engine** that extracts content and structure from uploaded documents and maps them into reusable templates for automated processing.",
            "Designed the document-processing pipeline using the **Strategy pattern** to route PDF, Excel, and CSV files to independently testable extractors — new formats plug in without touching existing code.",
          ],
        },
        {
          title: "Bengal Airlift Dashboard",
          stack: "ASP.NET Core 9 · EF Core · Dapper · GraphQL · Hangfire",
          bullets: [
            "Owned the final phase: worked **directly with clients** to design reports with data synced via Airbyte into live dashboards.",
            "Built file upload/download endpoints with template processing and **scheduled report generation** via Hangfire.",
            "Optimized **GraphQL resolvers** for multi-SBU queries and implemented services across all business clusters with extended ledger logic.",
            "Fixed broken multi-device logout by migrating to a **dedicated refresh-token table** — each device now keeps an independently revocable session.",
          ],
        },
        {
          title: "Pantry",
          stack: "ASP.NET Core MVC · Microservices · Production",
          bullets: [
            "Reworked the pickup ordering flow to surface an **admin-editable capacity notice** instead of a confusing checkout-time failure once a distribution day filled up.",
            "Built a date-range invoice report and **composition-based PDF batching** that removed manual order-sorting previously done by hand.",
            "Added **role management** (client ⇄ admin switching) and category management to the MVC admin panel.",
          ],
        },
      ],
    },
    {
      role: "Software Engineering Intern",
      organization: "Astha IT",
      organizationUrl: "https://asthait.com",
      period: "Jun 2024 — Sep 2024",
      badge: null,
      projects: [
        {
          title: "Docomate.AI",
          stack: "ASP.NET Core 9 · REST API · EF Core · Dapper",
          bullets: [
            "Learned C# and backend architecture patterns including **Clean Architecture, EF Core, and Dapper** for scalable API development.",
            "Migrated filtering logic to Dapper, implemented date-range and template-name filtering, and **resolved email notification issues**.",
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
  skills: [
    { title: "Languages", items: ["C#", "C++", "JavaScript", "Java"] },
    {
      title: "Frameworks & Technologies",
      items: [
        "ASP.NET Core",
        "Node.js",
        "Express.js",
        "React.js",
        "Next.js",
        "REST API",
        "GraphQL",
        "Microservices",
        "Git",
        "Linux",
        "Docker",
      ],
    },
    { title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  ],
  achievements: [
    { name: "AUST IUPC 2022", result: "46th", url: null },
    { name: "UITS IUPC 2022", result: "11th", url: null },
    { name: "JnU CSE Sports Carnival 2023", result: "2nd", url: null },
    { name: "IEEEXtreme 17.0", result: "740th Global · 4th BD", url: null },
    {
      name: "ICPC Dhaka Regional 2022",
      result: "102nd",
      url: "https://codeforces.com/profile/ShattajiT_",
    },
    {
      name: "Codeforces",
      result: "Max Rating 1643",
      url: "https://codeforces.com/profile/ShattajiT_",
    },
  ],
  competitiveStats: [
    { value: "2200+", label: "Problems Solved" },
    { value: "10+", label: "National Contests" },
    { value: "1643", label: "Max CF Rating" },
    { value: "4th BD", label: "IEEEXtreme 17.0" },
  ],
  education: [
    {
      institution: "Jagannath University",
      degree: "BSc, Computer Science & Engineering",
      period: "Jan 2019 — Oct 2024",
      coursework:
        "Object-Oriented Programming, Data Structures & Algorithms, DBMS, Computer Networking, Operating Systems, Machine Learning.",
    },
  ],
};
