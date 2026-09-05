namespace Portfolio.Api.Models;

public record ProjectHighlight(string Title, string Stack, List<string> Bullets);

public record ExperienceEntry(
    string Role,
    string Organization,
    string Period,
    string? Badge,
    List<ProjectHighlight> Projects);

public record PersonalProject(
    string Title,
    string Subtitle,
    string Description,
    List<string> Technologies,
    string? RepoUrl);

public record Achievement(string Name, string Result);

public record PortfolioResponse(
    List<ExperienceEntry> Experience,
    List<PersonalProject> PersonalProjects,
    List<Achievement> Achievements);
