import React from "react";
import {
    BookOpen,
    Monitor,
    ShieldCheck,
    Cpu,
    Wifi,
    Volume2,
    ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function WhyChooseUs() {
    const points = [
        {
            icon: <BookOpen />,
            title: "Simple Driver Learning",
            desc: "Understand what drivers do and why they matter for hardware communication.",
        },
        {
            icon: <Monitor />,
            title: "Beginner-Friendly Topics",
            desc: "Read clear explanations about display, audio, WiFi, printer, USB, and more.",
        },
        {
            icon: <ShieldCheck />,
            title: "Information-Only Resource",
            desc: "No service claims, no repair promises, just useful driver education content.",
        },
    ];

    return (
        <section className="w-full bg-white py-24 px-6 overflow-hidden font-[Poppins]">
            <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Image */}
                <div className="relative min-h-[760px] flex items-center justify-center">



                    <div className="relative z-10">
                        <img
                            src="/about/aboutmain_02.webp"
                            alt="Person learning about computer drivers"
                            width="760"
                            height="760"
                            className="relative z-10 w-full max-w-full h-[630px] object-cover object-center"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div>
                    <div className="inline-flex items-center gap-3 mb-5">
                        <span className="w-10 h-10 rounded-full border border-dashed border-[#2563eb] flex items-center justify-center text-[#2563eb]">
                            <Cpu size={18} />
                        </span>
                        <span className="text-[14px] font-semibold text-[#2563eb] uppercase tracking-wide">
                            Driver Learning Resource
                        </span>
                    </div>

                    <h2 className="text-[34px] md:text-[44px] font-semibold leading-tight text-[#202124] mb-6">
                        Learn driver basics in a simple and clear way.
                    </h2>

                    <div className="w-[180px] h-[2px] bg-[#2563eb] mb-8 rounded-full"></div>



                    <div className="grid grid-cols-1 gap-5 mb-9">
                        {points.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-[#dbe3ff] rounded-[10px] px-6 py-5 flex gap-5 items-start hover:shadow-[0_18px_45px_rgba(37,99,235,0.10)] transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#f3f7ff] text-[#2563eb] flex items-center justify-center shrink-0 group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300">
                                    {React.cloneElement(item.icon, { size: 22 })}
                                </div>

                                <div>
                                    <h3 className="text-[19px] font-semibold text-slate-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-[14px] leading-relaxed text-slate-500">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mb-9">
                        {[
                            { icon: <Wifi size={16} />, text: "Network" },
                            { icon: <Volume2 size={16} />, text: "Audio" },
                            { icon: <Monitor size={16} />, text: "Display" },
                            { icon: <Cpu size={16} />, text: "Chipset" },
                        ].map((item, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f5f8ff] text-[#2563eb] text-[13px] font-medium"
                            >
                                {item.icon}
                                {item.text}
                            </span>
                        ))}
                    </div>

                    <Link
                        to="/guides"
                        className="inline-flex items-center gap-3 h-[54px] px-8 rounded-full bg-[#2563eb] text-white text-[15px] font-semibold hover:bg-[#1d4ed8] transition"
                    >
                        Explore Driver Guides
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}