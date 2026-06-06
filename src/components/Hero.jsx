import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import banner from "../assets/me.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen  flex items-center justify-center pt-28  pb-10 px-6 lg:px-0"
    >
      <div className="max-w-6xl  w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
          <div className="inline-block text-blue-200 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-wine-accent text-sm font-medium backdrop-blur-sm">
            Open to Work
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Hi, I'm <span className="text-wine-accent">Javid Rahman</span>
          </h1>

          <h3 className="text-2xl md:text-3xl font-semibold text-gray-300">
            Frontend Developer
          </h3>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Crafting modern, responsive websites with clean code and
            pixel-perfect design. Passionate about building user-friendly
            interfaces and turning ideas into reality.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
            <button className="flex cursor-pointer items-center gap-2 bg-[#c1035c] hover:bg-[#e6006d] text-white px-8 py-3 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(193,3,92,0.4)] hover:shadow-[0_0_30px_rgba(193,3,92,0.6)]">
              <FaEnvelope /> Hire Me
            </button>
            <button
              onClick={() => window.open("/cv1.pdf", "_blank")}
              className="flex cursor-pointer items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-3 rounded-xl font-bold transition-all"
            >
              <FaDownload /> Download CV
            </button>
          </div>

          {/* Social Icons */}
          <div className="pt-8 space-y-4">
            <h4 className="text-sm uppercase tracking-[0.2em] text-gray-500 font-bold">
              Follow Me
            </h4>
            <div className="flex gap-5 justify-center lg:justify-start">
              {[
                { icon: <FaGithub />, link: "https://github.com/javid690" },
                { icon: <FaSquareXTwitter />, link: "#" },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/javid-rahman-dev190/",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/codes_271/",
                },
              ].map((social, index) => (
                <a
                  target="_blank"
                  key={index}
                  href={social.link}
                  className="text-2xl text-gray-400 hover:text-wine-accent transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Banner Image */}
        <div className="order-1 lg:order-2 flex justify-center items-center relative">
          {/* Background Glow Effect */}
          <div className="absolute w-64 h-64 bg-wine-accent/30 rounded-full blur-[100px] -z-10"></div>

          <div className="relative p-2 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-sm overflow-hidden shadow-2xl">
            <img
              src={banner}
              alt="banner"
              className="w-full max-w-[350px] md:max-w-[450px] rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
