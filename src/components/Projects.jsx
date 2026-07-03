import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const Projects = () => {

  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "React", "JavaScript", "Odoo", "WordPress", "MERN Stack"];

  const projectsData = [
    {
      id: 0,
      title: "Odheyati — E-Commerce Qurbani Platform",
      desc: "Full-stack e-commerce platform built with Node.js, Express.js & React.js, enabling online ordering, payment processing, and delivery management",
      skills: ["Node.js", "React.js", "Express.js", "MongoDB"],
      category: "React",
      github: "#",
      live: "https://odheyati.com/",
    },
    {
      id: 1,
      title: "Real Estate Property Portal (UAE & Pakistan)",
      desc: "Propertians – A real estate marketplace built with Next.js (React), featuring dynamic property listings and search filters powered by a REST API",
      skills: ["Next.js (React Framework)", "React.js", "REST API Integration"],
      category: "React",
      github: "#",
      live: "https://www.propertians.com/ae/en",
    },
    {
      id: 2,
      title: "Enterprise Brand Experience Platform",
      desc: "Built a responsive company website using WordPress with custom HTML, CSS, and JavaScript for enhanced UI and user experience.",
      skills: ["Elementor", "HTML", "JavaScript"],
      category: "WordPress",
      github: "#",
      live: "https://tabsap.com/",
    },
    {
      id: 3,
      title: "Enterprise Management System (EMS)",
      desc: "A powerful enterprise management system built with React.js, Redux Toolkit, and Tailwind CSS for seamless business operations.",
      skills: ["React.js", "Redux Toolkit", "Tailwind CSS"],
      category: "React",
      github: "#",
      live: "http://ems.tabsap.com/",
    },
    {
      id: 4,
      title: "Modern MERN E-Commerce Platform ",
      desc: "Built a modern MERN Stack E-Commerce application featuring authentication, cart management, protected checkout, order tracking, and automated email notifications with responsive UI.",
      skills: ["Node.js", "React.js", "Express.js", "MongoDB"],
      category: "MERN Stack",
      github: "https://github.com/javid690/mern-ecommerce-platform",
      live: "#",
    },
    {
      id: 5,
      title: "Eventora – Full Stack Event Booking Platform",
      desc: "MERN-stack event management system featuring OTP authentication, event discovery, and booking workflows.",
      skills: ["Node.js", "React.js", "Express.js", "MongoDB"],
      category: "MERN Stack",
      github: "https://github.com/javid690/event-booking",
      live: "#",
    },
    {
      id: 6,
      title: "Admin Dashboard",
      desc: "A modern admin dashboard built with React, featuring analytics charts, data tables, search, filtering, pagination, and a fully responsive dark/light UI.",
      skills: ["React", "Tailwind", "JavaScript", "Chart.js"],
      category: "React",
      github: "#",
      live: "https://product-dahboard.netlify.app/",
    },
    {
      id: 7,
      title: "E-Commerce Website",
      desc: "Modern e-commerce app built with React, featuring dynamic UI and smooth user experience.",
      skills: ["React", "CSS", "Tailwind"],
      category: "React",
      github: "https://github.com/javid690/ecommerce-react-store",
      live: "https://uomoecommerce.netlify.app/",
    },
    {
      id: 8,
      title: "JS Storefront",
      desc: "E-commerce website built with pure JavaScript, focusing on core logic and DOM manipulation.",
      skills: ["HTML", "CSS", "JavaScript"],
      category: "JavaScript",
      github: "https://github.com/javid690/E-commerce-Project",
      live: "https://e-commerce-project-ten-olive.vercel.app/",
    },
    {
      id: 9,
      title: "Odoo Custom ERP",
      desc: "E-commerce website built on Odoo with custom code for enhanced design and functionality.",
      skills: ["Odoo", "HTML", "JavaScript"],
      category: "Odoo",
      github: "#",
      live: "https://erp.gumovastrecha.cz/",
    },

  ];

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
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

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 border
                ${activeTab === tab
                  ? "bg-[#e6006d] text-white border-[#e6006d] shadow-[0_0_20px_rgba(230,0,109,0.5)] scale-105"
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-[#e6006d]/50 hover:text-white hover:bg-[#5c0931]/30"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#5c0931]/20 border border-white/10 rounded-[2.5rem] p-6 transition-all duration-500 hover:-translate-y-4 hover:bg-[#5c0931]/40 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] cursor-default overflow-hidden"
            >
              {/* Top Glow on Hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e6006d] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Code Icon Placeholder (replaces image) */}
              <div className="relative overflow-hidden rounded-2xl mb-6 shadow-xl h-[200px] bg-gradient-to-br from-[#5c0931]/40 to-[#2a0417]/60 border border-white/5 flex items-center justify-center">

                {/* Category Badge - top right */}
                <span className="absolute top-4 right-4 z-10 bg-[#e6006d] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(230,0,109,0.5)]">
                  {project.category}
                </span>

                {/* Code Icon */}
                <FaCode className="text-[#e6006d]/50 text-6xl group-hover:text-[#e6006d]/80 group-hover:scale-110 transition-all duration-500" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[4px]">
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

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-500 text-lg">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;