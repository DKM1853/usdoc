import Image from "next/image";

const ImageSection = () => {
  return (
    <section className="bg-white mt-[20%] md:mt-[9%] ">
      <h2
        className="text-2xl md:text-3xl lg:text-4xl sm:text-3xl font-bold flex items-center text-[#004AAB] ms-4 md:ms-8 mb-8 mt-10 md:mt-2"
        style={{
          fontFamily: "Nunito",
        }}
      >
        A Clear Pathway to Your Medical Career in Germany{" "}
        {/* Needle Border Effect */}
        <div className="absolute mt-14 mx-auto w-fit lg:block hidden">
          <div className="flex items-center justify-center">
            {/* Left Circular Part */}
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            {/* Straight Line */}
            <div className="w-[180px] h-1 bg-red-500"></div>
          </div>
        </div>
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12">
          {/* Space left on large screens */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Image Section */}
          <div className="col-span-12 lg:col-span-8 flex justify-center">
            <Image
              src="/images/job_public.png" // Replace with your image path
              alt="Example Image"
              width={450} // Adjust image dimensions as needed
              height={350}
              className="object-cover"
            />
          </div>

          {/* Space right on large screens */}
          <div className="hidden lg:block lg:col-span-2"></div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
