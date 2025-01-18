import ContactHeroSection from "../components/ContactHeroSection";
import ContactUs from "../components/ContactUs";

export const metadata = {
  title: "Get in touch with Us",
  description: "Contact UsDoc now and counsel with experts",
  keywords: "About UsDoc, Medical Professionals in Europe, UsDoc Services",
  openGraph: {
    title: "Get in touch with Us",
    description: "Contact UsDoc now and counsel with experts",
    url: "https://UsDoc.in/Contact-us",
    siteName: "UsDoc",
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
