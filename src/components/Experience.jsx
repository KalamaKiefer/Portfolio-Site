import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";
import Bounded from "./Bounded";

const ExperienceCard = ({
  title,
  company_name,
  icon,
  iconBg,
  date,
  points,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={icon}
            alt={company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p>{company_name}</p>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <Bounded xPad="default" yPad="default" className="mx-auto max-w-7xl">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Experience
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Work History
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((card, idx) => (
            <ExperienceCard
              key={idx}
              title={card.title}
              company_name={card.company_name}
              icon={card.icon}
              iconBg={card.iconBg}
              date={card.date}
              points={card.points}
            />
          ))}
        </VerticalTimeline>
      </div>
    </Bounded>
  );
};

export default Experience;
