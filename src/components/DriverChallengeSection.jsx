import React from "react";
import {
    Check,
    BookOpen,
    Cpu,
    Monitor,
    Volume2,
    Wifi,
    Printer,
    Usb,
    ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutDriverInfoSection() {
    const points = [
        "Learn what drivers do",
        "Understand common driver issues",
        "Identify device-related signs",
        "Keep driver info organized",
        "Explore hardware categories",
        "Read simple learning guides",
    ];

    const brandColor = "#104CEF";

    return (
        <section className="w-full bg-[#f5f7fb] py-20 px-6 font-[Poppins] overflow-hidden">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Images - Increased Height */}
                <div className="relative min-h-[700px] flex items-center justify-center">
                    <div className="absolute left-4 top-0 w-[360px] h-[640px] rounded-full overflow-hidden border-[10px] border-white shadow-sm">
                        <img
                            src="/about/driver-learning-1.webp"
                            alt="Person learning about computer drivers"
                            width="360"
                            height="640"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="relative z-10 ml-56 w-[360px] h-[720px] rounded-full overflow-hidden border-[10px] border-white shadow-lg">
                        <img
                            src="/about/driver-learning-2.webp"
                            alt="Driver information learner"
                            width="360"
                            height="720"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Badge - Brand Color */}
                    <div className="absolute left-[210px] bottom-[100px] z-20 bg-white w-[160px] h-[150px] rounded-[20px] shadow-xl flex flex-col items-center justify-center text-center">
                        <div
                            className="w-16 h-16 rounded-full flex items-center justify-center text-white mb-3"
                            style={{ backgroundColor: brandColor }}
                        >
                            <BookOpen size={30} />
                        </div>
                        <p className="text-[15px] font-semibold text-slate-900 leading-tight">
                            Driver Learning
                            <br />
                            Resource
                        </p>
                    </div>
                </div>

                {/* Right Content */}
                <div>
                    <div className="flex items-center gap-3 mb-5">
                        <span
                            className="w-10 h-10 rounded-full border flex items-center justify-center"
                            style={{ borderColor: `${brandColor}33`, color: brandColor }}
                        >
                            <Cpu size={18} />
                        </span>
                        <p
                            className="text-[14px] font-semibold uppercase tracking-wide"
                            style={{ color: brandColor }}
                        >
                            About Our Driver Guides
                        </p>
                    </div>

                    <h2 className="text-[34px] md:text-[42px] leading-tight font-semibold text-[#202124] max-w-[700px] mb-6">
                        Simple driver information for everyday computer users.
                    </h2>

                    <div
                        className="w-[170px] h-[2px] mb-8 rounded-full"
                        style={{ backgroundColor: brandColor }}
                    ></div>

                    <p className="text-[16px] leading-[1.9] text-slate-600 max-w-[720px] mb-10">
                        Our website is created to explain computer drivers in a simple and
                        educational way. You can learn how graphics, audio, network, USB,
                        printer, Bluetooth, and other drivers connect hardware with your
                        system. The goal is to help users understand driver-related topics,
                        recognize common signs, and keep their device knowledge clear.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                        {points.map((item, index) => (
                            <div
                                key={index}
                                className="h-[54px] bg-white border border-[#dfe5f2] rounded-[6px] px-5 flex items-center gap-3"
                            >
                                <span className="w-28px h-28px min-w-[28px] min-h-[28px] rounded-full bg-[#eefdf6] flex items-center justify-center text-[#16a34a]">
                                    <Check size={16} />
                                </span>
                                <span className="text-[14px] font-medium text-[#2b2d33]">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 mb-9">
                        {[
                            { icon: <Monitor size={18} />, text: "Graphics" },
                            { icon: <Volume2 size={18} />, text: "Audio" },
                            { icon: <Wifi size={18} />, text: "Network" },
                            { icon: <Printer size={18} />, text: "Printer" },
                            { icon: <Usb size={18} />, text: "USB" },
                        ].map((item, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 text-[13px] font-medium text-slate-600"
                            >
                                {item.icon}
                                {item.text}
                            </span>
                        ))}
                    </div>

                    <Link
                        to="/guides"
                        className="inline-flex items-center gap-3 h-[54px] px-8 rounded-full text-white text-[15px] font-semibold transition"
                        style={{ backgroundColor: brandColor }}
                        onMouseOver={(e) => e.currentTarget.style.filter = "brightness(0.9)"}
                        onMouseOut={(e) => e.currentTarget.style.filter = "brightness(1)"}
                    >
                        Explore Driver Guides
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
