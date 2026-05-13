import React, { useState } from "react";
import {
    BookOpen,
    Monitor,
    ShieldCheck,
    ArrowRight,
    Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function WhyChooseUs() {
    const [active, setActive] = useState(0);

    const points = [
        {
            icon: <BookOpen />,
            title: "Start With Basics",
            desc: "Learn what drivers are and why devices need them to communicate with your computer.",
        },
        {
            icon: <Monitor />,
            title: "Explore Device Topics",
            desc: "Understand audio, display, Wi-Fi, printer, USB, Bluetooth, chipset, and more.",
        },
        {
            icon: <ShieldCheck />,
            title: "Read Safe Information",
            desc: "Educational content only — no repair claims, remote access, or installation service promises.",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-[#F5F8FF] px-6 py-24 font-[Poppins]">
            <div className="absolute left-0 top-0 h-[320px] w-[320px] rounded-full bg-blue-100/50 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-cyan-100/50 blur-3xl" />

            <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
                {/* LEFT CONTENT */}
                <div>
                    <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-[13px] font-semibold uppercase tracking-wider text-blue-600">
                        <span className="h-2 w-2 rounded-full bg-blue-600" />
                        Learning Method
                    </p>

                    <h2 className="mb-7 max-w-[620px] text-[38px] font-semibold leading-tight text-[#071B34] md:text-[45px]">
                        A simple way to understand{" "}
                        <span className="text-blue-600">driver topics.</span>
                    </h2>

                    <p className="mb-9 max-w-[600px] text-[16px] leading-8 text-slate-600">
                        We organize driver learning into clear steps, so everyday users can
                        understand common device behavior without confusing technical words.
                    </p>

                    <Link
                        to="/guides"
                        className="mb-10 inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-[15px] font-semibold text-white transition hover:bg-[#071B34]"
                    >
                        Explore Guides
                        <ArrowRight size={18} />
                    </Link>

                    <div className="relative max-w-full overflow-hidden rounded-[30px] bg-white p-3">
                        <img
                            src="/about/DRIVER_BGG.webp"
                            alt="Person learning about computer drivers"
                            className="h-[300px] w-full rounded-[24px] object-cover"
                        />

                        <div className="absolute bottom-7 left-7 rounded-2xl bg-white/90 px-5 py-4 backdrop-blur">
                            <div className="flex items-center gap-3">
                                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                    <Cpu size={21} />
                                </span>
                                <div>
                                    <p className="text-[14px] font-semibold text-[#071B34]">
                                        Driver Learning
                                    </p>
                                    <p className="text-[12px] text-slate-500">
                                        Simple topic-based guides
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT STEPS */}
                <div className="space-y-6">
                    {points.map((item, index) => {
                        const isActive = active === index;

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setActive(index)}
                                className={`group relative rounded-[28px] border p-7 transition-all duration-300 ${isActive
                                    ? "border-blue-200 bg-white"
                                    : "border-transparent bg-white/60"
                                    }`}
                            >
                                <div className="flex gap-5">
                                    <div
                                        className={`flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full transition ${isActive
                                            ? "bg-blue-600 text-white"
                                            : "bg-[#EEF4FF] text-blue-600"
                                            }`}
                                    >
                                        {React.cloneElement(item.icon, {
                                            size: 30,
                                            strokeWidth: 1.7,
                                        })}
                                    </div>

                                    <div>
                                        <div className="mb-3 flex items-center gap-3">
                                            <span className="text-[13px] font-semibold text-blue-600">
                                                STEP {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <span className="h-px w-14 bg-blue-100" />
                                        </div>

                                        <h3 className="text-[24px] font-semibold text-[#071B34]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 max-w-[620px] text-[15px] leading-7 text-slate-500">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}