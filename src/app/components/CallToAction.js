/** @jsxImportSource react */
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const CallToAction = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/Contact-us");
  };
  return (
    <div className="bg-[#004AAB] text-white py-8 px-6 sm:px-10 md:px-20 lg:px-32 mt-8">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:items-start">
        {/* Left Image */}
        <div className="hidden sm:block sm:mr-16">
          {" "}
          {/* Added larger margin */}
          <Image
            src="/images/heart.png" // Replace with your image path
            alt="Left Decorative Image"
            width={100} // Adjust width as needed
            height={100} // Adjust height as needed
            className="object-contain"
          />
        </div>

        {/* Content Section */}
        <div className="text-center sm:text-left flex-1">
          {/* Title */}
          <h2
            className="text-2xl sm:text-3xl font-bold mb-4 text-center"
            style={{
              fontFamily: "Nunito",
            }}
          >
            Launch Your Career in U.S.
          </h2>
          {/* Description */}
          <p
            className="text-sm sm:text-base mb-8 text-center"
            style={{
              fontFamily: "Nunito Sans",
            }}
          >
            Embark on your medical career in US with expertise
            and enthusiasm. Take the first step towards thriving in one of the
            world’s top healthcare systems. Let’s turn your goals into
            success—begin your journey today!
          </p>
          {/* Call-to-Action Button */}
          <div className="flex flex-col items-center justify-center text-center gap-6">
            {/* Join Course Button */}
            <button
              className="bg-white text-[#004AAB] px-6 py-2 rounded-[12px] font-semibold shadow-md hover:bg-[#004AAB] hover:border-white border-2 hover:text-white"
              style={{
                fontFamily: "Nunito",
              }}
              onClick={handleClick}
            >
              Enroll Now{" "}
            </button>

            {/* Right Image */}
            <div className="relative mt-[-60px] me-[-90%] sm:mt-[40px] md:me-[-100%] md:mt-[-100px] lg:mt-[-50px]">
              <Image
                src="/images/med-box.png" // Replace with your image path
                alt="Right Decorative Image"
                width={100} // Default width for all sizes
                height={100} // Default height for all sizes
                className="object-contain mx-auto sm:ml-0 sm:mr-auto md:ml-auto 
                w-[70px] h-[70px] sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px]" // Adjusted width and height for mobile
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
