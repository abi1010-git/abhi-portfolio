// Project case studies. Each entry renders as a card on / and /work, and as a
// full page at /work/[slug]. Facts and numbers come from each repo's README;
// keep them verifiable there.

export type Category = "AI & Agents" | "Data Engineering" | "Machine Learning" | "Full-stack" | "Algorithms" | "Accessibility";

/** Résumé section the project is listed under. */
export type ResumeGroup = "Data Engineering & Analytics" | "Applied AI & Machine Learning" | "Software Engineering & Applied AI" | "Not on résumé";

export type Motif = "board" | "map" | "bars" | "keys" | "dag" | "leaf" | "wave" | "table" | "loop" | "route" | "spark";

export type Shot = { src: string; alt: string; width: number; height: number; caption?: string };

export type Step = { title: string; detail: string };

export type Project = {
  slug: string;
  /** Short name, as on the résumé and LinkedIn (text before the dash). */
  name: string;
  /** Descriptor after the dash on the résumé/LinkedIn title. */
  subtitle: string;
  tagline: string;
  summary: string;
  categories: Category[];
  period: string;
  status: string;
  featured?: boolean;
  /** A planned project, not yet implemented. Shown with a "Design brief" label. */
  brief?: boolean;
  motif: Motif;
  resumeGroup: ResumeGroup;
  metrics: { value: string; label: string }[];
  stack: string[];
  live?: string;
  code?: string;
  shots?: Shot[];
  /** Why this exists: the problem, in plain words. */
  problem: string[];
  /** How it works, as an ordered pipeline. */
  pipeline: Step[];
  /** Engineering decisions worth talking about in an interview. */
  decisions: Step[];
  /** Honest limits and what comes next (only what the README supports). */
  next?: string[];
};

export const projects: Project[] = [
  {
    slug: "agentic-ai-chess-coach",
    name: "Agentic AI Chess Coach",
    subtitle: "Multi-Agent Game Analysis & Personalized Learning",
    tagline: "A five-agent AI coach that refuses to say anything the engine can't prove.",
    summary:
      "Reviews your chess games against your own history, finds the mistakes you keep repeating, and picks a whole game for you to study. Five LangGraph agents do the work; a verifier checks every claim.",
    categories: ["AI & Agents", "Full-stack"],
    period: "Oct 2026 — Present",
    status: "Live · public beta",
    featured: true,
    motif: "board",
    resumeGroup: "Applied AI & Machine Learning",
    metrics: [
      { value: "5", label: "specialist agents" },
      { value: "6", label: "LLM providers with failover" },
      { value: "2-pass", label: "Stockfish 18 analysis" },
      { value: "50+", label: "pytest cases" },
    ],
    stack: ["Python", "LangGraph", "FastAPI", "React", "TypeScript", "SQL", "Docker", "Stockfish"],
    live: "https://chess-game-review-gr1u.onrender.com",
    code: "https://github.com/abi1010-git/chess-game-review",
    shots: [
      {
        src: "/work/chess-game-review.jpg",
        alt: "Progress dashboard with accuracy by month, mistake rates by phase, and recommended study games",
        width: 1536,
        height: 730,
        caption: "Your progress: trends, recurring findings, and what to study next.",
      },
      {
        src: "/work/chess-coach.jpg",
        alt: "Coach review comparing a game's key decisions with earlier games",
        width: 1536,
        height: 730,
        caption: "Coach review: each decision is compared with your own earlier games.",
      },
      {
        src: "/work/chess-game-report.jpg",
        alt: "Game report with the board, move list, and winning-chance graph",
        width: 1536,
        height: 730,
        caption: "Game report: board, every move, and a winning-chances graph.",
      },
    ],
    problem: [
      "Chess sites review one game at a time, so you never see the pattern: the same kind of position going wrong across ten different games.",
      "LLM “coaches” make this worse. They sound confident, invent moves, and quote evaluations that don't exist. A coach is only useful if every claim is grounded in what actually happened on the board.",
    ],
    pipeline: [
      { title: "Import", detail: "Lichess, Chess.com or PGN upload, with duplicate detection and per-browser private spaces." },
      { title: "Two-pass analysis", detail: "Every position gets a fast pass (150k nodes, top 3 lines); critical decisions get a deeper 600k-node pass. Disagreements are marked uncertain." },
      { title: "Game reviewer agent", detail: "Picks the decisions that mattered, calling tools for engine lines and board features." },
      { title: "History specialist agent", detail: "Searches earlier games: exact position, then pawn structure, then decision type. Widens the search when matches are weak." },
      { title: "Writer + verifier agents", detail: "The writer explains each decision; the verifier checks every move and number against stored evidence and drops what it can't prove." },
      { title: "Study coach agent", detail: "Picks one whole game that practises your most frequent issue, with hidden-answer checkpoints." },
    ],
    decisions: [
      {
        title: "Verification as a graph node, not a prompt instruction",
        detail:
          "Asking a model to “be accurate” doesn't work. Instead a dedicated verifier agent parses the output and rejects any move or number not present in the stored engine evidence, falling back to the rule-based explanation.",
      },
      {
        title: "Self-correcting routing",
        detail:
          "When the history search returns a weak match, the graph loops back to search wider. If evidence is still thin, the claim is narrowed to “this game only” instead of being overstated. Handoffs and tool calls are capped so a review always terminates.",
      },
      {
        title: "Model router with six free providers",
        detail:
          "Gemini, Groq, Cerebras, Mistral, OpenRouter and GitHub Models are tried in quality order, skipping any that is rate-limited or over budget. If none answer, the coach still works in rule-based mode.",
      },
      {
        title: "Crash-safe job queue",
        detail:
          "Analysis jobs are claimed with a lease, and results are written in the same transaction that marks the job done, so a restarted worker never leaves half-written results.",
      },
      {
        title: "Versioned analysis",
        detail:
          "Engine settings are pinned per analysis version so results stay comparable over months. Changing settings creates a new version and flags old games for re-analysis.",
      },
    ],
    next: [
      "Measure the model-backed coach against the rule-based mode with the evaluation harness that already exists.",
      "Pilot with real players on the same sample and thresholds.",
      "Accounts, so a history can follow a player across devices.",
    ],
  },
  {
    slug: "driveanalytics",
    name: "DriveAnalytics",
    subtitle: "Large-Scale Traffic Safety & Geospatial Analytics Platform",
    tagline: "Where crashes happen, when, and why, from the whole country down to a single road.",
    summary:
      "An end-to-end data engineering and geospatial analytics platform: ETL pipelines over 2.49 million historical crash records from NHTSA FARS and NYC Open Data, plus Chicago crash reports and six live incident feeds on 10-minute refresh cycles.",
    categories: ["Data Engineering", "Full-stack"],
    period: "Aug — Sep 2026",
    status: "Live",
    featured: true,
    motif: "map",
    resumeGroup: "Data Engineering & Analytics",
    metrics: [
      { value: "2.49M", label: "historical crash records" },
      { value: "6", label: "live incident feeds" },
      { value: "10 min", label: "live refresh cycle" },
      { value: "281", label: "pytest tests" },
    ],
    stack: ["Python", "SQL", "PostgreSQL", "FastAPI", "React", "TypeScript", "Leaflet", "GeoJSON", "Docker", "pytest", "GitHub Actions"],
    live: "https://abi1010-git.github.io/DriveAnalytics/",
    code: "https://github.com/abi1010-git/DriveAnalytics",
    shots: [
      {
        src: "/work/driveanalytics.jpg",
        alt: "US map shaded by traffic deaths per state, 2020 to 2024",
        width: 800,
        height: 600,
        caption: "National view: states shaded by traffic deaths, 2020–2024.",
      },
      {
        src: "/work/driveanalytics-wayne.jpg",
        alt: "Wayne County, Michigan, with fatal crashes on I-94 highlighted",
        width: 800,
        height: 600,
        caption: "Drill-down: Wayne County, MI, with fatal crashes on I-94 highlighted.",
      },
    ],
    problem: [
      "Public crash data exists, but it's scattered across federal files, city portals and live incident feeds, each with its own format, quirks and lag. NHTSA's national dataset is also published about 1.5 years late. There's no simple way to ask “which roads near me are deadliest, and why?”",
      "It grew out of my Vehicle Telemetry Analytics prototype: the FastAPI/PostgreSQL backend, the YAML rule engine, the tests, CI and Docker setup carried over, and the synthetic data was replaced with real records.",
    ],
    pipeline: [
      { title: "Extract", detail: "Source-specific ingestion for NHTSA FARS, NYC Open Data and Chicago crash reports, plus six live incident feeds (CHP, WSDOT, 511NJ, Austin, Seattle, San Francisco) polled every 10 minutes." },
      { title: "Clean", detail: "Source quirks are handled and documented: FARS's 77.7777 “unknown latitude” codes, NYC's 0/0 coordinates, cp1252-encoded files, the same road spelled several different ways." },
      { title: "Flag", detail: "A YAML rule engine attaches risk flags at load time: speeding, impaired driver, dark with no lighting, pedestrian injured." },
      { title: "Load", detail: "Batched loads into PostgreSQL. A FARS year is replaced in one transaction; NYC rows are upserted so amended records update in place." },
      { title: "Serve", detail: "FastAPI endpoints feed a React + Leaflet map with state → county → city → street drill-down." },
      { title: "Export", detail: "A static export writes everything the map needs as compact JSON, so the public site runs on GitHub Pages with no server." },
    ],
    decisions: [
      {
        title: "Idempotent, re-runnable loads",
        detail:
          "Every loader is safe to run twice. Year-level replace for FARS and keyed upserts for NYC mean a failed or repeated run never duplicates data, and `--since` re-pulls only what changed.",
      },
      {
        title: "A rule engine that can't execute code",
        detail:
          "Risk rules live in readable YAML, but the engine only accepts whitelisted fields and operators. Analysts can add rules without anyone worrying about arbitrary code in config.",
      },
      {
        title: "Tests that never touch the network",
        detail:
          "281 pytest tests build small source files in their real formats, including a cp1252-encoded FARS file, so CI checks parsing, encoding fallback, re-run safety and upserts without downloading anything.",
      },
      {
        title: "Honest about what the data can't say",
        detail:
          "FARS only covers fatal crashes and neither dataset has traffic volume, so a busy interstate ranks high partly because it's busy. The UI says so instead of implying per-trip risk.",
      },
    ],
    next: [
      "FARS covers only crashes where someone died, and city data is preliminary. Contributing factors are an officer's judgment at the scene.",
      "No dataset includes traffic volume, so rankings are totals, not per-trip risk.",
      "The static site is only as fresh as its last export, and a few portals' license terms still need confirming before wider sharing.",
    ],
  },
  {
    slug: "opening-trainer",
    name: "Opening Trainer",
    subtitle: "Intelligent Chess Analytics & Adaptive Learning Platform",
    tagline: "Find the opening mistakes you keep repeating, then drill them until they're gone.",
    summary:
      "Runs Stockfish entirely in your browser across all your recent games, groups identical mistakes, explains them, and schedules spaced-repetition drills. Then it checks your later games to see if training worked.",
    categories: ["Full-stack", "Machine Learning"],
    period: "Jan — Feb 2026",
    status: "Live",
    featured: true,
    motif: "board",
    resumeGroup: "Software Engineering & Applied AI",
    metrics: [
      { value: "0", label: "servers: runs in-browser" },
      { value: "Multi-core", label: "Web Worker engine pool" },
      { value: "SM-2", label: "spaced repetition" },
      { value: "2", label: "chess platforms" },
    ],
    stack: ["React", "TypeScript", "WebAssembly", "Web Workers", "Stockfish 19", "IndexedDB", "Tailwind CSS", "Vitest", "GitHub Actions"],
    live: "https://abi1010-git.github.io/Opening-Trainer/",
    code: "https://github.com/abi1010-git/Opening-Trainer",
    problem: [
      "I kept losing games before they really got going, and when I looked back it was often the same position going wrong the same way. Game review on chess sites shows one game at a time, so I never noticed. Opening courses taught lines I rarely reached.",
      "So I built a tool that looks at all my recent games at once and answers one question: what am I getting wrong over and over?",
    ],
    pipeline: [
      { title: "Fetch", detail: "Recent games from the Lichess or Chess.com public APIs, straight into the browser." },
      { title: "Analyse", detail: "Stockfish 19 (WebAssembly) in a pool of Web Workers, one per spare CPU core. Each game is checked until 6 moves past known theory." },
      { title: "Group", detail: "Identical mistakes are merged across games: “you played 5…gxf6 in 3 games; 5…exf6 is better.”" },
      { title: "Explain", detail: "The engine's refutation is replayed with chess.js to detect lost material, forks and missed wins, in plain English." },
      { title: "Drill", detail: "Every mistake becomes an SM-2 spaced-repetition drill, and later games are checked to mark each one fixed or still repeating." },
    ],
    decisions: [
      {
        title: "From Flask server to no backend at all",
        detail:
          "The Flask version (still in the repo) ran Stockfish server-side. Moving the engine to WebAssembly in the browser removed server cost and kept user data local. It also made parallelism the client's problem, so I built a Web Worker pool sized to available cores.",
      },
      {
        title: "Evaluate each position once",
        detail:
          "The evaluation after one move is reused as the evaluation before the next, and results are cached in IndexedDB, so re-analysis mostly only touches new games.",
      },
      {
        title: "Grade by winning chances, not pawns",
        detail:
          "Mistakes are graded by drop in win probability (the curve Lichess uses), so a move that keeps a won position won isn't flagged as an error.",
      },
      {
        title: "Explanations from the engine, not a chatbot",
        detail:
          "Claims are only made when replaying the engine line confirms them, so the explanations can't hallucinate.",
      },
      {
        title: "Closing the loop",
        detail:
          "Most trainers stop at drills. This one matches drilled positions against later real games to measure whether training actually carried over.",
      },
    ],
    next: [
      "Drills are saved per browser, so a different device starts fresh. Everything runs client-side by design.",
    ],
  },
  {
    slug: "adaptive-typing-assistant",
    name: "Adaptive Typing Assistant",
    subtitle: "Intelligent Input Filtering & Accessibility Analytics",
    tagline: "Can adaptive filtering cut accidental repeated keystrokes without eating real ones?",
    summary:
      "An accessibility experiment for BananaBots: an on-screen keyboard with adaptive debounce, evaluated across 9,000 seeded simulations.",
    categories: ["Accessibility", "Machine Learning"],
    period: "Sep — Oct 2026",
    status: "Live · research prototype",
    motif: "keys",
    resumeGroup: "Applied AI & Machine Learning",
    metrics: [
      { value: "9,000", label: "seeded simulation runs" },
      { value: "90", label: "experimental conditions" },
      { value: "−18.5%", label: "character error rate vs unfiltered" },
      { value: "−41%", label: "false suppressions vs fixed debounce" },
    ],
    stack: ["TypeScript", "React", "Vite", "Vitest", "Python", "Streamlit"],
    live: "https://adaptive-typing-assistant-xc53bpgibax76njxkawvac.streamlit.app/",
    code: "https://github.com/abi1010-git/adaptive-typing-assistant",
    problem: [
      "For people with motor-control difficulties, unintended repeated key activations add characters and force corrections. But you can't just drop repeated letters: “hello” and “book” have legitimate doubles. A filter sees only the key and its timing, not intent.",
    ],
    pipeline: [
      { title: "Live keyboard", detail: "Accessible on-screen QWERTY with Standard, Fixed debounce and Adaptive debounce modes, timestamped with performance.now()." },
      { title: "Adaptive filter", detail: "Threshold = 0.75 × rolling median of the last 9 inter-key intervals, clamped to 100–350 ms. Applied before updating, so it never looks ahead." },
      { title: "Simulator", detail: "Deterministic, seeded generator of duplicate activations and neighbouring-key errors across 5 duplicate rates and 3 typing speeds." },
      { title: "Evaluation", detail: "Paired comparisons, per-condition metrics, win/tie summaries, and run-level CSV export." },
    ],
    decisions: [
      {
        title: "Same filter code for live and simulated input",
        detail: "The keyboard and the simulator share one filter implementation, so experimental results describe the code users actually run.",
      },
      {
        title: "Report the ties, not just the wins",
        detail:
          "Adaptive beat fixed in 10.6% of paired runs, fixed won 9.0%, and 80.4% tied. The headline improvement is real but modest, and the write-up says so.",
      },
    ],
    next: [
      "All results are synthetic. The right next step is co-design and evaluation with disabled users and accessibility specialists before tuning further.",
    ],
  },
  {
    slug: "signalfive",
    name: "SignalFive",
    subtitle: "Machine Learning & Financial Time-Series Analytics",
    tagline: "Is the market's next five days predictable? A pipeline built to find out honestly.",
    summary:
      "Automated daily OHLCV ETL for five securities from 2010 onward, with backfills, deduplication and provenance tracking, feeding leakage-aware walk-forward benchmarks of logistic regression, random forest and CatBoost.",
    categories: ["Data Engineering", "Machine Learning"],
    period: "Mar — Apr 2026",
    status: "Runs every weekday",
    motif: "bars",
    resumeGroup: "Data Engineering & Analytics",
    metrics: [
      { value: "2010→", label: "historical backfill" },
      { value: "5", label: "symbols tracked daily" },
      { value: "4", label: "models vs baseline" },
      { value: "5-day", label: "train/test gap" },
    ],
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "CatBoost", "GitHub Actions"],
    code: "https://github.com/abi1010-git/predicting-stock-market-personal-project",
    problem: [
      "Most stock-prediction projects quietly leak the future into training and report accuracy that wouldn't survive a real trading day. I wanted an experiment where a model only counts as useful if it beats simple baselines on unseen periods after transaction costs.",
    ],
    pipeline: [
      { title: "Ingest", detail: "Every weekday after close, GitHub Actions pulls daily OHLCV for SPY, QQQ, IWM, AAPL and NVDA, re-fetching a 7-day overlap so corrections replace stale rows." },
      { title: "Validate", detail: "Malformed dates, duplicates, invalid prices and inconsistent OHLC rows are rejected; every row records its source." },
      { title: "Feature", detail: "Lag-safe features only: returns, range, 20/50-day moving averages, 20-day volatility, volume change." },
      { title: "Evaluate", detail: "Majority baseline, logistic regression, random forest and CatBoost under expanding walk-forward splits." },
      { title: "Backtest", detail: "One prediction every five sessions, a 0.55 probability threshold, and 5 bps cost on each position change, compared with buy-and-hold." },
    ],
    decisions: [
      {
        title: "A gap between train and test",
        detail: "A five-session gap between folds stops a training label whose outcome overlaps the test period from leaking information.",
      },
      {
        title: "Commit only when data changes",
        detail: "The workflow writes deterministic CSVs and data-quality metadata, and commits only when the dataset actually changed, so history stays meaningful.",
      },
    ],
    next: [
      "Results are exploratory and educational, not trading advice. Overlapping labels, regime changes, slippage and unadjusted prices can all move the conclusions.",
    ],
  },
  {
    slug: "parallel-code-review",
    name: "Parallel Code Review",
    subtitle: "Multi-Agent AI Software Analysis Platform",
    tagline: "Three AI reviewers, running at once, each with one job.",
    summary:
      "Security, performance and code-quality reviewers run as independent DAG branches on Gemini and converge into one structured review.",
    categories: ["AI & Agents"],
    period: "Sep — Oct 2026",
    status: "Prototype",
    motif: "dag",
    resumeGroup: "Software Engineering & Applied AI",
    metrics: [
      { value: "3", label: "parallel reviewer agents" },
      { value: "1", label: "aggregation node" },
      { value: "0", label: "keys in the frontend" },
    ],
    stack: ["RocketRide", "LangChain", "Gemini", "React", "TypeScript"],
    code: "https://github.com/abi1010-git/parallel-code-review",
    problem: [
      "One general-purpose AI reviewer tends to give shallow, mixed feedback. Specialists with narrow prompts find more, and since they don't depend on each other there's no reason to run them one after another.",
    ],
    pipeline: [
      { title: "Webhook", detail: "The React app submits source code to the embedded pipeline." },
      { title: "Fan out", detail: "One question node feeds three independent LangChain + Gemini reviewers: security, performance and code quality." },
      { title: "Converge", detail: "Each branch writes to a single response node, and the UI renders the three reviews separately." },
    ],
    decisions: [
      {
        title: "Parallelism you can prove",
        detail: "No reviewer depends on another, so the scheduler runs branches concurrently. The pipeline definition shows the fan-out structurally, not just in a diagram.",
      },
      {
        title: "Credentials stay server-side",
        detail: "The Gemini key is injected as a pipeline variable and never reaches frontend code.",
      },
    ],
  },
  {
    slug: "floravision-ai",
    name: "FloraVision AI",
    subtitle: "Multimodal AI & Intelligent Plant Identification",
    tagline: "Zero-shot plant identification that knows when to say “not sure.”",
    summary:
      "Upload a photo of a plant, flower, tree or mushroom and CLIP matches it against a curated species catalog, with confidence gates and out-of-domain rejection.",
    categories: ["Machine Learning"],
    period: "Apr — May 2026",
    status: "Live",
    motif: "leaf",
    resumeGroup: "Applied AI & Machine Learning",
    metrics: [
      { value: "CLIP", label: "ViT-B/32, zero-shot" },
      { value: "2", label: "confidence gates" },
      { value: "0", label: "API keys needed" },
    ],
    stack: ["Python", "Hugging Face Transformers", "CLIP", "SQLite", "Streamlit"],
    live: "https://floravisionai.streamlit.app/",
    code: "https://github.com/abi1010-git/ai-flora-identifier",
    problem: [
      "Plant ID apps answer confidently even when they shouldn't, and for mushrooms that's dangerous. I wanted something that identifies well when it can, and clearly refuses when it can't.",
    ],
    pipeline: [
      { title: "Flora gate", detail: "A first CLIP check rejects likely non-flora uploads: people, animals, vehicles, screenshots, food." },
      { title: "Zero-shot match", detail: "The image is scored against catalog prompts built from common name, scientific name, category and visual terms." },
      { title: "Confidence rule", detail: "Below threshold the app says “Unable to confidently identify” instead of guessing; near matches appear as look-alikes." },
      { title: "Persist", detail: "Results and image hashes go to SQLite search history." },
    ],
    decisions: [
      {
        title: "Fallback that keeps the app usable",
        detail: "If CLIP dependencies are missing, a clearly labelled colour/texture classifier keeps the interface working during setup.",
      },
      {
        title: "Safety copy as code",
        detail: "Safety messaging lives in its own module and is unit-tested, so “AI identification may be incorrect” can't be accidentally removed.",
      },
    ],
    next: [
      "Regional candidate lists and GPS/region filters to narrow matches.",
      "A dedicated model trained on iNaturalist or PlantCLEF data.",
      "An expert-review workflow for low-confidence identifications.",
    ],
  },
  {
    slug: "ai-video-highlighter",
    name: "AI Video Highlighter",
    subtitle: "Intelligent Video Summarization & Content Analytics",
    tagline: "Turn a long lecture into its important moments and a jump-cut edit.",
    summary:
      "A timestamped Whisper transcription pipeline with highlight scoring, transcript search and automatic jump-cut video generation, plus optional TF-IDF/logistic-regression relevance classification and MP4 export.",
    categories: ["Machine Learning"],
    period: "Nov 2025 — Feb 2026",
    status: "Live",
    motif: "wave",
    resumeGroup: "Applied AI & Machine Learning",
    metrics: [
      { value: "Local", label: "Whisper, no API key" },
      { value: "TF-IDF", label: "+ logistic regression ranker" },
      { value: "MP4", label: "jump-cut export" },
    ],
    stack: ["Python", "Whisper", "Scikit-learn", "FFmpeg", "Streamlit", "Docker"],
    live: "https://aivideohighlighter.streamlit.app/",
    code: "https://github.com/abi1010-git/ai-video-highlighter",
    problem: ["Recorded lectures are long, and the useful parts are scattered. Scrubbing for “the bit about exam tips” wastes time."],
    pipeline: [
      { title: "Transcribe", detail: "Local OpenAI Whisper produces a timestamped transcript, or you upload SRT/VTT/JSON." },
      { title: "Rank", detail: "Segments are scored for relevance to a topic or question, optionally with a trained classifier." },
      { title: "Cut", detail: "FFmpeg extracts top moments, merges adjacent clips, and renders a downloadable jump-cut." },
    ],
    decisions: [
      {
        title: "Weak supervision for a starter model",
        detail: "Training data comes from openly licensed course transcripts with generated weak labels, feeding a small TF-IDF + logistic regression model that can be improved with hand labels.",
      },
    ],
    next: ["The ranker is a starter model; it improves as weak labels are replaced with hand-labelled examples."],
  },
  {
    slug: "csv-to-duckdb",
    name: "CSV-to-DuckDB",
    subtitle: "In-Memory SQL Analytics & Data Exploration Platform",
    tagline: "Drop in CSVs, query across them with SQL. No database to set up.",
    summary: "An in-memory DuckDB SQL workbench: each uploaded CSV becomes a table you can join, aggregate and inspect.",
    categories: ["Data Engineering"],
    period: "Jan 2026",
    status: "Live",
    motif: "table",
    resumeGroup: "Data Engineering & Analytics",
    metrics: [
      { value: "In-memory", label: "DuckDB OLAP" },
      { value: "N", label: "CSVs joinable together" },
    ],
    stack: ["Python", "DuckDB", "SQL", "Pandas", "Streamlit"],
    live: "https://csv-to-duckdb.streamlit.app/",
    code: "https://github.com/abi1010-git/csv-to-duckdb",
    problem: ["Joining two CSVs shouldn't require installing a database. Spreadsheets choke on size and can't do real SQL."],
    pipeline: [
      { title: "Upload", detail: "One or more CSVs are read with pandas." },
      { title: "Normalize", detail: "Filenames become safe SQL identifiers: “2024 crashes.csv” → table_2024_crashes, with suffixes for collisions." },
      { title: "Load", detail: "Each file becomes a DuckDB table in a per-session in-memory database; fingerprints prevent duplicate loads." },
      { title: "Query", detail: "Write SQL across all tables, with clear errors for bad SQL or unreadable files." },
    ],
    decisions: [
      {
        title: "Session isolation by design",
        detail: "The connection, table metadata and file fingerprints live in session state, so users never see each other's data and nothing persists after they leave.",
      },
    ],
  },
  {
    slug: "lessonloop",
    name: "LessonLoop",
    subtitle: "Exit-Ticket Analysis for Lesson Planning",
    tagline: "Today's exit tickets in, tomorrow's better lesson out.",
    summary:
      "Analyzes a class's exit-ticket responses for strengths and misconceptions, groups students, and suggests concrete changes to the next lesson.",
    categories: ["AI & Agents"],
    period: "Sep 2026",
    status: "Live",
    motif: "loop",
    resumeGroup: "Not on résumé",
    metrics: [
      { value: "1-click", label: "demo dataset" },
      { value: "Gemini", label: "free tier" },
    ],
    stack: ["Python", "Gemini API", "Streamlit"],
    live: "https://learnloop-1.streamlit.app/",
    code: "https://github.com/abi1010-git/LessonLoop",
    problem: ["Teachers collect useful exit-ticket evidence but rarely have time to turn it into changes for the next day."],
    pipeline: [
      { title: "Collect", detail: "Paste or load a class's exit-ticket responses." },
      { title: "Analyze", detail: "Surface what students understood, common misconceptions, and natural groupings." },
      { title: "Improve", detail: "Recommend targeted, evidence-based edits to the teacher's existing lesson plan." },
    ],
    decisions: [
      {
        title: "Start from the teacher's plan",
        detail: "Instead of generating a new lesson, it edits the existing one, so suggestions fit how the teacher already teaches.",
      },
    ],
  },
  {
    slug: "vehicle-telemetry-analytics",
    name: "Vehicle Telemetry Analytics",
    subtitle: "Full-Stack Prototype",
    tagline: "A million telemetry records, batch-processed and explained.",
    summary:
      "A full-stack prototype that processes one million synthetic vehicle telemetry records with PySpark and Parquet, flags safety events with a YAML rule engine, and serves them through FastAPI and React.",
    categories: ["Data Engineering", "Full-stack"],
    period: "2026",
    status: "Prototype · evolved into DriveAnalytics",
    motif: "spark",
    resumeGroup: "Data Engineering & Analytics",
    metrics: [
      { value: "1M", label: "telemetry records processed" },
      { value: "PySpark", label: "+ Parquet batch workflows" },
      { value: "EXPLAIN", label: "ANALYZE query benchmarking" },
    ],
    stack: ["Python", "PySpark", "Parquet", "PostgreSQL", "FastAPI", "React", "SQLAlchemy", "pytest", "GitHub Actions", "Docker Compose"],
    problem: [
      "I wanted to practise the full data path at realistic volume: batch processing, a queryable store, a rules layer, and an API and UI on top, before pointing it at real-world data.",
    ],
    pipeline: [
      { title: "Generate", detail: "One million synthetic vehicle telemetry records." },
      { title: "Batch process", detail: "PySpark jobs over Parquet compute temporal and fleet-level aggregations." },
      { title: "Detect", detail: "A YAML-configured safety-rule engine with typed validation flags events and attaches explainable evidence." },
      { title: "Store & tune", detail: "Results land in PostgreSQL via SQLAlchemy; queries are benchmarked with EXPLAIN ANALYZE and backed by workload-specific indexes." },
      { title: "Serve", detail: "FastAPI and React, with pytest, GitHub Actions CI and Docker Compose." },
    ],
    decisions: [
      {
        title: "Evidence with every flag",
        detail: "Each safety event carries the rule and the data that triggered it, so a flag can be explained, not just counted.",
      },
      {
        title: "Indexes chosen from measured plans",
        detail: "Indexes were added for the actual query workload after reading EXPLAIN ANALYZE output, not guessed up front.",
      },
    ],
    next: [
      "The data was synthetic, so it couldn't answer real questions. The backend, rule engine, tests, CI and Docker setup carried over into DriveAnalytics, rebuilt on real crash records.",
    ],
  },
  {
    slug: "route-optimization-visualizer",
    name: "Route Optimization Visualizer",
    subtitle: "Graph Analytics & Pathfinding",
    tagline: "A planned workbench for watching shortest-path algorithms think.",
    summary:
      "A design brief for an interactive graph traversal and shortest-path workbench with BFS, DFS, Dijkstra and A*, animation controls, and runtime, distance and visited-node metrics.",
    categories: ["Algorithms"],
    period: "Mar 2026",
    status: "Design brief · code not yet published",
    brief: true,
    motif: "route",
    resumeGroup: "Software Engineering & Applied AI",
    metrics: [
      { value: "4", label: "algorithms specified" },
      { value: "3", label: "graph input modes" },
      { value: "6", label: "comparison metrics" },
    ],
    stack: ["Python", "Graph algorithms", "Data structures"],
    code: "https://github.com/abi1010-git/route-optimization-visualizer",
    problem: [
      "Pathfinding is easy to read about and hard to see. The brief specifies a tool where you can step through each algorithm on the same graph and compare what it explored and what it cost.",
    ],
    pipeline: [
      { title: "Build a graph", detail: "Generate a random weighted graph, draw one by hand, or upload a source,target,weight CSV. Directed/undirected and weighted/unweighted toggles." },
      { title: "Pick an algorithm", detail: "BFS, DFS, Dijkstra (priority queue, distance table, predecessors) or A* with a Euclidean heuristic, all specified to be written from scratch." },
      { title: "Animate", detail: "Play, pause, step forward and back, with the current node, frontier, explored set and final path highlighted." },
      { title: "Compare", detail: "Distance, visited nodes, runtime, explored edges, path length and memory estimate, side by side across algorithms." },
    ],
    decisions: [
      {
        title: "From scratch, on purpose",
        detail: "The brief rules out built-in shortest-path helpers so the visualization reflects the implementation, not a library call.",
      },
    ],
    next: ["The public repo currently holds the design brief (PDF). The implementation isn't published there yet."],
  },
];

export const categories: Category[] = ["AI & Agents", "Data Engineering", "Machine Learning", "Full-stack", "Algorithms", "Accessibility"];


// Display order follows the résumé: flagships first, then résumé sections, then extras.
const ORDER = [
  // Flagships (shown large on the home page)
  "agentic-ai-chess-coach",
  "driveanalytics",
  "opening-trainer",
  // Résumé: Data Engineering and Analytics
  "signalfive",
  "csv-to-duckdb",
  "vehicle-telemetry-analytics",
  // Résumé: Applied AI and Machine Learning
  "adaptive-typing-assistant",
  "floravision-ai",
  // Résumé: Software Engineering and Applied AI
  "parallel-code-review",
  "ai-video-highlighter",
  "route-optimization-visualizer",
  // Not on the résumé
  "lessonloop",
];
projects.sort((a, b) => ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug));

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured && !p.brief);
export const liveCount = projects.filter((p) => p.live).length;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
