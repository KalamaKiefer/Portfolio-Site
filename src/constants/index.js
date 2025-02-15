import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  sanity,
  git,
  sketch,
  threejs,
  nextjs,
  sentient,
} from "../assets";
import wtw from "../assets/company-logos/wtw-logo.png";
import te from "../assets/company-logos/transform-enterprise.png";
import everlight from "../assets/company-logos/everlight.png";

import thoughts from "../assets/thoughts.png";
import capmod from "../assets/capmodern.png";

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
    name: "Next JS",
    icon: nextjs,
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
    name: "Sanity.io",
    icon: sanity,
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
    icon: sketch,
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
    title: "Jr Web Developer",
    company_name: "Wall to Wall Studios.",
    icon: wtw,
    iconBg: "#fff",
    date: "Feb 2022 - July 2024",
    points: [
      "Developing and maintaining web applications using Typescript, React.js, Next.js, and a variety of CMS Platforms(Sanity.io, Prismic, Wordpress).",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality websites for clients.",
      "Create a responsive site that is cross-browser, and WCAG 2.1 web accessibility standards compatibile.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Jr Software Developer",
    company_name: "Everlight Solar",
    icon: everlight,
    iconBg: "#fff",
    date: "July 2024 - Present",
    points: [
      "Refactored and modernized the web and Android solar application, transitioning from JavaScript to TypeScript, optimizing component architecture, and refactoring traditional CSS to Styled Components for better maintainability and performance.",
      "Implemented a comprehensive testing framework, ensuring robust and reliable features while driving team-wide efforts to modernize the tech stack with React and TypeScript.",
      "Spearheaded a project to refactor and enhance an internal Google Chrome extension, streamlining the process of completing solar / government forms for employees.",
    ],
  },
];

const projects = [
  {
    name: "Sentient AI SAAS",
    description:
      "Created an AI SAAS web app that allows users to generate text, images, video, or music. Site created using Typescript, React JS, and Next JS using Next JS App directory and API routes to query Replicate's machine learning API and Open AI's text and image generation API. Incorporated ZOD for type safety and clerk for authentication...",
    image: sentient,
    liveLink: "https://sentientai.vercel.app/",
    source_code_link: "https://github.com/KalamaKiefer/SentientAI",
  },
  {
    name: "Thoughts Blog App",
    description:
      "Blog site made with React, Typescript, Next Js, Tailwind CSS, and Sanity.io for data storage. Utilized Next Js server side rendering for fast data fetching of posts. Utilized Sanity V3 that allows us to embed the admin dashboard directly into the web app for easy access through Next Js routing...",

    image: thoughts,
    liveLink: "https://thoughts-sanityx-next.vercel.app/",
    source_code_link: "https://github.com/KalamaKiefer/Thoughts-SanityxNext",
  },
  {
    name: "Capitol Modern.",
    description:
      "Developed a fully redesigned website for the Hawaii State Art Museum, now rebranded as Capitol Modern. Utilized Typescript, React, and Next.js for high-performance, scalable web development, and Sanity.io for dynamic, flexible content management, enabling real-time updates by museum staff...",
    image: capmod,
    liveLink: "https://www.capitolmodern.org/",
  },
];

export { technologies, experiences, projects };
