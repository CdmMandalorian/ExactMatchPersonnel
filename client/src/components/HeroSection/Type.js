import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          '  A Dream You Dream Alone Is Only A Dream. A Dream You Dream Together Is Reality.  – John Lennon',
          '  Without Continual Growht and Progress, Such Words As Improvement, Achievement, and Success Have No Meaning.  - Benjamin Franklin',
          '  Even As You Make Progress, You Need The Dicipline To Keep From Backtracking and Sabotaging The Success As Its Happening.  - Nipsey Hussle',
          '  The Future Belongs To Those Who Believe In The Beauty Of Their Dreams.  - Elanor Roosevelt',
          '  The Test Of Our Progress Is Not Whether We Add More To The Abundance Of Those Who Have Much It Is Whether We Provide Enough For Those Who Have Little.  - Franklin D. Roosevelt',
          '  The Business Of Business Is Relationships; The Business Of Life Is Human Connection.  – Robin Sharma',
          '  To Accomplish Great Things, We Must Not Only Act, But Also Dream; Not Only Plan, But Also Believe.  - Anatole France',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 'natural',
      }}
    />
  );
}

export default Type;
