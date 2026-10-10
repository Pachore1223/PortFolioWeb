import React from "react";
import { ArrowUpRight } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <span className="absolute inset-0 rounded-xl bg-cyan-400/10 border border-cyan-400/20" />

              <span className="relative text-sm font-bold text-cyan-300">
                VP
              </span>
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white">
                Vishal Pachoure
              </p>

              <p className="text-[10px] tracking-[0.18em] text-gray-500 uppercase">
                Software Developer
              </p>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-9">
            <a
              href="#home"
              className="relative text-sm text-white transition-colors
              after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2
              after:w-1 after:h-1 after:rounded-full after:bg-cyan-400"
            >
              Home
            </a>

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
              href="#experience"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Experience
            </a>

            <a
              href="#projects"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </a>

            <a
              href="#education"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Education
            </a>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-4">

            <a
              href="https://drive.google.com/file/d/1pWM0K746qr2NKcg9sJBKuMOk-Tq9Q9-e/view"
              download
              className="hidden sm:block text-sm text-gray-300 hover:text-white transition-colors"
            >
              Resume
            </a>

            <a
              href="#contact"
              className="group flex items-center gap-2 text-sm font-medium text-white"
            >
              Contact

              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400 text-black group-hover:bg-cyan-300 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>

          </div>

        </div>

        {/* Subtle bottom line */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      </div>
    </header>
  );
}

export default Navbar;