import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function LemmeKDetails() {
  return (
    <div className="aura-container">
      <div className="aura"></div>
      <div className="px-40 sm:px-5">
        <Header />

        <div className="h-[40vh] flex flex-col justify-start items-center  gap-8 py-10">
          <div className="text-center mt-20">
            <h1 className="text-6xl sm:text-3xl text-black font-bold mb-4">
              LemmeK.
            </h1>
            <p className="text-black">Class Status App UI</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <img
            src="https://i.imgur.com/R87GT3I.png"
            alt="LemmeK Logo"
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800 mb-4">Overview</h2>
          <p className="text-gray-700">
            Lemmek is a Class Status app designed to streamline communication
            between faculty members and students regarding class updates,
            cancellations, and rescheduling. The app provides a seamless user
            experience with customizable notification preferences and secure
            authentication for both faculty and students.
          </p>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Design Elements
          </h2>

          <p className="text-gray-700">
            <strong>Information Design: </strong>Lemmek emphasizes the display
            of relevant information with clear formatting, user prompts, and
            feedback mechanisms.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Information Architecture: </strong>The app provides clear
            guidance on interaction fields, including character pmits, data
            masking, and error handling.
          </p>
          <img
            src="https://imgur.com/dEjMw4W.png"
            alt="LemmeK user flow"
            className="w-full h-84 object-cover rounded-md mb-4"
          />
          <img
            src="https://imgur.com/5DDHoPO.png"
            alt="LemmeK Login"
            className="w-full h-84 object-cover rounded-md mb-4"
          />
          <img
            src="https://imgur.com/FRuYwsj.png"
            alt="LemmeK Student Dashboard"
            className="w-full h-84 object-cover rounded-md mb-4"
          />
          <img
            src="https://imgur.com/5UPudzl.png"
            alt="LemmeK Faculty Dashboard"
            className="w-full h-84 object-cover rounded-md mb-4"
          />
        </div>
        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Technical Requirements
          </h2>

          <p className="text-gray-700">
            - Onboarding and login sequences for faculty and students.
          </p>
          <p className="text-gray-700">
            - Faculty dashboard for class management, including class
            cancellation, rescheduling, and notifications.
          </p>
          <p className="text-gray-700">
            - Student dashboard for receiving class updates, managing
            notification preferences, accessing a chat feature, and viewing the
            class calendar.
          </p>
          <p className="text-gray-700 mb-8">
            - User flow for setting up the account, two-factor authentication
            for adding notification channels, and error handling.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">Use Cases</h2>

          <p className="text-gray-700">
            <strong>Faculty Class Cancellation: </strong>Faculty member logs
            into the app and selects the class to cancel. They write a message
            to the class and submit it. Upon submission, they receive a
            confirmation pop-up and an email notification.
          </p>
          <p className="text-gray-700">
            <strong>Student Class Status Check: </strong>A student checks the
            class status due to weather conditions. The app indicates class
            cancellation, prompting the student to stay informed and adjust
            their plans accordingly.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default LemmeKDetails;
