/** @jsxImportSource react */
"use client";

import Image from "next/image";

const WhyUs = () => {
  return (
    <div>
      <div className="w-full px-4 bg-white sm:py-8 md:py-12 mt-[80px] ">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Side: Image */}
          <div className="flex-1 mt-6">
            <div
              className="relative w-full"
              style={{ maxWidth: "525px", height: "auto" }}
            >
              <Image
                src="/images/doctor-group.png"
                alt="Doctors illustration"
                width={525} // Default width for desktop
                height={500} // Default height for desktop
                layout="intrinsic" // Keeps original aspect ratio
                className="rounded-lg xl:ml-32 object-cover" // Apply object-cover to maintain cover behavior
                sizes="(max-width: 768px) 305px, 525px"
              />
            </div>
            <style jsx>{`
              @media (max-width: 768px) {
                .next-image {
                  max-width: 305px;
                  height: 290px !important;
                }
              }
            `}</style>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1">
            {/* Section Title */}
            <h2
              className="text-2xl font-bold text-[#004AAB] mb-6 md:text-4xl"
              style={{
                fontFamily: "Nunito",
              }}
            >
              Foundation and Planning{" "}
              <div className="relative mt-2 w-fit md:block hidden">
                <div className="flex items-center justify-center">
                  {/* Left Circular Part */}
                  <div className="w-4 h-4 rounded-full bg-[#DC143B]"></div>
                  {/* Straight Line */}
                  <div className="w-[250px] h-1 bg-[#DC143B]"></div>
                </div>
              </div>
            </h2>

            {/* Points */}
            <div className="space-y-6">
              {/* Point 1 */}
              <div>
                <h3
                  className="text-lg font-bold text-blue-800 mb-2"
                  style={{
                    fontFamily: "Poppins",
                  }}
                >
                  1. Assessment of Current Status:
                </h3>
                <div className="flex items-start border-l border-black">
                  {/* Vertical Line */}
                  <div className="w-[2px] bg-black h-auto mr-4"></div>

                  {/* Paragraph */}
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    ○ We will evaluate your knowledge base in basic sciences and
                    clinical skills.
                    <br />○ Help you Identify your strengths and areas that need
                    improvement.{" "}
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div>
                <h3
                  className="text-lg font-bold text-blue-800 mb-2"
                  style={{
                    fontFamily: "Poppins",
                  }}
                >
                  2. Create a Customized Study Plan:
                </h3>

                <div className="flex items-start border-l border-black">
                  {/* Vertical Line */}
                  <div className="w-[2px] bg-black h-auto mr-4"></div>

                  {/* Paragraph */}
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "Nunito",
                    }}
                  >
                    ○ Help you break down the preparation into manageable
                    milestones for Step 1, Step 2 CK, and Step 3.
                    <br />○ Set realistic timelines for each step based on your
                    current academic workload and personal circumstances.
                  </p>
                </div>
              </div>
              <div>
                <h3
                  className="text-lg font-bold text-blue-800 mb-2"
                  style={{
                    fontFamily: "Poppins",
                  }}
                >
                  3. Resource Recommendations:
                </h3>

                <div className="flex items-start border-l border-black">
                  {/* Vertical Line */}
                  <div className="w-[2px] bg-black h-auto mr-4"></div>

                  {/* Paragraph */}
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "Nunito",
                    }}
                  >
                    ○ Suggest the best study materials available.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 bg-white sm:py-8 md:py-12">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-8">
          {/* Right Side: Image */}
          <div className="flex-1 mt-6">
            <div
              className="relative w-full"
              style={{ maxWidth: "525px", height: "auto" }}
            >
              <Image
                src="/images/Guidance for step-1.svg"
                alt="Doctors illustration"
                width={525} // Default width for desktop
                height={500} // Default height for desktop
                layout="intrinsic" // Keeps original aspect ratio
                className="rounded-lg xl:ml-32 object-cover" // Apply object-cover to maintain cover behavior
                sizes="(max-width: 768px) 305px, 525px"
              />
            </div>
            <style jsx>{`
              @media (max-width: 768px) {
                .next-image {
                  max-width: 305px;
                  height: 290px !important;
                }
              }
            `}</style>
          </div>

          {/* Left Side: Content */}
          <div className="flex-1">
            {/* Section Title */}
            <h2
              className="text-2xl font-bold text-[#004AAB] mb-6 md:text-4xl"
              style={{
                fontFamily: "Nunito",
              }}
            >
              Guidance for USMLE Step 1{" "}
              <div className="relative mt-2 w-fit md:block hidden">
                <div className="flex items-center justify-center">
                  {/* Left Circular Part */}
                  <div className="w-4 h-4 rounded-full bg-[#DC143B]"></div>
                  {/* Straight Line */}
                  <div className="w-[250px] h-1 bg-[#DC143B]"></div>
                </div>
              </div>
            </h2>

            {/* Points */}
            <div className="space-y-6">
              {/* Point 1 */}
              <div>
                <h3
                  className="text-lg font-bold text-blue-800 mb-2"
                  style={{
                    fontFamily: "Poppins",
                  }}
                >
                  1. Conceptual Clarity:
                </h3>
                <div className="flex items-start border-l border-black">
                  {/* Vertical Line */}
                  <div className="w-[2px] bg-black h-auto mr-4"></div>

                  {/* Paragraph */}
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    ○ Provide guidance on mastering foundational subjects (e.g.,
                    anatomy, physiology, pathology).
                    <br />○ Emphasize high-yield topics frequently tested on
                    Step 1.{" "}
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div>
                <h3
                  className="text-lg font-bold text-blue-800 mb-2"
                  style={{
                    fontFamily: "Poppins",
                  }}
                >
                  2. Study Techniques:
                </h3>

                <div className="flex items-start border-l border-black">
                  {/* Vertical Line */}
                  <div className="w-[2px] bg-black h-auto mr-4"></div>

                  {/* Paragraph */}
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "Nunito",
                    }}
                  >
                    ○ We will teach effective strategies for active learning,
                    such as spaced repetition and question-based learning.
                    <br />○ Guide you in annotating First Aid effectively and
                    using flashcards like Anki.
                  </p>
                </div>
              </div>
              {/* Point 2 */}
              <div>
                <h3
                  className="text-lg font-bold text-blue-800 mb-2"
                  style={{
                    fontFamily: "Poppins",
                  }}
                >
                  3. Mock Testing:
                </h3>

                <div className="flex items-start border-l border-black">
                  {/* Vertical Line */}
                  <div className="w-[2px] bg-black h-auto mr-4"></div>

                  {/* Paragraph */}
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "Nunito",
                    }}
                  >
                    ○ Encourage frequent practice exams (NBME and UWorld
                    self-assessments) to track progress, identify weaknesses and
                    how to over come them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 bg-white sm:py-8 md:py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Side: Image */}
          <div className="flex-1 mt-6">
            <div
              className="relative w-full"
              style={{ maxWidth: "525px", height: "auto" }}
            >
              <Image
                src="/images/Guidance for step-2.svg"
                alt="Doctors illustration"
                width={525} // Default width for desktop
                height={500} // Default height for desktop
                layout="intrinsic" // Keeps original aspect ratio
                className="rounded-lg xl:ml-32 object-cover" // Apply object-cover to maintain cover behavior
                sizes="(max-width: 768px) 305px, 525px"
              />
            </div>
            <style jsx>{`
              @media (max-width: 768px) {
                .next-image {
                  max-width: 305px;
                  height: 290px !important;
                }
              }
            `}</style>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1">
            {/* Section Title */}
            <h2
              className="text-2xl font-bold text-[#004AAB] mb-6 md:text-4xl"
              style={{
                fontFamily: "Nunito",
              }}
            >
              Guidance for USMLE Step 2 CK{" "}
              <div className="relative mt-2 w-fit md:block hidden">
                <div className="flex items-center justify-center">
                  {/* Left Circular Part */}
                  <div className="w-4 h-4 rounded-full bg-[#DC143B]"></div>
                  {/* Straight Line */}
                  <div className="w-[250px] h-1 bg-[#DC143B]"></div>
                </div>
              </div>
            </h2>

            {/* Points */}
            <div className="space-y-6">
              {/* Point 1 */}
              <div>
                <h3
                  className="text-lg font-bold text-blue-800 mb-2"
                  style={{
                    fontFamily: "Poppins",
                  }}
                >
                  1. Clinical Knowledge Enhancement:
                </h3>
                <div className="flex items-start border-l border-black">
                  {/* Vertical Line */}
                  <div className="w-[2px] bg-black h-auto mr-4"></div>

                  {/* Paragraph */}
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    ○ We will help you understand clinical applications,
                    patient-centered scenarios and recommend strategies for
                    approaching clinical vignettes and multi-step questions.{" "}
                  </p>
                </div>
              </div>

              <div>
                <h3
                  className="text-lg font-bold text-blue-800 mb-2"
                  style={{
                    fontFamily: "Poppins",
                  }}
                >
                  2. Practice Tests:
                </h3>

                <div className="flex items-start border-l border-black">
                  {/* Vertical Line */}
                  <div className="w-[2px] bg-black h-auto mr-4"></div>

                  {/* Paragraph */}
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "Nunito",
                    }}
                  >
                    ○ Suggest regular use of Amboss and UWorld Qbanks,
                    emphasizing timed blocks for test-day simulation.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 bg-white sm:py-8 md:py-12">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-8">
          {/* Right Side: Image */}
          <div className="flex-1 mt-6">
            <div
              className="relative w-full"
              style={{ maxWidth: "525px", height: "auto" }}
            >
              <Image
                src="/images/Usce.svg"
                alt="Doctors illustration"
                width={525} // Default width for desktop
                height={500} // Default height for desktop
                layout="intrinsic" // Keeps original aspect ratio
                className="rounded-lg xl:ml-32 object-cover" // Apply object-cover to maintain cover behavior
                sizes="(max-width: 768px) 305px, 525px"
              />
            </div>
            <style jsx>{`
              @media (max-width: 768px) {
                .next-image {
                  max-width: 305px;
                  height: 290px !important;
                }
              }
            `}</style>
          </div>

          {/* Left Side: Content */}
          <div className="flex-1">
            {/* Section Title */}
            <h2
              className="text-2xl font-bold text-[#004AAB] mb-6 md:text-4xl"
              style={{
                fontFamily: "Nunito",
              }}
            >
              Clinical Experience (USCE){" "}
              <div className="relative mt-2 w-fit md:block hidden">
                <div className="flex items-center justify-center">
                  {/* Left Circular Part */}
                  <div className="w-4 h-4 rounded-full bg-[#DC143B]"></div>
                  {/* Straight Line */}
                  <div className="w-[250px] h-1 bg-[#DC143B]"></div>
                </div>
              </div>
            </h2>

            {/* Points */}
            <div className="space-y-6">
              {/* Point 1 */}
              <div>
                <h3
                  className="text-lg font-bold text-blue-800 mb-2"
                  style={{
                    fontFamily: "Poppins",
                  }}
                >
                  1. How to Apply:
                </h3>
                <div className="flex items-start border-l border-black">
                  {/* Vertical Line */}
                  <div className="w-[2px] bg-black h-auto mr-4"></div>

                  {/* Paragraph */}
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    ○ Assist you in identifying and applying for US clinical
                    electives, externships, and observerships. <br />○ Provide
                    guidance on crafting a compelling CV and cover letter.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div>
                <h3
                  className="text-lg font-bold text-blue-800 mb-2"
                  style={{
                    fontFamily: "Poppins",
                  }}
                >
                  2. Cultural Adaptation:
                </h3>

                <div className="flex items-start border-l border-black">
                  {/* Vertical Line */}
                  <div className="w-[2px] bg-black h-auto mr-4"></div>

                  {/* Paragraph */}
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "Nunito",
                    }}
                  >
                    ○ Offer advice on adapting to the US healthcare system,
                    communication styles, and professionalism.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 bg-white sm:py-8 md:py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Side: Image */}
          <div className="flex-1 mt-6">
            <div
              className="relative w-full"
              style={{ maxWidth: "525px", height: "auto" }}
            >
              <Image
                src="/images/Guidance residency.svg"
                alt="Doctors illustration"
                width={525} // Default width for desktop
                height={500} // Default height for desktop
                layout="intrinsic" // Keeps original aspect ratio
                className="rounded-lg xl:ml-32 object-cover" // Apply object-cover to maintain cover behavior
                sizes="(max-width: 768px) 305px, 525px"
              />
            </div>
            <style jsx>{`
              @media (max-width: 768px) {
                .next-image {
                  max-width: 305px;
                  height: 290px !important;
                }
              }
            `}</style>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1">
            {/* Section Title */}
            <h2
              className="text-2xl font-bold text-[#004AAB] mb-6 md:text-4xl"
              style={{
                fontFamily: "Nunito",
              }}
            >
              Guidance for Residency Applications
              <div className="relative mt-2 w-fit md:block hidden">
                <div className="flex items-center justify-center">
                  {/* Left Circular Part */}
                  <div className="w-4 h-4 rounded-full bg-[#DC143B]"></div>
                  {/* Straight Line */}
                  <div className="w-[250px] h-1 bg-[#DC143B]"></div>
                </div>
              </div>
            </h2>

            {/* Points */}
            <div className="space-y-6">
              {/* Point 1 */}
              <div>
                <h3
                  className="text-lg font-bold text-blue-800 mb-2"
                  style={{
                    fontFamily: "Poppins",
                  }}
                >
                  1. ECFMG Certification:
                </h3>
                <div className="flex items-start border-l border-black">
                  {/* Vertical Line */}
                  <div className="w-[2px] bg-black h-auto mr-4"></div>

                  {/* Paragraph */}
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    ○ Assist you in fulfilling the requirements, including
                    verification of credentials and completing Step 1 and Step 2
                    CK.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div>
                <h3
                  className="text-lg font-bold text-blue-800 mb-2"
                  style={{
                    fontFamily: "Poppins",
                  }}
                >
                  2. ERAS and Personal Statement:
                </h3>

                <div className="flex items-start border-l border-black">
                  {/* Vertical Line */}
                  <div className="w-[2px] bg-black h-auto mr-4"></div>

                  {/* Paragraph */}
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "Nunito",
                    }}
                  >
                    ○ Guide you through the ERAS application process, including
                    program selection and documentation.
                    <br />○ Help you draft and refine a compelling personal
                    statement tailored to your specialty.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div>
                <h3
                  className="text-lg font-bold text-blue-800 mb-2"
                  style={{
                    fontFamily: "Poppins",
                  }}
                >
                  3. Interview Preparation:
                </h3>

                <div className="flex items-start border-l border-black">
                  {/* Vertical Line */}
                  <div className="w-[2px] bg-black h-auto mr-4"></div>

                  {/* Paragraph */}
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "Nunito",
                    }}
                  >
                    ○ Conduct mock interviews focusing on common residency
                    questions.
                    <br />○ Advise on professionalism, communication skills, and
                    confidence-building.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 bg-white sm:py-8 md:py-12">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-8">
          {/* Right Side: Image */}
          <div className="flex-1 mt-6">
            <div
              className="relative w-full"
              style={{ maxWidth: "525px", height: "auto" }}
            >
              <Image
                src="/images/Emotional support.svg"
                alt="Doctors illustration"
                width={525} // Default width for desktop
                height={500} // Default height for desktop
                layout="intrinsic" // Keeps original aspect ratio
                className="rounded-lg xl:ml-32 object-cover" // Apply object-cover to maintain cover behavior
                sizes="(max-width: 768px) 305px, 525px"
              />
            </div>
            <style jsx>{`
              @media (max-width: 768px) {
                .next-image {
                  max-width: 305px;
                  height: 290px !important;
                }
              }
            `}</style>
          </div>

          {/* Left Side: Content */}
          <div className="flex-1">
            {/* Section Title */}
            <h2
              className="text-2xl font-bold text-[#004AAB] mb-6 md:text-4xl"
              style={{
                fontFamily: "Nunito",
              }}
            >
              Emotional and Motivational Support{" "}
              <div className="relative mt-2 w-fit md:block hidden">
                <div className="flex items-center justify-center">
                  {/* Left Circular Part */}
                  <div className="w-4 h-4 rounded-full bg-[#DC143B]"></div>
                  {/* Straight Line */}
                  <div className="w-[250px] h-1 bg-[#DC143B]"></div>
                </div>
              </div>
            </h2>

            {/* Points */}
            <div className="space-y-6">
              {/* Point 1 */}
              <div>
                <h3
                  className="text-lg font-bold text-blue-800 mb-2"
                  style={{
                    fontFamily: "Poppins",
                  }}
                >
                  1. Handling Stress and Burnout:
                </h3>
                <div className="flex items-start border-l border-black">
                  {/* Vertical Line */}
                  <div className="w-[2px] bg-black h-auto mr-4"></div>

                  {/* Paragraph */}
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "Nunito Sans",
                    }}
                  >
                    ○ Regularly check in on your progress and well-being.
                    <br />○ Encourage your mindfulness and work-life balance.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div>
                <h3
                  className="text-lg font-bold text-blue-800 mb-2"
                  style={{
                    fontFamily: "Poppins",
                  }}
                >
                  2. Inspiration
                </h3>

                <div className="flex items-start border-l border-black">
                  {/* Vertical Line */}
                  <div className="w-[2px] bg-black h-auto mr-4"></div>

                  {/* Paragraph */}
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "Nunito",
                    }}
                  >
                    ○ Sharing success stories, motivational strategies, and
                    practical tips from others who have succeeded as IMGs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
