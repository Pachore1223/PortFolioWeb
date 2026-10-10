
import React, { useEffect, useRef, useState } from "react";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Coffee,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    subtitle: "Building modern interfaces",
    icon: Code2,
    color: "cyan",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    subtitle: "Developing powerful APIs",
    icon: Server,
    color: "blue",
    skills: [
      "Java",
      "JDBC",
      "Servlets",
      "JSP",
      "Spring",
      "Spring Boot",
      "Spring MVC",
      "REST APIs",
    ],
  },
  {
    title: "Database",
    subtitle: "Managing application data",
    icon: Database,
    color: "indigo",
    skills: [
      "MySQL",
      "Hibernate",
      "JPA",
    ],
  },
  {
    title: "Tools & Testing",
    subtitle: "Development workflow",
    icon: Wrench,
    color: "cyan",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "JIRA",
      "Maven",
    ],
  },
  {
    title: "Core Java",
    subtitle: "Strong programming foundation",
    icon: Coffee,
    color: "blue",
    skills: [
      "OOP",
      "Collections",
      "Exception Handling",
      "DSA",
      "Sessions",
      "Cookies",
      "MVC",
    ],
  },
];

function TechStack() {
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
      id="skills"
      className="relative bg-[#09090b] py-28 overflow-hidden"
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

      {/* Background Glows */}
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px]" />
      <div className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[130px]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Heading */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5">
            <Sparkles size={15} className="text-cyan-400" />

            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400">
              My Expertise
            </span>
          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>

          <p className="mt-6 text-slate-400 text-base sm:text-lg leading-8">
            A combination of frontend, backend and database technologies
            I use to build complete full-stack applications.
          </p>
        </div>

        {/* Developer Core */}
        <div
          className={`flex justify-center mt-16 mb-12 transition-all duration-1000 delay-200 ${
            visible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90"
          }`}
        >
          <div className="relative">

            {/* Rotating Ring */}
            <div className="absolute -inset-6 rounded-full border border-cyan-500/10 animate-[spin_18s_linear_infinite]" />

            <div className="absolute -inset-3 rounded-full border border-dashed border-sky-500/20 animate-[spin_12s_linear_infinite_reverse]" />

            {/* Core */}
            <div
              className="
                relative w-40 h-40 sm:w-48 sm:h-48
                rounded-full
                flex flex-col items-center justify-center
                bg-zinc-900/90
                border border-cyan-500/30
                shadow-[0_0_80px_rgba(34,211,238,0.12)]
                backdrop-blur-xl
              "
            >
              <Code2 size={34} className="text-cyan-400" />

              <span className="mt-3 text-lg font-bold text-slate-100">
                Java Full Stack
              </span>

              <span className="text-xs text-slate-500 mt-1">
                Developer
              </span>
            </div>
          </div>
        </div>

        {/* Skills */}
        ```jsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">

  {skillCategories.map((category, index) => {
    const Icon = category.icon;

    return (
      <div
        key={category.title}
        style={{
          transitionDelay: visible
            ? `${index * 120}ms`
            : "0ms",
        }}
        className={`
          group relative overflow-hidden
          rounded-2xl
          border border-zinc-800
          bg-zinc-900/50
          backdrop-blur-xl
          p-6

          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            visible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-16 scale-[0.96]"
          }

          hover:-translate-y-2
          hover:scale-[1.015]
          hover:border-cyan-400/40
          hover:shadow-[0_20px_70px_rgba(34,211,238,0.12)]
        `}
      >

        {/* Top Right Glow */}
        <div
          className="
            absolute
            -top-24
            -right-24
            w-48
            h-48
            rounded-full
            bg-cyan-400/10
            blur-[80px]

            opacity-0
            group-hover:opacity-100
            group-hover:scale-150

            transition-all
            duration-700
            pointer-events-none
          "
        />

        {/* Bottom Left Glow */}
        <div
          className="
            absolute
            -bottom-24
            -left-24
            w-40
            h-40
            rounded-full
            bg-indigo-500/10
            blur-[70px]

            opacity-0
            group-hover:opacity-100

            transition-all
            duration-700
            pointer-events-none
          "
        />

        {/* Animated Border */}
        <div
          className="
            absolute
            inset-0
            rounded-2xl
            border
            border-transparent

            group-hover:border-cyan-400/20

            transition-all
            duration-500
            pointer-events-none
          "
        />

        {/* Top */}
        <div className="relative flex items-start justify-between">

          <div className="flex items-center gap-4">

            {/* Icon */}
            <div
              className="
                relative
                w-12
                h-12
                rounded-xl

                flex
                items-center
                justify-center

                bg-cyan-600/10
                border
                border-cyan-500/20

                transition-all
                duration-500

                group-hover:bg-cyan-500/15
                group-hover:border-cyan-400/40
                group-hover:scale-110
                group-hover:rotate-3

                group-hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]
              "
            >

              {/* Icon Glow */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-xl
                  bg-cyan-400/10
                  blur-md

                  opacity-0
                  group-hover:opacity-100

                  transition-opacity
                  duration-500
                "
              />

              <Icon
                size={23}
                className="
                  relative
                  z-10
                  text-cyan-400

                  transition-transform
                  duration-500

                  group-hover:scale-110
                "
              />

            </div>

            {/* Title */}
            <div>
              <h3
                className="
                  text-lg
                  font-bold
                  text-slate-100

                  transition-colors
                  duration-300

                  group-hover:text-cyan-300
                "
              >
                {category.title}
              </h3>

              <p className="text-xs text-slate-500 mt-1">
                {category.subtitle}
              </p>
            </div>

          </div>

          {/* Arrow */}
          <ArrowUpRight
            size={18}
            className="
              text-zinc-700

              transition-all
              duration-500

              group-hover:text-cyan-400
              group-hover:translate-x-1.5
              group-hover:-translate-y-1.5
              group-hover:scale-110
            "
          />

        </div>

        {/* Divider */}
        <div
          className="
            h-px
            bg-zinc-800
            my-5

            transition-all
            duration-500

            group-hover:bg-gradient-to-r
            group-hover:from-cyan-500/40
            group-hover:via-cyan-500/10
            group-hover:to-transparent
          "
        />

        {/* Skills */}
        <div className="relative flex flex-wrap gap-2">

          {category.skills.map((skill, skillIndex) => (

            <span
              key={skill}
              style={{
                transitionDelay: visible
                  ? `${300 + skillIndex * 35}ms`
                  : "0ms",
              }}
              className="
                relative

                px-3
                py-1.5

                rounded-lg

                text-xs
                sm:text-sm

                font-medium
                text-slate-400

                bg-zinc-800/60
                border border-zinc-700/60

                transition-all
                duration-300

                hover:text-cyan-200
                hover:border-cyan-400/40
                hover:bg-cyan-500/10

                hover:-translate-y-1
                hover:scale-105

                hover:shadow-[0_5px_20px_rgba(34,211,238,0.10)]

                cursor-default
              "
            >

              <span className="relative z-10">
                {skill}
              </span>

            </span>

          ))}

        </div>

        {/* Bottom Animated Line */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2

            w-0
            h-[2px]

            bg-gradient-to-r
            from-transparent
            via-cyan-400
            to-transparent

            group-hover:w-2/3

            transition-all
            duration-700
          "
        />

      </div>
    );
  })}

</div>


        {/* Bottom Message */}
        <div
          className={`
            max-w-3xl mx-auto mt-14 text-center
            transition-all duration-1000 delay-700
            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
        >
          <p className="text-sm text-slate-500">
            Always learning. Always building.
            <span className="text-cyan-400"> Always improving.</span>
          </p>
        </div>

      </div>
    </section>
  );
}

export default TechStack;
// ```

// Bhai isme **ek important improvement** hai: maine skills ko sirf cards me nahi daala, beech me **Java Full Stack Developer core** diya hai aur uske around categories ka feel diya hai. Scroll karte hi heading → core → cards **smoothly reveal** honge.

// Aur haan, `Skills.jsx` rakhna hai to function ka naam `TechStack` reh sakta hai, **koi problem nahi**. Bas App me import:

// ```jsx
// import TechStack from "./Sections/Skills";
// ```

// aur:

// ```jsx
// <Hero />
// <TechStack />
// ```

// Bas. **Iske baad next section About Me rakhenge**, aur usme tera actual profile use karenge—generic “passionate developer” wala boring text nahi.
