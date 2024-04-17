import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function BBBDetails() {
  return (
    <div className="aura-container">
      <div className="aura"></div>
      <div className="px-40 sm:px-5">
        <Header />

        <div className="h-[40vh] flex flex-col justify-start items-center  gap-8 py-10">
          <div className="text-center mt-20">
            <h1 className="text-6xl sm:text-3xl text-black font-bold mb-4">
              Between Breads.
            </h1>
            <p className="text-black">Bistro Website.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <img
            src="https://imgur.com/zIgoMom.png"
            alt="BBB"
            className="w-full h-84 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800 mb-4">Overview</h2>
          <p className="text-gray-700">
            Between Breads is a charming bistro website designed to showcase the
            restaurant's menu, provide information about the establishment,
            facilitate online ordering, and streamline catering inquiries. Built
            using HTML, CSS, JavaScript, PHP, and MySQL, the website offers a
            seamless user experience with its intuitive interface and
            interactive features.
          </p>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            User Experience
          </h2>
          <p className="text-gray-700 mb-8">
            Between Breads offers users a seamless and intuitive browsing
            experience, with clear navigation and informative content presented
            in a visually appealing manner. The website's responsive design
            ensures compatibility across various devices, providing users with a
            consistent experience regardless of their screen size.
          </p>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Key Features</h3>
          <p className="text-gray-700 mb-1">
            <strong>One-Page Design: </strong>Between Breads features a sleek
            one-page design, making it easy for users to navigate and find the
            information they need quickly.
          </p>
          <p className="text-gray-700 mb-1">
            <strong>Sections: </strong>The website is divided into four main
            sections: Menu, About Us, Order, and Contact Us, ensuring a
            comprehensive overview of the restaurant's offerings and services.
          </p>
          <p className="text-gray-700 mb-1">
            <strong>Ordering Options: </strong>The Order section offers two
            convenient options: Order Pickup or Delivery, allowing customers to
            choose the most suitable method for receiving their meals.
          </p>
          <p className="text-gray-700 mb-1">
            <strong>Catering Inquiry Form: </strong>For special events and
            catering inquiries, users can fill out a form with details such as
            date, event type, and the number of attendees, streamlining the
            booking process for both the restaurant and customers.
          </p>
          <p className="text-gray-700 mb-1">
            <strong>Admin Panel: </strong>The website includes an admin panel
            that allows restaurant staff to easily manage the Menu and About Us
            sections, enabling updates such as adding or removing dishes,
            changing prices, and updating restaurant information.
          </p>
        </div>

        <div className="bg-white p-8 rounded-md shadow-lg mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Interface</h2>
          <img
            src="https://imgur.com/GHBpBFX.png"
            alt="BBB"
            className="w-full h-84 object-cover rounded-md mb-4"
          />
          <img
            src="https://imgur.com/VIFStdv.png"
            alt="BBB"
            className="w-full h-84 object-cover rounded-md mb-4"
          />
          <img
            src="https://imgur.com/poa4abH.png"
            alt="BBB"
            className="w-full h-84 object-cover rounded-md mb-4"
          />

          <p className="text-gray-700">
            Between Breads aims to provide customers with a convenient and
            enjoyable online experience while promoting the restaurant's menu,
            services, and unique offerings. Whether placing an order for pickup
            or delivery, inquiring about catering services, or learning more
            about the restaurant's story, Between Breads caters to the diverse
            needs of its clientele.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default BBBDetails;
