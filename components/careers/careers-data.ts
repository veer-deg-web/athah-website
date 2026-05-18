export type CareerRole = {
  title: string;
  type: string;
  location: string;
};

export type CareerTeam = {
  team: string;
  icon: string;
  roles: CareerRole[];
};

export const careerOpenings: CareerTeam[] = [
  {
    team: "Athah Events",
    icon: "celebration",
    roles: [
      { title: "Senior Event Coordinator", type: "Full-Time", location: "Dehradun" },
      { title: "AV Technician", type: "Full-Time", location: "Dehradun" },
      { title: "Stage Production Manager", type: "Contract", location: "Pan-India" },
    ],
  },
  {
    team: "Athah Media",
    icon: "movie",
    roles: [
      { title: "Cinematographer", type: "Full-Time", location: "Dehradun" },
      { title: "Video Editor", type: "Full-Time", location: "Hybrid" },
      { title: "Drone Pilot (Licensed)", type: "Freelance", location: "Pan-India" },
    ],
  },
  {
    team: "Athah Growth Studio",
    icon: "trending_up",
    roles: [
      { title: "Social Media Strategist", type: "Full-Time", location: "Hybrid" },
      { title: "Content Creator (Video)", type: "Full-Time", location: "Dehradun" },
      { title: "Brand Designer", type: "Full-Time", location: "Remote" },
    ],
  },
  {
    team: "Athah Arts Academy",
    icon: "music_note",
    roles: [
      { title: "Dance Instructor (Classical / Contemporary)", type: "Part-Time", location: "Dehradun / Nearby Schools" },
      { title: "Music Faculty (Instrumental / Vocal)", type: "Part-Time", location: "Dehradun" },
      { title: "Theatre Coach", type: "Part-Time", location: "Dehradun" },
    ],
  },
];

export const careerPerks = [
  {
    icon: "rocket_launch",
    title: "Growth First",
    desc: "Every team member has a clear growth path. We invest in your skills, not just your role.",
  },
  {
    icon: "palette",
    title: "Creative Freedom",
    desc: "We hire specialists and trust them. Your ideas are welcomed and acted upon.",
  },
  {
    icon: "groups",
    title: "Collaborative Culture",
    desc: "Cross-division collaboration means your work has wider impact than most agencies can offer.",
  },
  {
    icon: "work",
    title: "Exciting Projects",
    desc: "From school productions to live events and media campaigns, the work stays varied and high-energy.",
  },
];
