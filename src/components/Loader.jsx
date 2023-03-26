import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <span className="canvas-load"></span>
      <div className="mt-20">
        <p className="text-lg font-semibold text-matte">
          {progress.toFixed(2)}%
        </p>
        <progress
          max="100"
          value={progress.toFixed(2)}
          style={{ width: "200px" }}
          className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-violet-400 [&::-moz-progress-bar]:bg-violet-400"
        >
          {progress.toFixed(2)}
        </progress>
      </div>
    </Html>
  );
};

export default Loader;
