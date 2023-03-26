import React from "react";
import { ComputersCanvas } from "./canvas";
import Bounded from "./Bounded";

const Hero = () => {
  return (
    <Bounded className="relative w-full h-screen mx-auto max-w-7xl">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex items-start gap-5 sm:px-16 px-6">
        <div>
          <h1 className="text-[#28282B] font-black lg:text-7xl sm:text-6xl text-4xl leading-snug lg:leading-tight ">
            Aloha, <br className="hidden sm:block" /> I'm{" "}
            <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              Kalama Kiefer
            </span>
          </h1>
          <p className="text-[#28282B] mt-2 font-medium lg:text-3xl sm:text-2xl xs:text-xl text-lg lg:leading-10 md:max-w-[700px] lg:max-w-[800px]">
            I'm a full stack / front-end software engineer{" "}
            <br className="sm:block hidden" /> who is extremly passionate about
            responsive web development!
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </Bounded>
  );
};

export default Hero;
