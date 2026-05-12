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
        { title: "Wireless Basics", desc: "Understand how Wi-Fi drivers help wireless adapters communicate with your system.", icon: Wifi, link: "/guide/understand-wifi-network-topics" },
        { title: "Audio Device Learning", desc: "Learn how sound drivers relate to speakers, microphones, and playback devices.", icon: Volume2, link: "/guide/understand-audio-driver-topics" },
        { title: "Display Information", desc: "Explore simple topics about graphics drivers, screen output, and resolution behavior.", icon: Monitor, link: "/guide/understand-graphics-driver-topics" },
        { title: "Printer Communication", desc: "Read how printer drivers help a computer send information to print devices.", icon: Printer, link: "/guide/understand-printer-driver-topics" },
        { title: "Bluetooth Pairing", desc: "Understand basic Bluetooth driver terms, pairing behavior, and device visibility.", icon: Bluetooth, link: "/guide/understand-bluetooth-driver-topics" },
        { title: "USB Recognition", desc: "Learn why USB ports and connected devices depend on driver-level communication.", icon: Usb, link: "/guide/understand-usb-driver-topics" },
        { title: "Camera Input", desc: "Explore webcam driver basics and how camera input connects with applications.", icon: Video, link: "/guide/understand-webcam-driver-topics" },
        { title: "Chipset Role", desc: "Learn how chipset drivers support communication between core computer components.", icon: Cpu, link: "/guide/guide-chipset-drivers" },
        { title: "Input Devices", desc: "Read simple information about keyboard, touchpad, and pointing device behavior.", icon: Keyboard, link: "/guide/understand-input-latency-drivers" },
        { title: "Storage Topics", desc: "Understand basic SSD, HDD, and storage controller driver concepts.", icon: HardDrive, link: "/guide/understand-device-not-detected" },
    ];

    return (
        <section className="relative w-full bg-white py-24 px-6 font-[Poppins]">
            <div className="max-w-[1500px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
                    {/* Left Heading */}
                    <div className="lg:sticky lg:top-28">
                        <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#315BFF] text-[#315BFF] text-[13px] font-semibold uppercase tracking-[0.14em] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#315BFF]" />
                            Driver Learning Topics
                        </p>

                        <h2 className="text-[36px] 2xl:text-[56px] leading-tight font-semibold text-[#071B34] mb-6">
                            Learn device drivers through{" "}
                            <span className="text-[#315BFF]">clear topic paths.</span>
                        </h2>

                        <p className="text-[16px] leading-8 text-slate-500 max-w-[560px] mb-9">
                            This section groups common driver subjects into simple learning
                            paths, so users can understand hardware communication without
                            support or repair claims.
                        </p>

                        <Link
                            to="/guides"
                            className="inline-flex items-center gap-3 h-[54px] px-7 rounded-full bg-[#315BFF] text-white text-[15px] font-semibold hover:bg-[#1DA7F2] transition"
                        >
                            View All Topics
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                    {/* Right Clean List - no box/shadow */}
                    <div className="border-t border-slate-200">
                        {cards.map((card, index) => {
                            const Icon = card.icon;

                            return (
                                <Link
                                    key={index}
                                    to={card.link}
                                    className="group grid grid-cols-[56px_1fr_46px] md:grid-cols-[70px_1fr_60px] gap-5 items-center py-8 border-b border-slate-200 transition"
                                >
                                    <div className="w-14 h-14 rounded-full bg-[#EEF4FF] text-[#315BFF] flex items-center justify-center group-hover:bg-[#315BFF] group-hover:text-white transition">
                                        <Icon size={24} strokeWidth={1.7} />
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-[12px] font-semibold text-[#315BFF]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <span className="w-10 h-px bg-slate-200" />
                                            <span className="text-[12px] text-slate-400 uppercase tracking-wider">
                                                Learning Topic
                                            </span>
                                        </div>

                                        <h3 className="text-[22px] md:text-[26px] font-semibold text-[#071B34] group-hover:text-[#315BFF] transition mb-2">
                                            {card.title}
                                        </h3>

                                        <p className="text-[15px] leading-7 text-slate-500 max-w-[720px]">
                                            {card.desc}
                                        </p>
                                    </div>

                                    <div className="w-11 h-11 rounded-full border border-slate-200 text-slate-400 flex items-center justify-center group-hover:border-[#315BFF] group-hover:text-[#315BFF] transition">
                                        <ArrowRight size={18} />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-16 border-t border-slate-200 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                    <div className="flex items-start gap-4">
                        <span className="w-12 h-12 rounded-full bg-[#EEF4FF] text-[#315BFF] flex items-center justify-center shrink-0">
                            <BookOpen size={22} />
                        </span>

                        <p className="text-[15px] leading-7 text-slate-500 max-w-[820px]">
                            Clear With Us is an educational driver information resource. The
                            content is written for general understanding and does not offer
                            remote support, repair, or installation services.
                        </p>
                    </div>

                    <Link
                        to="/guides"
                        className="inline-flex items-center gap-2 text-[#315BFF] text-[15px] font-semibold"
                    >
                        Browse Guides <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DriverInfoShowcase;