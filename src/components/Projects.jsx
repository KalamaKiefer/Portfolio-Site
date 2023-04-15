import React from "react";
import Bounded from "./Bounded";
import { motion } from "framer-motion";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { LinkIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({
  index,
  name,
  description,
  image,
  github_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-matte p-5 rounded-2xl sm:w-[360px] w-full h-[500px] relative">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-fill rounded-2xl"
          />
        </div>
        <div className="absolute inset-0 flex gap-x-2 justify-end m-3 card-img_hover">
          {github_link && (
            <a
              href={github_link}
              target="_blank"
              className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </a>
          )}
          <a
            href={live_link}
            target="_blank"
            className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <LinkIcon className="w-1/2 h-1/2 object-contain" />
          </a>
        </div>

        <div className="mt-5 flex flex-col gap-4">
          <h3 className="font-bold text-creme text-2xl">{name}</h3>
          <p className="text-sm text-creme">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <Bounded xPad="default" yPad="default" className="max-w-7xl mx-auto">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Work
        </p>
        <h2 className="text-creme font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col sm:flex-row flex-wrap gap-7">
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.name}
            index={idx}
            name={project.name}
            description={project.description}
            image={project.image}
            github_link={project.source_code_link}
            live_link={project.liveLink}
          />
        ))}
      </div>
    </Bounded>
  );
};

export default Projects;
