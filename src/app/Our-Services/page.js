import CallToAction from "../components/CallToAction";
import IntegratedProgram from "../components/IntegratedProgram";
import ProgramFeatures from "../components/ProgramFeatures";
import WhyUs from "../components/WhyUs";
import GetInTouch from "../components/GetInTouch";

export const metadata = {
  title: "Excel in your medical pathway with our programs",
  description:
    "Our Excellence Program offers expert mentorship, including document translation and FSP preparation, to simplify a successful medical career in Germany.",
  keywords: "About Eurodoc, Medical Professionals in Europe, Eurodoc Services",
  openGraph: {
    title: "Excel in your medical pathway with our programs",
    description:
      "Our Excellence Program offers expert mentorship, including document translation and FSP preparation, to simplify a successful medical career in Germany.",
    url: "https://eurodoc.in/Contact-us",
    siteName: "Eurodoc",
    locale: "en_US",
    type: "website",
  },
};

export default function FirstPage() {
  return (
    <div className="Home">
      {/* <IntegratedProgram /> */}
      <WhyUs />
      <ProgramFeatures />
      <CallToAction />
      <GetInTouch />
    </div>
  );
}
