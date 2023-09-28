import React from "react";
import { Html, useProgress } from "@react-three/drei";

// Loader component that displays a loading progress bar
const Loader = () => {
  // Use the useProgress hook to get loading progress
  const { progress } = useProgress();

  return (
    <Html>
      {/* Loading progress bar */}
      <span className="canvas-load"></span>
      {/* Display loading progress percentage */}
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
