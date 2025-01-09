/** @jsxImportSource react */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const JOBFAQSection = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/Contact-us");
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Am I eligible?",
      answer: "Anyone who has done MBBS, MD, MS, BDS, MDS, are eligible.",
    },
    {
      question: "How long does it take to get the documentation process done?",
      answer:
        "It varies by state and individual case but typically takes 6 months to 1 year after submitting all documents.",
    },
    {
      question:
        "What is the difference between Approbation and Berufserlaubnis?",
      answer:
        "Approbation is a permanent medical license valid throughout Germany. Berufserlaubnis is a temporary license, often valid for up to 2 years and limited to a specific state.",
    },
    {
      question: "Can I work as a doctor while waiting for Approbation?",
      answer:
        "You can work with a Berufserlaubnis (temporary license), usually for up to 2 years, but only in the state where it was issued.",
    },
    {
      question: "Is parental leave available for doctors?",
      answer:
        "Yes, Germany offers up to 14 months of parental leave, which can be shared between both parents. Financial support is also provided during this period.",
    },
  ];

  return (
    <div className="w-full py-12 px-4 md:px-12">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          {/* <h2 className="text-3xl font-bold text-blue-900 mb-2">
          </h2> */}
          <p
            className="text-[22px] font-[700] leading-[33px] text-blue-800 md:text-[40px] md:font-[700] md:leading-[60px]"
            style={{
              fontFamily: "Nunito",
            }}
          >
            Frequently Asked Questions
          </p>
          {/* Needle Border Effect */}
          <div className="relative mt-2 mb-4 mx-auto md:mx-0 md:block hidden">
            {/* Left side circle (needle part) */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#DC143B]"></div>

            {/* Straight line part */}
            <div className="w-[228px] h-1 bg-[#DC143B]"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left Section */}
          <div className="hidden h-[350px] md:block md:w-1/3 bg-white p-6 rounded-lg border-[1px] border-gray-300">
            <div className="flex flex-col items-center text-center">
              {/* Icon Placeholder */}
              <svg
                width="78"
                height="73"
                viewBox="0 0 78 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3411 60.2287L0.0175781 72.8047V0.207031H77.2246V60.2287H15.3411Z"
                  fill="#6D6D6D"
                />
              </svg>

              <h3
                className="text-md font-bold text-black my-6"
                style={{
                  fontFamily: "Nunito",
                }}
              >
                Do you have more questions?
              </h3>
              <p
                className="text-gray-600 mb-6"
                style={{
                  fontFamily: "Nunito",
                }}
              >
                End-to-end payments and financial management in a single
                solution. Meet the right platform to help realize.
              </p>
              <button
                className="px-6 py-2 bg-[#004AAB] text-white rounded-lg shadow-md hover:bg-white border-2 border-[#004AAB] hover:text-[#004AAB] transition-all"
                style={{
                  fontFamily: "Nunito",
                }}
                onClick={handleClick}
              >
                Send Mail
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-2/3 w-full">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-300 pb-4">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-medium text-black text-bold">
                      {faq.question}
                    </h3>
                    <button
                      className="text-blue-800 text-xl"
                      aria-label="Toggle Answer"
                    >
                      {activeIndex === index ? "×" : "+"}
                    </button>
                  </div>
                  {activeIndex === index && (
                    <p className="text-gray-500 mt-2 text-sm">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JOBFAQSection;
