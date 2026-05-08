import React from "react";
import { Link } from "react-router-dom";
import {
    BookOpen, Cpu, Wifi, Printer, ArrowRight, CheckCircle,
    Monitor, Volume2, Usb, Bluetooth, Camera, HardDrive
} from "lucide-react";

const DriverChallengeSection = () => {
    const points = [
        "Learn why WiFi, sound, screen and printer parts need drivers",
        "Understand why devices sometimes don't show up or work",
        "Simple guides to help you learn about your computer",
    ];

    const topics = [
        { icon: Cpu, label: "Main Chip" },
        { icon: Wifi, label: "WiFi & Internet" },
        { icon: Printer, label: "Printer" },
        { icon: Monitor, label: "Screen & Video" },
        { icon: Volume2, label: "Sound & Audio" },
        { icon: Usb, label: "USB Ports" },
    ];

    return (
        <section className="relative  font-[Poppins] w-full bg-white overflow-hidden ">




            <div className="flex flex-col lg:flex-row min-h-[720px]">

                {/* Left Side: Content */}
                <div className="w-full  md:w-[50%] 2xl:w-[58%] py-16 lg:py-24 px-6 2xl:pl-[8%] lg:pr-20 flex flex-col justify-center relative z-10">
                    <div className="absolute inset-0 repeating-bg opacity-[0.03] pointer-events-none"></div>

                    <div className="relative">
                        <div className="inline-flex items-center gap-3 mb-10">
                            <span className="h-[2px] w-10 bg-gradient-to-r from-[#CF00FE] to-[#005DE0]"></span>
                            <span className="text-[12px] font-[500] text-slate-400 uppercase tracking-[0.25em]">
                                Learn the Basics
                            </span>
                        </div>

                        <h2 className="text-[30px] md:text-[40px] font-semibold leading-[1.15] text-slate-900 mb-8 ">
                            Understand Your Computer <br />
                            Drivers Easily
                        </h2>

                        <p className="text-[16px] md:text-[17px] leading-[1.8] text-slate-500 max-w-[580px] mb-12">
                            Software drivers help your computer parts like WiFi and sound work correctly. We make simple guides to help you understand how these parts work together in easy language.
                        </p>

                        {/* Minimalist Topics Row */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
                            {topics.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={index} className="flex items-center gap-3 group cursor-default">
                                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-[#005DE0] transition-all">
                                            <Icon size={18} />
                                        </div>
                                        <span className="text-[14px] font-semibold text-slate-600 group-hover:text-slate-900">
                                            {item.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="space-y-5 mb-12">
                            {points.map((point, index) => (
                                <div key={index} className="flex items-center gap-4 group">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#CF00FE] transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#CF00FE] transition-all"></div>
                                    </div>
                                    <p className="text-[15px] text-slate-600 font-medium group-hover:text-slate-900 transition-colors">
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <Link
                            to="/guides"
                            className="inline-flex items-center justify-center h-[56px] px-10 rounded-full btn-gradient text-white text-[15px] font-[500]shadow-lg hover:shadow-xl transition-all"
                        >
                            Explore All Guides
                            <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </div>
                </div>

                {/* Right Side: Full Edge Image */}
                <div className="relative w-full lg:w-[50%] min-h-[400px] lg:min-h-0 overflow-hidden group">
                    <div className="absolute inset-0 bg-[#F8FAFC]">
                        {/* Subtle Gradient Overlay to blend with left side */}

                        <picture>
                            <source srcSet="/about/aboutmain_01.avif" type="image/avif" />
                            <source srcSet="/about/aboutmain_01.webp" type="image/webp" />
                            <img
                                src="/about/aboutmain_01.avif"
                                alt="Computer part learning"
                                width="668"
                                height="668"
                                className="absolute inset-0 w-full h-full object-contain object-center lg:object-right  transition-transform duration-1000"
                            />
                        </picture>
                    </div>

                    {/* Minimal Floating Card */}
                    <div className="absolute bottom-10 left-10 lg:left-auto lg:right-10 z-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/20 max-w-[240px]">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-2 h-2 rounded-full bg-[#CF00FE] animate-pulse"></div>
                            <span className="text-[11px] font-[500]text-slate-900 uppercase tracking-[0.1em]">Helpful Info</span>
                        </div>
                        <p className="text-[13px] font-medium text-slate-600 leading-relaxed">
                            Every part of your computer needs a driver to work the right way.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DriverChallengeSection;