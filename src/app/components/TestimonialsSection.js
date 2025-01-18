/** @jsxImportSource react */
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const TestimonialsSection = () => {
  const testimonialsRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Testimonials Data
  const testimonialsData = [
    {
      name: "Ratik",
      feedback:
        "As an MBBS student in India, I was unsure about when to start preparing for medical residency in the US due to the complexity of the process. USDoc provided me with a clear understanding of the entire pathway, helping me create a detailed timeline for when to take exams, pursue US clinical experience and apply for residency. Their guidance was invaluable in making the process feel much more manageable",
      image: null,
      rating: 5,
    },
    {
      name: "Krishna",
      feedback:
        "During my internship year in MBBS, I was worried I had already missed the timeline to apply for US medical residency, but USDoc helped me align everything, from exam schedules to clinical experience, ensuring I stayed on track. Thanks to their guidance, I was able to apply for residency on time and stay confident throughout the process.",
      image: null,
      rating: 4,
    },
    {
      name: "Dharmil",
      feedback:
        "USDoc made the ECFMG certification process so much easier by guiding me through every step and ensuring I had all the required documents in place. Their support made what seemed like a daunting task much more straightforward and manageable.",
      image: null,
      rating: 5,
    },
    {
      name: "Het",
      feedback:
        "USDoc's interview preparation was incredibly helpful. Their tips boosted my confidence, and I felt fully prepared to answer all the questions during the interview. Thanks to their guidance, I was able to present myself effectively and make a strong impression.",
      image: null,
      rating: 4,
    },
    {
      name: "Prince",
      feedback:
        "USDoc helped me apply for USCE by guiding me through the entire process. They knew exactly when to apply for different programs and ensured that all the necessary documents were ready  and submitted on time. Thanks to their support, I was able to secure USCE positions at several hospitals of my preference",
      image: null,
      rating: 5,
    },
    {
      name: "Niharika",
      feedback:
        "The mentors at USDoc understand the struggles of IMGs and provide amazing support. They helped me with study strategies, USCE opportunities and application preparation. Thanks to their guidance, I felt confident throughout my residency journey.",
      image: null,
      rating: 5,
    },
    {
      name: "Tanmay",
      feedback:
        "US Doc helped me create a strong personal statement and navigate the complexities of my residency application. Their guidance helped me  highlight my strengths and experiences, making my application stand out. I couldn't have done it without their support.",
      image: null,
      rating: 4,
    },
    {
      name: "Ranvir",
      feedback:
        "US Doc helped me with my USMLE Step exam by providing a clear study plan. They shared their own experience and provided me with effective exam strategies and tips for both my revision and exam day. Their guidance helped me stay focused and I was able to achieve the score I aimed for.",
      image: null,
      rating: 5,
    },
    {
      name: "Zeel",
      feedback:
        "US Doc mentored me throughout my entire residency journey, from the USMLE step exam, application process to match day. Their support didn’t stop there - they continued to guide me post-match, offering lifelong mentorship as I navigated the transition into residency and beyond. I truly believe their ongoing support is invaluable.",
      image: null,
      rating: 5,
    },
    {
      name: "Dhiraj",
      feedback:
        "The US Doc was helpful in guiding me through the rank order list process and providing advice on visa matters. Their insights on how to strategically rank programs and navigate the visa application made the process easier. Thanks to their support, I was able to make well-informed decisions and secure a residency position.",
      image: null,
      rating: 5,
    },
  ];

  const backgroundColors = [
    "#FF6F61", // Red
    "#6B8E23", // Green
    "#1E90FF", // Blue
    "#FFD700", // Yellow
    "#FF69B4", // Pink
    "#8A2BE2", // Purple
    "#FFA500", // Orange
    "#A52A2A", // Brown
    "#00CED1", // Teal
    "#708090", // Slate Gray
  ];

  const totalTestimonials = testimonialsData.length;
  const totalPages = Math.ceil(totalTestimonials / (isMobile ? 1 : 3)); // Adjust testimonials per page dynamically

  const scrollTestimonials = (pageIndex) => {
    const container = testimonialsRef.current;
    if (!container) return;

    const testimonialWidth = container.firstChild.offsetWidth;
    const scrollAmount = testimonialWidth * pageIndex;

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });

    setCurrentPage(pageIndex);
  };

  const handleScroll = () => {
    const container = testimonialsRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const testimonialWidth = container.firstChild.offsetWidth;

    const newPageIndex = Math.round(scrollLeft / testimonialWidth);
    setCurrentPage(newPageIndex);
  };

  const updateLayout = () => {
    const isMobileScreen = window.innerWidth <= 768;
    setIsMobile(isMobileScreen);
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);

    const container = testimonialsRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("resize", updateLayout);
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <section className="relative bg-[#FFEEF1] py-12 px-4 overflow-visible mt-16">
      <div className="container mx-auto relative overflow-visible">
        {/* Doctor Image */}
        <Image
          src="/images/vector-doctor.png"
          alt="Doctor Illustration"
          width={300}
          height={300}
          className="absolute top-[-125px] left-[-40px] w-[250px] z-20 md:w-[250px] lg:w-[250px] hidden md:block"
        />

        {/* Section Title */}
        <div className="flex items-center justify-center mb-8 relative">
          <h2
            className="text-2xl md:text-3xl font-bold text-blue-800"
            style={{
              fontFamily: "Mulish",
            }}
          >
            What Our Students Say
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 -ms-8 items-center justify-center hidden md:flex">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-[150px] h-1 bg-red-500"></div>
            </div>
          </h2>
          <Image
            src="/images/animated-heart.png"
            alt="Heart Icon"
            width={80}
            height={70}
            className="w-18 h-16 ms-2 md:ms-4 hidden md:block"
          />
        </div>

        <div className="relative flex">
          {/* Testimonials Section */}
          <div
            ref={testimonialsRef}
            className="flex overflow-x-auto space-x-4 snap-x snap-mandatory px-4 md:px-0"
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-6 rounded-lg snap-center shadow-2xl"
                style={{
                  minWidth: isMobile
                    ? "calc(100% - 15%)"
                    : "calc(33.333% - 16px)",
                  width: isMobile ? "calc(100% - 15%)" : "calc(33.333% - 16px)",
                  maxWidth: "400px",
                }}
              >
                {/* Placeholder Profile or User Image */}
                <div
                  className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center text-white text-xl font-bold`}
                  style={{
                    backgroundColor: testimonial.image
                      ? "transparent"
                      : backgroundColors[index % backgroundColors.length],
                  }}
                >
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    testimonial.name.charAt(0).toUpperCase()
                  )}
                </div>

                {/* User Name */}
                <h3
                  className="text-lg font-bold text-gray-800"
                  style={{
                    fontFamily: "Manrope",
                  }}
                >
                  {testimonial.name}
                </h3>

                {/* Feedback */}
                <p
                  className="text-gray-600 text-center text-sm my-4"
                  style={{
                    fontFamily: "Manrope",
                  }}
                >
                  {testimonial.feedback}
                </p>

                {/* Rating */}
                <p className="text-black font-medium">
                  {`${testimonial.rating}.0/5.0 rating`} ⭐⭐⭐⭐⭐
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => scrollTestimonials(i)}
              className={`h-3 w-3 mx-1 rounded-full transition-colors duration-300 ${
                i === currentPage ? "bg-blue-600" : "bg-gray-400"
              }`}
              aria-label={`Go to section ${i + 1}`}
            />
          ))}
        </div>

        {/* Right-Side Image */}
        <Image
          src="/images/testimotial-design.png"
          alt="Double Quotes"
          width={200}
          height={200}
          className="absolute right-[-15px] top-[-100px] w-[100px] md:w-[120px] lg:w-[150px] z-20"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
