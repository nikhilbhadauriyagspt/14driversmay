import React from 'react';
import { FaCheck, FaShieldAlt, FaCogs, FaMicrochip } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white font-poppins overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Refined Image Side */}
          <div className="w-full lg:w-1/2 relative" data-aos="fade-right">
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm">
              <img
                src="/banner/about.jpg"
                alt="System Architecture"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>

              {/* Floating Stat Overlay */}
              <div className="absolute bottom-10 left-10 right-10">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl">
                  <p className="text-white text-lg font-medium leading-relaxed italic">
                    "Drivers are the essential translators that allow your software to speak the language of your hardware."
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-indigo-50 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>
          </div>

          {/* Clean Content Side */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full mb-6">
              <FaShieldAlt className="text-blue-600 text-xs" />
              <span className="text-blue-600 text-[11px] font-bold uppercase tracking-[2px]">System Authority</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3 leading-[1.8] tracking-tight">
              The Digital Bridge <span className="text-blue-600 ">Hardware Intelligence</span>
            </h2>

            <p className="text-slate-500 text-lg font-medium mb-5 leading-relaxed">
              Essential drivers are the core software components required for a computer to start and perform basic operations. They act as sophisticated translators, converting high-level OS commands into instructions that your hardware can execute with precision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 border border-slate-100">
                  <FaMicrochip className="text-xl" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-base mb-1">Architecture Sync</h4>
                  <p className="text-slate-400 text-xs font-medium">Direct data flow management between GPU, CPU, and RAM.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 border border-slate-100">
                  <FaCogs className="text-xl" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-base mb-1">Total Stability</h4>
                  <p className="text-slate-400 text-xs font-medium">Preventing system crashes, visual flickers, and boot failures.</p>
                </div>
              </div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {[
                "Chipset drivers for core motherboard logic",
                "Graphics drivers for high-definition rendering",
                "Network protocols for seamless connectivity",
                "Audio engines for precise sound processing"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-600 group">
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-[10px] text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                    <FaCheck />
                  </div>
                  <span className="text-[12px] font-semibold">{item}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;