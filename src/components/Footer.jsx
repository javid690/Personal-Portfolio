import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto">
        {/* Decorative Line */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright Text */}
          <div className="text-gray-400 text-sm font-medium tracking-wide order-2 md:order-1">
            © {currentYear}{" "}
            <span className="text-white font-bold">Javid Rahman</span>. All
            Rights Reserved.
          </div>

          {/* Center Brand / Signature */}
          <div className="group cursor-default order-1 md:order-2">
            <h2 className="text-xl font-black tracking-tighter text-white transition-all duration-500 group-hover:tracking-[0.2em]">
              JAV <span className="text-[#e6006d]">ID.</span>
            </h2>
          </div>

          {/* Made With Love Section */}
          <div className="flex items-center gap-2 text-gray-400 text-sm order-3">
            <span>Made with</span>
            <FaHeart className="text-[#e6006d] animate-pulse" />
            <span>
              by{" "}
              <span className="text-white border-b border-[#e6006d]/30 hover:border-[#e6006d] transition-all cursor-pointer">
                Javid Rahman
              </span>
            </span>
          </div>
        </div>

        {/* Bottom Small Glow */}
        <div className="flex justify-center mt-8">
          <div className="h-1 w-20 bg-[#e6006d]/20 blur-md rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
