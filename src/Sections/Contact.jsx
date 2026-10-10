import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {FaGithub ,FaLinkedin} from "react-icons/fa";
import {
  ArrowUpRight, 
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";

function Contact() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
 const [formData,setFormData]=useState({
   name:"",
   email:"",
   subject:"",
   message:""

 })
 const [sending,setSending]=useState(false)

 const handleChange=(e)=> {
  const { name, value } = e.target;
  setFormData((prev)=>({
    ...prev,
    [name]:value
  }))
 }

 const handleSubmit=async (e)=>{ 
  e.preventDefault();
   if(!formData.name || !formData.email || !formData.subject || !formData.message) {
    alert("Please fill all the fields")
    return;
   }
   setSending(true)
    try{ 
        await  emailjs.send("service_knr26jz","template_aa9hy5s",{
           name:formData.name,
           email:formData.email,
           subject:formData.subject,
           message:formData.message
        },"8JEz99-PGhX5tHm64"


        )
        alert("Email sent successfully")
        setFormData({
          name:"",
          email:"",
          subject:"",
          message:""
        })


    }
    catch(err){
      console.log("Error sending email",err)
      alert("Error sending email. Please try again later.")
    } 
    finally{
      setSending(false)
    }
 }
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
      id="contact"
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

      {/* Ambient Glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[150px]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-sky-500/5 blur-[130px]" />

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
              Contact
            </span>
          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100">
            Let's build something
            <span className="ml-3 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              meaningful.
            </span>
          </h2>

          <p className="mt-5 text-slate-500 text-base sm:text-lg leading-7">
            Have an opportunity, project or just want to connect?
            I'd love to hear from you.
          </p>
        </div>

        {/* Main Contact Area */}
        <div className="max-w-6xl mx-auto mt-16 grid lg:grid-cols-5 gap-8">

          {/* Left Side */}
          <div
            className={`
              lg:col-span-2
              transition-all duration-1000
              ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }
            `}
          >
            <div className="h-full rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl p-7 sm:p-8">

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-500/70">
                  Get in touch
                </p>

                <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-100">
                  Let's talk about
                  <span className="text-cyan-400"> opportunities.</span>
                </h3>

                <p className="mt-5 text-slate-500 leading-7">
                  I'm currently open to opportunities in React development,
                  Java full-stack development and software engineering.
                </p>
              </div>

              {/* Contact Details */}
              <div className="mt-10 space-y-4">

                {/* Email */}
                <a
                  href="mailto:vishalpanchoure@gmail.com"
                  className="
                    group flex items-center gap-4
                    p-4 rounded-2xl
                    border border-zinc-800
                    bg-zinc-950/50
                    hover:border-cyan-500/30
                    hover:bg-cyan-500/[0.03]
                    transition-all duration-300
                  "
                >
                  <div className="
                    w-11 h-11 rounded-xl
                    flex items-center justify-center
                    bg-cyan-500/10
                    border border-cyan-500/20
                    group-hover:scale-105
                    transition-transform
                  ">
                    <Mail size={19} className="text-cyan-400" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-600 uppercase tracking-wider">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-slate-300 truncate">
                      vishalpanchoure@gmail.com
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="ml-auto text-slate-700 group-hover:text-cyan-400 transition-colors"
                  />
                </a>

                {/* Location */}
                <div
                  className="
                    flex items-center gap-4
                    p-4 rounded-2xl
                    border border-zinc-800
                    bg-zinc-950/50
                  "
                >
                  <div className="
                    w-11 h-11 rounded-xl
                    flex items-center justify-center
                    bg-indigo-500/10
                    border border-indigo-500/20
                  ">
                    <MapPin size={19} className="text-indigo-400" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-600 uppercase tracking-wider">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-slate-300">
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-7 border-t border-zinc-800">

                <p className="text-xs uppercase tracking-[0.15em] text-slate-600">
                  Connect with me
                </p>

                <div className="flex gap-3 mt-4">

                  <a
                    href="https://github.com/Pachore1223"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group flex-1
                      flex items-center justify-center gap-2
                      px-4 py-3
                      rounded-xl
                      border border-zinc-800
                      bg-zinc-950/50
                      text-slate-400
                      hover:text-cyan-400
                      hover:border-cyan-500/30
                      transition-all duration-300
                    "
                  >
                    {/* <Github size={17} /> */}
                    <FaGithub className="inline-block ml-1" />
                    <span className="text-sm font-medium">
                      GitHub
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/vishal-panchoure-21a797269/"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group flex-1
                      flex items-center justify-center gap-2
                      px-4 py-3
                      rounded-xl
                      border border-zinc-800
                      bg-zinc-950/50
                      text-slate-400
                      hover:text-sky-400
                      hover:border-sky-500/30
                      transition-all duration-300
                    "
                  >
                    {/* <Linkedin size={17} /> */}
                    <FaLinkedin className="inline-block ml-1" />
                    <span className="text-sm font-medium">
                      LinkedIn
                    </span>
                  </a>

                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div
            className={`
              lg:col-span-3
              transition-all duration-1000 delay-150
              ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }
            `}
          >
            <form
              className="
                relative
                rounded-3xl
                border border-zinc-800
                bg-zinc-900/50
                backdrop-blur-xl
                p-7 sm:p-9
                overflow-hidden
              "
              onSubmit={handleSubmit}
            >

              {/* Form Glow */}
              <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-cyan-500/10 blur-[100px]" />

              <div className="relative">

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-500/70">
                      Send a message
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-slate-100">
                      Start a conversation.
                    </h3>
                  </div>

                  <div className="
                    hidden sm:flex
                    w-12 h-12 rounded-xl
                    items-center justify-center
                    bg-cyan-500/10
                    border border-cyan-500/20
                  ">
                    <Send size={20} className="text-cyan-400" />
                  </div>
                </div>

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5 mt-8">

                  <div>
                    <label className="block text-sm text-slate-400 mb-2">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="
                        w-full px-4 py-3.5
                        rounded-xl
                        border border-zinc-800
                        bg-zinc-950/70
                        text-slate-200
                        placeholder:text-slate-700
                        outline-none
                        focus:border-cyan-500/50
                        focus:ring-2
                        focus:ring-cyan-500/10
                        transition-all
                      "
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-400 mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="
                        w-full px-4 py-3.5
                        rounded-xl
                        border border-zinc-800
                        bg-zinc-950/70
                        text-slate-200
                        placeholder:text-slate-700
                        outline-none
                        focus:border-cyan-500/50
                        focus:ring-2
                        focus:ring-cyan-500/10
                        transition-all
                      "
                    />
                  </div>

                </div>

                {/* Subject */}
                <div className="mt-5">
                  <label className="block text-sm text-slate-400 mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    className="
                      w-full px-4 py-3.5
                      rounded-xl
                      border border-zinc-800
                      bg-zinc-950/70
                      text-slate-200
                      placeholder:text-slate-700
                      outline-none
                      focus:border-cyan-500/50
                      focus:ring-2
                      focus:ring-cyan-500/10
                      transition-all
                    "
                  />
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label className="block text-sm text-slate-400 mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Tell me a little about your project or opportunity..."
                    className="
                      w-full px-4 py-3.5
                      rounded-xl
                      border border-zinc-800
                      bg-zinc-950/70
                      text-slate-200
                      placeholder:text-slate-700
                      outline-none
                      resize-none
                      focus:border-cyan-500/50
                      focus:ring-2
                      focus:ring-cyan-500/10
                      transition-all
                    "
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="
                    group
                    w-full
                    mt-6
                    flex items-center justify-center gap-2
                    px-6 py-4
                    rounded-xl
                    bg-gradient-to-r
                    from-cyan-500
                    via-sky-500
                    to-indigo-500
                    text-black
                    font-bold
                    hover:from-cyan-400
                    hover:via-sky-400
                    hover:to-indigo-400
                    hover:-translate-y-0.5
                    shadow-lg
                    shadow-cyan-500/10
                    transition-all duration-300
                  "
                >
                  {sending ? "Sending..." : "Send Message"}

                  <ArrowUpRight
                    size={19}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </button>

              </div>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`
            max-w-4xl mx-auto mt-14
            text-center
            transition-all duration-1000 delay-300
            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
        >
          <p className="text-sm text-slate-600">
            Currently
            <span className="mx-2 text-emerald-400">
              ●
            </span>
            open to exciting opportunities and collaborations.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;