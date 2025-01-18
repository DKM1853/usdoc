/** @jsxImportSource react */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // `usePathname` replaces `useRouter`
import Image from "next/image";
import { Inter } from "next/font/google";

// Initialize Inter font at the module level
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("");

  // Get the current path using usePathname
  const currentRoute = usePathname();

  useEffect(() => {
    // Map routes to page names
    const matchingPage = {
      "/": "Home",
      "/Pathway": "Pathway",
      "/Our-Services": "Our Services",
      "/Contact-us": "Contact us",
      // "/blog": "Blog",
    }[currentRoute];

    if (matchingPage) {
      setActivePage(matchingPage);
    }
  }, [currentRoute]);

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-30 bg-white shadow-md">
      {/* Top Bar (Logo Centered for Desktop) */}
      <div className="hidden lg:flex justify-center items-center py-2 border-b border-gray-200">
        <Link href="/" passHref>
          <Image
            src="/images/US DOC.png"
            alt="Logo"
            width={300} // Corresponds to h-12 (12 * 4 = 48px)
            height={150} // Adjust height for your logo
            className="h-12 cursor-pointer"
          />
        </Link>
      </div>

      {/* Bottom Bar (Navigation Links for Desktop) */}
      <div className="hidden lg:flex justify-center items-center py-2">
        {[
          { name: "Home", url: "/" },
          { name: "Pathway", url: "/Pathway" },
          { name: "Our Services", url: "/Our-Services" },
          { name: "Contact us", url: "/Contact-us" },
          // { name: "Blog", url: "/blog" },
        ].map(({ name, url }) => (
          <Link key={name} href={url}>
            <span
              className={`mx-4 text-md font-medium relative cursor-pointer ${
                inter.className
              } ${
                activePage === name
                  ? "text-[#DC143B]"
                  : "text-gray-700 hover:text-[#DC143B]"
              }`}
            >
              {name}
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile View: Logo and Hamburger Menu */}
      <div className="lg:hidden flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" passHref>
          <Image
            src="/images/US DOC.png"
            alt="Logo"
            width={200} // Adjust width for mobile
            height={150} // Adjust height for mobile
            className="h-10"
          />
        </Link>

        {/* Hamburger Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-900 text-2xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white text-gray-800 shadow-lg absolute top-full left-0 right-0 text-[#004AAB]">
          {[
            { name: "Home", url: "/" },
            { name: "Pathway", url: "/Pathway" },
            { name: "Our Services", url: "/Our-Services" },
            { name: "Contact us", url: "/Contact-us" },
            // { name: "Blog", url: "/blog" },
          ].map(({ name, url }) => (
            <Link key={name} href={url} passHref>
              <div
                onClick={() => {
                  setActivePage(name);
                  setIsOpen(false); // Close menu after clicking
                }}
                className={`block py-2 px-4 text-center cursor-pointer ${
                  inter.className
                } ${
                  activePage === name
                    ? "text-[#004AAB] bg-gray-100 rounded border border-[#004AAB]"
                    : "hover:text-[#0077B6] hover:bg-[#f0f8ff]"
                }`}
              >
                {name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
