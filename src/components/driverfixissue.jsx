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
    BookOpen,
} from "lucide-react";

const DriverInfoShowcase = () => {
    const cards = [
        { title: "WiFi & Internet", desc: "Network driver topics, connection signals, and wireless basics.", icon: Wifi, link: "/guide/understand-wifi-network-topics" },
        { title: "Sound & Audio", desc: "Speaker, microphone, headphone, and sound device information.", icon: Volume2, link: "/guide/understand-audio-driver-topics" },
        { title: "Screen & Video", desc: "Display, graphics, resolution, and visual driver topics.", icon: Monitor, link: "/guide/understand-graphics-driver-topics" },
        { title: "Printer Basics", desc: "Printer driver communication and common device topics.", icon: Printer, link: "/guide/understand-printer-driver-topics" },
        { title: "Bluetooth Info", desc: "Bluetooth pairing, visibility, and device connection basics.", icon: Bluetooth, link: "/guide/understand-bluetooth-driver-topics" },
        { title: "USB Ports", desc: "USB detection, port communication, and connected device data.", icon: Usb, link: "/guide/understand-usb-driver-topics" },
        { title: "Camera & Video", desc: "Webcam driver topics, camera input, and video device basics.", icon: Video, link: "/guide/understand-webcam-driver-topics" },
        { title: "Chipset Basics", desc: "How core system components communicate with your computer.", icon: Cpu, link: "/guide/guide-chipset-drivers" },
        { title: "Mouse & Typing", desc: "Keyboard, touchpad, and input device driver topics.", icon: Keyboard, link: "/guide/understand-input-latency-drivers" },
        { title: "Storage Data", desc: "Hard drive, SSD, and storage device communication basics.", icon: HardDrive, link: "/guide/understand-device-not-detected" },
    ];

    return (
        <section className="relative w-full bg-white py-24 px-6 font-[Poppins] overflow-hidden">
            <div className="max-w-[1500px] mx-auto">
                {/* Heading */}
                <div className="text-center max-w-[760px] mx-auto mb-16">
                    <div className="inline-flex items-center gap-3 mb-5">
                        <span className="w-10 h-10 rounded-full border border-dashed border-[#2563eb] flex items-center justify-center text-[#2563eb]">
                            <BookOpen size={18} />
                        </span>
                        <span className="text-[14px] font-semibold text-[#2563eb] uppercase tracking-wide">
                            Learning Directory
                        </span>
                    </div>

                    <h2 className="text-[32px] md:text-[42px] font-semibold leading-tight text-[#202124]">
                        Explore driver topics in a simple way.
                    </h2>

                    <p className="mt-5 text-[15px] leading-relaxed text-slate-500">
                        Browse easy information pages about WiFi, audio, graphics, USB,
                        printer, Bluetooth, chipset, and other driver categories.
                    </p>

                    <div className="w-[180px] h-[2px] bg-[#2563eb] mx-auto mt-7 rounded-full"></div>
                </div>

                {/* Clean list grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
                    {cards.map((card, index) => {
                        const Icon = card.icon;

                        return (
                            <Link
                                key={index}
                                to={card.link}
                                className="group flex items-center gap-5 py-6 border-b border-slate-200/70 hover:border-[#2563eb]/50 transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center shrink-0 group-hover:bg-[#2563eb] group-hover:text-white group-hover:-translate-y-1 transition-all duration-300">
                                    <Icon size={24} strokeWidth={1.7} />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-[18px] md:text-[20px] font-semibold text-slate-900 mb-1 group-hover:text-[#2563eb] transition-colors">
                                        {card.title}
                                    </h3>

                                    <p className="text-[14px] leading-relaxed text-slate-500 line-clamp-1">
                                        {card.desc}
                                    </p>
                                </div>

                                <div className="w-10 h-10 rounded-full bg-[#f8fbff] text-slate-300 flex items-center justify-center shrink-0 group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300">
                                    <ArrowRight
                                        size={17}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <div className="text-center mt-14">
                    <Link
                        to="/guides"
                        className="inline-flex items-center gap-3 h-[54px] px-8 rounded-full bg-[#2563eb] text-white text-[15px] font-semibold hover:bg-[#1d4ed8] transition"
                    >
                        View All Driver Topics
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DriverInfoShowcase;