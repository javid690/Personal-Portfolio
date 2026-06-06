import React from "react";
import banner from "../assets/me.png";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaWordpress, FaBootstrap } from "react-icons/fa";
import { SiElementor, SiRedux } from "react-icons/si";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
const About = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-[#E34F26]" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-[#1572B6]" },
    { name: "JavaScript", icon: <FaJs />, color: "text-[#F7DF1E]" },
    { name: "React", icon: <FaReact />, color: "text-[#61DAFB]" },
    { name: "GitHub", icon: <FaGithub />, color: "text-[#181717]" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#38BDF8]" },
    { name: "WordPress", icon: <FaWordpress />, color: "text-[#21759B]" },
    { name: "Elementor", icon: <SiElementor />, color: "text-[#92003B]" },
    { name: "Custom ERP", icon: <MdOutlineIntegrationInstructions />, color: "text-[#FF6B35]" },
    { name: "Redux", icon: <SiRedux />, color: "text-[#764ABC]" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "text-[#7952B3]" },
  ];
  return (
    <section id="about" className="py-20 px-6 lg:px-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: Text Content (8 Columns) */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h2 className="text-wine-accent font-bold accent-text text-3xl md:text-4xl font-bold tracking-widest uppercase mb-4 drop-shadow-[0_0_10px_rgba(230,0,109,0.3)]">
              ABOUT ME
            </h2>
            <div className="h-1 w-20 bg-wine-accent rounded-full"></div>
          </div>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
            <p>
              I am a passionate{" "}
              <span className="text-white font-semibold">
                Front End Developer
              </span>{" "}
              with a love for building clean and responsive websites.
            </p>
            <p>
              I specialize in turning design concepts into fully functional and
              user-friendly interfaces, focusing on modern web design and
              interactive experiences.
            </p>
            <p className="border-l-4 border-wine-accent/50 pl-4 italic bg-white/5 py-4 rounded-r-xl">
              "Turning ideas into reality with pixel-perfect design and seamless
              digital experiences."
            </p>
          </div>

          {/* Skills 3D Grid */}
          <div className="pt-6">
            <h3 className="text-white text-xl font-bold mb-6">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-3 transition-all duration-300 hover:-translate-y-2 hover:bg-wine-card/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] cursor-default overflow-hidden"
                >
                  {/* 3D Glow Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-wine-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <span
                    className={`text-3xl ${skill.color} drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]`}
                  >
                    {skill.icon}
                  </span>
                  <span className="text-gray-200 font-medium tracking-wide">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Premium Image Frame (5 Columns) */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative group">
            {/* The Image "Tape" Effect like Screenshot */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/10 backdrop-blur-md rotate-[-2deg] z-20 border border-white/5"></div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/10 backdrop-blur-md rotate-[3deg] z-20 border border-white/5"></div>

            {/* Frame Background */}
            <div className="bg-[#1a020d] p-3 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
              {/* Animated Glow Border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-wine-accent/40 via-transparent to-wine-accent/40 opacity-50"></div>

              <img
                src={banner}
                alt="About Me"
                className="relative z-10 w-full max-w-[320px] rounded-[2rem] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Background Decorative Circle */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-wine-accent/20 rounded-full blur-[80px] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
