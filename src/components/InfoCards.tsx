import React from "react";
import {
  GraduationCap,
  Award,
  Briefcase,
  CheckCircle,
} from "lucide-react";
import FadeUp from "./fadeUp";

/**
 * Data-driven InfoCards component tailored for a light futuristic theme.
 * - Cards are driven by `cards` array (map over it)
 * - Uses Tailwind utilities for glassy light background, gradients, and hover animations
 * - Icons are from lucide-react and provided per-card via the `icon` field
 */

const cards = [
  {
    id: "education-card",
    title: "Education",
    icon: GraduationCap,
    iconBg: "from-indigo-500 to-purple-600",
    entries: [
      {
        title: "B. Tech. Computer Science",
        subtitle: "Federal University of Technology, Owerri",
        date: "2020 - 2025",
      }
    ],
  },
  {
    id: "certifications-card",
    title: "Certifications",
    icon: Award,
    iconBg: "from-purple-500 to-pink-600",
    entries: [
      {
        title: "Web Design and Development with Node.js Certificate",
        subtitle: "Loctech Training Institute ",
        date: "2022",
      },
      {
        title: "Google Mobile Web Specialist",
        subtitle: "Google",
        date: "2023",
      }
    ],
  },
  {
    id: "experience-card",
    title: "Experience",
    icon: Briefcase,
    iconBg: "from-pink-500 to-rose-600",
    entries: [
      {
        title: "Full-Stack Web and Mobile Developer",
        subtitle: "Raphina AI",
        date: "2024 - Present",
      },
      {
        title: "Senior Frontend Developer",
        subtitle: "Streamlivr Corp",
        date: "2022 - 2025",
      },
    ],
  },
];

const InfoCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-10 max-w-6xl">
      {cards.map((card, index) => {
        const Icon = card.icon;
        const isDesktop = window.innerWidth >= 1024;

        const delay = () => {
          if (isDesktop){
            return (index * 0.9);
          } else {
            return 0.5
          }
        }
        return (
          <FadeUp styles={"h-full"} delay={delay()}>
            <article
              key={card.id}
              id={card.id}
              className="group bg-white/60 backdrop-blur-sm border h-full border-slate-200/60 rounded-2xl p-8
                        hover:shadow-lg hover:shadow-secondary/40 transform hover:-translate-y-1 transition-all duration-300"
              aria-labelledby={`${card.id}-title`}
            >
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6
                            bg-gradient-to-br ${card.iconBg} text-white shadow-md
                            group-hover:shadow-[0_20px_40px_rgba(0,120,255,0.12)] transition-shadow duration-300`}
                aria-hidden
              >
                <Icon size={28} strokeWidth={1.5} />
              </div>

              <h3
                id={`${card.id}-title`}
                className="text-2xl font-semibold mb-4 text-slate-900"
              >
                {card.title}
              </h3>

              <div >
                  {card.id !== "certifications-card" && (
                      <div className="space-y-4">
                          {card.entries.map((e, idx) => (
                              <div
                                  key={idx}
                                  className={`p-0 ${idx !== 0 ? "pt-4 border-t border-slate-200/40" : ""}`}
                              >
                                  <h4 className="text-lg font-medium text-secondary">{e.title}</h4>
                                  <p className="text-slate-600">{e.subtitle}</p>
                                  <p className="text-sm text-slate-500">{e.date}</p>
                              </div>
                          ))}
                      </div>

                  )}
                

                {/* For the certs card, show a small list style with check icons */}
                {card.id === "certifications-card" && (
                  <div className="mt-2 space-y-3">
                    {card.entries.map((c, i) => (
                      <div key={`cert-${i}`} className="flex items-start space-x-3">
                        <CheckCircle
                          size={18}
                          strokeWidth={1.5}
                          className="text-secondary mt-1 flex-shrink-0"
                        />
                        <div>
                          <p className="text-slate-700 font-medium">{c.title}</p>
                          <p className="text-sm text-slate-500">{c.subtitle}, {c.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </FadeUp>
        );
      })}
    </div>
  );
};

export default InfoCards;
