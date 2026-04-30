import React from "react";
import {
    Printer, Wifi, Volume2, Monitor, Bluetooth, Usb, ScanLine,
    Cpu, HardDrive, Touchpad, Video, ShieldCheck, Search,
    ShieldAlert, Tv, ArrowRight
} from "lucide-react";

export default function DriverTypesAndFix() {

    const drivers = [
        { title: "Printer", icon: Printer },
        { title: "Network", icon: Wifi },
        { title: "Audio", icon: Volume2 },
        { title: "Graphics", icon: Monitor },
        { title: "Bluetooth", icon: Bluetooth },
        { title: "USB", icon: Usb },
        { title: "Scanner", icon: ScanLine },
        { title: "Chipset", icon: Cpu },
        { title: "Storage", icon: HardDrive },
        { title: "Touchpad", icon: Touchpad },
        { title: "Webcam", icon: Video },
        { title: "BIOS", icon: ShieldCheck },
        { title: "Search", icon: Search },
        { title: "Security", icon: ShieldAlert },
        { title: "Monitor", icon: Tv },
    ];

    const steps = [
        "Identify the issue clearly",
        "Check device connection",
        "Review system settings",
        "Understand driver status",
        "Update or reinstall if needed",

    ];

    return (
        <section className="bg-[#F8FAFF] py-20 px-6 font-[Poppins]">
            <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 items-start">

                {/* LEFT SIDE */}
                <div>
                    <p className="text-blue-600 text-[11px] font-semibold uppercase tracking-[0.18em] mb-3">
                        Learning Flow
                    </p>

                    <h2 className="text-[34px] md:text-[42px] font-semibold text-[#0F1B3D] leading-tight">
                        Understand How Issues Are Explored
                    </h2>

                    <p className="text-[#5B6478] text-[15px] mt-3 max-w-[520px]">
                        Follow a simple structured approach to understand how driver-related
                        topics are explained step by step.
                    </p>

                    {/* TIMELINE */}
                    <div className="mt-8 space-y-5">
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-start gap-4">

                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-[13px] font-medium">
                                        {index + 1}
                                    </div>
                                    {index !== steps.length - 1 && (
                                        <div className="w-[2px] h-8 bg-blue-100 mt-1" />
                                    )}
                                </div>

                                <div>
                                    <p className="text-[15px] font-medium text-[#0F1B3D]">
                                        {step}
                                    </p>
                                    <p className="text-[13px] text-[#6B7280] mt-1">
                                        Simple explanation to help you understand this step clearly.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
                {/* RIGHT SIDE */}
                <div className="flex flex-col items-center justify-center h-full w-full">
                    <img src="/images/fix-driver-monitor.webp" className="w-full h-full object-contain" alt="" />


                </div>




            </div>
        </section>
    );
}