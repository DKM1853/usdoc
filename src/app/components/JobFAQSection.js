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
      question: "Am I eligible to take the USMLE exams?",
      answer:
        "Yes, you are eligible to take the USMLE exams if you are officially enrolled in a medical school listed in the World Directory of Medical School (WDOMS) and recognized by Educational Commission for Foreign Medical Graduates (ECFMG)",
    },
    {
      question: "How much does the entire USMLE process cost?",
      answer:
        "Total cost: $15,000–$30,000, depending on travel, clinical experience, and application fees.",
    },
    {
      question: "What are the IMG friendly specialties?",
      answer:
        "Consider specialties like Internal medicine, Family medicine, Pediatrics, Neurology and Psychiatry, which are welcoming to IMGs.",
    },
    {
      question: "When should I start preparing for the USMLE exams?",
      answer:
        "● Ideally, start preparing for USMLE Step 1 during your 3rd or 4th year of MBBS when you are studying basic sciences.\n" +
        "● Step 2 CK preparation can begin during the final year or after graduation.\n" +
        "● Plan 6–12 months of dedicated study time for each exam.",
    },
    {
      question:
        "What is a minimum USMLE Step 1 and Step 2 CK score for residency?",
      answer:
        "● Minimum score for step-1: pass/fail (197/280 is probable score required to pass)\n" +
        "● Minimum score for step-2: 214 \n" +
        "● Aim for scores above 240 to maximize your chances.",
    },
    {
      question:
        "How important is US Clinical Experience (USCE) for residency applications?",
      answer: (
        <div>
          <p>● USCE is crucial for IMGs to:</p>
          <div className="ml-4">
            <p>○ Gain familiarity with the US healthcare system.</p>
            <p>○ Secure strong LoRs from US-based physicians.</p>
            <p>○ Improve chances of matching into IMG-friendly programs.</p>
          </div>
          <p>● Observerships, externships, and electives all count as USCE.</p>
        </div>
      ),
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
            <div
              className="space-y-4"
              style={{
                fontFamily: "Nunito",
              }}
            >
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
                    <div
                      className="text-gray-500 mt-2 text-sm"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {faq.answer}
                    </div>
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
