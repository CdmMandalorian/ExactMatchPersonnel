import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Efficient Personnel Placement",
          "Quality Long Term Staffing",
          "Specialty Recruiting Services",
          "Premier Extensive Network",
          "Temporary-to-Hire",
          "Interim Staffing",

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
