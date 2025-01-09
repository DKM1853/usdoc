import ContactHeroSection from "../components/ContactHeroSection";
import ContactUs from "../components/ContactUs";

export const metadata = {
  title: "Get in touch with Us",
  description: "Contact Eurodoc now and counsel with experts",
  keywords: "About Eurodoc, Medical Professionals in Europe, Eurodoc Services",
  openGraph: {
    title: "Get in touch with Us",
    description: "Contact Eurodoc now and counsel with experts",
    url: "https://eurodoc.in/Contact-us",
    siteName: "Eurodoc",
    locale: "en_US",
    type: "website",
  },
};

export default function Contact() {
  return (
    <div>
      <ContactHeroSection />
      <ContactUs />
    </div>
  );
}
