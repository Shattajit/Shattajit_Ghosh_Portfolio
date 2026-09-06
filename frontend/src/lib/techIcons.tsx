import { IconType } from "react-icons";
import {
  SiDotnet,
  SiGraphql,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiCplusplus,
  SiGit,
  SiLinux,
  SiNextdotjs,
} from "react-icons/si";
import { BsOpenai } from "react-icons/bs";
import { DiJava } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { FiBox, FiCpu, FiLayers, FiTool, FiCode, FiTerminal } from "react-icons/fi";

type TechIconEntry = { keywords: string[]; Icon: IconType; color: string };

// Real brand marks — color is each brand's own logo color. Icons that are
// solid black by default (Express, Next.js) get a light color so they're
// visible on this site's dark surfaces.
const TECH_ICONS: TechIconEntry[] = [
  { keywords: ["asp.net", ".net"], Icon: SiDotnet, color: "#8A2BE2" },
  { keywords: ["openai"], Icon: BsOpenai, color: "#74AA9C" },
  { keywords: ["graphql"], Icon: SiGraphql, color: "#E10098" },
  { keywords: ["react"], Icon: SiReact, color: "#61DAFB" },
  { keywords: ["next.js", "nextjs"], Icon: SiNextdotjs, color: "#E5E5E5" },
  { keywords: ["node"], Icon: SiNodedotjs, color: "#339933" },
  { keywords: ["express"], Icon: SiExpress, color: "#E5E5E5" },
  { keywords: ["mongodb"], Icon: SiMongodb, color: "#47A248" },
  { keywords: ["python"], Icon: SiPython, color: "#3776AB" },
  { keywords: ["typescript"], Icon: SiTypescript, color: "#3178C6" },
  { keywords: ["javascript"], Icon: SiJavascript, color: "#F7DF1E" },
  { keywords: ["postgresql"], Icon: SiPostgresql, color: "#4169E1" },
  { keywords: ["mysql"], Icon: SiMysql, color: "#4479A1" },
  { keywords: ["docker"], Icon: SiDocker, color: "#2496ED" },
  { keywords: ["c++"], Icon: SiCplusplus, color: "#00599C" },
  { keywords: ["c#"], Icon: TbBrandCSharp, color: "#9B4F96" },
  { keywords: ["java"], Icon: DiJava, color: "#EA2D2E" },
  { keywords: ["git"], Icon: SiGit, color: "#F05032" },
  { keywords: ["linux"], Icon: SiLinux, color: "#FCC624" },
];

// No official/recognizable logo for these (REST API, Dapper, EF Core,
// Microservices, generic concepts, etc.) — assign a stable-but-varied
// generic icon instead of nothing, so every tag still has visual weight.
const FALLBACK_ICONS: IconType[] = [FiBox, FiCpu, FiLayers, FiTool, FiCode, FiTerminal];

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

export function getTechIconInfo(name: string): { Icon: IconType; color: string } {
  const lower = name.toLowerCase();
  for (const entry of TECH_ICONS) {
    if (entry.keywords.some((k) => lower.includes(k))) {
      return { Icon: entry.Icon, color: entry.color };
    }
  }
  const Icon = FALLBACK_ICONS[hashString(lower) % FALLBACK_ICONS.length];
  return { Icon, color: "currentColor" };
}
