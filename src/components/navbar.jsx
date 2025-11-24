import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Linkedin, Github, Mail } from "lucide-react"; // 👈 new icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full flex justify-center items-center fixed pt-5 z-50">
      {/* Navbar */}
      <div
        className={`max-w-6xl w-[94%] backdrop-blur-sm bg-white/50 border border-white/40 shadow-md relative flex justify-center items-center z-50 ${
          isOpen ? "rounded-3xl" : "rounded-4xl"
        }`}
      >
        <nav
          className={`z-50 w-full ${
            isOpen ? "rounded-3xl" : "rounded-4xl"
          }`}
        >
          <div className="w-full mx-auto px-2 md:px-5">
            <div className="flex items-center justify-between h-16">
              {/* Left: Name */}
              <div className="flex items-center gap-2 ps-5">
                <img src="./grant.png" alt="" className="w-10 h-10"/>
                <p className="font-medium text-2xl text-gray-900">Eke Grant</p>
              </div>

              {/* Middle: Desktop Links */}
              <div className="flex items-center gap-2 lg:gap-5">
                <div className="flex justify-center items-center gap-2 max-md:hidden">
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="block px-1 max-lg:text-sm lg:px-3 font-medium cursor-pointer text-gray-700 hover:text-secondary transition-colors"
                  >
                    About
                  </ScrollLink>
                  <ScrollLink
                    to="skills"
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="block px-1 max-lg:text-sm lg:px-3 font-medium cursor-pointer text-gray-700 hover:text-secondary transition-colors"
                  >
                    Skills
                  </ScrollLink>
                  <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="block px-1 max-lg:text-sm lg:px-3 font-medium cursor-pointer text-gray-700 hover:text-secondary transition-colors"
                  >
                    Projects
                  </ScrollLink>
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="block px-1 max-lg:text-sm lg:px-3 font-medium cursor-pointer text-gray-700 hover:text-secondary transition-colors"
                  >
                    Contact
                  </ScrollLink>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="inline-flex items-center justify-center focus:outline-none md:hidden pe-5 cursor-pointer"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className={`${isOpen ? "hidden" : "block"} h-6 w-6 text-gray-800`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                  <svg
                    className={`${isOpen ? "block" : "hidden"} h-6 w-6 text-gray-800`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Right: Social Icons (Desktop) */}
              <div className="flex justify-center items-center gap-4 pe-5 max-md:hidden">
                <a
                  href="https://linkedin.com/in/grant-eke-215103244"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-secondary transition-colors"
                >
                  <Linkedin size={20} strokeWidth={2} />
                </a>
                <a
                  href="https://github.com/ekegrant59"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-secondary transition-colors"
                >
                  <Github size={20} strokeWidth={2} />
                </a>
                <a
                  href="mailto:ekegrant59@gmail.com"
                  className="text-gray-700 hover:text-secondary transition-colors"
                >
                  <Mail size={20} strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
  className={`
    overflow-hidden 
    transition-all duration-300
    px-5 text-gray-900 rounded-b-3xl 
    ${isOpen ? "max-h-96 opacity-100 translate-y-0 pb-5" : "max-h-0 opacity-0 -translate-y-3 pb-0"}
  `}
  id="mobile-menu"
>
            <div className="w-full rounded-2xl space-y-4 py-3">
              <ScrollLink
                to="about"
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="block px-3 text-lg font-semibold cursor-pointer hover:text-secondary transition-colors"
              >
                About
              </ScrollLink>
              <ScrollLink
                to="skills"
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="block px-3 text-lg font-semibold cursor-pointer hover:text-secondary transition-colors"
              >
                Skills
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="block px-3 text-lg font-semibold cursor-pointer hover:text-secondary transition-colors"
              >
                Projects
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="block px-3 text-lg font-semibold cursor-pointer hover:text-secondary transition-colors"
              >
                Contact
              </ScrollLink>

              {/* Social Links (Mobile) */}
              <div className="flex justify-start items-center gap-5 pt-3 px-3">
                <a
                  href="https://www.linkedin.com/in/grant-eke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-secondary transition-colors"
                >
                  <Linkedin size={22} strokeWidth={1.5} />
                </a>
                <a
                  href="https://github.com/ekegrant59"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-secondary transition-colors"
                >
                  <Github size={22} strokeWidth={1.5} />
                </a>
                <a
                  href="mailto:ekegrant59@gmail.com"
                  className="text-gray-700 hover:text-secondary transition-colors"
                >
                  <Mail size={22} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
