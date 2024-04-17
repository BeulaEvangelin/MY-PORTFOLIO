import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function IllustrationDetails() {
  return (
    <div className="aura-container">
      <div className="aura"></div>
      <div className="px-40 sm:px-5">
        <Header />

        <div className="h-[40vh] flex flex-col justify-start items-center gap-8 py-10">
          <div className="text-center mt-20">
            <h1 className="text-6xl sm:text-3xl text-black font-bold mb-4">
              Character Designs and Illustrations.
            </h1>
            <p className="text-black">
              A collection of all kinds of illustrations I made.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 px-4 mb-4">
              <img
                src="https://imgur.com/tpgSYx8.png"
                alt="LemmeK Logo"
                className="w-full h-84 object-cover rounded-md"
              />
            </div>
            <div className="w-full sm:w-1/2 px-4 mb-4">
              <img
                src="https://imgur.com/UncvCi8.png"
                alt="LemmeK Logo"
                className="w-full h-84 object-cover rounded-md"
              />
            </div>
            <div className="w-full sm:w-1/2 px-4 mb-4">
              <img
                src="https://imgur.com/Xm7O0Xw.png"
                alt="LemmeK Logo"
                className="w-full h-84 object-cover rounded-md"
              />
            </div>
            <div className="w-full sm:w-1/2 px-4 mb-4">
              <img
                src="https://imgur.com/Y243Pxy.png"
                alt="LemmeK Logo"
                className="w-full h-84 object-cover rounded-md"
              />
            </div>
            <div className="w-full sm:w-1/2 px-4 mb-4">
              <img
                src="https://imgur.com/x1Kodho.png"
                alt="LemmeK Logo"
                className="w-full h-84 object-cover rounded-md"
              />
            </div>
            <div className="w-full sm:w-1/2 px-4 mb-4">
              <img
                src="https://imgur.com/2s4DOsW.png"
                alt="LemmeK Logo"
                className="w-full h-84 object-cover rounded-md"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default IllustrationDetails;
