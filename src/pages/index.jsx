import React from 'react'
import NavBar from '../components/navbar'
import Button from '../components/Button'
import InfoCards from '../components/InfoCards'
import SkillsGrid from '../components/Skills'
import ProjectsGrid from '../components/ProjectsGrid'
import ContactSection from '../components/ContactSection'
import { Mail, Download, Linkedin, Github } from "lucide-react";
import FadeUp from '../components/fadeUp'
import FlipDown from '../components/FlipDown'

const Index = () => {
  return (
    <div className="h-full w-full bg-[#F4F5F7] bg-fixed bg-center bg-cover text-primary relative">
      <NavBar />

      {/* 🟦 HERO SECTION */}
      <section className="relative flex items-center w-full bg-[url('./background4.jpg')] bg-cover bg-center px-4 pt-32 lg:pt-44 pb-20 lg:pb-32 overflow-hidden">
        
        {/* 💡 Gradient overlay to fade hero into background */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-b from-transparent via-transparent to-[#F4F5F7] pointer-events-none z-10"></div>

        <div className="flex max-md:flex-col gap-15 justify-between items-center flex-1 h-full px-2 md:px-6 w-full max-w-7xl mx-auto relative z-20">
          <FadeUp styles={"w-full"}>
            <div className="space-y-3 max-md:flex max-md:text-center flex-col justify-center items-center">
              <p className="text-secondary border w-fit border-secondary px-4 py-2 rounded-full max-md:text-xs">
                Full-Stack Web & Mobile Developer
              </p>
              <p className="font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Crafting Digital Experiences That Matter
              </p>
              <p className="md:text-xl font-light">
                Transforming ideas into elegant, scalable solutions across web, mobile, and emerging technologies.
              </p>
              <div className="flex items-center gap-4">
                <Button 
                  text="View my Works" 
                  onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
                />

                <Button 
                  text="Contact Me" 
                  color="dark"
                  onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                />
              </div>
            </div>
          </FadeUp>

          <FlipDown delay={1}>
            <div className="relative w-72 h-72 md:w-80 md:h-80 xl:w-96 xl:h-96 animate-float">
              <div className="absolute inset-0 bg-linear-to-br from-secondary/30 to-[#91B4AE]/70 rounded-3xl -rotate-6"></div>
              <div className="absolute inset-0 bg-linear-to-br from-[#558B71]/50 to-[#111185]/50 rounded-3xl rotate-6"></div>
              <img src="./grant-pic.jpg" alt="" className="rounded-2xl absolute inset-2 object-cover" />
            </div>
          </FlipDown>
        </div>
      </section>

      {/* 🟩 ABOUT SECTION */}
      <section className="flex flex-col justify-center items-center gap-5 py-10 my-10 px-3 md:px-6 overflow-hidden" id="about">
        <p className="text-center text-secondary text-4xl lg:text-5xl font-semibold">About Me</p>
        <p className="lg:text-xl max-w-xl text-center">
          Passionate about creating innovative digital solutions with 5+ years of experience in full-stack development and design.
        </p>
        <InfoCards />
      </section>

      {/* 🟨 SKILLS SECTION */}
      <section className="relative flex flex-col justify-center items-center gap-5 py-20 lg:py-20 my-10 px-3 md:px-6 bg-[#eaeced] overflow-hidden" id="skills">
        <p className="text-center text-secondary text-4xl lg:text-5xl font-semibold">Technical Skills</p>
        <p className="lg:text-xl max-w-xl text-center">
          Comprehensive expertise across the full development stack.
        </p>
        <SkillsGrid />

         <div className="absolute bottom-0 left-0 right-0 h-12 lg:h-24 bg-linear-to-b from-transparent to-[#F4F5F7] pointer-events-none z-10"></div>
         <div className="absolute top-0 left-0 right-0 h-12 lg:h-24 bg-linear-to-t from-transparent to-[#F4F5F7] pointer-events-none z-10"></div>
      </section>

      {/* 🟥 PROJECTS SECTION */}
      <section className="flex flex-col justify-center items-center gap-5 py-20 my-10 px-3 md:px-6 overflow-hidden" id="projects">
        <p className="text-center text-secondary text-4xl lg:text-5xl font-semibold">Featured Projects</p>
        <p className="lg:text-xl max-w-xl text-center">
          Showcasing my expertise in full-stack development and innovation.
        </p>
        <ProjectsGrid />
      </section>

      {/* CONTACT SECTION */}
      <section className="relative flex flex-col justify-center items-center gap-7 py-20 lg:py-20 mt-10 px-6 bg-url('./brick.jpg')] bg-center bg-cover bg-fixed" id="contact">
          <p className="text-center text-secondary text-4xl lg:text-5xl font-semibold">Let's Work Together</p>
          <p className="lg:text-xl max-w-xl text-center">
              Ready to bring your ideas to life? I'm available for freelance projects and full-time opportunities.
          </p>
          <ContactSection />
          <div className="flex max-sm:flex-col justify-center items-center md:space-x-4 gap-y-4 mt-5">
              {/* ✉️ Send Message */}
              <button
                  onClick={() => window.open("https://wa.link/5ll2jv", "_blank", "noopener,noreferrer")}
                  className="flex items-center cursor-pointer bg-linear-to-r from-secondary to-secondary/70 text-white px-8 py-3 rounded-lg font-medium
              hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg max-sm:text-sm"
              >
                  <Mail size={18} strokeWidth={1.8} className="mr-2" />
                  Send Message
              </button>

              {/* 📄 Download Resume */}
              <a
                  href="/Grant's_Resume.pdf"
                  download
                  className="flex items-center border border-slate-500 text-slate-700 px-8 py-3 rounded-lg font-medium
              hover:border-slate-400 hover:bg-slate-100 transition-colors duration-300 max-sm:text-sm"
              >
                  <Download size={18} strokeWidth={1.8} className="mr-2" />
                  Download Resume
              </a>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-12 lg:h-24 bg-linear-to-b from-transparent to-[#F4F5F7] pointer-events-none z-10"></div>
          <div className="absolute top-0 left-0 right-0 h-12 lg:h-24 bg-linear-to-t from-transparent to-[#F4F5F7] pointer-events-none z-10"></div>
      </section>

      {/* FOOTER */}
      <footer className='flex max-sm:flex-col gap-2 justify-between items-center py-10 max-w-7xl px-6 mx-auto'>
        <div className='text-black'>&copy; 2024 Eke Grant. All rights reserved.</div>
        <div className="flex justify-start items-center gap-5">
                <a
                  href="https://linkedin.com/in/grant-eke-215103244"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-secondary transition-colors"
                >
                  <Linkedin size={22} strokeWidth={1.5} />
                </a>
                <a
                  href="https://github.com/ekegrant59"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-secondary transition-colors"
                >
                  <Github size={22} strokeWidth={1.5} />
                </a>
                <a
                  href="mailto:ekegrant59@gmail.com"
                  className="text-gray-900 hover:text-secondary transition-colors"
                >
                  <Mail size={22} strokeWidth={1.5} />
                </a>
              </div>
      </footer>
    </div>
  )
}

export default Index
