import Image from "next/image";
import HeroSection from "./HeroSection";
import PhotoInfoSection from "./PhotoInfoSection";
import CallToAction from "./CallToAction";
import ContactUs from "./ContactUs";
import FAQSection from "./FAQSection";
import TestimonialsSection from "./TestimonialsSection";
import HomePageSection from "./HomePageSections";

export const metadata = {
  title: "Expert Consulting for Medical Careers in Germany | EuroDoc",
  description:
    "comprehensive consulting for medical professionals, simplifying their journey towards medical success in Germany. Redefining medical futures in Germany, delivering expert guidance for a seamless transition to Germany",
  keywords: "About Eurodoc, Medical Professionals in Europe, Eurodoc Services",
  openGraph: {
    title: "Expert Consulting for Medical Careers in Germany | EuroDoc",
    description:
      "comprehensive consulting for medical professionals, simplifying their journey towards medical success in Germany. Redefining medical futures in Germany, delivering expert guidance for a seamless transition to Germany",
    url: "https://eurodoc.in/Contact-us",
    siteName: "Eurodoc",
    locale: "en_US",
    type: "website",
  },
};

export default function FirstPage() {
  const offers = [
    {
      title: "EuroDoc Special: Excellence Program for Doctors & Dentists",
      image: "/images/integrated_program.png", // Placeholder - replace with actual path
    },
    {
      title: "Eurodoc interview prep",
      image: "/images/online-video.png", // Placeholder - replace with actual path
    },
    {
      title: "EuroDoc Community: Connect, Learn, and Grow",
      image: "/images/community.png", // Placeholder - replace with actual path
    },
  ];
  return (
    <div className="Home">
      <HeroSection />
      <HomePageSection />

      <div className="w-full bg-white py-2 md:py-2 lg:py-2">
        <div className="container mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center">
          {/* Left Side: Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 lg:w-1/2">
            {/* Title */}
            <p
              className="text-[22px] font-[700] leading-[33px] text-blue-800 md:text-[30px] lg:text-[40px] md:font-[700] md:leading-[60px]"
              style={{
                fontFamily: "Nunito",
              }}
            >
              why choose Germany for residency?{" "}
            </p>

            {/* Needle Border Effect */}
            <div className="relative mt-2 mb-4 mx-auto md:flex md:justify-center lg:justify-start lg:mx-0">
              {/* Wrapper for dot and line */}
              <div className="flex items-center justify-center">
                {/* Left side circle (needle part) */}
                <div className="w-4 h-4 rounded-full bg-[#DC143B] flex-shrink-0"></div>

                {/* Straight line part */}
                <div className="w-[180px] md:w-[200px] lg:w-[228px] h-1 bg-[#DC143B]"></div>
              </div>
            </div>

            {/* Points Section */}
            <ul
              className="text-gray-600 md:ps-8 text-[18px] font-[500] leading-[30px] text-blue-800 md:text-[12px] lg:text-[17px] md:font-[500] md:leading-[35px] mt-4 md:mt-8 list-disc list-inside lg:list-outside text-start"
              style={{
                fontFamily: "Nunito",
              }}
            >
              <li>
                There is no standard national exam like USMLE or PLAB. All you
                have to do is learn the language.
              </li>
              <li>
                You can aim for surgery. There is a drastic shortage of surgeons
                and in general other specialities as well.
              </li>
              <li>Cost of living in Germany is cheaper than living in US.</li>
              <li>
                The part to acquiring citizenship as a doctor in residency is
                pretty much straightforward
              </li>
              <li>
                German labour law ensures that you cannot work more than 48
                hours per week, giving you more time to travel across Europe.
              </li>
              {/* <li>Strong Demand for Qualified Professionals</li> */}
            </ul>
          </div>

          {/* Right Side: Image */}
          <div className="flex justify-center mb-8 lg:mb-0 order-1 lg:order-2 lg:w-1/2">
            <Image
              src="/images/why-germany.png"
              alt="Sample"
              width={700} // Largest width (md:w-[700px]) specified explicitly
              height={500} // Largest height (md:h-[500px]) specified explicitly
              className="object-cover rounded-lg w-[250.77px] h-[157px] md:w-[500px] md:h-[350px] lg:w-[700px] lg:h-[500px]"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-2 md:py-2 lg:py-2">
        <div className="container mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center">
          {/* Left Side: Image */}
          <div className="flex justify-center mb-8 lg:mb-0 order-1 lg:order-1 lg:w-1/2">
            <Image
              src="/images/other-city.png"
              alt="Sample"
              width={700} // Largest width (md:w-[700px]) specified explicitly
              height={500} // Largest height (md:h-[500px]) specified explicitly
              className="object-cover rounded-lg w-[250.77px] h-[250px] md:w-[500px] md:h-[450px] lg:w-[550px] lg:h-[500px]"
            />
          </div>

          {/* Right Side: Content */}
          <div className="text-center lg:text-left order-2 lg:order-2 lg:w-1/2">
            {/* Title */}
            <p
              className="text-[22px] font-[700] leading-[33px] text-blue-800 md:text-[30px] lg:text-[40px] md:font-[700] md:leading-[60px]"
              style={{
                fontFamily: "Nunito",
              }}
            >
              Germany VS Other Countries{" "}
            </p>

            {/* Needle Border Effect */}
            <div className="relative mt-2 mb-4 mx-auto md:flex md:justify-center lg:justify-start lg:mx-0">
              {/* Wrapper for dot and line */}
              <div className="flex items-center justify-center">
                {/* Left side circle (needle part) */}
                <div className="w-4 h-4 rounded-full bg-[#DC143B] flex-shrink-0"></div>

                {/* Straight line part */}
                <div className="w-[180px] md:w-[200px] lg:w-[228px] h-1 bg-[#DC143B]"></div>
              </div>
            </div>

            {/* Points Section */}
            <ul
              className="text-gray-600 md:ps-8 text-[18px] font-[500] leading-[30px] text-blue-800 md:text-[12px] lg:text-[15px] md:font-[500] md:leading-[35px] mt-4 md:mt-8 list-disc list-inside lg:list-outside text-start"
              style={{
                fontFamily: "Nunito",
              }}
            >
              <li>
                USA: Higher salaries post-residency but longer and more
                competitive residency paths and you are stuck with internal
                medicine mostly. Even post residency you have to work on
                restricted visa and have to wait 15+ years before you get the
                citizenship.
              </li>
              <li>
                UK: PLAB exams, often lower salaries during training, and longer
                pathways for specialization.
              </li>
              <li>
                Canada: Limited spots for IMGs, complex licensing exams, and
                challenging immigration processes.
              </li>
              <li>
                Australia: High living costs and fewer residency slots for IMGs.
              </li>
              <li>
                India: Often overcrowded and intensely competitive medical
                training environments with limited patient-doctor ratios
                compared to Germany.
              </li>
              {/* <li>Strong Demand for Qualified Professionals</li> */}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FFEEF1] rounded-[16px] py-4 relative">
          {/* Image on Top-Left Corner */}
          <div className="hidden md:block absolute left-2 w-[150px] h-[150px]">
            <Image
              src="/images/medicine_hand.png"
              alt="Left Corner Image"
              width={500} // Set desired width
              height={500} // Set desired height
              className="object-cover"
            />
          </div>

          <h2
            className="font-nunito text-center text-[45px] font-bold text-[#004AAB] mb-4 relative"
            style={{
              fontFamily: "Nunito",
            }}
          >
            Our Services
            {/* Needle Border Effect */}
            <div className="relative mt-2 mx-auto w-fit md:block hidden">
              <div className="flex items-center justify-center">
                {/* Left Circular Part */}
                <div className="w-4 h-4 rounded-full bg-[#DC143B]"></div>
                {/* Straight Line */}
                <div className="w-[220px] h-1 bg-[#DC143B]"></div>
              </div>
            </div>
          </h2>

          <p
            className="text-center text-lg text-gray-500 mb-10"
            style={{
              fontFamily: "Nunito",
            }}
          >
            Your Complete Pathway from Decision to Approbation
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="w-80 h-100 bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center"
              >
                <Image
                  src={offer.image}
                  alt={offer.title}
                  width={250}
                  height={250}
                  className="mx-auto"
                />
                <h3
                  className="font-nunito mt-4 text-2xl font-bold text-black text-center leading-[1.5]"
                  style={{
                    fontFamily: "Nunito",
                  }}
                >
                  {offer.title}
                </h3>
                {/* <div className="flex-grow"></div>
                <p className="text-gray-600">{offer.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <PhotoInfoSection /> */}
      {/* <section className="relative bg-pink-100 py-12 px-4 overflow-x-hidden">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-8 relative">
            <img
              src="/images/animated-heart.png" // Replace with correct path
              alt="Heart Icon"
              className="w-18 h-16 mr-2 md:mr-4"
            />
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 flex items-center">
              What Our Students Say
            </h2>
          </div>

          <div className="relative flex">
            <div className="hidden md:block sticky left-0 top-0 z-10">
              <img
                src="/images/vector-doctor.png" // Replace with correct path
                alt="Doctor Illustration"
                className="w-[150px] h-auto object-contain"
              />
            </div>

            <div className="flex flex-row overflow-x-auto space-x-6 md:space-x-8 px-4 md:px-0">
              {Array(10)
                .fill("")
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md min-w-[300px] md:min-w-[400px]"
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                      <img
                        src="/images/testimonial-1.png" // Replace with correct path
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Leticia Kutch
                    </h3>
                    <p className="text-gray-600 text-center text-sm my-4">
                      Sapiente consequatur exercitationem quasi eum corporis
                      sit. Aut consectetur maxime debitis quam voluptatem aut
                      consequatur voluptatem.
                    </p>
                    <p className="text-yellow-500 font-medium">
                      5.0/5.0 rating ⭐⭐⭐⭐⭐
                    </p>
                  </div>
                ))}
            </div>
          </div>

          <img
            src="/images/testimotial-design.png" // Replace with correct path
            alt="Double Quotes"
            className="absolute right-[-30px] top-[-40px] w-[80px] md:w-[100px] z-0"
          />
        </div>
      </section> */}

      <div className="w-full bg-white py-12">
        <div className="container mx-auto px-4 md:px-12">
          {/* Title Section */}
          <div className="flex items-start justify-between">
            {/* Title and Description */}
            <div>
              <p
                className="text-[22px] font-bold leading-[33px] text-blue-800 md:text-[40px] md:leading-[60px]"
                style={{
                  fontFamily: "Nunito",
                }}
              >
                Requirements for Medical PG in <br /> Germany
              </p>
              {/* Needle Border Effect */}
              <div className="relative mt-2 mb-4 hidden md:block">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-red-600"></div>
                <div className="w-[228px] h-1 bg-red-600"></div>
              </div>
              {/* Description */}
              <p
                className="text-[#6D6D6D] text-md md:text-base mt-2"
                style={{
                  fontFamily: "Nunito Sans",
                }}
              >
                Here are the key prerequisites for starting your Specialist
                Training in Germany:
              </p>
            </div>

            {/* Right Image */}
            <div className="hidden md:block">
              <Image
                src="/images/reciept.png" // Replace with your image path
                alt="Requirements Icon"
                width={200} // Set width explicitly
                height={160} // Set height explicitly
                className="object-contain mt-8" // Maintains the positioning and aspect ratio
              />
            </div>
          </div>

          {/* Points Section */}
          <div className="mt-6">
            {/* For Desktop */}
            <div className="hidden md:grid md:grid-cols-2">
              <div
                className=""
                style={{
                  fontFamily: "Nunito",
                }}
              >
                <p className="flex items-center text-black text-md leading-10">
                  <span className="text-green-600 mr-2 text-2xl">✔</span>
                  Completed Medical or Dental Degree{" "}
                </p>
                <p className="flex items-center text-black text-md leading-10">
                  <span className="text-green-600 mr-2 text-2xl">✔</span>
                  12-Month Rotational Internship{" "}
                </p>
                <p className="flex items-center text-black text-md leading-10">
                  <span className="text-green-600 mr-2 text-2xl">✔</span>
                  Valid License to Practice Medicine or Dentistry
                </p>
              </div>
              <div
                className=""
                style={{
                  fontFamily: "Nunito",
                }}
              >
                <p className="flex items-center text-black text-md leading-10">
                  <span className="text-green-600 mr-2 text-2xl">✔</span>
                  German Language Proficiency at B2 Level{" "}
                </p>
                <p className="flex items-center text-black text-md leading-10">
                  <span className="text-green-600 mr-2 text-2xl">✔</span>
                  Pass the Medical German Language Test in Germany
                </p>
                <p className="flex items-center text-black text-md leading-10">
                  <span className="text-green-600 mr-2 text-2xl">✔</span>
                  Successful Completion of the Knowledge Test in Germany
                </p>
              </div>
            </div>

            {/* For Mobile */}
            <div className="block md:hidden">
              <div
                className="flex flex-col gap-4"
                style={{
                  fontFamily: "Nunito",
                }}
              >
                <p className="flex items-center text-black text-sm">
                  <span className="text-green-600 mr-2 text-xl">✔</span>
                  Completed Medical or Dental Degree
                </p>
                <p className="flex items-center text-black text-sm">
                  <span className="text-green-600 mr-2 text-xl">✔</span>
                  12-Month Rotational Internship
                </p>
                <p className="flex items-center text-black text-sm">
                  <span className="text-green-600 mr-2 text-xl">✔</span>
                  Valid License to Practice Medicine or Dentistry
                </p>
                <p className="flex items-center text-black text-sm">
                  <span className="text-green-600 mr-2 text-xl">✔</span>
                  German Language Proficiency at B2 Level
                </p>
                <p className="flex items-center text-black text-sm">
                  <span className="text-green-600 mr-2 text-xl">✔</span>
                  Pass the Medical German Language Test in Germany
                </p>
                <p className="flex items-center text-black text-sm">
                  <span className="text-green-600 mr-2 text-xl">✔</span>
                  Successful Completion of the Knowledge Test in Germany{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-2 md:py-2 lg:py-2">
        <div className="container mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center">
          {/* Left Side: Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 lg:w-1/2">
            {/* Title */}
            <p
              className="text-[22px] font-[700] leading-[33px] text-blue-800 md:text-[30px] lg:text-[40px] md:font-[700] md:leading-[60px]"
              style={{
                fontFamily: "Nunito",
              }}
            >
              Key Benefits of a Career and Life in Germany
            </p>

            {/* Needle Border Effect */}
            <div className="relative mt-2 mb-4 mx-auto lg:mx-0 lg:block hidden">
              {/* Left side circle (needle part) */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#DC143B]"></div>

              {/* Straight line part */}
              <div className="w-[228px] h-1 bg-[#DC143B]"></div>
            </div>

            {/* Points Section */}
            <ul
              className="text-gray-600 md:ps-8 text-[18px] font-[500] leading-[30px] text-blue-800 md:text-[20px] md:font-[500] md:leading-[45px] mt-4 md:mt-8 list-disc list-inside lg:list-outside text-start"
              style={{
                fontFamily: "Nunito",
              }}
            >
              <li>High Job Demand and Stability</li>
              <li>Competitive Salaries and Attractive Benefits</li>
              <li>State-of-the-Art Healthcare Infrastructure</li>
              <li>
                Comprehensive Social Security and Strong Income Opportunities
              </li>
              <li>Excellent Work-Life Balance</li>
              <li>Strong Demand for Qualified Professionals</li>
            </ul>
          </div>

          {/* Right Side: Image */}
          <div className="flex justify-center mb-8 lg:mb-0 order-1 lg:order-2 lg:w-1/2">
            <Image
              src="/images/doctors.png"
              alt="Sample"
              width={700} // Largest width (md:w-[700px]) specified explicitly
              height={500} // Largest height (md:h-[500px]) specified explicitly
              className="object-cover rounded-lg w-[250.77px] h-[157px] md:w-[500px] md:h-[350px] lg:w-[700px] lg:h-[500px]"
            />
          </div>
        </div>
      </div>

      <CallToAction />

      <TestimonialsSection />

      <FAQSection />
      <ContactUs />
    </div>
  );
}
