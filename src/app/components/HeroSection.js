'use client'; // This ensures the component is treated as a Client Component


import { Nunito, Poppins } from "next/font/google";
import { useRouter } from "next/navigation";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify font weights
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights if needed
});

const HeroSection = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/Contact-us");
  };

  return (
    <div
      className="relative mt-[64px] h-[500px] sm:h-[500px] md:h-[700px] flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/hero-doctor.png')",
        backgroundSize: "cover", // Default for larger screens
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#034AAC] opacity-80"></div>

      {/* Content */}
      <div className="z-10 text-center px-6 mt-[40%] md:mt-[20%]">
        {/* Title */}
        <h1
          className="font-mulish text-[32px] sm:text-[40px] lg:text-[60px] font-bold leading-[40px] sm:leading-[50px] lg:leading-[73px] text-center text-white"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            fontFamily: "Nunito",
          }}
        >
          The trusted choice of
          <br />
          medical professionals around the world.{" "}
        </h1>

        {/* Subtitle */}
        {/* <p
          className="font-poppins font-medium text-[20px] sm:text-[28px] lg:text-[22px] leading-[36px] sm:leading-[40px] lg:leading-[45px] text-center text-white mt-6 mx-auto"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            maxWidth: "90%",
            fontFamily: "Poppins",
          }}
        >
          Trusted by Healthcare Professionals Worldwide{" "}
        </p> */}

        {/* Button */}
        <button
          className="mt-6 bg-white rounded-[12px] text-[#0077B6] border-2 border-[#0077B6] px-4 sm:px-10 py-2 font-semibold hover:border-white hover:bg-[#0077B6] hover:text-white transition-all text-sm sm:text-base"
          style={{
            fontFamily: "Nunito",
          }}
          onClick={handleClick}
        >
          Book My Appointment
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
