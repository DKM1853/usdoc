import ImageSection from "../components/ImageSection";
import InYourHomeCountry from "../components/InYourHomeCountry";
import JOBFAQSection from "../components/JobFAQSection";
import RecruitmentServices from "../components/RecruitmentServices";

export const metadata = {
  title: "Transforming medical careers- ambition to vision, vision to results",
  description:
    "UsDoc crafts fluent career pathways for doctors seeking approbation and growth in Germany, with end-to-end consultancy and seamless guidance. Bridging the career gap for international doctors by offering a clear, guided pathway to approbation and thriving medical success in Germany.",
  keywords: "About UsDoc, Medical Professionals in Europe, UsDoc Services",
  openGraph: {
    title:
      "Transforming medical careers- ambition to vision, vision to results",
    description:
      "UsDoc crafts fluent career pathways for doctors seeking approbation and growth in Germany, with end-to-end consultancy and seamless guidance. Bridging the career gap for international doctors by offering a clear, guided pathway to approbation and thriving medical success in Germany.",
    url: "https://UsDoc.in/Career",
    siteName: "UsDoc",
    locale: "en_US",
    type: "website",
  },
};

export default function Job() {
  return (
    <div>
      <ImageSection />
      <RecruitmentServices />
      {/* <InYourHomeCountry /> */}
      <JOBFAQSection />
    </div>
  );
}
