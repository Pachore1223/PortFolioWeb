import React, { useEffect, useState } from "react";
import vishalImage from "../assets/vishalll.png";
import {FaGithub ,FaLinkedin} from "react-icons/fa";

import {
  ArrowRight,
  Download,
  Code2,
  Sparkles
} from "lucide-react";

function Hero() {
  const [text, setText] = useState("");
  const fullText = "Vishal Pachoure";

  // Typing Animation
  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(typing);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#09090b] overflow-hidden flex items-center"
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Cyan Glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[130px]" />

        {/* Indigo Glow */}
        <div className="absolute -bottom-40 -right-40 w-[550px] h-[550px] bg-indigo-500/10 rounded-full blur-[140px]" />

        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

      </div>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="container mx-auto px-6 lg:px-12 py-28 relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">


          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div>

            {/* Availability */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/5
                text-cyan-400
                text-sm
                font-medium
                backdrop-blur-sm
              "
            >

              <span className="relative flex h-2.5 w-2.5">

                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    rounded-full
                    bg-emerald-400
                    opacity-75
                    animate-ping
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-emerald-500
                  "
                />

              </span>

              Available for opportunities

            </div>


            {/* =================================================
                HEADING
            ================================================= */}

            <h1
              className="
                mt-7
                text-5xl
                sm:text-6xl
                lg:text-7xl
                font-extrabold
                tracking-tight
                leading-[1.05]
                text-slate-50
              "
            >

              <span className="block">
                Hi, I'm
              </span>

              {/* Typing Name */}

              <span
                className="
                  block
                  mt-3
                  min-h-[1.1em]
                  bg-gradient-to-r
                  from-cyan-400
                  via-sky-400
                  to-indigo-400
                  bg-clip-text
                  text-transparent
                "
              >

                {text}

                

              </span>

            </h1>


            {/* =================================================
                ROLE
            ================================================= */}

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-2
                mt-7
                text-xl
                sm:text-2xl
                font-semibold
              "
            >

              <span className="text-slate-200">
                React Developer
              </span>

              <span className="text-cyan-400">
                |
              </span>

              <span className="text-slate-500">
                Java Full Stack Developer
              </span>

            </div>


            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-6
                max-w-xl
                text-slate-400
                text-lg
                leading-8
              "
            >
              I build modern, responsive and user-friendly web
              applications using React.js and Java technologies.
              I enjoy turning ideas into clean, functional and
              scalable digital experiences.
            </p>


            {/* =================================================
                BUTTONS
            ================================================= */}

            <div className="flex flex-wrap gap-4 mt-9">
  <a
    href="#projects"
    className="
      group flex items-center gap-2 px-6 py-3.5
      bg-sky-500 hover:bg-sky-400 text-black font-semibold
      rounded-xl transition-all duration-300 shadow-lg
      shadow-sky-500/20 hover:shadow-sky-400/30 hover:-translate-y-0.5
    "
  >
    View Projects
    <ArrowRight
      size={19}
      className="group-hover:translate-x-1 transition-transform"
    />
  </a>

  <a
    href="/Vishal_Pachoure_Resume.pdf"
    download
    className="
      flex items-center gap-2 px-6 py-3.5
      border border-zinc-700 hover:border-sky-500/50
      bg-zinc-900/60 hover:bg-zinc-800/70 text-slate-200
      hover:text-sky-400 font-semibold rounded-xl
      transition-all duration-300 hover:-translate-y-0.5
    "
  >
    Download Resume
    <Download size={19} />
  </a>
</div>


{/* 👇 YE YAHAN ADD KAR */}
<div className="flex items-center gap-5 mt-8">

  <a
    href="https://github.com/Pachore1223"
    target="_blank"
    rel="noreferrer"
    className="text-sm text-slate-400 hover:text-sky-400 transition"
  >
   Github 
   <FaGithub className="inline-block ml-1" />
  </a>

  <a
    href="https://www.linkedin.com/in/vishal-panchoure-21a797269/"
    target="_blank"
    rel="noreferrer"
    className="text-sm text-slate-400 hover:text-sky-400 transition"
  >
   linkedin
   <FaLinkedin className="inline-block ml-1" />
  </a>

</div>


            {/* =================================================
                SMALL INFO
            ================================================= */}

            <div className="flex items-center gap-6 mt-9">

              <span className="text-sm text-slate-600">
                Based in India
              </span>

              <div className="h-4 w-px bg-zinc-800" />

              <span className="text-sm text-slate-600">
                Open to Work
              </span>

            </div>

          </div>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="flex justify-center lg:justify-end">

            <div className="relative w-[310px] sm:w-[370px] lg:w-[400px]">


              {/* Main Glow */}

              <div
                className="
                  absolute
                  inset-0
                  bg-sky-500/10
                  blur-[100px]
                  rounded-full
                "
              />


              {/* =================================================
                  PROFILE CARD
              ================================================= */}

              <div
                className="
                  relative
                  aspect-square
                  rounded-[2rem]
                  border
                  border-sky-500/20
                  bg-zinc-900/80
                  backdrop-blur-xl
                  shadow-2xl
                  overflow-hidden
                "
              >

                {/* Top Glow */}

                <div
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-40
                    bg-gradient-to-b
                    from-sky-500/10
                    to-transparent
                  "
                />


                {/* Profile Image */}

                <div
                  className="
                    absolute
                    inset-7
                    rounded-[1.5rem]
                    border
                    border-zinc-700/70
                    bg-zinc-800/50
                    overflow-hidden
                    flex
                    items-center
                    justify-center
                  "
                >

                  <img
                    src={vishalImage}
                    alt="Vishal Pachoure"
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />

                </div>


                {/* Bottom Info */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-6
                    pt-16
                    bg-gradient-to-t
                    from-[#09090b]
                    via-[#09090b]/90
                    to-transparent
                  "
                >

                  <div className="flex items-end justify-between">

                    <div>

                      <p className="text-slate-100 font-bold text-xl">
                        Vishal Pachoure
                      </p>

                      <p className="text-sky-400 text-sm mt-1">
                        React • Java • Spring Boot
                      </p>

                    </div>


                    <div
                      className="
                        p-3
                        rounded-xl
                        bg-sky-500/10
                        border
                        border-sky-500/20
                      "
                    >

                      <Code2
                        className="text-sky-400"
                        size={22}
                      />

                    </div>

                  </div>

                </div>

              </div>


              {/* =================================================
                  REACT BADGE
              ================================================= */}

              <div
                className="
                  absolute
                  -top-5
                  -right-5
                  px-4
                  py-3
                  rounded-xl
                  bg-zinc-900
                  border
                  border-zinc-700
                  shadow-xl
                  flex
                  items-center
                  gap-2
                  hover:-translate-y-1
                  transition-transform
                "
              >

                <span className="text-cyan-400 text-lg">
                  ⚛
                </span>

                <span className="text-sm font-semibold text-slate-200">
                  React.js
                </span>

              </div>


              {/* =================================================
                  JAVA BADGE
              ================================================= */}

              <div
                className="
                  absolute
                  -bottom-5
                  -left-5
                  px-4
                  py-3
                  rounded-xl
                  bg-zinc-900
                  border
                  border-zinc-700
                  shadow-xl
                  flex
                  items-center
                  gap-2
                  hover:-translate-y-1
                  transition-transform
                "
              >

                <span className="text-lg">
                  ☕
                </span>

                <span className="text-sm font-semibold text-slate-200">
                  Java
                </span>

              </div>


              {/* =================================================
                  SPRING BOOT
              ================================================= */}

              <div
                className="
                  absolute
                  top-1/2
                  -right-10
                  hidden
                  sm:flex
                  items-center
                  gap-2
                  px-4
                  py-3
                  rounded-xl
                  bg-zinc-900
                  border
                  border-zinc-700
                  shadow-xl
                "
              >

                <Sparkles
                  size={17}
                  className="text-indigo-400"
                />

                <span className="text-sm font-semibold text-slate-200">
                  Spring Boot
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <div
        className="
          absolute
          bottom-7
          left-1/2
          -translate-x-1/2
          hidden
          md:flex
          flex-col
          items-center
          gap-2
          text-zinc-600
        "
      >

        <span className="text-xs tracking-wide">
          Scroll to explore
        </span>

        <div
          className="
            w-5
            h-8
            rounded-full
            border
            border-zinc-700
            flex
            justify-center
            pt-1.5
          "
        >

          <div
            className="
              w-1
              h-1.5
              bg-sky-400
              rounded-full
              animate-bounce
            "
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;