import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import Bounded from "./Bounded";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <Bounded xPad="default" yPad="default" className="max-w-7xl mx-auto">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Familiar Languages / Frameworks
        </p>
        <h2 className="text-matte font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Technologies
        </h2>
      </motion.div>
      <div className="sm:mt-20 mt-10 grid grid-cols-2 md:flex flex-wrap justify-center md:gap-10">
        {technologies.map((technology) => (
          <div key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Tech;
