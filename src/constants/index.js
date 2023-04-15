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
} from "../assets";
import wtw from "../assets/company-logos/wtw-logo.png";
import te from "../assets/company-logos/transform-enterprise.png";
import budget from "../assets/budget.jpeg";
import thoughts from "../assets/thoughts.png";
import r2c from "../assets/rush2crush.png";

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
    name: "Thoughts Blog App",
    description:
      "Blog site made with React, Typescript, Next Js, Tailwind CSS, and Sanity.io for data storage.Utilized Next Js server side rendering for fast data fetching of posts. Utilized Sanity V3 that allows us to embed the admin dashboard directly into the web app for easy access through Next Js routing...",

    image: thoughts,
    liveLink: "https://thoughts-sanityx-next.vercel.app/",
    source_code_link: "https://github.com/KalamaKiefer/Thoughts-SanityxNext",
  },
  {
    name: "Budget App",
    description:
      "Created a budgeting web app that allows users to add budget limits, expenses, and track totals. Used React context to pass props to children such as the budgets and expenses.Created a custom hook to utilize local storage to store budgets and expenses array and useEffect hook to update values whenever changed...",
    image: budget,
    liveLink: "https://budget-that-app.vercel.app/",
    source_code_link: "https://github.com/KalamaKiefer/BudgetApp",
  },
  {
    name: "Rush to Crush Cancer Site",
    description:
      "Worked on UPMC site while at Wall to Wall which drew in thousands of dollars in donations for their bike ride to cure cancer. Created the site using React, Typescript, Next Js, CSS modules, Graphql, and Prismic.io for data storage as well as complete customizability of the site with a multitude of custom code blocks that can be added...",
    image: r2c,
    liveLink: "https://www.rushtocrushcancer.org/",
  },
];

export { technologies, experiences, projects };
