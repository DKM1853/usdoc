"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // Import the WhatsApp icon

const HelpButton = () => {
  const whatsappNumber = "917600830124"; // Replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white rounded-full px-4 py-2 shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl"
      aria-label="Help on WhatsApp"
    >
      {/* WhatsApp Icon */}
      <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
        <FontAwesomeIcon
          className="text-green-500 w-6 h-6" // Icon styling
          icon={faWhatsapp}
        />
      </div>
      {/* Help Text */}
      <span className="font-semibold text-lg">Help</span>
    </a>
  );
};

export default HelpButton;
