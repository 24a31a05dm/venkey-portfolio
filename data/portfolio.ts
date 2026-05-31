export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
] as const;

export const personalInfo = {
  fullName: "Kuppili Leela Venkatesh",
  displayName: "Venkey",
  initials: "V",
  role: "Computer Science Engineering Student",
  college: "Pragati Engineering College",
  location: "Kakinada, Andhra Pradesh",
  rollNumber: "24A31A05DM",
  branchSection: "CSE / C",
  cgpa: "8.47",
  email: "klvenkatesh8895@gmail.com",
  academicEmail: "venkeyr234@gmail.com",
  phone: "7995239788",
  phoneHref: "tel:+917995239788",
  resume: "/resume/venkey-resume.pdf",
  photo: "/images/venkey-profile-crop.jpeg",
  bio:
    "Computer Science Engineering student focused on web development, UI/UX, DBMS, software engineering, and full stack product craft.",
} as const;

export const heroRoles = [
  "Computer Science Engineering Student",
  "Full Stack Development Learner",
  "UI/UX Focused Builder",
  "DBMS and Software Engineering Explorer",
] as const;

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/24a31a05dm" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/venkey24a31a05dm" },
  { label: "LeetCode", href: "https://leetcode.com/u/24a31a05dm/" },
  { label: "HackerRank", href: "https://www.hackerrank.com/profile/klvenkatesh8895" },
  { label: "Mail", href: "mailto:klvenkatesh8895@gmail.com" },
] as const;

export const contactLinks = [
  {
    label: "Location",
    value: personalInfo.location,
    href: "https://maps.google.com/?q=Kakinada%2C%20Andhra%20Pradesh",
  },
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    label: "Academic Email",
    value: personalInfo.academicEmail,
    href: `mailto:${personalInfo.academicEmail}`,
  },
  {
    label: "Phone",
    value: "+91 79952 39788",
    href: personalInfo.phoneHref,
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: personalInfo.resume,
  },
] as const;

export const stats = [
  { label: "CGPA", value: 8.47, suffix: "" },
  { label: "Projects", value: 2, suffix: "+" },
  { label: "Coding Range", value: 40, suffix: "+" },
] as const;

export const focusAreas = [
  "Web Development",
  "UI/UX",
  "DBMS",
  "Software Engineering",
  "Full Stack Development",
] as const;

export const skills = [
  {
    group: "Core CS",
    summary: "Academic fundamentals tracked through college skill evaluation.",
    items: [
      { name: "Data Structures", level: 60 },
      { name: "Python / Java", level: 60 },
      { name: "SQL / Databases", level: 60 },
      { name: "Problem Solving", level: 58 },
    ],
  },
  {
    group: "Full Stack Projects",
    summary: "Minor projects with frontend, backend, database, and deployment milestones.",
    items: [
      { name: "Frontend Development", level: 100 },
      { name: "Backend Development", level: 100 },
      { name: "Database Integration", level: 100 },
      { name: "Final Deployment", level: 100 },
    ],
  },
  {
    group: "Data And AI",
    summary: "Focused project work around databases, fake news detection, and applied AI.",
    items: [
      { name: "DBMS", level: 72 },
      { name: "Fake News Detection", level: 78 },
      { name: "Machine Learning Basics", level: 68 },
      { name: "Data Modeling", level: 70 },
    ],
  },
  {
    group: "Product",
    summary: "User flows, visual systems, and engineering discipline.",
    items: [
      { name: "UI/UX", level: 86 },
      { name: "Software Engineering", level: 82 },
      { name: "Design Systems", level: 74 },
      { name: "Testing Mindset", level: 72 },
    ],
  },
] as const;

export const marqueeTech = [
  "Java",
  "Python",
  "DBMS",
  "SQL",
  "Data Structures",
  "Full Stack Development",
  "Design Thinking",
  "AI/ML",
  "ESP32",
  "Cloud Ecosystems",
  "LeetCode",
  "HackerRank",
  "UI/UX",
] as const;

export const projects = [
  {
    id: "currency-denomination-converter",
    title: "Currency Denomination Converter",
    category: "Full Stack",
    image: "/projects/currency-converter.svg",
    thumbnail: "/projects/thumbnails/currency-denomination-converter.png",
    thumbnailAlt: "Currency Denomination Converter project screenshot",
    description:
      "FSD-1 minor project that converts an amount into optimized currency denominations with completed frontend, backend, database integration, and deployment milestones.",
    technologies: ["Full Stack", "Web Development", "DBMS", "Deployment"],
    github: "https://github.com/24a31a05dm/currency-denomination-converter",
    demo: "https://24a31a05dm.github.io/currency-denomination-converter/",
  },
  {
    id: "fake-news-detection",
    title: "Fake News Detection Using AI",
    category: "AI/ML",
    image: "/projects/fake-news-ai.svg",
    thumbnail: "/projects/thumbnails/fake-news-detection-using-ai.png",
    thumbnailAlt: "Fake News Detection Using AI project screenshot",
    description:
      "DTI minor project focused on identifying fake news patterns using AI concepts, with GitHub submission completed and deployment milestones tracked.",
    technologies: ["AI/ML", "Python", "Design Thinking", "Web Development"],
    github: "https://github.com/24a31a05dm/fake-news-detection-using-ai",
    demo: "https://24a31a05dm.github.io/fake-news-detection-using-ai/",
  },
] as const;

export const timeline = [
  {
    year: "2024 - Present",
    title: "B.Tech Computer Science Engineering",
    place: "Pragati Engineering College",
    detail:
      "Roll number 24A31A05DM, branch CSE/C. Maintaining an 8.47 CGPA while building foundations in web development, DBMS, AI/ML, and software engineering.",
  },
  {
    year: "2025",
    title: "Minor Project Delivery",
    place: "FSD-1 and DTI",
    detail:
      "Completed Currency Denomination Converter and Fake News Detection Using AI, with GitHub submissions and project milestones tracked in the academic report.",
  },
  {
    year: "2025 - 2026",
    title: "Internships And Workshops",
    place: "Eduskills, CISCO, NPTEL",
    detail:
      "Completed a 10-week Eduskills Academy internship supported by AICTE, started a CISCO track, and passed NPTEL Programming in Java.",
  },
] as const;

export const achievements = [
  {
    title: "Academic Consistency",
    value: "8.47 CGPA",
    detail: "Strong CSE performance with steady focus on core engineering subjects.",
  },
  {
    title: "Project Submissions",
    value: "2 GitHub Repos",
    detail: "Submitted Currency Denomination Converter and Fake News Detection Using AI as academic minor projects.",
  },
  {
    title: "Coding Practice",
    value: "21-40 Problems",
    detail: "Maintains coding practice through LeetCode and HackerRank profiles linked in the portfolio.",
  },
  {
    title: "Publication Work",
    value: "2 Communicated",
    detail: "Project paper topics include cybersecurity with machine learning and the impact of fake news on the public.",
  },
] as const;

export const certifications = [
  {
    title: "NPTEL Programming in Java",
    issuer: "NPTEL / IIT Kharagpur",
    category: "Certification",
    status: "Pass",
    meta: "Jul-Oct 2025 / 12 weeks / 72%",
    href: "/certificates/files/nptel-programming-in-java.pdf",
    preview: "/certificates/previews/nptel-programming-in-java.jpg",
    description:
      "Completed a 12-week Java course covering object-oriented programming, core Java syntax, exception handling, collections, and problem-solving through assignments and a proctored exam.",
  },
  {
    title: "Python Fullstack Developer Virtual Internship",
    issuer: "EduSkills Academy / AICTE",
    category: "Virtual Internship",
    status: "Completed",
    meta: "Jan-Mar 2026 / 10 weeks",
    href: "/certificates/files/python-fullstack-developer-virtual-internship.pdf",
    preview: "/certificates/previews/python-fullstack-developer-virtual-internship.jpg",
    description:
      "A full stack learning track focused on Python-driven web development, backend logic, frontend integration, application flow, and deployment-oriented project practice.",
  },
  {
    title: "Data Engineering Virtual Internship",
    issuer: "EduSkills Academy / AWS Academy",
    category: "Virtual Internship",
    status: "Completed",
    meta: "Jul-Sep 2025 / 10 weeks",
    href: "/certificates/files/data-engineering-virtual-internship.pdf",
    preview: "/certificates/previews/data-engineering-virtual-internship.jpg",
    description:
      "Covered data engineering fundamentals including data pipelines, cloud data workflows, structured data handling, and the foundations needed for analytics-ready systems.",
  },
  {
    title: "Android Developer Virtual Internship",
    issuer: "EduSkills Academy / Google for Developers",
    category: "Virtual Internship",
    status: "Completed",
    meta: "Oct-Dec 2025 / 10 weeks",
    href: "/certificates/files/google-android-developer-virtual-internship.pdf",
    preview: "/certificates/previews/google-android-developer-virtual-internship.jpg",
    description:
      "Built mobile development fundamentals through Android concepts, app structure, UI patterns, lifecycle awareness, and practical exposure to Google developer workflows.",
  },
  {
    title: "C Programming And Data Structures",
    issuer: "Anurag IT Solutions / MSME",
    category: "Internship",
    status: "Completed",
    meta: "19 Aug-30 Sep 2024",
    href: "/certificates/files/c-programming-and-ds.pdf",
    preview: "/certificates/previews/c-programming-and-ds.jpg",
    description:
      "Completed an internship-style foundation course in C programming and data structures, strengthening syntax, control flow, arrays, functions, pointers, and core DS problem-solving.",
  },
  {
    title: "Web Application Development Using Design Thinking And Innovation",
    issuer: "Brainovision / Pragati Engineering College",
    category: "Workshop + Hackathon",
    status: "Completed",
    meta: "13-15 Feb 2025",
    href: "/certificates/files/web-application-development-workshop.jpeg",
    preview: "/certificates/previews/web-application-development-workshop.jpg",
    description:
      "Participated in a two-day workshop and 24-hour hackathon focused on ideating, designing, and building web applications using design thinking and innovation methods.",
  },
  {
    title: "IoT Solution Design With ESP32 And Cloud Ecosystems",
    issuer: "HueBits Tech / Pragati Engineering College",
    category: "Workshop",
    status: "Completed",
    meta: "13-17 Oct 2025",
    href: "/certificates/files/iot-solution-design-workshop.jpeg",
    preview: "/certificates/previews/iot-solution-design-workshop.jpg",
    description:
      "Completed a five-day hands-on workshop on IoT solution design using ESP32 boards, sensor workflows, cloud connectivity, and practical embedded systems thinking.",
  },
  {
    title: "National Library Day Group Discussion",
    issuer: "Pragati Engineering College",
    category: "Participation",
    status: "Completed",
    meta: "12 Aug 2025",
    href: "/certificates/files/national-library-day-group-discussion.jpeg",
    preview: "/certificates/previews/national-library-day-group-discussion.jpg",
    description:
      "Participated in a group discussion as part of National Library Day celebrations, building communication, presentation, and structured discussion skills.",
  },
  {
    title: "Blood Donation Appreciation",
    issuer: "Rotary Blood Bank",
    category: "Social Contribution",
    status: "Completed",
    meta: "13 Mar 2026",
    href: "/certificates/files/blood-donation-certificate.jpeg",
    preview: "/certificates/previews/blood-donation-certificate.jpg",
    description:
      "Received appreciation for donating blood through Rotary Blood Bank, reflecting social responsibility and contribution toward saving lives.",
  },
] as const;
