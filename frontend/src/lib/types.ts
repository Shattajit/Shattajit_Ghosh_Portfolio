export type ProjectHighlight = {
  title: string;
  stack: string;
  bullets: string[];
};

export type ExperienceEntry = {
  role: string;
  organization: string;
  period: string;
  badge: string | null;
  projects: ProjectHighlight[];
};

export type PersonalProject = {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  repoUrl: string | null;
};

export type Achievement = {
  name: string;
  result: string;
};

export type PortfolioResponse = {
  experience: ExperienceEntry[];
  personalProjects: PersonalProject[];
  achievements: Achievement[];
};

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};
