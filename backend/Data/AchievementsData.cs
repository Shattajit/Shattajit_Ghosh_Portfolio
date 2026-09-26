using Portfolio.Api.Models;

namespace Portfolio.Api.Data;

public static class AchievementsData
{
    public static List<Achievement> GetAll() => new()
    {
        new("JnU CSE Sports Carnival Programming Contest 2023", "2nd"),
        new("JnU Intra Department Programming Contest 2022", "4th"),
        new("UITS IUPC 2022", "11th"),
        new("AUST IUPC 2022", "46th"),
        new("CoU-BRACNet Inter University Programming Contest 2023", "46th"),
        new("BUET IUPC 2022 & 2023 (JnU_ABC)", "49th"),
        new("SEC Inter University Junior Programming Contest 2022", "54th"),
        new("SUST IUPC 2023 (JnU_DholaiKhalBois)", "76th"),
        new("ICPC Asia Dhaka Regional Contest 2022", "102nd", "https://codeforces.com/profile/ShattajiT_"),
        new("IEEEXtreme 17.0", "740th Global · 4th BD"),
        new("Codeforces", "Max Rating 1645", "https://codeforces.com/profile/ShattajiT_")
    };

    public static List<Stat> GetStats() => new()
    {
        new("2200+", "Problems Solved"),
        new("10+", "National Contests"),
        new("1645", "Max CF Rating"),
        new("4th BD", "IEEEXtreme 17.0")
    };
}
