import React, { useState, useEffect } from "react";
import { FaUserCircle, FaFolderOpen, FaCode } from "react-icons/fa";
import { RiFolderUserLine, RiContactsBook3Fill } from "react-icons/ri";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", icon: <FaUserCircle />, id: "home" },
    { name: "About", icon: <RiFolderUserLine />, id: "about" },
    { name: "Projects", icon: <FaFolderOpen />, id: "projects" },
    { name: "Services", icon: <FaCode />, id: "services" },
    { name: "Contact", icon: <RiContactsBook3Fill />, id: "contact" },
  ];

  // --- Scroll Observer ---
  useEffect(() => {
    const observers = [];

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveTab(link.name);
            }
          });
        },
        {
          threshold: 0.4, // Section 40% visible ho tab active ho
          rootMargin: "-80px 0px 0px 0px", // Navbar height ka offset
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    // Cleanup
    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // --- Scroll Function ---
  const scrollToSection = (id, name) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveTab(name);
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:py-8 flex justify-center">
      {/* 1. Desktop Navbar */}
      <nav className="hidden md:block bg-[#5c0931]/30 backdrop-blur-lg border border-white/5 px-3 py-2 rounded-full shadow-2xl">
        <ul className="flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <li
              key={link.name}
              onClick={() => scrollToSection(link.id, link.name)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-500 cursor-pointer select-none ${activeTab === link.name
                ? "bg-[#c1035c] text-white shadow-[0_0_20px_rgba(193,3,92,0.6)] scale-105"
                : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="text-sm font-semibold tracking-wide">
                {link.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>

      {/* 2. Mobile Navbar Header */}
      <div className="md:hidden flex justify-between items-center w-full max-w-[500px] bg-[#5c0931]/40 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/10">
        <span className="text-white font-bold tracking-widest text-3xl uppercase">
          JR
        </span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-3xl"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* 3. Mobile Dropdown Menu */}
      <div
        className={`absolute top-24 left-4 right-4 bg-[#3b031d] border border-white/10 rounded-3xl p-4 transition-all duration-300 md:hidden shadow-2xl ${isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10 pointer-events-none"
          }`}
      >
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <li
              key={link.name}
              onClick={() => scrollToSection(link.id, link.name)}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all cursor-pointer ${activeTab === link.name
                ? "bg-[#c1035c] text-white"
                : "text-gray-400 active:bg-white/5"
                }`}
            >
              <span className="text-2xl">{link.icon}</span>
              <span className="text-lg font-medium">{link.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;