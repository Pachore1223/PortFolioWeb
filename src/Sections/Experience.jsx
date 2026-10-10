
import React, { useEffect, useRef, useState } from "react";
import {
  BriefcaseBusiness,
  CalendarDays,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const experience = [
  {
    role: "React Developer",
    company: "Alpatus Technology",
    period: "Nov 2025 — Apr 2026",
    duration: "6 Months",
    type: "Professional Experience",
    description:
      "Worked on React.js based web applications, building responsive interfaces, reusable components and interactive frontend features.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Git"],
    featured: true,
  },
  {
    role: "Java Developer Intern",
    company: "CodSoft",
    period: "1 Month",
    duration: "1 Month",
    type: "Internship",
    description:
      "Worked on Java development tasks and strengthened practical understanding of object-oriented programming and application development.",
    technologies: ["Java", "OOP", "MySQL", "Git"],
    featured: false,
  },
  {
    role: "Web Developer Intern",
    company: "Web Development Internship",
    period: "3 Months",
    duration: "3 Months",
    type: "Internship",
    description:
      "Worked on web development projects and gained practical experience in building responsive web interfaces and implementing frontend functionality.",
    technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
    featured: false,
  },
];

function Experience() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
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
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#09090b] py-24 sm:py-28"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.06] blur-[150px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-500/[0.06] blur-[150px]" />

      <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-12">
        {/* ================= HEADER ================= */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.04] px-4 py-2">
            <Sparkles size={14} className="text-cyan-400" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-400">
              Experience
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Where I've
            <span className="ml-2 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent sm:ml-3">
              worked.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            A collection of experiences that shaped my development journey.
          </p>
        </div>

        {/* ================= EXPERIENCE ================= */}
        <div className="relative mx-auto mt-16 max-w-6xl sm:mt-20">
          {/* Desktop Timeline */}
          <div className="absolute bottom-0 left-[207px] top-0 hidden w-px bg-gradient-to-b from-cyan-400/50 via-zinc-700 to-indigo-500/20 md:block" />

          {/* Mobile Timeline */}
          <div className="absolute bottom-0 left-[15px] top-0 w-px bg-gradient-to-b from-cyan-400/50 via-zinc-700 to-indigo-500/20 md:hidden" />

          <div className="space-y-8 sm:space-y-10">
            {experience.map((item, index) => (
              <article
                key={`${item.company}-${item.role}`}
                style={{
                  transitionDelay: visible
                    ? `${150 + index * 160}ms`
                    : "0ms",
                }}
                className={`relative grid gap-6 transition-all duration-1000 md:grid-cols-[210px_1fr] md:gap-12 ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {/* ================= DATE BLOCK ================= */}
                <div className="pl-10 md:pl-0 md:pt-7 md:text-right">
                  <div className="inline-flex flex-col md:items-end">
                    {/* Period */}
                    <span className="text-[11px] mr-3 font-semibold uppercase tracking-[0.13em] text-cyan-400/70 sm:text-xs sm:tracking-[0.15em]">
                      {item.period}
                    </span>

                    {/* Duration Badge */}
                    <span className="mt-4 mr-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-500">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          item.featured
                            ? "bg-cyan-400/80"
                            : "bg-zinc-600"
                        }`}
                      />

                      {item.duration}
                    </span>
                  </div>
                </div>

                {/* ================= TIMELINE POINT ================= */}
                <div
                  className={`absolute left-[15px] top-7 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border bg-[#09090b] ${
                    item.featured
                      ? "border-cyan-400"
                      : "border-zinc-700"
                  }`}
                >
                  <div
                    className={`h-2.5 w-2.5 rounded-full ${
                      item.featured
                        ? "bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]"
                        : "bg-zinc-600"
                    }`}
                  />
                </div>

                {/* ================= CARD ================= */}
                <div
                  className={`group relative overflow-hidden rounded-3xl border p-6 backdrop-blur-xl transition-all duration-500 sm:p-8 ${
                    item.featured
                      ? "border-cyan-400/20 bg-cyan-400/[0.025]"
                      : "border-zinc-800 bg-zinc-900/40"
                  } hover:-translate-y-1 hover:border-cyan-400/30`}
                >
                  {/* Hover Glow */}
                  <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-cyan-400/[0.08] blur-[90px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                  <div className="relative">
                    {/* ================= TOP ================= */}
                    <div className="flex flex-wrap items-start justify-between gap-5">
                      <div className="flex min-w-0 items-start gap-4">
                        {/* Icon */}
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${
                            item.featured
                              ? "border-cyan-400/20 bg-cyan-400/10"
                              : "border-white/10 bg-white/[0.03]"
                          }`}
                        >
                          <BriefcaseBusiness
                            size={21}
                            className={
                              item.featured
                                ? "text-cyan-400"
                                : "text-slate-400"
                            }
                          />
                        </div>

                        {/* Role Info */}
                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-500/70 sm:text-xs">
                            {item.type}
                          </p>

                          <h3 className="mt-2 text-2xl font-bold leading-tight text-slate-100 transition-colors group-hover:text-cyan-300 sm:text-3xl">
                            {item.role}
                          </h3>

                          <p className="mt-1.5 text-sm text-slate-400 sm:text-base">
                            {item.company}
                          </p>
                        </div>
                      </div>

                      {/* Featured */}
                      {item.featured && (
                        <span className="flex shrink-0 items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          Featured
                        </span>
                      )}
                    </div>

                    {/* ================= DIVIDER ================= */}
                    <div className="my-6 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent sm:my-7" />

                    {/* ================= DESCRIPTION ================= */}
                    <p className="max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                      {item.description}
                    </p>

                    {/* ================= TECHNOLOGIES ================= */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-slate-400 transition-colors group-hover:border-cyan-400/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* ================= BOTTOM ================= */}
                    <div className="mt-7 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <CalendarDays size={14} />
                        <span>{item.duration}</span>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="text-slate-700 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}
        <div
          className={`mx-auto mt-14 max-w-3xl text-center transition-all delay-500 duration-1000 sm:mt-16 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-sm leading-6 text-slate-500 sm:text-base">
            <span className="font-medium text-cyan-400">
              Experience builds perspective.
            </span>{" "}
            Each opportunity has helped me turn what I learn into practical
            development skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;

