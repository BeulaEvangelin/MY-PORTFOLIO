import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function mushroomTrailsDetails() {
  return (
    <div className="aura-container">
      <div className="aura"></div>
      <div className="px-40 sm:px-5">
        <Header />

        <div className="h-[40vh] flex flex-col justify-start items-center  gap-8 py-10">
          <div className="text-center mt-20">
            <h1 className="text-6xl sm:text-3xl text-black font-bold mb-4">
              Mushroom Trails.
            </h1>
            <p className="text-black">Mushroom foraging educational game.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <img
            src="https://imgur.com/wmYGw3a.png"
            alt="LemmeK Logo"
            className="w-full h-84 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800 mb-4">Overview</h2>
          <p className="text-gray-700">
            Mushroom Trails is an immersive gaming experience that takes players
            on a journey through lush forests and serene landscapes in search of
            various types of mushrooms. Developed using ZIM.js and Three.js, the
            game combines stunning visuals with interactive gameplay to educate
            players about mushroom species, habitats, and safe foraging
            practices.
          </p>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Objective</h2>
          <p className="text-gray-700 mb-8">
            Through Mushroom Trails, players not only enjoy a thrilling gaming
            experience but also gain valuable knowledge about mushrooms and
            foraging practices. By completing challenges and unlocking rewards,
            players advance their foraging skills and become adept mushroom
            hunters.
          </p>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Key Features:
          </h3>
          <p className="text-gray-700">
            <strong>Interactive Puzzles: </strong>Along the way, players
            encounter interactive puzzles that challenge their knowledge of
            mushrooms and teach them about their unique characteristics.
          </p>
          <p className="text-gray-700">
            <strong>Educational Content: </strong>Mushroom Trails serves as an
            educational tool, providing valuable information about mushroom
            identification, habitats, and safe foraging practices.
          </p>
          <p className="text-gray-700">
            <strong>Rewards System: </strong>Players are rewarded for solving
            puzzles and completing challenges, motivating them to continue their
            journey and enhance their foraging skills.
          </p>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Visuals</h2>
          <img
            src="https://imgur.com/9loL1Tu.png"
            alt="LemmeK Logo"
            className="w-full h-84 object-cover rounded-md mb-4"
          />
          <img
            src="https://imgur.com/FsdjNcx.png"
            alt="LemmeK Logo"
            className="w-full h-84 object-cover rounded-md mb-4"
          />
          <img
            src="https://imgur.com/Hq7lqt4.png"
            alt="LemmeK Logo"
            className="w-full h-84 object-cover rounded-md mb-4"
          />
          <img
            src="https://imgur.com/4IECdbA.png"
            alt="LemmeK Logo"
            className="w-full h-84 object-cover rounded-md mb-4"
          />
          <img
            src="https://imgur.com/S0fVZxB.png"
            alt="LemmeK Logo"
            className="w-full h-84 object-cover rounded-md mb-4"
          />
          <p className="text-gray-700">
            Showcasing stunning visuals of lush forests, serene landscapes, and
            vibrant mushroom species, Mushroom Trails immerses players in a
            captivating virtual world. Screenshots and gameplay footage
            demonstrate the game's engaging graphics and interactive elements.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default mushroomTrailsDetails;
