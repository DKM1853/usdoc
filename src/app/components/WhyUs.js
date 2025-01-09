/** @jsxImportSource react */
"use client";

import Image from "next/image";

const WhyUs = () => {
  return (
    <div className="w-full px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Side: Image */}
        <div className="flex-1 mt-6">
          <div
            className="relative w-full"
            style={{ maxWidth: "525px", height: "auto" }}
          >
            <Image
              src="/images/doctor-group.png"
              alt="Doctors illustration"
              width={525} // Default width for desktop
              height={500} // Default height for desktop
              layout="intrinsic" // Keeps original aspect ratio
              className="rounded-lg xl:ml-32 object-cover" // Apply object-cover to maintain cover behavior
              sizes="(max-width: 768px) 305px, 525px"
            />
          </div>
          <style jsx>{`
            @media (max-width: 768px) {
              .next-image {
                max-width: 305px;
                height: 290px !important;
              }
            }
          `}</style>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1">
          {/* Section Title */}
          <h2
            className="text-2xl font-bold text-[#004AAB] mb-6 md:text-4xl"
            style={{
              fontFamily: "Nunito",
            }}
          >
            What Sets EuroDoc Apart{" "}
            <div className="relative mt-2 w-fit md:block hidden">
              <div className="flex items-center justify-center">
                {/* Left Circular Part */}
                <div className="w-4 h-4 rounded-full bg-[#DC143B]"></div>
                {/* Straight Line */}
                <div className="w-[250px] h-1 bg-[#DC143B]"></div>
              </div>
            </div>
          </h2>

          {/* Needle Border Effect */}
          {/* <div className="relative mb-6">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-red-600"></div>
            <div className="w-28 h-1 bg-red-600 ml-5"></div>
          </div> */}

          {/* Points */}
          <div className="space-y-6">
            {/* Point 1 */}
            <div>
              <h3
                className="text-lg font-bold text-blue-800 mb-2"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                1. Bureaucracy Simplified:
              </h3>
              <div className="flex items-start border-l border-black">
                {/* Vertical Line */}
                <div className="w-[2px] bg-black h-auto mr-4"></div>

                {/* Paragraph */}
                <p
                  className="text-gray-600"
                  style={{
                    fontFamily: "Nunito Sans",
                  }}
                >
                  Navigate Germany’s administrative maze with ease through our
                  exclusive step-by-step guidance. (While we provide dedicated
                  support to simplify the process, final decisions rest with the
                  respective authorities.)
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div>
              <h3
                className="text-lg font-bold text-blue-800 mb-2"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                2. All-in-One Support:
              </h3>

              <div className="flex items-start border-l border-black">
                {/* Vertical Line */}
                <div className="w-[2px] bg-black h-auto mr-4"></div>

                {/* Paragraph */}
                <p
                  className="text-gray-600"
                  style={{
                    fontFamily: "Nunito",
                  }}
                >
                  From document translation to insurance assistance, our
                  comprehensive resource kit and trusted partnerships ensure
                  that every question is answered and every need is met
                  seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
