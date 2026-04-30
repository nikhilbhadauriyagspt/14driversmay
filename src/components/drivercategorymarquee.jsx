import React from "react";
import {
    Printer,
    Wifi,
    Volume2,
    Monitor,
    Bluetooth,
    Usb,
    ScanLine,
    Cpu,
    HardDrive,
    Touchpad,
    Video,
    ShieldCheck,
    Search,
    ShieldAlert,
    Tv,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function DriverCategoryMarquee() {
    const drivers = [
        { title: "Printer", icon: Printer, slug: "fix-printer-driver-issues" },
        { title: "Network", icon: Wifi, slug: "fix-wifi-network-issues" },
        { title: "Audio", icon: Volume2, slug: "fix-audio-driver-problems" },
        { title: "Graphics", icon: Monitor, slug: "fix-graphics-driver-issues" },
        { title: "Bluetooth", icon: Bluetooth, slug: "fix-bluetooth-driver-problems" },
        { title: "USB", icon: Usb, slug: "fix-usb-driver-issues" },
        { title: "Scanner", icon: ScanLine, slug: "fix-scanner-driver-problems" },
        { title: "Chipset", icon: Cpu, slug: "update-chipset-drivers" },
        { title: "Storage", icon: HardDrive, slug: "fix-device-not-detected" },
        { title: "Touchpad", icon: Touchpad, slug: "fix-input-latency-drivers" },
        { title: "Webcam", icon: Video, slug: "fix-webcam-driver-issues" },
        { title: "BIOS", icon: ShieldCheck, slug: "guide-bios-firmware-updates" },
        { title: "Search", icon: Search, slug: "" },
        { title: "Security", icon: ShieldAlert, slug: "" },
        { title: "Monitor", icon: Tv, slug: "fix-graphics-driver-issues" },
    ];

    const marqueeItems = [...drivers, ...drivers];

    return (
        <section className=" font-[Poppins] overflow-hidden">
            <div className="max-w-[1800px] mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-[25%_75%] items-center">
                    {/* Left Content */}
                    <div className="p-7 lg:p-9 border-b lg:border-b-0 lg:border-r border-[#E6ECF8]">

                        <h2 className="text-[#07153A] text-[26px] md:text-[30px] font-semibold leading-tight">
                            Browse Driver Topics
                        </h2>

                        <p className="text-[#667085] text-[14px] leading-relaxed mt-3">
                            Quick access to common driver and device guide categories.
                        </p>
                    </div>

                    {/* Right Marquee */}
                    <div className="relative overflow-hidden py-8">

                        <div className="flex w-max animate-driverMarquee gap-4 px-4">
                            {marqueeItems.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={index}
                                        to={item.slug ? `/guide/${item.slug}` : "/guides"}
                                        className="w-[120px] flex flex-col items-center justify-center text-center group"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                                            <Icon size={24} strokeWidth={2} />
                                        </div>

                                        <p className="text-[#101828] text-[13px] font-medium group-hover:text-blue-600 transition-colors">
                                            {item.title}
                                        </p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}