"use client"; // This ensures the component is treated as a Client Component

import Image from "next/image";
import { useRouter } from "next/navigation";

const HomePageSection = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/Contact-us");
  };

  return (
    <div className="Home">
      <div className="w-full bg-white py-12">
        <div className="container mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center">
          {/* Left Side: Image */}
          <div className="w-full md:w-full lg:w-1/2 flex justify-center mb-8 md:mb-0 order-1 lg:order-1">
            <Image
              src="/images/Group 1261152733.png"
              alt="Sample"
              width={554} // Set the width
              height={347} // Set the height
              className="w-[250.77px] h-[157px] md:w-[450px] md:h-[300px] lg:w-[554.26px] lg:h-[347px] object-cover rounded-lg"
            />
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-full lg:w-1/2 px-4 text-center md:text-left order-2 lg:order-2">
            <p
              className="font-mulish text-[22px] font-bold leading-[33px] text-[#004AAB] md:text-[30px] lg:text-[40px] md:font-[700] md:leading-[60px]"
              style={{
                fontFamily: "Nunito",
              }}
            >
              Questions about your Medical/Dental Residency in Germany?{" "}
            </p>

            {/* Needle Border Effect */}
            <div className="relative mt-2 mb-4 mx-auto md:mx-0 md:block hidden">
              {/* Left side circle (needle part) */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#DC143B]"></div>

              {/* Straight line part */}
              <div className="w-40 h-1 bg-[#DC143B]"></div>
            </div>

            <p
              className="text-gray-600 text-[18px] font-medium leading-[30px] text-blue-800 md:text-[24px] :tlgext-[28px] md:font-medium md:leading-[45px] mt-4 md:mt-8"
              style={{
                fontFamily: "Poppins",
              }}
            >
              Tired of working for subpar wages, and want to shift to Europe?
              Get in touch with Doctors practising in Germany.
            </p>

            {/* Button Below Description */}
            <button
              className="mt-6 px-[36px] py-[10px] gap-[10px] rounded-[12px] bg-[#004AAB] text-white border-2 hover:border-[#004AAB] hover:bg-white hover:text-[#004AAB] transition-all"
              style={{
                fontFamily: "Montserrat",
              }}
              onClick={handleClick}
            >
              Book Your Consultation Now!{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSection;
