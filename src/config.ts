import { IFonts } from "./interfaces";

const name = "Abdul Basit";

export const config = {
  name: name,
  nameTagLine: `My name is ${name}.`,
  descriptionTagLine:
    "Full Stack Developer with expertise across the entire software development lifecycle—front-end, back-end, DevOps, and beyond. I love to solve real-world problems through coding.",
  // descriptionTagLine:
  //   "I am a Full Stack Developer with 3+ years of experience designing, developing, and deploying scalable web applications end to end. I am skilled in entire software development lifecycle—from gathering requirements, design, building, and deployment with a proven track record of delivering high-quality, maintainable, and efficient code. I am interested to work in large scale, production grade, micro services, and event based based applications and contribute to them.",

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
      jobDescription: `• Redesigned and implemented responsive UIs using React.js and Next.js, ensuring seamless performance across all major browsers, and improving user retention and engagement by 25%. 
• Optimized front-end performance by refactoring code, minimizing asset size, and leveraging lazy loading techniques, resulting in a 30% faster page load time and significantly enhancing user satisfaction. 
• Built and maintained CI/CD pipelines with tools like GitHub Actions, reducing manual deployment by 60%. 
• Architected and developed scalable RESTful APIs using Node.js and Express, cutting average API response time by 30% via cache layer and supporting up to 100K+ concurrent users with high reliability. 
• Designed and implemented database schemas using Prisma and Mongoose, improving data consistency and reducing query latency by 20%. 
• Integrated third-party APIs and npm packages, including map services, authentication, and utilities, cutting development time by 25% and accelerating feature delivery. 
• Implemented secure Stripe payment gateways, enabling recurring billing and one-time purchases. Led peer code reviews and collaborated cross-functionally with backend and design teams to deliver new features, reducing post-release bugs by 30% and improving team productivity.
       `,
    },
    {
      compantName: "Futech Solutions",
      jobPosition: "Associate Software Engineer - Frontend",
      jobDuration: "Sep 2021 - Mar 2023",
      jobDescription: `• Collaborated with designers to build reusable, feature-rich UI components using React.js and Next.js, streamlining the development process and increasing front-end delivery efficiency by 25%.
• Implemented robust state management and routing solutions using Redux and React Router, enabling seamless navigation and ensuring consistent user experience across multi-page applications.
• Boosted application speed, scalability, and security by profiling performance bottlenecks and applying advanced optimization techniques, reducing load times by up to 20%.
• Redesigned and modernized legacy websites to improve visual appeal, user experience, and accessibility—resulting in improved ui/ux and a 20% increase in organic traffic through better SEO.
• Strengthened website security and refactored legacy codebases, leading to enhanced maintainability and a measurable improvement in Core Web Vitals and Lighthouse scores.
      `,
    },
  ],

  projects: [
    {
      name: "TechShip Website",
      link: "https://techship.me/",
      image: "/assets/techship-website.png",
      category: "Frontend",
      highlights: ["Nextjs"],
      description:
        "Designed and developed a high-performance, multi-tenant logistics website for Techship, a modern logistics company specializing in last-mile delivery, fulfillment, and warehouse management services. The platform features a scalable architecture built with Next.js, enabling independent tenant management, real-time order tracking, and seamless user experiences across devices.",
    },
    {
      name: "TechShip ERP Dashboard",
      link: "https://wms.quickexsa.com/v2",
      image: "/assets/techShip-erp-dashboard.png",
      category: "Frontend",
      highlights: ["NextJs", "ReduxJs"],
      description:
        "Developed a scalable, multi-tenant logistics operations dashboard for Techship using a micro-frontend architecture, enabling end-to-end management of last-mile delivery, fulfillment, inventory, and third-party logistics (3PL) operations. Built 10+ integrated modules including Last Mile, Fulfillment, NDR, Reverse Logistics, Finance, Stats, Onboarding (Shopify, Zid, Salla), and 3PL integrations (iMile, Aramex, J&T)— empowering logistics teams to manage orders, pickups, packing, warehousing, delivery, and driver runsheets through a unified platform",
    },
    {
      name: "Migonest",
      link: "https://migonest-jrzn.vercel.app/",
      image: "/assets/migonest.png",
      category: "Full Stack",
      highlights: ["NextJs", "NodeJs", "ExpressJs", "MongoDB"],
      description:
        "Developed a global web platform for Migonest that connects international students with verified Uni Experts—individuals who have either gone through the international university admission process or are part of university admin teams. Developed both frontend and backend apps for Students and Uni Experts, enabling real-time consultation, admission guidance, and mentorship. The platform streamlines the journey for students applying abroad by offering expert-backed support at every stage of the admission lifecycle.",
    },
    {
      name: "TechShip Tenant Manager",
      link: "https://master.techship.me/",
      image: "/assets/techship-tenant-manager.png",
      category: "Frontend",
      highlights: ["NextJs", "SSR"],
      description:
        "Developed a dedicated Tenant Management Dashboard to easily create, configure, and manage multiple tenants, enabling seamless onboarding of logistics partners.",
    },
    {
      name: "BRC Outsourcing",
      link: "https://brcksa.com/",
      image: "/assets/brc-outsourcing.png",
      category: "Frontend",
      highlights: ["NextJs"],
      description:
        "Designed and developed a pixel perfect, responsive website for a Saudi Arabia-based outsourcing company specializing in courier, food delivery, IT, and manpower services. Built with Next.js App Router and enhanced with smooth, modern animations, the site delivers a amazing user experience. Focused on high performance, and brand-aligned design to boost client credibility and user engagement.",
    },
  ],

  testimonials: [
    {
      name: "Ayesha",
      image: "/assets/person.jpg",
      position: "CEO - XYZ",
      highlights: ["Problem Solving", "Team Work"],
      review: `${name} consistently delivers well-optimized code, exceeding deadlines and demonstrating strong problem-solving skills. Their collaborative spirit and eagerness to learn make them a valuable asset to the team.`,
      date: "01/03/23",
    },
    {
      name: "Ahmad",
      image: "/assets/person.jpg",
      position: "CEO - XYZ",
      highlights: ["Self Learner", "Good Work"],
      review: `${name} consistently delivers well-optimized code, exceeding deadlines and demonstrating strong problem-solving skills. Their collaborative spirit and eagerness to learn make them a valuable asset to the team.`,
      date: "04/22/25",
    },
  ],

  email: "dev.basit2020@gmail.com",
  phone: "+923040448830",
  developedBy: "Abdul Basit",

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
