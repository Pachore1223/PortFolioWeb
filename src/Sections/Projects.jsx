import React, { useEffect, useRef, useState } from "react";
import {
  ExternalLink,
  ArrowUpRight,
  FolderGit2,
  Sparkles,
} from "lucide-react";
import {FaGithub ,FaLinkedin} from "react-icons/fa";
const projects = [
  {
    title: "V2M Market",
    description:
      "A modern e-commerce web application with product browsing, product details, cart management, checkout and authentication.",
    tech: ["React.js", "Vite", "Tailwind CSS", "React Router"],
    type: "Frontend",
    github: "https://github.com/Pachore1223/React_Shopping_Cart2026",
    live: "https://react-shopping-cart2026.vercel.app",
    featured: true,
  },
  {
    title: "Makan Dekho",
    description:
      "A full-stack real estate application designed for managing and exploring property listings with a modern frontend and Java backend.",
    tech: ["React.js", "Spring Boot", "MySQL", "REST API"],
    type: "Full Stack",
    github: "https://github.com/Pachore1223",
    live: "#",
    featured: true,
  },
  {
    title: "AI Chat Application",
    description:
      "An AI-powered chat application using Spring AI and Gemini with real-time communication through WebSocket.",
    tech: ["React.js", "Spring AI", "Gemini", "WebSocket"],
    type: "AI / Full Stack",
    github: "https://github.com/Pachore1223",
    live: "#",
    featured: true,
  },
  {
    title: "Weather App",
    description:
      "A Java Full-stack weather application that provides real-time weather information and forecasts.",
    tech: ["Java", "Spring Boot", "Thymeleaf", "JavaScript"],
    type: "Full Stack",
    github: "https://github.com/Pachore1223/Weather-App",
    live: "https://frontend-weather-api.vercel.app/",
    featured: true,
  },
];

function Projects() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden bg-[#09090b] py-28"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Ambient Glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[150px]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Heading */}
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-md">
            <Sparkles size={15} className="text-cyan-400" />

            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400">
              Projects
            </span>
          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100">
            Things I've
            <span className="ml-3 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              built.
            </span>
          </h2>

          <p className="mt-5 text-slate-500 text-base sm:text-lg leading-7">
            A collection of projects where I turn ideas into functional,
            modern and user-friendly applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              style={{
                transitionDelay: visible
                  ? `${150 + index * 120}ms`
                  : "0ms",
              }}
              className={`
                group relative overflow-hidden
                rounded-3xl
                border border-zinc-800
                bg-zinc-900/50
                backdrop-blur-xl
                p-7 sm:p-8

                transition-all
                duration-1000
                ease-[cubic-bezier(0.22,1,0.36,1)]

                ${
                  visible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-16 scale-[0.96]"
                }

                hover:-translate-y-2
                hover:border-cyan-400/30
                hover:shadow-[0_25px_80px_rgba(34,211,238,0.10)]
              `}
            >
              {/* Card Glow */}
              <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-cyan-400/10 blur-[90px] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 pointer-events-none" />

              <div className="absolute -bottom-32 -left-32 w-56 h-56 rounded-full bg-indigo-500/10 blur-[90px] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

              {/* Top */}
              <div className="relative flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/15 group-hover:border-cyan-400/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <FolderGit2
                    size={23}
                    className="text-cyan-400"
                  />
                </div>

                <ArrowUpRight
                  size={20}
                  className="text-zinc-700 group-hover:text-cyan-400 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-all duration-300"
                />
              </div>

              {/* Project Info */}
              <div className="relative mt-7">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {project.featured && (
                    <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-xs uppercase tracking-[0.15em] text-slate-600 mt-2">
                  {project.type}
                </p>

                <p className="mt-5 text-slate-400 leading-7 text-sm sm:text-base">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="relative flex flex-wrap gap-2 mt-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3 py-1.5
                      rounded-lg
                      text-xs
                      font-medium
                      text-slate-400
                      bg-zinc-800/70
                      border border-zinc-700/70
                      transition-all duration-300
                      group-hover:border-zinc-600
                      hover:text-cyan-300
                      hover:border-cyan-400/30
                      hover:bg-cyan-500/5
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-zinc-800 my-7 group-hover:bg-cyan-500/20 transition-colors duration-500" />

              {/* Buttons */}
              <div className="relative flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-2
                    px-4 py-2.5
                    rounded-xl
                    border border-zinc-700
                    bg-zinc-900
                    text-sm font-semibold
                    text-slate-300
                    hover:text-cyan-400
                    hover:border-cyan-400/30
                    hover:bg-cyan-500/5
                    transition-all duration-300
                  "
                >
                  <FaGithub size={17} />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer noreferrer"
                  className="
                    inline-flex items-center gap-2
                    px-4 py-2.5
                    rounded-xl
                    bg-cyan-500/10
                    border border-cyan-500/20
                    text-sm font-semibold
                    text-cyan-400
                    hover:bg-cyan-500/15
                    hover:border-cyan-400/40
                    transition-all duration-300
                  "
                >
                  <ExternalLink size={17} />
                  Live Demo
                </a>
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:w-2/3 transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div
          style={{ transitionDelay: visible ? "700ms" : "0ms" }}
          className={`
            max-w-4xl mx-auto mt-12 text-center
            transition-all duration-1000
            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
        >
          <p className="text-sm text-slate-600">
            More projects and experiments are available on my{" "}
            <a
              href="https://github.com/Pachore1223"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;