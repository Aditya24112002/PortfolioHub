import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,

    title: "LineupForge",

    description:
      "Valorant lineups management application for agents and maps.",

    technologies: [
      "C#"
    ],

    githubUrl:
      "https://github.com/Aditya24112002/LineupForge",

    image:
      "/images/lineupforge.png",
  },

  {
    id: 2,

    title: "PortfolioHub",

    description:
      "Modern portfolio platform built with Next.js and TypeScript.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
    ],

    githubUrl:
      "https://github.com/Aditya24112002/PortfolioHub",

    image:
      "/images/portfoliohub.png",
  },
];