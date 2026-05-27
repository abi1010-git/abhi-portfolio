export const profile = {
  name: "Abhijith Aravind",
  title: "Computer Science Undergraduate",
  tagline:
    "Data engineering, machine learning, and AI — turning data into intelligent, real-world systems.",
  summary:
    "Computer Science undergraduate at UC Santa Cruz with interests in machine learning, artificial intelligence, data engineering, and data science. Experienced in Python, applied ML, data pipelines, and cloud technologies through coursework, Kaggle competitions, and hands-on projects. Seeking data engineering and AI/ML internship opportunities to help build scalable, intelligent, data-driven systems.",
  location: "San Francisco Bay Area, California",
  photo: "/abhi-photo.jpg",
};

export const links = {
  github: "https://github.com/abi1010-git",
  linkedin: "https://www.linkedin.com/in/abhijith-aravind-6a8492394/",
  kaggle: "https://www.kaggle.com/",
  chess: "https://ratings.uschess.org/player/15930356",
};

export const socials: { label: string; href: string }[] = [
  { label: "GitHub", href: links.github },
  { label: "LinkedIn", href: links.linkedin },
  { label: "US Chess", href: links.chess },
];

export const stats: { value: string; label: string }[] = [
  { value: "15+", label: "Kaggle competitions" },
  { value: "Top 1%", label: "Best finish · 15 / 1,908" },
  { value: "1540", label: "SAT score" },
  { value: "1593", label: "US Chess rating" },
];

export const highlights: string[] = [
  "Applied ML",
  "Ensemble Modeling",
  "Data Pipelines",
  "Cloud Analytics",
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Python", "Java", "C / C++", "SQL"],
  },
  {
    label: "Data Engineering",
    items: [
      "ETL / Data Pipelines",
      "DuckDB",
      "Data Modeling",
      "Feature Engineering",
      "AWS (S3, EC2)",
    ],
  },
  {
    label: "Machine Learning",
    items: [
      "Scikit-learn",
      "Pandas / NumPy",
      "Statistical Modeling",
      "Regression",
      "Classification",
    ],
  },
  {
    label: "Analytics & Visualization",
    items: ["Tableau", "Power BI", "Matplotlib", "Jupyter Notebook"],
  },
];

export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  href: string;
  live?: string;
  platform?: string;
};

// Featured projects sourced from GitHub (github.com/abi1010-git).
// Projects with a `live` URL are deployed and surfaced as launch cards.
export const projects: Project[] = [
  {
    name: "csv-to-duckdb",
    blurb:
      "Upload CSV files into a DuckDB database and run SQL queries across multiple CSV tables together in one place.",
    tags: ["Python", "DuckDB", "SQL"],
    href: "https://github.com/abi1010-git/csv-to-duckdb",
    live: "https://csv-to-duckdb.streamlit.app/",
    platform: "Streamlit",
  },
  {
    name: "FloraVision AI",
    blurb:
      "Upload a photo of any plant and get a concise, AI-generated description of the flora in seconds.",
    tags: ["Python", "Computer Vision", "AI"],
    href: "https://github.com/abi1010-git/ai-flora-identifier",
    live: "https://floravisionai.streamlit.app/",
    platform: "Streamlit",
  },
  {
    name: "AI Video Highlighter",
    blurb:
      "Automatically detects and surfaces the important moments in a video to speed up review and editing.",
    tags: ["Python", "ML", "Video"],
    href: "https://github.com/abi1010-git/ai-video-highlighter",
    live: "https://aivideohighlighter.streamlit.app/",
    platform: "Streamlit",
  },
  {
    name: "Traffic Accident Analyzer",
    blurb:
      "Explores accident datasets to detect high-risk patterns and surface insights on location, time, and severity.",
    tags: ["Python", "Data Analytics", "Pandas"],
    href: "https://github.com/abi1010-git/traffic_accident_project",
    live: "https://analyzetrafficaccidentdata.streamlit.app/",
    platform: "Streamlit",
  },
  {
    name: "Lichess Opening Trainer",
    blurb:
      "A chess opening trainer that helps players drill and memorize opening lines through guided practice.",
    tags: ["Python", "Chess", "Web App"],
    href: "https://github.com/abi1010-git/Opening-Trainer",
    live: "https://lichess-opening-trainer.onrender.com/",
    platform: "Render",
  },
  {
    name: "AppData Cleanup Assistant",
    blurb:
      "Scans a Windows machine to find apps still consuming disk space via temp and AppData folders, helping reclaim storage.",
    tags: ["Python", "Utilities"],
    href: "https://github.com/abi1010-git/windows-appdata-cleanup-assistant",
  },
];

export const liveApps = projects.filter((p) => p.live);

export type Achievement = {
  title: string;
  detail: string;
};

export const kaggle: { summary: string; achievements: Achievement[] } = {
  summary:
    "Participated in 15+ machine learning competitions involving predictive analytics, feature engineering, and ensemble modeling.",
  achievements: [
    {
      title: "Top 1% — Binary Prediction of Smoker Status (15 / 1,908 teams)",
      detail:
        "Built ensemble classification pipelines with advanced feature engineering and probability calibration.",
    },
    {
      title: "NeurIPS 2023 — Machine Unlearning",
      detail:
        "Explored privacy-preserving unlearning techniques balancing data-removal fidelity with retained model accuracy.",
    },
    {
      title: "Google — AI Runtime Prediction",
      detail:
        "Built graph- and layout-aware regression models to predict AI compiler runtime and optimization performance.",
    },
  ],
};

export type Experience = {
  role: string;
  org: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Data Science Enthusiast",
    org: "Kaggle Competitions",
    location: "Remote",
    period: "Feb 2023 — Present",
    points: [
      "Competed in 15+ ML competitions spanning predictive analytics, feature engineering, and ensemble modeling.",
      "Achieved a Top 1% finish (15/1,908 teams) in a binary classification challenge.",
    ],
  },
  {
    role: "Independent Technical Projects",
    org: "GitHub · @abi1010-git",
    location: "Remote",
    period: "Jun 2023 — Present",
    points: [
      "Built csv-to-duckdb — load CSV files into a DuckDB database and query across multiple CSV tables together with SQL.",
      "Created ai-flora-identifier, a web app returning AI-generated descriptions of plants from user-uploaded photos.",
      "Developed ai-video-highlighter to automatically detect and surface the important moments in a video.",
      "Built a traffic-accident pattern analysis project (Jupyter, Pandas) detecting high-risk patterns by location, time, and severity.",
      "Created Opening-Trainer, a chess opening trainer for drilling and memorizing opening lines.",
      "Built a Windows AppData cleanup assistant that scans for apps consuming disk space via temp and AppData folders.",
    ],
  },
  {
    role: "SAT Boot Camp Tutor",
    org: "Schoolhouse.world (Khan Academy Affiliate)",
    location: "Remote",
    period: "Jun 2023 — Sept 2024",
    points: [
      "Led virtual SAT sessions covering math, verbal reasoning, and test strategy, drawing on a personal 1540 score.",
      "Mentored students through personalized instruction and guided practice exams.",
    ],
  },
  {
    role: "Flight Teen Volunteer",
    org: "Hiller Aviation Museum",
    location: "San Carlos, CA",
    period: "Jun 2022 — Jun 2024",
    points: [
      "Supported STEM outreach through interactive aviation and science demonstrations.",
      "Facilitated visitor engagement via VR aviation experiences and invention-lab activities.",
    ],
  },
];

export type Education = {
  school: string;
  credential: string;
  location: string;
  period: string;
  detail?: string;
};

export const education: Education[] = [
  {
    school: "University of California, Santa Cruz",
    credential: "B.S. Computer Science",
    location: "Santa Cruz, CA",
    period: "Sept 2024 — Present",
    detail:
      "Coursework: Data Structures & Algorithms, Computer Architecture, Probability Theory, Statistical Methods, Human-Centered AI, C Systems Programming.",
  },
  {
    school: "University of California, Berkeley",
    credential: "Pre-College Scholars Track",
    location: "Berkeley, CA",
    period: "Jun 2023 — Aug 2023",
    detail: "Completed undergraduate-level Probability and Statistics for Business.",
  },
  {
    school: "Brigham Young University",
    credential: "Dual Enrollment",
    location: "Provo, UT",
    period: "Aug 2022 — Jun 2023",
    detail: "College-level Calculus coursework completed during high school.",
  },
];

export const chess = {
  regular: 1593,
  quick: 1234,
  onlineBlitz: 1710,
  note: "US Chess Federation rated player (Member ID 15930356).",
};

export const interests = [
  "US Chess Federation rated player",
  "Basketball & team-based athletics",
  "STEM mentoring & SAT tutoring",
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Apps", href: "#projects" },
  { label: "Kaggle", href: "#kaggle" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
