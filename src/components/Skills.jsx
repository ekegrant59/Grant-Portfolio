import React, { useEffect, useRef, useState } from "react";
import { Code, Server, Smartphone, Link as LinkIcon } from "lucide-react";

const skillsData = [
  {
    id: "frontend-skills",
    title: "Frontend",
    icon: Code,
    iconBg: "bg-orange-100 text-orange-600",
    barColor: "bg-orange-500",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 100 },
    ],
  },
  {
    id: "backend-skills",
    title: "Backend",
    icon: Server,
    iconBg: "bg-blue-100 text-blue-600",
    barColor: "bg-blue-500",
    items: [
      { name: "Node.js", level: 98 },
      { name: "Python", level: 75 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 90 },
    ],
  },
  {
    id: "mobile-skills",
    title: "Mobile",
    icon: Smartphone,
    iconBg: "bg-green-100 text-green-600",
    barColor: "bg-green-500",
    items: [
      { name: "React Native", level: 90 },
      { name: "Flutter", level: 60 },
      { name: "iOS Development", level: 95 },
      { name: "Android", level: 90 },
    ],
  },
  {
    id: "web3-skills",
    title: "Web3",
    icon: LinkIcon,
    iconBg: "bg-purple-100 text-purple-600",
    barColor: "bg-purple-500",
    items: [
      { name: "Solidity", level: 70 },
      { name: "Web3.js", level: 88 },
      { name: "Smart Contracts", level: 60 },
      { name: "DeFi Protocols", level: 95 },
    ],
  },
];

const SkillsGrid = () => {
  // Keep track of which card ids are visible
  const [visibleIds, setVisibleIds] = useState(() => new Set());
  const containerRef = useRef(null);
  const observersRef = useRef(new Map()); // store observers if needed

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll("[data-skill-section]");
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // Use a Set copy to trigger state updates immutably
        setVisibleIds((prev) => {
          const next = new Set(prev);
          let changed = false;
          entries.forEach((entry) => {
            const id = entry.target.getAttribute("data-skill-section");
            if (!id) return;
            if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
              if (!next.has(id)) {
                next.add(id);
                changed = true;
              }
            }
            // If you want bars to retract when out of view, uncomment:÷
            else {
              if (next.has(id)) { next.delete(id); changed = true; }
            }
          });
          return changed ? next : prev;
        });
      },
      {
        root: null,
        threshold: [0.25], // 25% visible
        rootMargin: "0px 0px -5% 0px",
      }
    );

    sections.forEach((s) => io.observe(s));
    observersRef.current.set("mainSkillsObserver", io);

    return () => {
      // cleanup
      const o = observersRef.current.get("mainSkillsObserver");
      if (o) {
        o.disconnect();
        observersRef.current.delete("mainSkillsObserver");
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10 max-w-6xl w-full">
      {skillsData.map((group) => {
        const Icon = group.icon;
        const isVisible = visibleIds.has(group.id);

        return (
          <section
            key={group.id}
            id={group.id}
            data-skill-section={group.id}
            className="group bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-xl p-4 shadow-sm 
                       transform transition-all duration-300 ease-in-out 
                       hover:scale-[1.03] hover:shadow-lg hover:shadow-secondary/30"
            aria-labelledby={`${group.id}-title`}
          >
            {/* Icon */}
            <div
              className={`w-12 h-12 ${group.iconBg} rounded-lg flex items-center justify-center mb-2 
                          group-hover:shadow-[0_0_15px_rgba(0,224,255,0.2)] transition-shadow duration-300`}
            >
              <Icon size={20} strokeWidth={1.5} />
            </div>

            {/* Title */}
            <h3 id={`${group.id}-title`} className="text-xl font-bold text-gray-900 mb-6">
              {group.title}
            </h3>

            {/* Skills */}
            <div className="space-y-3">
              {group.items.map((skill) => (
                <div key={skill.name} className="flex justify-between items-center mb-2">
                  <div >
                    <span className="text-gray-700">{skill.name}</span>
                  </div>

                  <div className="w-36 md:w-22 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-2 rounded-full ${group.barColor} transition-all duration-1000 ease-out`}
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                      }}
                      aria-hidden
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default SkillsGrid;
