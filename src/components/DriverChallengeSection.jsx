import React from "react";
import { Link } from "react-router-dom";
import {
    BookOpen, Cpu, Wifi, Printer, ArrowRight, CheckCircle,
    Monitor, Volume2, Usb, Bluetooth, Camera, HardDrive
} from "lucide-react";

const DriverChallengeSection = () => {
    const points = [
        "Learn why WiFi, audio, display or printer driver data is important",
        "Understand missing driver, outdated driver and device recognition topics",
        "Explore simple driver guides to understand system settings",
    ];

    const topics = [
        { icon: Cpu, label: "Chipset" },
        { icon: Wifi, label: "Network" },
        { icon: Printer, label: "Printer" },
        { icon: Monitor, label: "Display" },
        { icon: Volume2, label: "Audio" },
        { icon: Usb, label: "USB Port" },
        { icon: Bluetooth, label: "Bluetooth" },
        { icon: Camera, label: "Webcam" },
        { icon: HardDrive, label: "Storage" },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-[#F6FAFF] py-24 px-4 font-['Poppins']">
            {/* Background Design */}
            <div className="absolute left-0 top-0 h-full w-[38%] bg-white" />
            <div className="absolute right-0 top-0 h-full w-[28%] bg-[#0675DB]/10" />
            <div className="absolute left-10 bottom-10 h-24 w-24 rounded-full bg-blue-100 blur-2xl" />
            <div className="absolute right-20 top-20 h-32 w-32 rounded-full bg-[#0675DB]/20 blur-3xl" />

            <div className="relative z-10 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
                {/* Left Content */}
                <div className="order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white border border-blue-100 px-5 py-2 mb-6 shadow-sm">
                        <BookOpen size={16} className="text-[#0675DB]" />
                        <span className="text-[13px] font-bold text-[#0675DB] uppercase tracking-wide">
                            Driver Learning Guide
                        </span>
                    </div>

                    <h2 className="text-[38px] md:text-[54px] font-black leading-[1.08] text-slate-950 mb-6">
                        Understand Driver <br />
                        <span className="text-[#0675DB]">Topics Easily</span>
                    </h2>

                    <p className="text-[16px] md:text-[17px] leading-[1.8] text-slate-600 max-w-[650px] mb-9">
                        Software drivers help your computer communicate with hardware like
                        sound, display, WiFi, USB devices and printers. These guides explain
                        driver topics in simple language for learning and awareness.
                    </p>

                    <div className="overflow-hidden mb-9 relative max-w-[800px] group">
                        <div className="flex w-max animate-driverMarquee gap-4 py-2">
                            {[...topics, ...topics].map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className="w-[220px] flex-shrink-0 rounded-2xl flex bg-white border border-blue-100 p-5"
                                    >
                                        <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0675DB] flex items-center justify-center mb-0">
                                            <Icon size={20} />
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-[15px] font-bold text-slate-900">
                                                {item.label}
                                            </p>
                                            <p className="text-[12px] text-slate-500 mt-1">
                                                Learning Topic
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {/* Gradient masks for smooth edges */}
                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#F6FAFF] to-transparent z-10 pointer-events-none" />
                    </div>

                    <div className="space-y-4 mb-10">
                        {points.map((point, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 rounded-2xl bg-white border border-slate-100 px-5 py-4 shadow-sm max-w-[720px]"
                            >
                                <div className="w-8 h-8 rounded-full bg-[#0675DB] text-white flex items-center justify-center shrink-0 mt-0.5">
                                    <CheckCircle size={17} />
                                </div>

                                <p className="text-[15px] md:text-[16px] leading-[1.6] text-slate-700 font-medium">
                                    {point}
                                </p>
                            </div>
                        ))}
                    </div>

                    <Link
                        to="/guides"
                        className="inline-flex items-center gap-3 h-[54px] px-8 rounded-xl bg-[#0675DB] text-white text-[15px] font-black hover:bg-[#045fb4] hover:shadow-lg transition"
                    >
                        Explore Guides
                        <ArrowRight size={18} />
                    </Link>
                </div>

                {/* Right Image */}
                <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
                    <div className="absolute right-0 top-8 w-[520px] h-[520px] rounded-full bg-[#DDF3FF]" />
                    <div className="absolute right-10 bottom-6 w-[360px] h-[360px] rounded-full bg-[#0675DB]/15" />

                    <div className="relative z-10 rounded-[20px] bg-white p-5  border border-blue-100">
                        <picture>
                            <source srcSet="/about/aboutmain_01.avif" type="image/avif" />
                            <source srcSet="/about/aboutmain_01.webp" type="image/webp" />
                            <img
                                src="/about/aboutmain_01.png"
                                alt="Learning about software drivers"
                                width="620"
                                height="620"
                                className="w-full max-w-[620px] max-h-[620px] object-contain rounded-[20px]"
                            />
                        </picture>
                    </div>

                    <div className="absolute left-4 top-[18%] z-20 hidden md:block rounded-2xl bg-white px-5 py-4 shadow-xl border border-blue-100">
                        <p className="text-[13px] font-black text-slate-900">
                            Easy Driver Topics
                        </p>
                        <p className="text-[12px] text-slate-500 mt-1">
                            Learn in simple words
                        </p>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default DriverChallengeSection;