import React from "react";
import { Zap } from "lucide-react";

export default function WhenNeedDrivers() {
    const items = [
        {
            title: "After Windows\nUpdate",
            desc: "Ensure all system components remain compatible with the latest OS version.",
            img: "/needdriver/need-windows-update.png",
        },
        {
            title: "After Connecting\na New Device",
            desc: "Enable the operating system to recognize and communicate with new hardware.",
            img: "/needdriver/need-new-device.png",
        },
        {
            title: "When Hardware\nStops Working",
            desc: "Restore functionality when a device suddenly becomes unresponsive or laggy.",
            img: "/needdriver/need-hardware-stop.png",
        },
        {
            title: "When Printer / Scanner\nis Not Detected",
            desc: "Establish a secure connection for seamless document printing and scanning.",
            img: "/needdriver/need-printer-scanner.png",
        },
        {
            title: "When Audio or Wi-Fi\nStops Working",
            desc: "Fix connectivity or sound output issues caused by corrupted driver files.",
            img: "/needdriver/need-audio-wifi.png",
        },
        {
            title: "When You See\nDriver Errors",
            desc: "Resolve specific error codes or 'Device Not Recognized' notifications instantly.",
            img: "/needdriver/need-driver-errors.png",
        },
    ];

    return (
        <section className="bg-[#F7FAFF] px-6 py-6 font-[Poppins]">
            <div className="max-w-[1600px] mx-auto rounded-2xl border border-[#DDEBFF] bg-[#EEF7FF] px-8 py-10 shadow-sm">
                {/* Decorative Badge */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 shadow-sm">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">System Guide</span>
                    </div>
                </div>

                {/* Heading with Icon */}
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <Zap className="w-6 h-6 text-blue-600 fill-blue-600/10" />
                        <h2 className="text-[32px] md:text-[38px] font-bold text-[#0F1B3D] leading-tight">
                            When You Need <span className="text-blue-600">Drivers</span>
                        </h2>
                    </div>
                    <p className="text-[15px] text-[#5B6478] mt-3 font-medium max-w-xl mx-auto">
                        Drivers are essential for seamless hardware communication.
                        You may need them in the following scenarios:
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-7">
                    {items.map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="w-full h-[155px] rounded-xl overflow-hidden bg-white border border-[#DDEBFF] shadow-sm">
                                <img
                                    src={item.img}
                                    alt={item.title.replace("\n", " ")}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h3 className="mt-4 text-[17px] font-semibold text-[#0F1B3D] leading-snug whitespace-pre-line">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-[12px] text-[#6B7280] leading-relaxed line-clamp-3 px-1">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}