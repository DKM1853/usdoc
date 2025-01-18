/** @jsxImportSource react */
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const GetInTouch = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/Contact-us");
  };
  return (
    <section className="relative py-24 px-4 bg-[#FFEEF1] mt-[80px] mb-10">
      <div className="container mx-auto flex flex-col items-center justify-between">
        {/* Content (Title, Description, Button) */}
        <div className="text-center md:w-1/2 items-center">
          <h2
            className="text-2xl font-semibold text-[#004AAB] mb-4 md:text-3xl"
            style={{
              fontFamily: "Nunito",
            }}
          >
            Have Questions About the Process?
          </h2>
          <p
            className="text-gray-600 mb-6 me-8"
            style={{
              fontFamily: "Nunito Sans",
            }}
          >
            Feel free to complete the Interest Form and share your questions
            with us. We&apos;re here to help!
          </p>
          <button
            className="bg-[#004AAB] hover:bg-[#FFEEF1] hover:text-[#004AAB] border-2 border-[#004AAB] text-white font-bold py-2 px-6 rounded"
            style={{
              fontFamily: "Nunito",
            }}
            onClick={handleClick}
          >
            Get in Touch{" "}
          </button>
        </div>

        {/* Image for Laptop View (Hidden on Mobile) */}
        <div className="md:absolute md:right-0 lg:right-0 md:top-0  md:flex md:items-center md:justify-center hidden md:block">
          <Image
            src="/images/Character_2.png" // Correct image path
            alt="Doctor Illustration"
            width={290} // Set the width for desktop (or desired size)
            height={400} // Set the height for desktop (or desired size)
            className="object-contain md:w-[270px] md:h-[350px] lg:w-[290px] lg:h-[400px] md:mt-[-70px]"
          />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
