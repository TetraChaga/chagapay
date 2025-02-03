import React from "react";
import { useNavigate } from "react-router-dom";


export default function DownloadNow() {
  
  return (
    <div id="downloadnow" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12 px-6 text-center rounded-2xl shadow-lg max-w-3xl mx-auto my-8">
      <h2 className="text-4xl font-bold mb-4">Get Started with Our App!</h2>
      <p className="text-lg mb-6">Download the app now to experience all the features and get started in just a few clicks.</p>
      <div className="flex justify-center gap-4">
        <a
          href="#"
          className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition duration-300"
        >
          Download for iOS
        </a>
        <a
          href="#"
          className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition duration-300"
        >
          Download for Android
        </a>
      </div>
    </div>
  );
}
