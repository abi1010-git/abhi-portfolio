// Single source of truth for everything shown on the site.
// Sources: résumé (LATEST/), GitHub READMEs (github.com/abi1010-git), LinkedIn projects.
// Numbers here should be verifiable from the linked repo READMEs.
// Project case studies live in ./projects.ts.

import { liveCount } from "./projects";

export const profile = {
  name: "Abhijith Aravind",
  firstName: "Abhijith",
  title: "Computer Science @ UC Santa Cruz",
  focus: ["Data Engineering", "AI / ML", "Software Engineering"],
  headline: "I build data platforms and AI systems that hold up against real-world data.",
  intro:
    "CS undergraduate at UC Santa Cruz (expected June 2028). I ship end-to-end systems: ingestion pipelines over millions of public records, multi-agent AI that checks its own claims, and the tests and CI that keep them honest.",
  availability: "Open to data engineering & AI/ML internships",
  about: [
    "I like problems where the data is messy and the answer has to be right. Most of my projects start with a real dataset or a real annoyance, like losing chess games to the same opening mistake over and over, and end as a deployed app with a test suite.",
    "Lately that means agentic AI with guardrails: systems where the model can call tools and route its own work, but every claim it makes is checked against stored evidence before anyone sees it. On the data side, I care about idempotent ingestion, data-quality checks, and pipelines that are boring to re-run.",
    "Outside code I'm a US Chess Federation rated player, a former SAT tutor, and I play basketball.",
  ],
  location: "San Francisco Bay Area",
  photo: "/abhi-photo.jpg",
};

export const links = {
  github: "https://github.com/abi1010-git",
  linkedin: "https://www.linkedin.com/in/abhijith-aravind-6a8492394/",
  kaggle: "https://www.kaggle.com/abhijitharavind",
  chess: "https://ratings.uschess.org/player/15930356",
};

export const socials: { label: string; href: string }[] = [
  { label: "LinkedIn", href: links.linkedin },
  { label: "GitHub", href: links.github },
  { label: "Kaggle", href: links.kaggle },
];

export type Metric = { value: string; label: string };

// Hero proof strip. Keep each claim traceable to a repo or the résumé.
export const proof: Metric[] = [
  { value: "2.49M", label: "real crash records in a pipeline I built" },
  { value: "5-agent", label: "LangGraph system, deployed" },
  { value: "Top 1%", label: "Kaggle finish · 15th of 1,908" },
  { value: `${liveCount}`, label: "apps live right now" },
];

export type Experience = {
  role: string;
  org: string;
  location: string;
  period: string;
  points: string[];
  current?: boolean;
  group: "Technical" | "Leadership & Community";
};

// Mirrors the résumé (LATEST/). Keep wording in sync when the résumé changes.
export const experience: Experience[] = [
  {
    role: "Programmer",
    org: "BananaBots, UC Santa Cruz",
    location: "Santa Cruz, CA",
    period: "Oct 2026 — Present",
    current: true,
    group: "Technical",
    points: [
      "Rebuilt Overjoyed for Jett Foundation using C#/.NET MAUI, supporting alternative input methods and accessible game controls.",
      "Developed modular control configurations and remote multiplayer for up to four participants; collaborated on mouse-only, eye-gaze and screen-reader usability.",
    ],
  },
  {
    role: "Competitive Machine Learning",
    org: "Kaggle",
    location: "Remote",
    period: "Feb 2023 — Present",
    current: true,
    group: "Technical",
    points: [
      "Ranked 15th of 1,908 teams (top 1%) in smoker-status prediction using ensembles, feature engineering and probability calibration; participated in 15+ ML challenges.",
    ],
  },
  {
    role: "SAT Boot Camp Tutor",
    org: "Schoolhouse.world",
    location: "Remote",
    period: "Jun 2023 — Sep 2024",
    group: "Leadership & Community",
    points: [
      "Led virtual SAT math and verbal reasoning sessions for small groups.",
    ],
  },
  {
    role: "Flight Teen Volunteer",
    org: "Hiller Aviation Museum",
    location: "San Carlos, CA",
    period: "Jun 2022 — Jun 2024",
    group: "Leadership & Community",
    points: [
      "Facilitated STEM outreach, aviation demonstrations and invention-lab activities.",
    ],
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Python", "SQL", "C", "C++", "C#", "Java", "JavaScript", "TypeScript"],
  },
  {
    label: "Data Engineering & Databases",
    items: ["PySpark", "Parquet", "Pandas", "NumPy", "PostgreSQL", "DuckDB", "SQLite", "SQLAlchemy", "Data ingestion", "Validation", "Query benchmarking"],
  },
  {
    label: "AI & Machine Learning",
    items: ["LangGraph", "LangChain", "Gemini API", "Scikit-learn", "Hugging Face Transformers", "CLIP", "Whisper", "Feature engineering", "Model evaluation"],
  },
  {
    label: "Software Engineering",
    items: ["React", "FastAPI", "Flask", "Streamlit", "REST APIs", ".NET MAUI", "Accessibility testing", "Multiplayer development"],
  },
  {
    label: "Tools & Visualization",
    items: ["Git", "Docker", "Docker Compose", "GitHub Actions", "pytest", "Tableau", "Power BI", "Matplotlib", "AWS S3 & EC2 (exploratory)"],
  },
];

export type Education = {
  school: string;
  credential: string;
  period: string;
  detail?: string;
};

export const education: Education[] = [
  {
    school: "University of California, Santa Cruz",
    credential: "B.S. Computer Science",
    period: "Expected June 2028",
    detail:
      "Data Structures & Algorithms · Computer Systems · Computer Architecture · Human-Centered AI · Probability Theory and Statistical Methods",
  },
  {
    school: "UC Berkeley",
    credential: "Pre-College Scholars: Probability and Statistics for Business",
    period: "Aug 2023",
  },
  {
    school: "Brigham Young University",
    credential: "Dual Enrollment: college-level calculus",
    period: "Jan 2023",
  },
];

export const achievements: Metric[] = [
  { value: "15 / 1,908", label: "Kaggle competition (top 1%)" },
  { value: "1540", label: "SAT" },
  { value: "15+", label: "Kaggle ML challenges" },
  { value: "1593", label: "US Chess Federation rating" },
];

// Résumé "Additional Achievements" items that aren't numbers.
export const extracurriculars = ["Crypto Club leader", "Competitive Coding Club presenter"];

export const navItems = [
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "About", href: "/#about" },
];
