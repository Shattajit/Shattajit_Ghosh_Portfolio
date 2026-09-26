using Portfolio.Api.Models;

namespace Portfolio.Api.Data;

public static class AchievementsData
{
    public static List<Achievement> GetAll() => new()
    {
        new("JnU CSE Sports Carnival Programming Contest 2023", "2nd", "https://vjudge.net/contest/594718##rank"),
        new("JnU Intra Department Programming Contest 2022", "4th", "https://toph.co/contests/training/2cbypdx/standings"),
        new("UITS IUPC 2022", "11th", "https://vjudge.net/contest/538028##rank"),
        new("AUST IUPC 2022", "46th", "https://algo.codemarshal.org/contests/aust-2022/standings"),
        new("CoU-BRACNet Inter University Programming Contest 2023", "46th", "https://toph.co/c/cou-bracnet-inter-university-2023/standings"),
        new("BUET IUPC 2022 & 2023 (JnU_ABC)", "49th", "https://toph.co/c/buet-inter-university-2023/standings"),
        new("SEC Inter University Junior Programming Contest 2022", "54th", "https://toph.co/c/sec-inter-university-junior-2022/standings"),
        new("SUST IUPC 2023 (JnU_DholaiKhalBois)", "76th", "https://toph.co/c/sust-inter-university-2023/standings"),
        new("ICPC Asia Dhaka Regional Contest 2022", "102nd", "https://icpc.global/private/person/489583/ICPCID"),
        new("IEEEXtreme 17.0", "740th Global · 4th BD", "https://csacademy.com/contest/ieeextreme17/scoreboard/"),
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
