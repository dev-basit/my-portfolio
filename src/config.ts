import { IFonts } from "./interfaces";

const name = "Abdul Basit";

export const config = {
  name: name,
  nameTagLine: `My name is ${name}.`,
  // descriptionTagLine: "I love to solve real-world problems through technology.",
  descriptionTagLine:
    "I am a Full Stack Developer with 3+ years of experience designing, developing, and deploying scalable web applications end to end. I am skilled in entire software development lifecycle—from gathering requirements, design, building, and deployment with a proven track record of delivering high-quality, maintainable, and efficient code. I am interested to work in large scale, production grade, micro services, and event based based applications and contribute to them.",

  featurePhrases: ["Software Engineer", "Full Stack Developer"],
  aboutText:
    "I am a Full Stack Developer with 3+ years of experience designing, developing, and deploying scalable web applications end to end. I am skilled in entire software development lifecycle—from gathering requirements, design, building, and deployment with a proven track record of delivering high-quality, maintainable, and efficient code.",
  aboutText2:
    "I am interested to work in large scale, production grade, micro services, and event based based applications and contribute to them.",

  experience: [
    {
      compantName: "TechShip",
      jobPosition: "Software Engineer - Full Stack Developer",
      jobDuration: "May 2023 - Present",
      jobDescription:
        "Redesigned and implemented responsive UIs using React.js and Next.js, ensuring seamless performance across all major browsers, and improving user retention and engagement by 25%. Optimized front-end performance by refactoring code, minimizing asset size, and leveraging lazy loading techniques, resulting in a 30% faster page load time and significantly enhancing user satisfaction. Built and maintained CI/CD pipelines with tools like GitHub Actions, reducing manual deployment by 60%. Architected and developed scalable RESTful APIs using Node.js and Express, cutting average API response time by 30% via cache layer and supporting up to 100K+ concurrent users with high reliability. Designed and implemented database schemas using Prisma and Mongoose, improving data consistency and reducing query latency by 20%. Integrated third-party APIs and npm packages, including map services, authentication, and utilities, cutting development time by 25% and accelerating feature delivery. Implemented secure Stripe payment gateways, enabling recurring billing and one-time purchases. Led peer code reviews and collaborated cross-functionally with backend and design teams to deliver new features, reducing post-release bugs by 30% and improving team productivity",
    },
    {
      compantName: "SMU Product Management Club",
      jobPosition: "Member |",
      jobDuration: "Dec 2023 - April 2024",
      jobDescription:
        "I designed a product and its product strategy for GrabFood based on identified pain points in mobile food ordering and market research to determine market sizing, position and strategy.",
    },
  ],

  projects: [
    {
      name: "GrabMore",
      image: "/assets/project.png",
      category: "UI/UX",
      highlights: ["2024", "UI/UX"],
      description: "Developed for Internal Product Challenge | 3rd Place",
    },
    {
      name: "GrabMore",
      image: "/assets/project.png",
      category: "UI/UX",
      highlights: ["2024", "UI/UX"],
      description: "Developed for Internal Product Challenge | 3rd Place",
    },
    {
      name: "GrabMore",
      image: "/assets/project.png",
      category: "UI/UX",
      highlights: ["2024", "UI/UX"],
      description: "Developed for Internal Product Challenge | 3rd Place",
    },
    {
      name: "GrabMore",
      image: "/assets/project.png",
      category: "UI/UX",
      highlights: ["2024", "UI/UX"],
      description: "Developed for Internal Product Challenge | 3rd Place",
    },
  ],

  testimonials: [
    {
      name: "Sara",
      image: "/assets/person.jpg",
      position: "CEO ABC Company",
      highlights: ["Problem Solving", "Good Communication"],
      review: `${name} consistently delivers well-optimized code, exceeding deadlines and demonstrating strong problem-solving skills. Their collaborative spirit and eagerness to learn make them a valuable asset to the team.`,
      date: "02/02/24",
    },
    {
      name: "Sara",
      image: "/assets/person.jpg",
      position: "CEO ABC Company",
      highlights: ["Problem Solving", "Good Communication"],
      review: `${name} consistently delivers well-optimized code, exceeding deadlines and demonstrating strong problem-solving skills. Their collaborative spirit and eagerness to learn make them a valuable asset to the team.`,
      date: "02/02/24",
    },
    {
      name: "Sara",
      image: "/assets/person.jpg",
      position: "CEO ABC Company",
      highlights: ["Problem Solving", "Good Communication"],
      review: `${name} consistently delivers well-optimized code, exceeding deadlines and demonstrating strong problem-solving skills. Their collaborative spirit and eagerness to learn make them a valuable asset to the team.`,
      date: "02/02/24",
    },
    {
      name: "Sara",
      image: "/assets/person.jpg",
      position: "CEO ABC Company",
      highlights: ["Problem Solving", "Good Communication"],
      review: `${name} consistently delivers well-optimized code, exceeding deadlines and demonstrating strong problem-solving skills. Their collaborative spirit and eagerness to learn make them a valuable asset to the team.`,
      date: "02/02/24",
    },
  ],

  email: "ernest@gmail.com",
  phone: "+65 3492 3892",
  developedBy: "Ernest",

  techStack: "Nextjs - Styled-Components",
};

export const fonts: IFonts = {
  lg: "1.7rem",
  md: "1.4rem",
  sm: "1.4rem",
};

export const projectCategoryfonts: IFonts = {
  lg: "1.7rem",
  md: "1.4rem",
  sm: "1.4rem",
};
