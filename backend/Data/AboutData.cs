using Portfolio.Api.Models;

namespace Portfolio.Api.Data;

public static class AboutData
{
    public static AboutInfo GetInfo() => new(
        Paragraphs: new List<string>
        {
            "I'm a Software Engineer at **Astha IT** in Dhaka, where I build backend systems on **ASP.NET Core** — from AI-integrated document pipelines to production dashboards used by real business clients. I care about clean architecture, pragmatic design patterns, and shipping code that's easy for the next engineer to extend.",
            "Before this, I spent years sharpening problem-solving fundamentals through competitive programming — **2200+ problems solved** across Codeforces, CodeChef, LeetCode, SPOJ and HackerRank, and multiple national-level ICPC/IUPC contests. That background shapes how I approach engineering: reduce a messy problem to its core, then build the simplest correct solution.",
            "I graduated with a **BSc in Computer Science & Engineering** from Jagannath University in 2024."
        },
        Stats: new List<Stat>
        {
            new("2200+", "Problems Solved"),
            new("10+", "National Contests"),
            new("5", "Production Projects"),
            new("1643", "Codeforces Max Rating")
        });
}
