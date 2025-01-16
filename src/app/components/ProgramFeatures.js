/** @jsxImportSource react */
"use client";
import Image from "next/image";

const ProgramFeatures = () => {
  const features = [
    {
      title: "Virtual Meetings",
      description:
        "We will use platforms like Zoom and Google Meet for regular mentoring sessions.",
      icon: "/images/feature-1.svg",
    },

    {
      title: "Study Groups",
      description:
        "Will create a peer group for discussion, question-solving, and sharing resources.",
      icon: "/images/feature-3.svg",
    },
    {
      title: "Tracking Progress",
      description:
        "Help you set measurable goals and review your achievements periodically.",
      icon: "/images/feature-2.svg",
    },
  ];

  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="container mx-auto">
        {/* Main Section Title */}
        <div className="relative text-center mb-10">
          {/* Title */}
          <h2
            className="text-2xl font-bold text-[#004AAB] md:text-4xl"
            style={{ fontFamily: "Nunito" }}
          >
            Program Features
          </h2>

          {/* Needle Effect */}
          <div className="relative mt-2 hidden md:block">
            <div className="flex items-center justify-start md:justify-center">
              <div className="w-4 h-4 rounded-full bg-[#DC143B]"></div>
              <div className="w-[200px] h-1 bg-[#DC143B]"></div>
            </div>
          </div>
        </div>

        {/* Features Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white flex flex-col justify-between p-6 rounded-lg transition-shadow hover:shadow-md"
              style={{
                boxShadow:
                  "0px 4px 8px rgba(0, 0, 0, 0.1), 0px 4px 12px rgba(239, 240, 246, 1)",
                border: "1px solid #EFF0F6",
              }}
            >
              {/* Icon with Blue Background */}
              <div
                className="flex justify-center bg-[#E6F5FC] rounded-full mb-6"
                style={{ width: "60px", height: "60px" }}
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={50} // Corresponds to w-10 (10 * 4 = 40px)
                  height={50} // Corresponds to h-10 (10 * 4 = 40px)
                  className="w-10 h-10 object-contain mt-6 ms-6" // Retained Tailwind classes for styling
                />
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold text-black mt-2"
                style={{ fontFamily: "Nunito" }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className="text-gray-500 text-base mt-4"
                style={{ fontFamily: "Nunito Sans" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramFeatures;
