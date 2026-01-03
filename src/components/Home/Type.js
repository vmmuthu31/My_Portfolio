import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web3 Full Stack Developer",
          "GSOC Contributor & Mentor",
          "Blockchain Educator",
          "15x Hackathon Winner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
