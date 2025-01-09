"use client"; // Ensure this is a client-side component

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Popup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if the popup has already been shown in this session
    const popupShown = sessionStorage.getItem("popupShown");
    if (popupShown) {
      setIsPopupVisible(false);
    }
  }, []);

  const handleYesClick = () => {
    // Redirect to Contact-us page and close the popup
    sessionStorage.setItem("popupShown", "true"); // Prevent showing the popup again
    router.push("/Contact-us");
    setIsPopupVisible(false); // Close the popup immediately
  };

  const handleCloseClick = () => {
    // Close the popup and prevent it from showing again
    sessionStorage.setItem("popupShown", "true"); // Prevent showing the popup again
    setIsPopupVisible(false);
  };

  if (!isPopupVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
      <div className="bg-white p-8 rounded-lg w-11/12 sm:w-96 text-center shadow-xl transform transition-all scale-95 hover:scale-100">
        <h2 className="text-2xl font-bold text-[#004AAB] mb-4">
          Are you a doctor?
        </h2>
        {/* <p className="text-lg text-gray-700 mb-6">
          Let us know so we can direct you to the right page.
        </p> */}
        <div className="flex justify-center gap-6">
          <button
            className="bg-[#004AAB] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
            onClick={handleYesClick}
          >
            Yes
          </button>
          <button
            className="bg-gray-300 text-black px-6 py-3 rounded-lg hover:bg-gray-400 transition-all"
            onClick={handleCloseClick}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
