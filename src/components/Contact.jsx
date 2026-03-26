import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaGithub, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-0 bg-transparent">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* 1. Left Side: Contact Information */}
        <div className="space-y-10 order-2 lg:order-1">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-[#e6006d] text-4xl md:text-5xl font-extrabold uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(230,0,109,0.3)]">
              Get In Touch
            </h2>
            <div className="h-1.5 w-24 bg-[#e6006d] rounded-full shadow-[0_0_15px_#e6006d] mx-auto lg:mx-0"></div>
            <p className="text-gray-400 text-lg leading-relaxed pt-4">
              Have a project in mind or looking for a developer? Let’s connect
              and make it happen.
            </p>
          </div>

          <div className="space-y-6">
            {/* Email Box */}
            <div className="group flex items-center gap-6 bg-white/5 p-5 rounded-2xl border border-white/5 transition-all duration-500 hover:bg-[#5c0931]/30 hover:translate-x-3 cursor-pointer shadow-xl">
              <span className="text-2xl text-[#e6006d] p-3 bg-[#e6006d]/10 rounded-xl shadow-[0_0_15px_rgba(230,0,109,0.1)] group-hover:scale-110 transition-transform">
                <MdEmail />
              </span>
              <a
                href="mailto:graphicjr409@gmail.com"
                className="text-gray-300 font-medium hover:text-white transition-colors"
              >
                graphicjr409@gmail.com
              </a>
            </div>

            {/* Phone Box */}
            <div className="group flex items-center gap-6 bg-white/5 p-5 rounded-2xl border border-white/5 transition-all duration-500 hover:bg-[#5c0931]/30 hover:translate-x-3 cursor-pointer shadow-xl">
              <span className="text-2xl text-[#e6006d] p-3 bg-[#e6006d]/10 rounded-xl shadow-[0_0_15px_rgba(230,0,109,0.1)] group-hover:scale-110 transition-transform">
                <FaPhoneAlt />
              </span>
              <a
                href="tel:+923189312180"
                className="text-gray-300 font-medium hover:text-white transition-colors"
              >
                +92 318 9312180
              </a>
            </div>

            {/* Location Box */}
            <div className="group flex items-center gap-6 bg-white/5 p-5 rounded-2xl border border-white/5 transition-all duration-500 hover:bg-[#5c0931]/30 hover:translate-x-3 cursor-pointer shadow-xl">
              <span className="text-2xl text-[#e6006d] p-3 bg-[#e6006d]/10 rounded-xl shadow-[0_0_15px_rgba(230,0,109,0.1)] group-hover:scale-110 transition-transform">
                <IoLocation />
              </span>
              <span className="text-gray-300 font-medium cursor-default">
                Karachi, Pakistan
              </span>
            </div>
          </div>

          {/* Social Icons 3D Grid */}
          <div className="flex gap-5 justify-center lg:justify-start pt-6">
            <a
              href="https://github.com/javid690"
              target="_blank"
              className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-2xl text-gray-400 hover:text-white hover:bg-[#e6006d] hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(230,0,109,0.4)] transition-all duration-500"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-2xl text-gray-400 hover:text-[#25D366] hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(37,211,102,0.2)] transition-all duration-500"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/javid-rahman-dev190/"
              target="_blank"
              className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-2xl text-gray-400 hover:text-[#0077b5] hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,119,181,0.2)] transition-all duration-500"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* 2. Right Side: 3D Form Card */}
        <div className="order-1 lg:order-2">
          <div className="bg-[#5c0931]/15 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[3.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative overflow-hidden group transition-transform duration-700 hover:scale-[1.01]">
            {/* Decorative Background Glows */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#e6006d]/10 rounded-full blur-[110px] pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/5 rounded-full blur-[110px] pointer-events-none"></div>

            <form className="space-y-6 relative z-10">
              <div className="group space-y-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-[#e6006d] focus:bg-white/[0.08] focus:shadow-[0_0_25px_rgba(230,0,109,0.25)]"
                />
              </div>

              <div className="group space-y-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-[#e6006d] focus:bg-white/[0.08] focus:shadow-[0_0_25px_rgba(230,0,109,0.25)]"
                />
              </div>

              <div className="group space-y-2">
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-[#e6006d] focus:bg-white/[0.08] focus:shadow-[0_0_25px_rgba(230,0,109,0.25)] resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-gradient-to-r from-[#c1035c] to-[#e6006d] hover:to-[#ff007a] text-white font-black uppercase tracking-widest py-5 rounded-2xl transition-all duration-500 shadow-[0_10px_25px_rgba(193,3,92,0.4)] hover:shadow-[0_20px_40px_rgba(193,3,92,0.6)] hover:-translate-y-1 active:scale-95">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
