import React from 'react'
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Flutter Enthusiast",
          "Innovator & Problem Solver",
          "Event Strategist"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type