import React from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import FadeUp from "./fadeUp";

/**
 * ContactSection (Light Theme)
 * - Clean card design with soft backgrounds
 * - Gradient icons with hover scale animation
 * - Replaces location with phone number
 */

const contacts = [
  {
    id: "email",
    href: "mailto:ekegrant59@gmail.com",
    label: "Email",
    value: "ekegrant59@gmail.com",
    icon: Mail,
    gradient: "from-indigo-400 to-purple-500",
  },
  {
    id: "linkedin",
    href: "https://linkedin.com/in/grant-eke-215103244",
    label: "LinkedIn",
    value: "linkedin.com/in/grant-eke",
    icon: Linkedin,
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    id: "github",
    href: "https://github.com/ekegrant59",
    label: "GitHub",
    value: "github.com/ekegrant59",
    icon: Github,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    id: "phone",
    href: "tel:+2348065810333",
    label: "Phone",
    value: "+(234)8065810333",
    icon: Phone,
    gradient: "from-pink-400 to-rose-500",
  },
];

const ContactSection = () => {
  return (
    <FadeUp delay={0.3}>
      <div className="bg-white/10 backdrop-blur-xs border border-slate-200 rounded-2xl p-6 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            const isLink = contact.href.startsWith("http") || contact.href.startsWith("mailto") || contact.href.startsWith("tel");

            const Card = (
              <div
                className={`flex items-center space-x-3 p-4 lg:p-6 rounded-xl bg-slate-100 hover:bg-slate-200 transition-all duration-300 group`}
              >
                <div
                  className={`h-10 w-10 md:w-14 md:h-14 bg-gradient-to-br ${contact.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <Icon className="text-white" size={24} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-sm  text-slate-500">{contact.label}</p>
                  <p className="md:text-lg font-semibold text-slate-900 break-all">
                    {contact.value}
                  </p>
                </div>
              </div>
            );

            return isLink ? (
              <a
                key={contact.id}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
              >
                {Card}
              </a>
            ) : (
              <div key={contact.id}>{Card}</div>
            );
          })}
        </div>
      </div>
    </FadeUp>
  );
};

export default ContactSection;
