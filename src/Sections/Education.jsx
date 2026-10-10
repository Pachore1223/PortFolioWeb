import React, { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  GraduationCap,
  CalendarDays,
  Award,
} from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications",
    short: "MCA General",
    institute: "Amity University Noida",
    year: "2025 - 2027",
    icon: GraduationCap,
    current: true,
  },
  {
    degree: "Bachelor of Computer Applications",
    short: "BCA General",
    institute:
      "Shri Vaishnav Institute of Technology and Science, Indore",
    year: "2022 - 2025",
    icon: GraduationCap,
    score: "7.55 CGPA",
    current: false,
  },
];

function Education() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
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
      id="education"
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
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[150px]" />

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
              Education
            </span>
          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100">
            My academic
            <span className="ml-3 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              journey.
            </span>
          </h2>

          <p className="mt-5 text-slate-500 text-base sm:text-lg leading-7">
            My educational background and continuous journey in technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto mt-16">

          {/* Center Line */}
          <div
            className={`
              absolute left-5 sm:left-1/2
              top-0 bottom-0
              w-px
              bg-gradient-to-b
              from-cyan-500/50
              via-zinc-700
              to-indigo-500/30
              sm:-translate-x-1/2
              transition-all duration-1000
              ${
                visible
                  ? "opacity-100 scale-y-100"
                  : "opacity-0 scale-y-0"
              }
            `}
          />

          <div className="space-y-10">

            {education.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.degree}
                  style={{
                    transitionDelay: visible
                      ? `${200 + index * 180}ms`
                      : "0ms",
                  }}
                  className={`
                    relative
                    grid sm:grid-cols-2
                    gap-8
                    transition-all duration-1000
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${
                      visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    }
                  `}
                >

                  {/* Timeline Dot */}
                  <div
                    className={`
                      absolute
                      left-5 sm:left-1/2
                      top-8
                      -translate-x-1/2
                      w-10 h-10
                      rounded-full
                      flex items-center justify-center
                      bg-[#09090b]
                      border
                      ${
                        item.current
                          ? "border-cyan-400"
                          : "border-zinc-700"
                      }
                      z-10
                    `}
                  >
                    <div
                      className={`
                        w-3 h-3 rounded-full
                        ${
                          item.current
                            ? "bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                            : "bg-zinc-600"
                        }
                      `}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`
                      ${
                        index % 2 === 0
                          ? "sm:pr-14"
                          : "sm:col-start-2 sm:pl-14"
                      }
                      ml-14 sm:ml-0
                    `}
                  >
                    <div
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-3xl
                        border border-zinc-800
                        bg-zinc-900/50
                        backdrop-blur-xl
                        p-6
                        hover:-translate-y-1
                        hover:border-cyan-400/30
                        hover:shadow-[0_20px_60px_rgba(34,211,238,0.08)]
                        transition-all duration-500
                      "
                    >

                      {/* Glow */}
                      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-cyan-400/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-all duration-700" />

                      {/* Top */}
                      <div className="relative flex items-start justify-between gap-4">

                        <div
                          className="
                            w-12 h-12
                            rounded-xl
                            flex items-center justify-center
                            bg-cyan-500/10
                            border border-cyan-500/20
                            group-hover:border-cyan-400/40
                            group-hover:scale-105
                            transition-all duration-500
                          "
                        >
                          <Icon
                            size={23}
                            className="text-cyan-400"
                          />
                        </div>

                        {item.current && (
                          <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="relative mt-6">

                        <p className="text-xs uppercase tracking-[0.15em] text-cyan-500/70">
                          {item.short}
                        </p>

                        <h3 className="mt-2 text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {item.degree}
                        </h3>

                        <p className="mt-3 text-slate-400">
                          {item.institute}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mt-5 text-xs text-slate-600">

                          <span className="flex items-center gap-2">
                            <CalendarDays size={14} />
                            {item.year}
                          </span>

                          {item.score && (
                            <span className="flex items-center gap-2 text-cyan-500/70">
                              <Award size={14} />
                              {item.score}
                            </span>
                          )}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Highlight */}
        <div
          style={{
            transitionDelay: visible ? "650ms" : "0ms",
          }}
          className={`
            max-w-3xl mx-auto mt-14
            rounded-2xl
            border border-cyan-500/10
            bg-cyan-500/[0.03]
            px-6 py-5
            text-center
            transition-all duration-1000
            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
        >
          <p className="text-sm sm:text-base text-slate-500">
            <span className="text-cyan-400 font-medium">
              Learning never stops.
            </span>{" "}
            I continuously improve my development skills through projects,
            practice and new technologies.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Education; 