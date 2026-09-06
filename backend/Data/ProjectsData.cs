using Portfolio.Api.Models;

namespace Portfolio.Api.Data;

public static class ProjectsData
{
    public static List<PersonalProject> GetAll() => new()
    {
        new(
            Title: "Omnitrix",
            Subtitle: "MERN Stack E-commerce System",
            Description: "Full e-commerce platform with product browsing, cart management, and order processing.",
            Technologies: new List<string> { "React", "Node.js", "Express", "MongoDB" },
            RepoUrl: "https://github.com/Shattajit/Omnitrix/tree/master"),
        new(
            Title: "Smart Attendance System",
            Subtitle: "ML/DL-based Thesis Project",
            Description: "Real-time attendance monitoring system built using machine learning and deep learning techniques.",
            Technologies: new List<string> { "Python", "Machine Learning", "Deep Learning" },
            RepoUrl: "https://github.com/Shattajit/Thesis_based_project")
    };
}
