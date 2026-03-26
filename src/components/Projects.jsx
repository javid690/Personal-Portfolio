import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Website",
      desc: "Modern e-commerce app built with React, featuring dynamic UI and smooth user experience.",
      img: project1,
      skills: ["React", "CSS", "Tailwind"],
      github: "https://github.com/javid690/ecommerce-react-store",
      live: "https://uomoecommerce.netlify.app/",
    },
    {
      id: 2,
      title: "JS Storefront",
      desc: "E-commerce website built with pure JavaScript, focusing on core logic and DOM manipulation.",
      img: project2,
      skills: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/javid690/E-commerce-Project",
      live: "https://e-commerce-project-ten-olive.vercel.app/",
    },
    {
      id: 3,
      title: "Odoo Custom ERP",
      desc: "E-commerce website built on Odoo with custom code for enhanced design and functionality.",
      img: project3,
      skills: ["Odoo", "HTML", "JavaScript"],
      github: "#",
      live: "https://erp.gumovastrecha.cz/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Centered */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="accent-text text-4xl md:text-5xl font-bold tracking-tight uppercase">
            My Projects
          </h2>
          <div className="h-1.5 w-24 bg-[#e6006d] mx-auto rounded-full shadow-[0_0_15px_#e6006d]"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg pt-4 leading-relaxed">
            A showcase of my recent projects demonstrating expertise in
            full-stack development, modern UI/UX design, and creative
            problem-solving.
          </p>
        </div>

        {/* 3D Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#5c0931]/20 border border-white/10 rounded-[2.5rem] p-6 transition-all duration-500 hover:-translate-y-4 hover:bg-[#5c0931]/40 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] cursor-default overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e6006d] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Project Image Container */}
              <div className="relative overflow-hidden rounded-2xl mb-6 shadow-xl">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-[200px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <p className="text-white font-bold text-sm tracking-widest uppercase">
                    View Details
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 text-center">
                <h3 className="text-white text-2xl font-bold tracking-wide group-hover:text-[#e6006d] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed h-12 overflow-hidden">
                  {project.desc}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap justify-center gap-2 py-4 border-y border-white/5">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase font-bold text-gray-300 bg-white/5 px-3 py-1 rounded-full border border-white/10 group-hover:border-[#e6006d]/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-2.5 rounded-xl border border-white/10 text-sm font-bold transition-all active:scale-95"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#c1035c] hover:bg-[#e6006d] text-white py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_0_15px_rgba(193,3,92,0.4)] hover:shadow-[0_0_25px_rgba(193,3,92,0.6)] active:scale-95"
                  >
                    <FaExternalLinkAlt className="text-[12px]" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
