import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Bounded from "./Bounded";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-2xl"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-matte rounded-2xl py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <Bounded
      xPad="default"
      yPad="default"
      className="mx-auto max-w-7xl"
      id="about"
    >
      <span className="hash-span" id={"about"}>
        &nbsp;
      </span>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          About Me
        </p>
        <h2 className="text-creme font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-creme text-lg max-w-3xl leading-8"
      >
        Hi, my name is Kalama Kiefer and I am from Oahu, Hawaii. I am full stack
        / front-end developer experienced in Typescript, Next.js, Tailwind Css,
        and various CMS(Sanity.io, Prismic, Wordpress). I enjoy reading,
        powerlifting, traveling, and learning about new technologies! My passion
        is coding and I aspire to be a life long learner and continue learning
        about new technologies throughout my life. I am a disciplined, hard
        worker that loves to accomplish tasks thoroughly and promptly and I look
        forward to solving new challenges for my next company.
      </motion.p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, idx) => (
          <ServiceCard key={idx} index={idx} {...service} />
        ))}
      </div> */}
    </Bounded>
  );
};

export default About;
