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
      name: "Vansh",
      feedback:
        "I always dreamed of practicing medicine in Germany, but the complex licensing process seemed impossible to tackle alone. EuroDoc's team provided step-by-step guidance and made the entire journey smooth and stress-free. Today, I’m living my dream!",
      image: null,
      rating: 5,
    },
    {
      name: "Rajat",
      feedback:
        "Relocating abroad for my postgraduate medical studies felt daunting, but EuroDoc took care of everything—from documentation to cultural adaptation tips. I’m grateful for their personalized support and expert advice.",
      image: null,
      rating: 4,
    },
    {
      name: "Parth",
      feedback:
        "Thanks to EuroDoc, I secured my Approbation without any hassles. Their knowledge of German medical systems and legal requirements is unparalleled. I couldn’t have done it without them!",
      image: null,
      rating: 5,
    },
    {
      name: "Sahil",
      feedback:
        "EuroDoc is more than a consultancy; they are a partner in your success. From tailoring my CV to preparing me for interviews, they made sure I was confident at every step. Highly recommend their services!",
      image: null,
      rating: 4,
    },
    {
      name: "Hemant",
      feedback:
        "I was overwhelmed with the idea of moving to Europe for work, but EuroDoc’s relocation assistance was phenomenal. They made my transition seamless, from visa approvals to finding housing.",
      image: null,
      rating: 5,
    },
    {
      name: "Jayraj",
      feedback:
        "EuroDoc’s career counseling helped me understand my options and align my goals with opportunities in Germany. Their insights were invaluable, and now I’m thriving in my new role.",
      image: null,
      rating: 5,
    },
    {
      name: "Pratik",
      feedback:
        "After completing my MBBS, I wasn’t sure if I could pursue my postgraduate studies abroad. EuroDoc not only showed me the path but walked it with me. Their guidance is unmatched.",
      image: null,
      rating: 4,
    },
    {
      name: "Siddharth",
      feedback:
        "I never imagined the licensing process in Germany could be so straightforward. EuroDoc’s detailed roadmap and constant support made it possible for me to practice as a licensed doctor here.",
      image: null,
      rating: 5,
    },
    {
      name: "Kumkum",
      feedback:
        "Their relocation support is a lifesaver! EuroDoc helped me with every little detail, from paperwork to settling in. I can’t thank them enough for making my dream of working in Europe a reality.",
      image: null,
      rating: 5,
    },
    {
      name: "Himani",
      feedback:
        "The team at EuroDoc genuinely cares about your success. Their expertise in medical career placements helped me land my first job in Germany. They’re the best at what they do!",
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
