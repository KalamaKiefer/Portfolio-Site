import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import Bounded from "./Bounded";

const Tech = () => {
  return (
    <Bounded xPad="default" yPad="default" className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:flex flex-wrap justify-center md:gap-10">
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
