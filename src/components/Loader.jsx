import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 20,
          color: "#fff",
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
      <progress
        max="100"
        value={progress.toFixed(2)}
        style={{ width: "200px" }}
      >
        {progress.toFixed(2)}
      </progress>
    </Html>
  );
};

export default Loader;
