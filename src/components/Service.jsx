import React from "react";
import {
  FaCode,
  FaReact,
  FaPalette,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Service = () => {
  const services = [
    {
      title: "Front-End Development",
      description:
        "Building modern and responsive websites using HTML, CSS, and JS with clean code.",
      icon: <FaCode />,
      iconColor: "#3b82f6", // Blue
    },
    {
      title: "React Development",
      description:
        "Creating dynamic and scalable web applications using React with smooth UX.",
      icon: <FaReact />,
      iconColor: "#61dbfb", // React Cyan
    },
    {
      title: "UI Implementation",
      description:
        "Turning design concepts into pixel-perfect and user-friendly interfaces.",
      icon: <FaPalette />,
      iconColor: "#e6006d", // Your Theme Pink
    },
    {
      title: "Tailwind CSS",
      description:
        "Designing fast and responsive layouts using Tailwind CSS with clean styling.",
      icon: <SiTailwindcss />,
      iconColor: "#38bdf8", // Tailwind Sky
    },
    {
      title: "WordPress / Elementor",
      description:
        "Building professional websites using WordPress and Elementor with custom layouts.",
      icon: <FaWordpress />,
      iconColor: "#21759b", // WordPress Blue
    },
    {
      title: "GitHub & Version Control",
      description:
        "Managing code using GitHub with proper version control and collaboration.",
      icon: <FaGithub />,
      iconColor: "#ffffff", // White
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header - Centered */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="accent-text text-4xl md:text-5xl font-extrabold tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(230,0,109,0.3)]">
            Our Features & Services
          </h2>
          <div className="h-1.5 w-32 bg-[#e6006d] mx-auto rounded-full shadow-[0_0_20px_#e6006d]"></div>
        </div>

        {/* 3D Glassmorphism Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#5c0931]/10 backdrop-blur-xl border border-white/5 p-8 rounded-[3rem] transition-all duration-700 hover:-translate-y-4 hover:bg-[#5c0931]/25 hover:border-[#e6006d]/40 cursor-default shadow-2xl"
            >
              {/* Floating Icon Container */}
              <div
                className="w-24 h-24 mx-auto mb-8 rounded-[2rem] bg-[#3b031d] border border-white/10 flex items-center justify-center text-5xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-[15deg] group-hover:border-[#e6006d]/50"
                style={{ boxShadow: `inset 0 0 20px ${service.iconColor}20` }} // Subtle inner glow
              >
                {/* Specific Icon Color Applied Directly */}
                <span
                  style={{ color: service.iconColor }}
                  className="drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_20px_currentColor] transition-all duration-500"
                >
                  {service.icon}
                </span>
              </div>

              {/* Text Content */}
              <div className="text-center space-y-4">
                <h3 className="text-white text-2xl font-bold tracking-wide group-hover:text-[#e6006d] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed h-16 overflow-hidden group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Glowing Bottom Bar */}
              <div className="mt-8 flex justify-center items-center gap-1.5 opacity-30 group-hover:opacity-100 transition-opacity duration-700">
                <div className="h-1 w-10 bg-[#e6006d] rounded-full"></div>
                <div className="h-1 w-2 bg-[#e6006d] rounded-full"></div>
              </div>

              {/* Hover Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#e6006d]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-[3rem] transition-opacity duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
