import React from "react";
import { Sparkles, CheckCircle } from "lucide-react";

const InfoMarquee = () => {
  const messages = [
    "Simple guides for common driver topics",
    "Learn about audio, WiFi, display, USB and printer basics",
    "Understand system topics in easy language",
    "No tech support — only educational driver information",
    "Helpful tips for driver data, device info and connection topics",
    "Explore guides for laptop and desktop driver basics",
    "Easy learning for software driver topics",
    "Read clear steps to understand system settings"
  ];

  return (
    <div className="bg-gradient-to-r from-[#087dcc] to-[#071b85] py-5 overflow-hidden border-y border-white/5 shadow-inner">
      <div className="relative flex overflow-x-hidden group">
        <div className="py-1 animate-marquee whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
          {messages.map((msg, i) => (
            <div key={i} className="flex items-center mx-6">
              <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mr-3 border border-white/10">
                <Sparkles size={14} className="text-blue-200" />
              </div>
              <span className="text-sm md:text-[15px] font-medium text-white/95 tracking-tight">
                {msg}
              </span>
              <div className="ml-10 w-[1px] h-4 bg-white/20"></div>
            </div>
          ))}
        </div>

        <div className="absolute top-0 py-1 animate-marquee2 whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
          {messages.map((msg, i) => (
            <div key={i} className="flex items-center mx-6">
              <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mr-3 border border-white/10">
                <Sparkles size={14} className="text-blue-200" />
              </div>
              <span className="text-sm md:text-[15px] font-medium text-white/95 tracking-tight">
                {msg}
              </span>
              <div className="ml-10 w-[1px] h-4 bg-white/20"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 50s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default InfoMarquee;
