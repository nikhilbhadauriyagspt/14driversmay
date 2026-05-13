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
        {
            title: "Wireless Basics",
            desc: "Understand how Wi-Fi drivers help wireless adapters communicate with your system.",
            icon: Wifi,
            link: "/guide/understand-wifi-network-topics",
            image: "/guide/guide-network-driver.avif",
        },
        {
            title: "Audio Device Learning",
            desc: "Learn how sound drivers relate to speakers, microphones, and playback devices.",
            icon: Volume2,
            link: "/guide/understand-audio-driver-topics",
            image: "/guide/guide-audio-driver.avif",
        },
        {
            title: "Display Information",
            desc: "Explore simple topics about graphics drivers, screen output, and resolution behavior.",
            icon: Monitor,
            link: "/guide/understand-graphics-driver-topics",
            image: "/guide/guide-graphics-driver.avif",
        },
        {
            title: "Printer Communication",
            desc: "Read how printer drivers help a computer send information to print devices.",
            icon: Printer,
            link: "/guide/understand-printer-driver-topics",
            image: "/guide/guide-printer-driver.avif",
        },
        {
            title: "Bluetooth Pairing",
            desc: "Understand basic Bluetooth driver terms, pairing behavior, and device visibility.",
            icon: Bluetooth,
            link: "/guide/understand-bluetooth-driver-topics",
            image: "/needdriver/need-new-device.avif",
        },
        {
            title: "USB Recognition",
            desc: "Learn why USB ports and connected devices depend on driver-level communication.",
            icon: Usb,
            link: "/guide/understand-usb-driver-topics",
            image: "/guide/guide-usb-driver.avif",
        },
        {
            title: "Camera Input",
            desc: "Explore webcam driver basics and how camera input connects with applications.",
            icon: Video,
            link: "/guide/understand-webcam-driver-topics",
            image: "/guide/webcam-drivers.avif",
        },
        {
            title: "Chipset Role",
            desc: "Learn how chipset drivers support communication between core computer components.",
            icon: Cpu,
            link: "/guide/guide-chipset-drivers",
            image: "/guide/chipset-info.avif",
        },
        {
            title: "Input Devices",
            desc: "Read simple information about keyboard, touchpad, and pointing device behavior.",
            icon: Keyboard,
            link: "/guide/understand-input-latency-drivers",
            image: "/guide/keyboard-input.avif",
        },
        {
            title: "Storage Topics",
            desc: "Understand basic SSD, HDD, and storage controller driver concepts.",
            icon: HardDrive,
            link: "/guide/understand-device-not-detected",
            image: "/guide/storage-drives.avif",
        },
    ];

    return (
        <section className="relative w-full bg-white px-6 py-24 font-[Poppins]">
            <div className="mx-auto max-w-[1600px]">
                <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[0.9fr_1.1fr]">
                    {/* Left Heading */}
                    <div className="lg:sticky lg:top-28">
                        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#315BFF] px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#315BFF]">
                            <span className="h-2 w-2 rounded-full bg-[#315BFF]" />
                            Driver Learning Topics
                        </p>

                        <h2 className="mb-6 text-[36px] font-semibold leading-tight text-[#071B34] 2xl:text-[56px]">
                            Learn device drivers through{" "}
                            <span className="text-[#315BFF]">clear topic paths.</span>
                        </h2>

                        <p className="mb-9 max-w-[560px] text-[16px] leading-8 text-slate-500">
                            This section groups common driver subjects into simple learning
                            paths, so users can understand hardware communication without
                            support or repair claims.
                        </p>

                        <Link
                            to="/guides"
                            className="inline-flex h-[54px] items-center gap-3 rounded-full bg-[#315BFF] px-7 text-[15px] font-semibold text-white transition hover:bg-[#1DA7F2]"
                        >
                            View All Topics
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                    {/* Right List With Images */}
                    <div className="border-t border-slate-200">
                        {cards.map((card, index) => {
                            const Icon = card.icon;

                            return (
                                <Link
                                    key={index}
                                    to={card.link}
                                    className="group grid grid-cols-1 gap-5 border-b border-slate-200 py-7 transition md:grid-cols-[70px_1fr_170px_50px] md:items-center"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF4FF] text-[#315BFF] transition group-hover:bg-[#315BFF] group-hover:text-white">
                                        <Icon size={24} strokeWidth={1.7} />
                                    </div>

                                    <div>
                                        <div className="mb-2 flex items-center gap-3">
                                            <span className="text-[12px] font-semibold text-[#315BFF]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <span className="h-px w-10 bg-slate-200" />
                                            <span className="text-[12px] uppercase tracking-wider text-slate-400">
                                                Learning Topic
                                            </span>
                                        </div>

                                        <h3 className="mb-2 text-[22px] font-semibold text-[#071B34] transition group-hover:text-[#315BFF] md:text-[25px]">
                                            {card.title}
                                        </h3>

                                        <p className="max-w-[620px] text-[15px] leading-7 text-slate-500">
                                            {card.desc}
                                        </p>
                                    </div>

                                    <div className="h-[115px] overflow-hidden rounded-[18px] bg-slate-100">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition group-hover:border-[#315BFF] group-hover:text-[#315BFF]">
                                        <ArrowRight size={18} />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-16 flex flex-col gap-5 border-t border-slate-200 pt-8 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EEF4FF] text-[#315BFF]">
                            <BookOpen size={22} />
                        </span>

                        <p className="max-w-[820px] text-[15px] leading-7 text-slate-500">
                            Clear With Us is an educational driver information resource. The
                            content is written for general understanding and does not offer
                            remote support, repair, or installation services.
                        </p>
                    </div>

                    <Link
                        to="/guides"
                        className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#315BFF]"
                    >
                        Browse Guides <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DriverInfoShowcase;