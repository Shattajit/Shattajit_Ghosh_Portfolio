using Portfolio.Api.Models;

namespace Portfolio.Api.Data;

// Composes the portfolio response from per-section data files below —
// edit AboutData.cs / ExperienceData.cs / ProjectsData.cs / SkillsData.cs /
// AchievementsData.cs / EducationData.cs directly.
public static class PortfolioDataProvider
{
    public static PortfolioResponse GetData() => new(
        About: AboutData.GetInfo(),
        Experience: ExperienceData.GetAll(),
        PersonalProjects: ProjectsData.GetAll(),
        Skills: SkillsData.GetAll(),
        Achievements: AchievementsData.GetAll(),
        CompetitiveStats: AchievementsData.GetStats(),
        Education: EducationData.GetAll());
}
