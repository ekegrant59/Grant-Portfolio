import React, { useState, useEffect, useCallback } from "react";
import { User, ArrowRight, Github, X, ChevronLeft, ChevronRight, Image } from "lucide-react";
import FadeUp from "./fadeUp";
import FlipDown from "./FlipDown";

/**
 * ProjectsGrid with modal gallery
 *
 * - Click "View Project" to open the gallery modal for that project
 * - Modal supports prev/next, thumbnails, keyboard navigation, and click-to-close
 * - Add more images to the `gallery` array for each project
 */

const projects = [
  {
    id: "project-1",
    title: "Streamlivr",
    image:
      "./streamlivr1.png",
    gallery: [
      "./streamlivr1.png","./streamlivr2.png","./streamlivr3.png",
    ],
    alt: "Streamlivr – live streaming and content monetization platform with real-time chat, creator analytics, and modern web3 design",
    categories: [
      { label: "Landing Page", color: "bg-blue-100 text-blue-700" },
      { label: "Web3", color: "bg-sky-100 text-sky-700" },
      { label: "Streaming", color: "bg-cyan-100 text-cyan-700" },
    ],
    description:
      "Full-stack live streaming platform that empowers creators to broadcast, engage, and earn seamlessly. Built with modern Web3 integrations, it combines real-time streaming, audience interaction, and creator analytics into one elegant, responsive experience.",
    tech: ["React", "Next.js", "Tailwind", "Typescript"],
    role: "Frontend Developer",
    roleColor: "text-indigo-600",
    projectUrl: "https://streamlivr.com",
    codeUrl: "https://github.com/streamlivr/Streamlivr-website",
    accent: "indigo",
  },
  {
    id: "project-2",
    title: "Raphina AI",
    image:
      "./raphina5.png",
    gallery: [
      "./raphina5.png",  "./raphina6.png", "./raphina7.png",  "./raphina4.PNG", "./raphina1.PNG", "./raphina2.PNG", "./raphina3.PNG"
    ],
    alt: "Raphina AI – intelligent medical assistant platform with image-based diagnosis and real-time chat support.",
    categories: [
      { label: "Mobile App", color: "bg-green-100 text-green-700" },
      { label: "Health & Wellness", color: "bg-lime-100 text-lime-700" },
      { label: "Web App", color: "bg-emerald-100 text-emerald-700" },
    ],
    description:
      "Cross-platform mobile and web healthcare assistant app that uses artificial intelligence to analyze medical images, provide accurate diagnostic insights, and engage users through an interactive chat interface",
    tech: ["React Native", "React", "Node.js", "MongoDB", "Typescript"],
    role: "Full-Stack Developer",
    roleColor: "text-purple-600",
    projectUrl: "https://raphinaai.com",
    codeUrl: "https://github.com/Raphina-AI/raphina-website",
    accent: "purple",
  },
  {
    id: "project-3",
    title: "Lemon Protocol",
    image:
      "./lemon3.png",
    gallery: [
      "./lemon1.png", "./lemon2.png","./lemon3.png","./lemon4.png","./lemon5.png",
    ],
    alt: "Pioneer liquid staking protocol on the lisk ecosystem",
    categories: [
     { label: "Web App", color: "bg-yellow-100 text-yellow-700" },
{ label: "Web3", color: "bg-amber-100 text-amber-700" },
{ label: "DeFi", color: "bg-lime-100 text-lime-700" },

    ],
    description:
      "Pioneer liquid staking protocol built on the Lisk ecosystem, enabling users to stake their LSK tokens while maintaining full liquidity. It introduces yield-bearing liquid assets, enhancing capital efficiency and DeFi participation across Lisk.",
    tech: ["Typescript", "Web3.js", "React", "Solidity"],
    role: "Frontend & Web3 Developer",
    roleColor: "text-cyan-600",
    projectUrl: "#",
    codeUrl: "https://github.com/LemonProtocol-xyz/Lemon",
    accent: "cyan",
  },
  {
    id: "project-4",
    title: "Academify",
    image:
      "./academify1.png",
    gallery: [
      "./academify1.png", "./academify2.png", "./academify3.png", "./academify4.png", "./academify5.png",
    ],
    alt: "Academify - School management platform",
    categories: [
     { label: "Web App", color: "bg-blue-100 text-blue-800" },
     { label: "Educational", color: "bg-indigo-100 text-indigo-800" },
    ],
    description:
      "School management platform designed to enhance communication and transparency between tertiary institutions, students, and parents. It provides real-time access to academic performance, attendance tracking, and institutional announcements.",
    tech: ["Node.js", "MongoDB", "React", "Material UI"],
    role: "Full Stack Developer",
    roleColor: "text-pink-600",
    projectUrl: "https://myacademify.vercel.app/",
    codeUrl: "https://github.com/TheAce74/Academify",
    accent: "pink",
  },
  {
    id: "project-5",
    title: "Senti Wallet",
    image:
      "./senti1.png",
    gallery: [
      "./senti1.png", "./senti2.png", "./senti3.png",
    ],
    alt: "Senti Wallet – intuitive Web3 crypto wallet interface with secure asset management",
    categories: [
      { label: "Web App", color: "bg-sky-100 text-sky-700" },
      { label: "AI", color: "bg-cyan-100 text-cyan-700" },
      { label: "Web3", color: "bg-blue-100 text-blue-700" },
    ],
    description:
      "Modern, user-friendly Web3 wallet designed for secure crypto asset management with inbuilt AI capabilities to get the best value out of your stored crypto.",
    tech: ["Next.js", "Typescript", "Solana Web3.js"],
    role: "Lead Frontend Developer",
    roleColor: "text-yellow-600",
    projectUrl: "#",
    codeUrl: "#",
    accent: "red",
  },
  {
    id: "project-6",
    title: "Streamlivr Foundation",
    image:
      "./foundation1.png",
    gallery: [
      "./foundation1.png", "./foundation2.png",
    ],
    alt: "Streamlivr Foundation",
    categories: [
      { label: "Landing Page", color: "bg-orange-100 text-orange-700" },
      { label: "DAO", color: "bg-amber-100 text-amber-700" },
      { label: "Web3", color: "bg-yellow-100 text-yellow-700" },
    ],
    description:
      "A pioneering force at the intersection of technology, creativity and community empowerment.",
    tech: ["React", "Tailwind"],
    role: "Frontend Developer",
    roleColor: "text-blue-600",
    projectUrl: "#",
    codeUrl: "#",
    accent: "blue",
  },
];

const ProjectsGrid = () => {
  // modal state
  const [isOpen, setIsOpen] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openModal = (projectIndex, imageIndex = 0) => {
    setActiveProjectIndex(projectIndex);
    setActiveImageIndex(imageIndex);
    setIsOpen(true);
    // prevent body scroll
    document.body.style.overflow = "hidden";
  };

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // restore body scroll
    document.body.style.overflow = "";
  }, []);

  const nextImage = useCallback(() => {
    const gallery = projects[activeProjectIndex].gallery || [];
    setActiveImageIndex((prev) => (prev + 1) % gallery.length);
  }, [activeProjectIndex]);

  const prevImage = useCallback(() => {
    const gallery = projects[activeProjectIndex].gallery || [];
    setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  }, [activeProjectIndex]);

  // keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal, nextImage, prevImage]);

  // current gallery and image url
  const currentGallery = projects[activeProjectIndex]?.gallery || [];
  const currentImage = currentGallery[activeImageIndex] || "";

  const isDesktop = window.innerWidth >= 1024;

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl my-10 h-full lg:p-5">
        {projects.map((p, index) => (
          <FlipDown delay={ (isDesktop && index % 2 === 0 ) ? 0 : (isDesktop ) ? 0.8 : 0}>
            <article
              key={p.id}
              id={p.id}
              className="group bg-white/80 h-full backdrop-blur-sm border border-slate-200 rounded-2xl overflow-hidden
                        hover:border-slate-300 transform transition-all duration-300 hover:shadow-lg hover:shadow-sky-200/40 hover:scale-[1.02]"
              aria-labelledby={`${p.id}-title`}
            > 
              {/* Image */}
              <div className="h-64 overflow-hidden relative bg-slate-50">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  onClick={() => openModal(index, 0)}
                />
                {/* <div className="absolute inset-0 bg-linear-to-t from-white/20 via-white/10 to-transparent pointer-events-none" /> */}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex flex-wrap items-center space-x-2 space-y-2 mb-4">
                  {p.categories.map((c, i) => (
                    <span key={i} className={`px-3 py-1 text-sm rounded-full ${c.color}`}>
                      {c.label}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-3">
                  <h3 id={`${p.id}-title`} className="text-2xl font-bold text-slate-900">
                    {p.title}
                  </h3>

                  {p.projectUrl != "#" && (
                    <div>
                      <a
                        href={p.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-slate-700 hover:text-slate-900 transition-colors text-sm px-3 py-2 rounded-full bg-slate-200 border border-slate-300"
                      >
                        View Project
                        <ArrowRight size={14} strokeWidth={1.5} className="ml-2" />
                      </a>
                    </div>
                  )}
                </div>

                <p className="text-slate-600 mb-6">{p.description}</p>

                <div className="mb-6">
                  <p className="text-sm max-sm:text-xs text-slate-600 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-secondary/10 text-slate-900 text-xs rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex max-md:flex-col gap-2 items-center max-md:items-start justify-between">
                  <div className="flex justify-center gap-2">
                    <div className="text-sm text-slate-800 flex items-center">
                      <User size={16} strokeWidth={1.4} className={`${p.roleColor} mr-2`} />
                      {p.role}
                    </div>
                  </div>



                  <div className="flex items-center space-x-4">
                    {/* open gallery modal */}
                    <button
                      onClick={() => openModal(index, 0)}
                      className="inline-flex items-center cursor-pointer text-white text-sm px-4 py-2 rounded-full bg-linear-to-r from-secondary to-secondary/70 shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <Image size={14} strokeWidth={2} className="mr-2" />
                      Gallery
                    </button>

                    {/* View Code */}
                    <a
                      href={p.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-slate-700 hover:text-slate-900 transition-colors text-sm px-3 py-2 rounded-full bg-slate-200 border border-slate-300"
                    >
                      <Github size={14} strokeWidth={1.5} className="mr-2" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </FlipDown>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Project gallery"
        >
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          />

          {/* modal content */}
          <div className="relative z-60 w-full max-w-5xl mx-2 lg:mx-0 bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <h4 className="text-lg font-semibold text-slate-900">{projects[activeProjectIndex].title}</h4>
                <span className="text-sm text-slate-500">{activeImageIndex + 1}/{currentGallery.length}</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={prevImage}
                  className="p-2 rounded-md hover:bg-slate-100 transition"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="p-2 rounded-md hover:bg-slate-100 transition"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-md hover:bg-slate-100 transition"
                  aria-label="Close gallery"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* image area */}
            <div className="bg-slate-50 flex items-center justify-center h-[60vh] lg:h-[70vh]">
              {currentImage ? (
                <img
                  src={currentImage}
                  alt={`${projects[activeProjectIndex].title} screenshot ${activeImageIndex + 1}`}
                  className="max-h-full max-w-full object-contain transition-transform duration-400"
                />
              ) : (
                <div className="text-slate-500">No image</div>
              )}
            </div>

            {/* thumbnails */}
            {currentGallery.length > 1 && (
              <div className="p-4 border-t border-slate-100 bg-white flex items-center gap-3 overflow-x-auto">
                {currentGallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`shrink-0 w-20 h-12 rounded-md overflow-hidden border ${i === activeImageIndex ? "border-sky-400 ring-2 ring-sky-200" : "border-slate-200"} transition-all`}
                  >
                    <img src={img} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsGrid;
