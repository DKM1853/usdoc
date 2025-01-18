import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import HelpButton from "./components/HelpButton";
import Popup from "./components/Popup";
import {
  Nunito,
  Poppins,
  Mulish,
  Nunito_Sans,
  Manrope,
  Montserrat,
  Inter,
} from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify font weights
});

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights if needed
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "700"], // Add weights if needed
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "UsDoc",
  description: "UsDoc helps users achieve medical goals in Europe",
  icons: {
    icon: "/small-logo.png", // Place the favicon in the `public` folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} ${poppins.className} ${mulish.className} ${nunitoSans.className} ${manrope.className} ${montserrat.className} ${inter.className}`}
      >
        <Popup />
        <Navbar /> {/* Shared Navbar */}
        <main>{children}</main> {/* Dynamic content based on route */}
        <HelpButton />
        <Footer />
      </body>
    </html>
  );
}
