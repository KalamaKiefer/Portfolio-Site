import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  threejs,
} from "../assets";
import wtw from "../assets/company-logos/wtw-logo.png";
import te from "../assets/company-logos/transform-enterprise.png";
import nest from "../assets/nestHome.png";
import budget from "../assets/budget.jpeg";
import clone from "../assets/clone.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "sketch",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Front End Developer Intern",
    company_name: "Transform Enterprise",
    icon: te,
    iconBg: "#fff",
    date: "May 2021 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Jr Software Engineer",
    company_name: "Wall to Wall Studios.",
    icon: wtw,
    iconBg: "#fff",
    date: "Feb 2022 - Present",
    points: [
      "Developing and maintaining web applications using Typescript, React.js, Next.js, and a variety of CMS Platforms(Sanity.io, Prismic, Wordpress).",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality websites for clients.",
      "Create a responsive site that is cross-browser, and WCAG 2.1 web accessibility standards compatibile.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Nest Social Media",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nest,
    liveLink: "",
    source_code_link: "https://github.com/",
  },
  {
    name: "Budget App",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: budget,
    liveLink: "",
    source_code_link: "https://github.com/",
  },
  {
    name: "What's App Clone",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: clone,
    liveLink: "",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
