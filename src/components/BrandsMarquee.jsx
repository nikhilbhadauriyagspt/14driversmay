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

  return (
    <section className="relative w-full overflow-hidden bg-white border-y border-slate-100 py-6 ">
      <div className="relative flex overflow-hidden">
        <div className="flex w-max animate-marquee items-center whitespace-nowrap">
          {[...messages, ...messages].map((msg, i) => (
            <div
              key={i}
              className="flex items-center group cursor-default"
            >
              {/* Decorative Gradient Line */}
              <div className="mx-8 h-[1px] w-12 bg-gradient-to-r from-[#CF00FE]/40 to-[#005DE0]/40 group-hover:from-[#CF00FE] group-hover:to-[#005DE0] transition-all duration-500"></div>

              <span className="text-[13px] md:text-[14px] font-medium text-slate-500 uppercase tracking-[0.15em] group-hover:text-slate-900 transition-colors">
                {msg}
              </span>

              {/* Minimalist Dot Separator */}
              <div className="ml-8 w-1.5 h-1.5 rounded-full border border-slate-200"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 60s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default InfoMarquee;