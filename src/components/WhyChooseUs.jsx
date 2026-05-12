import React, { useState } from "react";
import {
    BookOpen,
    Monitor,
    ShieldCheck,
    ArrowRight,
    Play,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function WhyChooseUs() {
    const [active, setActive] = useState(0);

    const points = [
        {
            icon: <BookOpen />,
            title: "Simple Driver Learning",
            desc: "Understand what drivers do and how they connect hardware with your system.",
        },
        {
            icon: <Monitor />,
            title: "Beginner-Friendly Topics",
            desc: "Read clear explanations about display, audio, WiFi, printer, USB, and more.",
        },
        {
            icon: <ShieldCheck />,
            title: "Information-Only Resource",
            desc: "No repair claims, no remote access, no tech support — only educational driver content.",
        },
    ];

    return (
        <section className="relative w-full bg-[#EAF0FF] py-24 px-6 overflow-hidden font-[Poppins]">
            {/* Background Shapes */}
            <img
                src="/shape/shape-left.avif"
                alt=""
                className="absolute left-0 top-0 w-[260px] opacity-70 pointer-events-none"
            />
            <img
                src="/shape/shape-right.avif"
                alt=""
                className="absolute right-0 bottom-0 w-[260px] opacity-70 pointer-events-none"
            />

            <div className="relative max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
                {/* Left Process */}
                <div className="space-y-14">
                    {points.map((item, index) => {
                        const isActive = active === index;

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setActive(index)}
                                className="grid grid-cols-[140px_1fr] items-center gap-8 cursor-pointer"
                            >
                                <div className="relative flex items-center justify-center">
                                    <div
                                        className={`w-[104px] h-[104px] rounded-full flex items-center justify-center transition-all duration-300 ${isActive
                                            ? "bg-[#315BFF] text-white"
                                            : "bg-white text-[#315BFF]"
                                            }`}
                                    >
                                        {React.cloneElement(item.icon, {
                                            size: 42,
                                            strokeWidth: 1.6,
                                        })}
                                    </div>

                                    <span className="absolute left-[105px] top-1/2 w-[70px] border-t border-dashed border-[#315BFF]/40" />

                                    <span
                                        className={`absolute -right-[48px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold transition-all duration-300 ${isActive
                                            ? "bg-[#315BFF] text-white"
                                            : "bg-white text-[#315BFF]"
                                            }`}
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <div
                                    className={`rounded-[12px] px-10 py-8 transition-all duration-300 ${isActive
                                        ? "bg-[#315BFF] text-white shadow-[0_18px_50px_rgba(49,91,255,0.25)]"
                                        : "bg-white text-[#071B34] shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
                                        }`}
                                >
                                    <h3
                                        className={`text-[24px] font-semibold mb-4 ${isActive ? "text-white" : "text-[#071B34]"
                                            }`}
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className={`text-[16px] leading-7 ${isActive ? "text-white/85" : "text-[#071B34]/80"
                                            }`}
                                    >
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Right Content */}
                <div>
                    <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#315BFF] text-[#315BFF] text-[13px] font-semibold uppercase tracking-wider mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#315BFF]" />
                        Our Process
                    </p>

                    <h2 className="text-[38px] axl:text-[56px] leading-tight font-semibold text-[#071B34] mb-7">
                        Learn Drivers With a{" "}
                        <span className="text-[#315BFF]">Simple Process.</span>
                    </h2>

                    <p className="text-[17px] leading-8 text-[#071B34]/80 max-w-[560px] mb-10">
                        Explore driver topics step by step, understand common device terms,
                        and keep your hardware knowledge clear without any support claims.
                    </p>

                    <Link
                        to="/guides"
                        className="inline-flex items-center gap-3 h-[54px] px-7 rounded-full bg-[#315BFF] text-white text-[15px] font-semibold hover:bg-[#1DA7F2] transition mb-10"
                    >
                        Explore Guides
                        <span className="w-8 h-8 rounded-full bg-white text-[#315BFF] flex items-center justify-center">
                            <ArrowRight size={17} />
                        </span>
                    </Link>

                    <div className="relative max-w-[420px] rounded-[10px] overflow-hidden">
                        <img
                            src="/about/aboutmain_02.webp"
                            alt="Person learning about computer drivers"
                            className="w-full h-[220px] object-cover"
                        />


                    </div>
                </div>
            </div>
        </section>
    );
}