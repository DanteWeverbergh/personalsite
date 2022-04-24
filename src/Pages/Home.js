import React from 'react';
import TypeAnimation from 'react-type-animation';

function Home() {
  return (
    <>
      {/** typing animation
      <div className="text-white-950">
        <TypeAnimation
          cursor={false}
          sequence={["Hi, I'm Dante Weverbergh", 1000, '']}
          wrapper="h2"
        />
      </div>
       */}

      <div className="text-white-950">
        <h1>Hi I'm Dante Weverbergh.</h1>
      </div>

      <div className="h-64 w-64 rounded-full bg-blue-950">
        <div>
          <img src="./images/portret_studio_uitgesneden.png" alt="me" />
        </div>
      </div>
    </>
  );
}

export default Home;
