export type ProjectHighlight = {
  title: string;
  stack: string;
  bullets: string[];
};

export type ExperienceEntry = {
  role: string;
  organization: string;
  organizationUrl: string | null;
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
  url: string | null;
};

export type Stat = {
  value: string;
  label: string;
};

export type AboutInfo = {
  paragraphs: string[];
  stats: Stat[];
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type EducationEntry = {
  institution: string;
  degree: string;
  period: string;
  coursework: string;
};

export type PortfolioResponse = {
  about: AboutInfo;
  experience: ExperienceEntry[];
  personalProjects: PersonalProject[];
  skills: SkillCategory[];
  achievements: Achievement[];
  competitiveStats: Stat[];
  education: EducationEntry[];
};

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};
