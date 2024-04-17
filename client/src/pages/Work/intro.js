//client> src> pages> Work> intro.js
import React from "react";

function Intro() {
  return (
    <div className="h-[40vh] flex flex-col justify-start items-center  gap-8 py-10">
      <div className="text-center mt-20">
        <h1 className="text-6xl sm:text-3xl text-black font-bold mb-4">
          Hi. I’m Beula Evangelin.
        </h1>
        <p className="text-black">
          Illustrator. UI UX Designer. Front-end Developer.
        </p>
      </div>
    </div>
  );
}

export default Intro;
