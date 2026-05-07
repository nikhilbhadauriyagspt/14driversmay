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
    ScanLine,
    ShieldCheck
} from "lucide-react";

const DriverInfoShowcase = () => {
    const cards = [
        {
            title: "WiFi Topics",
            desc: "Learn simple network and connection driver basics.",
            icon: Wifi,
            link: "/guide/understand-wifi-network-topics",
        },
        {
            title: "Audio Topics",
            desc: "Understand speaker, sound and microphone driver data.",
            icon: Volume2,
            link: "/guide/understand-audio-driver-topics",
        },
        {
            title: "Display Topics",
            desc: "Explore graphics, monitor and screen driver basics.",
            icon: Monitor,
            link: "/guide/understand-graphics-driver-topics",
        },
        {
            title: "Printer Topics",
            desc: "Read about printer connection and driver information.",
            icon: Printer,
            link: "/guide/understand-printer-driver-topics",
        },
        {
            title: "Bluetooth Topics",
            desc: "Identify missing Bluetooth icon and pairing failures.",
            icon: Bluetooth,
            link: "/guide/understand-bluetooth-driver-topics",
        },
        {
            title: "USB Topics",
            desc: "Identify USB 3.0/3.1 port recognition and driver data.",
            icon: Usb,
            link: "/guide/understand-usb-driver-topics",
        },
        {
            title: "Webcam Topics",
            desc: "Identify 'Camera not found' and black screen topics.",
            icon: Video,
            link: "/guide/understand-webcam-driver-topics",
        },
        {
            title: "Chipset Topics",
            desc: "Understand system stability and motherboard drivers.",
            icon: Cpu,
            link: "/guide/guide-chipset-drivers",
        },
        {
            title: "Scanner Topics",
            desc: "Identify scanner not detected and communication topics.",
            icon: ScanLine,
            link: "/guide/understand-scanner-driver-topics",
        },
        {
            title: "Storage Topics",
            desc: "Understand hard drive data and detection topics.",
            icon: HardDrive,
            link: "/guide/understand-device-not-detected",
        },
        {
            title: "BIOS Topics",
            desc: "Learn the critical steps to understand BIOS/UEFI.",
            icon: ShieldCheck,
            link: "/guide/guide-bios-firmware-updates",
        },
    ];

    // Duplicate cards for seamless marquee
    const marqueeCards = [...cards, ...cards];

    return (
        <section className="relative w-full overflow-hidden bg-[#0C66E5] py-24 px-4 font-['Poppins']">
            {/* Background Image */}
            <div className="absolute inset-0">
                <picture>
                    <source srcSet="/about/driver-bg.avif" type="image/avif" />
                    <source srcSet="/about/driver-bg.webp" type="image/webp" />
                    <img
                        src="/about/driver-bg.png"
                        alt="Driver learning background"
                        className="w-full h-full object-cover opacity-25"
                    />
                </picture>
                <div className="absolute inset-0 bg-[#0C66E5]/90" />
            </div>

            <div className="relative z-10 max-w-[1600px] mx-auto">
                {/* Top Area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 px-4 md:px-0">
                    {/* Left Image */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="rounded-md border-[5px] border-white/40 w-full">
                            <picture>
                                <source srcSet="/about/driver-bg.avif" type="image/avif" />
                                <source srcSet="/about/driver-bg.webp" type="image/webp" />
                                <img
                                    src="/about/driver-bg.png"
                                    alt="Learning about driver topics"
                                    className="w-full h-[300px] object-cover"
                                />
                            </picture>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="text-white">
                        <span className="text-[14px] font-bold text-blue-100">
                            Driver Learning Guides
                        </span>

                        <h2 className="text-[36px] md:text-[52px] font-black leading-[1.12] mt-4 mb-6">
                            Learn About Device Drivers in a Simple Way
                        </h2>

                        <p className="text-white/85 text-[16px] leading-[1.8] max-w-[700px]">
                            Explore educational information about WiFi, audio, display, USB,
                            printer and other driver topics. This website is created for
                            learning only, with clear explanations for everyday computer users.
                        </p>
                    </div>
                </div>

                {/* Marquee Cards */}
                <div className="relative mt-16">
                    <div className="flex w-max animate-driverMarquee gap-6 py-10">
                        {marqueeCards.map((card, index) => {
                            const Icon = card.icon;

                            return (
                                <Link
                                    key={index}
                                    to={card.link}
                                    className="group relative w-[300px] md:w-[350px] min-h-[250px] border border-white/25 bg-white/5 backdrop-blur-sm p-8 text-center transition-all duration-300 hover:bg-white hover:-translate-y-2 flex-shrink-0"
                                >
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white text-[#0C66E5] flex items-center justify-center rounded-sm shadow-xl group-hover:bg-[#0C66E5] group-hover:text-white transition duration-300">
                                        <Icon size={34} />
                                    </div>

                                    <div className="pt-10">
                                        <h3 className="text-[22px] font-black text-white group-hover:text-slate-950 mb-4 transition">
                                            {card.title}
                                        </h3>

                                        <p className="text-[15px] leading-[1.7] text-white/75 group-hover:text-slate-600 transition mb-7">
                                            {card.desc}
                                        </p>

                                        <span className="inline-flex items-center justify-center gap-2 text-[14px] font-black text-white group-hover:text-[#0C66E5] transition">
                                            Read More
                                            <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DriverInfoShowcase;