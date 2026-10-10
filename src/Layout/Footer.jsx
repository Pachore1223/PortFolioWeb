import React from "react";
import { ArrowUpRight} from "lucide-react";
import {FaGithub ,FaLinkedin} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black text-white overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-32 bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        
        {/* Main Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight">
              Vishal <span className="text-cyan-400">Pachoure</span>
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              React Developer • Java Full Stack Developer
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start">
  <span className="text-xs uppercase tracking-[0.2em] text-cyan-400/70 mb-3">
    Explore
  </span>

  <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
    <button
  type="button"
  aria-label="Back to top"
  onClick={() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
>
  <ArrowUpRight className="w-4 h-4" />
</button>

    <a
      href="#about"
      className="text-sm text-gray-400 hover:text-white transition-colors"
    >
      About
    </a>

    <a
      href="#skills"
      className="text-sm text-gray-400 hover:text-white transition-colors"
    >
      Skills
    </a>

    <a
      href="#projects"
      className="text-sm text-gray-400 hover:text-white transition-colors"
    >
      Projects
    </a>

    <a
      href="#contact"
      className="text-sm text-gray-400 hover:text-white transition-colors"
    >
      Contact
    </a>
  </nav>
</div>  

          {/* Social Links */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/Pachore1223"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
            >
              {/* <Github className="w-4 h-4" /> */}
              <FaGithub className="inline-block ml-1" />
            </a>

            <a
              href="https://www.linkedin.com/in/vishal-panchoure-21a797269/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
            >
              {/* <Linkedin className="w-4 h-4" /> */}
              <FaLinkedin className="inline-block ml-1" />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          
          <p>
            © {currentYear} Vishal Pachoure. All rights reserved.
          </p>

          <p>
            Built with <span className="text-cyan-400">React</span> &{" "}
            <span className="text-cyan-400">Tailwind CSS</span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;