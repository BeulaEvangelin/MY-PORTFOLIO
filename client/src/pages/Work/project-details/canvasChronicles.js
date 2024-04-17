import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function CanvasChroniclesDetails() {
  return (
    <div className="aura-container">
      <div className="aura"></div>
      <div className="px-40 sm:px-5">
        <Header />

        <div className="h-[40vh] flex flex-col justify-start items-center  gap-8 py-10">
          <div className="text-center mt-20">
            <h1 className="text-6xl sm:text-3xl text-black font-bold mb-4">
              Canvas Chronicles.
            </h1>
            <p className="text-black">Photo Editing Website.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <img
            src="https://imgur.com/OewRccf.png"
            alt="Canvas chronicles"
            className="w-full h-84 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800 mb-4">Overview</h2>
          <p className="text-gray-700">
            Canvas Chronicles is a captivating website that allows users to edit
            their images using Renaissance artist-themed frames and elements.
            Built using ZIM.js, the platform offers a seamless editing
            experience with a variety of artistic themes, frames, and filters.
          </p>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            User Experience
          </h2>
          <p className="text-gray-700 mb-8">
            Canvas Chronicles offers users a captivating and intuitive editing
            experience, allowing them to unleash their creativity and transform
            their images into works of art inspired by the Renaissance era. The
            user-friendly interface and seamless editing tools make it easy for
            users to customize their images and create stunning compositions
          </p>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Key Features</h3>
          <p className="text-gray-700">
            <strong>Renaissance Artist Themes: </strong>Canvas Chronicles offers
            five distinctive themes inspired by Renaissance artists, allowing
            users to infuse their images with historical elegance and artistic
            flair.
          </p>
          <p className="text-gray-700">
            <strong>Custom Frames: </strong>Each theme features four different
            frames, ranging from ornate to minimalist designs, providing users
            with a diverse selection of artistic options.
          </p>
          <p className="text-gray-700">
            <strong>Color Filters: </strong>Users can choose from four color
            filters to apply to their images, enhancing their visual appeal and
            evoking the mood of the Renaissance era.
          </p>
          <p className="text-gray-700">
            <strong>Save Button: </strong>Once satisfied with their edited
            image, users can download it with a simple click of the save button,
            allowing them to share their Renaissance-inspired creations with
            others
          </p>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Interface</h2>
          <img
            src="https://imgur.com/2zVdfay.png"
            alt="Canvas chronicles"
            className="w-full h-84 object-cover rounded-md mb-4"
          />
          <img
            src="https://imgur.com/t4XW4SA.png"
            alt="Canvas chronicles"
            className="w-full h-84 object-cover rounded-md mb-4"
          />
          <img
            src="https://imgur.com/eZRZiOP.png"
            alt="Canvas chronicles"
            className="w-full h-84 object-cover rounded-md mb-4"
          />

          <p className="text-gray-700">
            Canvas Chronicles is more than just an image editor—it's a journey
            through time and artistry, allowing users to explore the beauty and
            elegance of the Renaissance era through their own images. With its
            thematic elements, customizable frames, and intuitive editing tools,
            Canvas Chronicles inspires creativity and offers users a unique way
            to showcase their visual storytelling.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default CanvasChroniclesDetails;
