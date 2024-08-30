"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ComingSoon = () => {
  const router = useRouter();

  const handleBackClick = () => {
    if (window.History.length > 1) {
      router.back(); // Navigates back to the previous page
    } else {
      router.push("/"); // Navigate user to home page if back button fails to load previous from user history
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/placeholderimages/CoralBackground.jpg')",
      }}
    >
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-4 text-coral-600">Coming Soon!</h1>
        <p className="text-gray-700 mb-6">
          Coral is still under development and is not ready just yet. Worry not
          though as we are working hard to get the site up and operational as
          quickly as possible!!
        </p>
        <p className="text-gray-700 mb-6">
          Please keep posted and come back later as we are working hard to reach
          our baseline MVP so that you will not have to wait long to utilize it!
        </p>
        <button onClick={handleBackClick} className="rounded w-full">
          <p className="bg-blue-600 hover:bg-blue-800 rounded text-white font-bold py-2 px-4 ">
            Go Back
          </p>
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
