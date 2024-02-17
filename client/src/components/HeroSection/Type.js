import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [

          '  Without Continual Growth and Progress, Such Words As Improvement, Achievement, and Success Have No Meaning.  - Benjamin Franklin',
          '  The Future Belongs To Those Who Believe In The Beauty Of Their Dreams.  - Elanor Roosevelt',
          '  Even As You Make Progress, You Need The Dicipline To Keep From Backtracking and Sabotaging The Success As Its Happening.  - Nipsey Hussle',
          '  The Test Of Our Progress Is Not Whether We Add More To The Abundance Of Those Who Have Much It Is Whether We Provide Enough For Those Who Have Little.  - Franklin D. Roosevelt',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 'natural',
      }}
    />
  );
}

export default Type;
