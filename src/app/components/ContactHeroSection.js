const ContactHeroSection = () => {
  return (
    <div className="relative mt-[60px] md:mt-[60px] lg:mt-[100px] sm:mt-[75px] h-[300px] sm:h-[400px] md:h-[600px] flex items-center justify-center">
      {/* Background Images for Different Screens */}
      {/* Mobile Background Image */}
      <div
        className="absolute inset-0 bg-contain bg-no-repeat bg-center sm:bg-cover sm:bg-center"
        style={{
          backgroundImage: "url('/images/contact-us.png')", // Mobile background image
        }}
      ></div>

      {/* Tablet and Larger Screens Background Image */}
      <div
        className="absolute inset-0 hidden sm:block bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/contact-hero.png')", // Larger screens background
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 hidden md:block"></div>

      {/* Content */}
      <div className="z-10 text-center px-6 hidden md:block">
        <h1
          className="font-mulish text-[32px] sm:text-[40px] lg:text-[55px] leading-[40px] sm:leading-[50px] lg:leading-[73px] text-white"
          style={{
            fontFamily: "Nunito",
          }}
        >
          GET IN TOUCH
        </h1>
      </div>
    </div>
  );
};

export default ContactHeroSection;
