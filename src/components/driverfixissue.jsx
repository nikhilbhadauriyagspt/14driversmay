import React from "react";
import { Link } from "react-router-dom";
import {
    Wifi,
    Volume2,
    Monitor,
    Printer,
    ArrowRight,
    Bluetooth,
    Usb,
    Video,
    Cpu,
    HardDrive,
    Keyboard,
    ScanLine,
    ShieldCheck
} from "lucide-react";

const DriverInfoShowcase = () => {
    const cards = [
        {
            title: "WiFi & Internet",
            desc: "Learn why your WiFi might be slow or not connecting.",
            icon: Wifi,
            link: "/guide/understand-wifi-network-topics",
        },
        {
            title: "Sound & Audio",
            desc: "Understand speaker, sound and microphone basics.",
            icon: Volume2,
            link: "/guide/understand-audio-driver-topics",
        },
        {
            title: "Screen & Video",
            desc: "Explore graphics and screen setting basics.",
            icon: Monitor,
            link: "/guide/understand-graphics-driver-topics",
        },
        {
            title: "Printer Basics",
            desc: "Read about printer connection and how they work.",
            icon: Printer,
            link: "/guide/understand-printer-driver-topics",
        },
        {
            title: "Bluetooth Info",
            desc: "Identify simple Bluetooth and pairing topics.",
            icon: Bluetooth,
            link: "/guide/understand-bluetooth-driver-topics",
        },
        {
            title: "USB Ports",
            desc: "Identify USB port basics and connection data.",
            icon: Usb,
            link: "/guide/understand-usb-driver-topics",
        },
        {
            title: "Camera & Video",
            desc: "Identify camera basics and black screen topics.",
            icon: Video,
            link: "/guide/understand-webcam-driver-topics",
        },
        {
            title: "Main Computer Chip",
            desc: "Understand how the main chip runs your system.",
            icon: Cpu,
            link: "/guide/guide-chipset-drivers",
        },
        {
            title: "Mouse & Typing",
            desc: "Learn about touchpad and keyboard settings.",
            icon: Keyboard,
            link: "/guide/understand-input-latency-drivers",
        },
        {
            title: "Hard Drive Data",
            desc: "Understand how your storage parts communicate.",
            icon: HardDrive,
            link: "/guide/understand-device-not-detected",
        },
    ];

    return (
        <section className="relative  font-[Poppins] w-full bg-white overflow-hidden py-24 px-6 ">
            {/* Background Texture */}
            <div className="absolute inset-0 repeating-bg opacity-[0.03] pointer-events-none"></div>

            <div className="relative z-10 max-w-[1600px] mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
                    <div className="max-w-[700px]">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="h-[2px] w-10 bg-gradient-to-r from-[#CF00FE] to-[#005DE0]"></span>
                            <span className="text-[12px] font-[500] text-slate-400 uppercase tracking-[0.25em]">
                                Learning Directory
                            </span>
                        </div>

                        <h2 className="text-[30px] md:text-[40px] font-semibold leading-tight text-slate-900 ">
                            Simple Guides to <br />
                            Understand Your PC
                        </h2>
                    </div>

                    <Link
                        to="/guides"
                        className="inline-flex items-center gap-2 text-[14px] font-[500] text-[#005DE0] uppercase tracking-widest border-b-2 border-blue-50 pb-2 hover:border-[#005DE0] transition-all"
                    >
                        View All Topics <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Minimalist Directory List (No Boxes) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-x-12 gap-y-12">
                    {cards.map((card, index) => {
                        const Icon = card.icon;

                        return (
                            <Link
                                key={index}
                                to={card.link}
                                className={`group flex flex-col items-start gap-6 border-b border-slate-100 pb-10 transition-all hover:border-[#CF00FE]/40 ${index === 9 ? "hidden 2xl:block" : "block"
                                    }`}
                            >
                                <div className="flex-shrink-0 relative">
                                    <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-blue-50 group-hover:text-[#005DE0] transition-all duration-500">
                                        <Icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <div className="absolute -top-1 -left-1 w-5 h-5 bg-gradient-to-br from-[#CF00FE] to-[#005DE0] rounded-full opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-[19px] font-semibold text-slate-800 mb-3 group-hover:text-[#005DE0] transition-colors">
                                        {card.title}
                                    </h3>

                                    <p className="text-[14px] leading-relaxed text-slate-500 mb-6 line-clamp-2">
                                        {card.desc}
                                    </p>

                                    <div className="h-[1px] w-0 bg-gradient-to-r from-[#CF00FE] to-[#005DE0] transition-all duration-700 group-hover:w-full"></div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default DriverInfoShowcase;