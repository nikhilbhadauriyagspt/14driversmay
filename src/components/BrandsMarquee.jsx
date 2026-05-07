import React from "react";
import { Sparkles, CheckCircle, BookOpen, Cpu, Wifi } from "lucide-react";

const InfoMarquee = () => {
  const messages = [
    "Simple guides for common driver topics",
    "Learn about audio, WiFi, display, USB and printer basics",
    "Understand system topics in easy language",
    "No tech support — only educational driver information",
    "Helpful tips for driver data, device info and connection topics",
    "Explore guides for laptop and desktop driver basics",
    "Easy learning for software driver topics",
    "Read clear steps to understand system settings",
  ];

  const icons = [BookOpen, Cpu, Wifi, CheckCircle, Sparkles];

  return (
    <section className="relative w-full overflow-hidden bg-[#F5FAFF] border-y border-blue-100 py-5 font-['Poppins']">
      {/* soft background */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute left-0 top-0 h-full w-[260px] bg-gradient-to-r from-blue-100/80 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-[260px] bg-gradient-to-l from-blue-100/80 to-transparent" />
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex w-max animate-marquee items-center whitespace-nowrap">
          {[...messages, ...messages].map((msg, i) => {
            const Icon = icons[i % icons.length];

            return (
              <div
                key={i}
                className="mx-3 flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-[0_8px_25px_rgba(37,99,235,0.08)] border border-blue-100"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0675DB] text-white">
                  <Icon size={16} />
                </span>

                <span className="text-[14px] md:text-[15px] font-semibold text-slate-700">
                  {msg}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 42s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default InfoMarquee;