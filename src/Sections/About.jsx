
import React, { useEffect, useRef, useState } from "react";
import {
  UserRound,
  GraduationCap,
  Code2,
  MapPin,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    value: "7.55",
    label: "BCA CGPA",
    icon: GraduationCap,
  },
  {
    value: "2025",
    label: "BCA Completed",
    icon: CheckCircle2,
  },
  {
    value: "MCA",
    label: "Currently Pursuing",
    icon: Code2,
  },
];

function About() {
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
      id="about"
      className="relative overflow-hidden bg-[#09090b] py-28"
    >

      {/* ================= BACKGROUND ================= */}

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="
        absolute
        -top-40
        -left-40
        w-[500px]
        h-[500px]
        rounded-full
        bg-cyan-500/10
        blur-[150px]
      " />

      <div className="
        absolute
        -bottom-40
        -right-40
        w-[500px]
        h-[500px]
        rounded-full
        bg-indigo-500/10
        blur-[150px]
      " />

      {/* ================= CONTENT ================= */}

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Heading */}

        <div
          className={`
            max-w-3xl
            mx-auto
            text-center

            transition-all
            duration-1000
            ease-out

            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }
          `}
        >

          <div className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full

            border
            border-cyan-500/20

            bg-cyan-500/5

            backdrop-blur-md
          ">
            <Sparkles
              size={15}
              className="text-cyan-400"
            />

            <span className="
              text-xs
              font-semibold
              tracking-[0.2em]
              uppercase
              text-cyan-400
            ">
              About Me
            </span>
          </div>

          <h2 className="
            mt-6
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-extrabold
            tracking-tight
            text-slate-100
          ">
            Building with
            <span className="
              ml-3
              bg-gradient-to-r
              from-cyan-400
              via-sky-400
              to-indigo-400
              bg-clip-text
              text-transparent
            ">
              purpose.
            </span>
          </h2>

          <p className="
            mt-5
            text-slate-500
            text-base
            sm:text-lg
          ">
            A little more about the developer behind the code.
          </p>

        </div>


        {/* ================= MAIN ABOUT ================= */}

        <div className="
          grid
          lg:grid-cols-[0.85fr_1.15fr]
          gap-8
          max-w-6xl
          mx-auto
          mt-16
        ">

          {/* ================= IDENTITY CARD ================= */}

          <div
            style={{
              transitionDelay: visible ? "150ms" : "0ms",
            }}
            className={`
              group
              relative
              overflow-hidden

              rounded-3xl

              border
              border-zinc-800

              bg-zinc-900/50
              backdrop-blur-xl

              p-8

              transition-all
              duration-1000
              ease-[cubic-bezier(0.22,1,0.36,1)]

              hover:-translate-y-2
              hover:border-cyan-400/30

              ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }
            `}
          >

            {/* Glow */}

            <div className="
              absolute
              -top-32
              -right-32
              w-64
              h-64
              rounded-full
              bg-cyan-400/10
              blur-[90px]

              opacity-0
              group-hover:opacity-100
              transition-all
              duration-700
            " />

            {/* Code symbol */}

            <div className="
              relative
              w-20
              h-20

              rounded-2xl

              flex
              items-center
              justify-center

              bg-cyan-500/10

              border
              border-cyan-500/20

              shadow-[0_0_40px_rgba(34,211,238,0.08)]

              group-hover:scale-105
              group-hover:rotate-2

              transition-all
              duration-500
            ">

              <Code2
                size={38}
                className="
                  text-cyan-400
                  group-hover:scale-110
                  transition-transform
                  duration-500
                "
              />

            </div>


            <div className="relative mt-8">

              <p className="
                text-sm
                text-cyan-400
                font-medium
              ">
                Hello, I'm
              </p>

              <h3 className="
                mt-2
                text-3xl
                sm:text-4xl
                font-extrabold
                text-slate-100
              ">
                Vishal Pachoure
              </h3>

              <p className="
                mt-2
                text-slate-500
              ">
                React Developer • Java Full Stack Developer
              </p>

            </div>


            {/* Location */}

            <div className="
              relative
              flex
              items-center
              gap-2
              mt-8
              text-sm
              text-slate-500
            ">

              <MapPin
                size={16}
                className="text-cyan-400"
              />

              Based in India

            </div>


            {/* Bottom line */}

            <div className="
              relative
              h-px
              bg-zinc-800
              mt-8
              overflow-hidden
            ">

              <div className="
                absolute
                left-0
                top-0
                h-full
                w-0
                bg-gradient-to-r
                from-cyan-400
                to-indigo-400

                group-hover:w-full

                transition-all
                duration-700
              " />

            </div>


            <div className="
              relative
              flex
              items-center
              justify-between
              mt-6
            ">

              <span className="
                text-xs
                tracking-wider
                uppercase
                text-slate-600
              ">
                Developer Profile
              </span>

              <ArrowUpRight
                size={18}
                className="
                  text-zinc-700

                  group-hover:text-cyan-400
                  group-hover:translate-x-1
                  group-hover:-translate-y-1

                  transition-all
                  duration-300
                "
              />

            </div>

          </div>


          {/* ================= CONTENT CARD ================= */}

          <div
            style={{
              transitionDelay: visible ? "300ms" : "0ms",
            }}
            className={`
              relative
              transition-all
              duration-1000
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }
            `}
          >

            <div className="
              relative
              h-full

              rounded-3xl

              border
              border-zinc-800

              bg-zinc-900/40
              backdrop-blur-xl

              p-8
              sm:p-10

              overflow-hidden
            ">

              {/* Corner glow */}

              <div className="
                absolute
                top-0
                right-0
                w-48
                h-48
                bg-indigo-500/10
                blur-[100px]
                rounded-full
              " />


              <div className="relative">

                <div className="
                  flex
                  items-center
                  gap-3
                ">

                  <UserRound
                    size={20}
                    className="text-cyan-400"
                  />

                  <span className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-slate-400
                  ">
                    Who I Am
                  </span>

                </div>


                <h3 className="
                  mt-6
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-slate-100
                ">
                  Turning ideas into
                  <span className="
                    text-cyan-400
                  ">
                    {" "}real applications.
                  </span>
                </h3>


                <p className="
                  mt-6
                  text-slate-400
                  leading-8
                  text-base
                ">
                  I'm Vishal Pachoure, a developer focused on building
                  modern and user-friendly web applications using
                  React.js and Java technologies.
                </p>


                <p className="
                  mt-4
                  text-slate-400
                  leading-8
                  text-base
                ">
                  I'm currently pursuing my MCA and continuously
                  improving my skills in full-stack development,
                  backend architecture and modern frontend technologies.
                  I enjoy solving problems, learning new technologies
                  and turning ideas into clean, functional products.
                </p>


                {/* Stats */}

                <div className="
                  grid
                  sm:grid-cols-3
                  gap-3
                  mt-8
                ">

                  {stats.map((stat, index) => {
                    const StatIcon = stat.icon;

                    return (
                      <div
                        key={stat.label}
                        style={{
                          transitionDelay: visible
                            ? `${500 + index * 120}ms`
                            : "0ms",
                        }}
                        className={`
                          group/stat

                          rounded-2xl

                          border
                          border-zinc-800

                          bg-zinc-950/60

                          p-4

                          transition-all
                          duration-700

                          hover:border-cyan-500/30
                          hover:bg-cyan-500/5
                          hover:-translate-y-1

                          ${
                            visible
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-8"
                          }
                        `}
                      >

                        <StatIcon
                          size={17}
                          className="
                            text-cyan-400
                            mb-3
                            group-hover/stat:scale-110
                            transition-transform
                          "
                        />

                        <div className="
                          text-xl
                          font-bold
                          text-slate-100
                        ">
                          {stat.value}
                        </div>

                        <div className="
                          text-[11px]
                          text-slate-600
                          mt-1
                        ">
                          {stat.label}
                        </div>

                      </div>
                    );
                  })}

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM STATEMENT ================= */}

        <div
          style={{
            transitionDelay: visible ? "700ms" : "0ms",
          }}
          className={`
            max-w-4xl
            mx-auto
            mt-10

            rounded-2xl

            border
            border-cyan-500/10

            bg-cyan-500/[0.03]

            px-6
            py-5

            text-center

            transition-all
            duration-1000

            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
        >

          <p className="
            text-sm
            sm:text-base
            text-slate-500
          ">
            <span className="text-cyan-400 font-medium">
              Curious mind.
            </span>{" "}
            <span className="text-slate-400">
              Clean code.
            </span>{" "}
            <span className="text-slate-300">
              Continuous growth.
            </span>
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;

