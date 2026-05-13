export const heroContent = {
  greeting: "Hi, I am",
  name: "Nalindu",
  title: "Software Engineering Undergraduate",
  description:
    "I am interested in artificial intelligence (AI), Linux systems, web development, and mobile application development. Also I contribute to open-source projects to make a better world.",
};

export const aboutContent = {
  heading: "About Me",
  description:
    "I'm a software engineering undergraduate passionate about full-stack development and cross-platform applications (Android, iOS, Windows, Linux). I enjoy building practical systems that solve real-world problems.",
};

export const skillGroups = [
  {
    title: "Programming Languages",
    items: [
      "Java",
      "JavaScript",
      "TypeScript",
      "Python",
      "Dart",
      "C",
      "C#",
      "Go",
      "Bash",
      "PHP",
    ],
  },
  {
    title: "Frameworks & Technologies",
    items: [
      "SpringBoot",
      "NodeJS / Express JS",
      "React",
      "Flutter",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    title: "Other Tools",
    items: [
      "Docker",
      "Firebase",
      "Unreal Engine",
      "Unity",
      "Git",
      "JWT",
      "Linux (Fedora)",
      "AI Dev Tools",
    ],
  },
  {
    title: "Knowledge",
    items: ["OOP Concepts", "Architectural Patterns"],
  },
];

import aiCompanionImage from "@/assets/project-ai-companion.png";
import themeSwitcherImage from "@/assets/project-theme-switcher.png";
import fedoraBoostImage from "@/assets/project-fedoraboost.png";

export const projects = [
  {
    title: "AI Companion",
    url: "https://github.com/nalinduash/AI-Companion",
    image: aiCompanionImage,
    description:
      "A real-time fully-local AI Companion that listens and speaks back within less than 1 second. It fits efficiently in 6GB VRAM while integrates CUDA support. It has many features like lip syncing, interruption handling and etc.",
    techStack: ["React", "Python", "sherpa-onnx", "llama-cpp"],
  },
  {
    title: "Tool to customize Gnome",
    url: "https://github.com/nalinduash/Theme-Switcher",
    image: themeSwitcherImage,
    description:
      "A universal command line tool that change the Gnome shell theme, Icon theme, and Cursor theme with a single command. It supports for all the major Linux distributions.",
    techStack: ["Bash"],
  },
  {
    title: "FedoraBoost",
    url: "https://github.com/nalinduash/FedoraBoost",
    image: fedoraBoostImage,
    description:
      "A comprehensive modular open-source collection of scripts to automate your Fedora Linux post-install setup. It automate installing drivers, signing Nvidia kernels, theming, installing applications and many more.",
    techStack: ["Bash"],
  },
];
