import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function valentineVaultDetails() {
  return (
    <div className="aura-container">
      <div className="aura"></div>
      <div className="px-40 sm:px-5">
        <Header />

        <div className="h-[40vh] flex flex-col justify-start items-center  gap-8 py-10">
          <div className="text-center mt-20">
            <h1 className="text-6xl sm:text-3xl text-black font-bold mb-4">
              Valentine Vault.
            </h1>
            <p className="text-black">Promp Generator.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <img
            src="https://imgur.com/PobdJBf.png"
            alt="valentine vault ui"
            className="w-full h-84 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800 mb-4">Overview</h2>
          <p className="text-gray-700">
            Valentine Vault is a charming tool designed to generate customized
            visuals for Valentine's Day cards. Built using PixiJS and ZIM.js,
            the platform offers a delightful user experience with a variety of
            customizable features and a seamless interface.
          </p>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Objective</h2>
          <p className="text-gray-700 mb-8">
            With Valentine Vault, users can unleash their creativity and create
            personalized Valentine's Day card visuals that reflect their unique
            style and sentiments. Whether crafting a whimsical scene for a
            significant other or sending warm wishes to friends and family,
            Valentine Vault empowers users to express their love and affection
            in a memorable way.
          </p>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Key Features:
          </h3>
          <p className="text-gray-700 mb-1">
            <strong>Visual Customization: </strong>Valentine Vault allows users
            to create personalized visuals for their Valentine's Day cards,
            enabling them to express their love and affection through unique and
            enchanting designs.
          </p>
          <p className="text-gray-700 mb-1">
            <strong>Cuteness Meter: </strong>Users can adjust the cuteness level
            of their card visuals, adding an extra touch of charm to their
            creations.
          </p>
          <p className="text-gray-700 mb-1">
            <strong>Theme Selection: </strong>The platform offers six charming
            themes to choose from, allowing users to tailor their card visuals
            to match their recipient's preferences.
          </p>
          <p className="text-gray-700">
            <strong>Character and Environment Selection: </strong>Users can
            select from a variety of adorable characters and enchanting
            environments to create the perfect scene for their card visuals.
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default valentineVaultDetails;
