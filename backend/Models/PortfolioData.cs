namespace Portfolio.Api.Models;

public record ProjectHighlight(string Title, string Stack, List<string> Bullets);

public record ExperienceEntry(
    string Role,
    string Organization,
    string? OrganizationUrl,
    string Period,
    string? Badge,
    List<ProjectHighlight> Projects);

public record PersonalProject(
    string Title,
    string Subtitle,
    string Description,
    List<string> Technologies,
    string? RepoUrl);

public record Achievement(string Name, string Result, string? Url = null);

public record Stat(string Value, string Label);

public record AboutInfo(List<string> Paragraphs, List<Stat> Stats);

public record SkillCategory(string Title, List<string> Items);

public record EducationEntry(
    string Institution,
    string Degree,
    string Period,
    string Coursework);

public record PortfolioResponse(
    AboutInfo About,
    List<ExperienceEntry> Experience,
    List<PersonalProject> PersonalProjects,
    List<SkillCategory> Skills,
    List<Achievement> Achievements,
    List<Stat> CompetitiveStats,
    List<EducationEntry> Education);
