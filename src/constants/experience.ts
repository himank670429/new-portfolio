export type ExperienceRole = { title: string; duration: string; description: string; };
export type Experience = {
  companyName: string;
  duration: string;
  roles: ExperienceRole[];
};

export const EXPERIENCE: Experience[] = [
  {
    companyName: "Dummy Company A",
    duration: "Jan 2022 - Present",
    roles: [
      {
        title: "Software Engineer III",
        duration: "Jan 2024 - Present",
        description: "Leading a team on developing scalable solutions.",
      },
      {
        title: "Software Engineer II",
        duration: "Jan 2023 - Jan 2024",
        description: "Contributed to core product development.",
      },
      {
        title: "Software Engineer I",
        duration: "Jan 2022 - Jan 2023",
        description: "Worked on foundational features.",
      },
    ],
  },
  {
    companyName: "Dummy Company B",
    duration: "Jun 2020 - Dec 2021",
    roles: [
      {
        title: "Frontend Developer",
        duration: "Jun 2020 - Dec 2021",
        description: "Developed user interfaces for various projects.",
      },
    ],
  },
];