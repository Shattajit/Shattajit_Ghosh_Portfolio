using Portfolio.Api.Models;

namespace Portfolio.Api.Data;

public static class AchievementsData
{
    public static List<Achievement> GetAll() => new()
    {
        new("AUST IUPC 2022", "46th"),
        new("UITS IUPC 2022", "11th"),
        new("JnU CSE Sports Carnival 2023", "2nd"),
        new("IEEEXtreme 17.0", "740th Global · 4th BD"),
        new("ICPC Dhaka Regional 2022", "102nd", "https://codeforces.com/profile/ShattajiT_"),
        new("Codeforces", "Max Rating 1643", "https://codeforces.com/profile/ShattajiT_")
    };

    public static List<Stat> GetStats() => new()
    {
        new("2200+", "Problems Solved"),
        new("10+", "National Contests"),
        new("1643", "Max CF Rating"),
        new("4th BD", "IEEEXtreme 17.0")
    };
}
