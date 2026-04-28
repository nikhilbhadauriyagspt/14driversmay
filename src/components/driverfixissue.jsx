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
    ArrowRight,
    Wrench,
    Library,
    Video,
    ShieldCheck,
    Search,
    ShieldAlert,
    Tv,
} from "lucide-react";

export default function DriverTypesAndFix() {
    const drivers = [
        { title: "Printer\nDrivers", icon: Printer },
        { title: "Network\nDrivers", icon: Wifi },
        { title: "Audio\nDrivers", icon: Volume2 },
        { title: "Graphics\nDrivers", icon: Monitor },
        { title: "Bluetooth\nDrivers", icon: Bluetooth },
        { title: "USB\nDrivers", icon: Usb },
        { title: "Scanner\nDrivers", icon: ScanLine },
        { title: "Chipset\nDrivers", icon: Cpu },
        { title: "Storage\nDrivers", icon: HardDrive },
        { title: "Touchpad\nDrivers", icon: Touchpad },
        { title: "Webcam\nDrivers", icon: Video },
        { title: "BIOS\nFirmware", icon: ShieldCheck },
        { title: "Scanner\nSupport", icon: Search },
        { title: "Security\nDrivers", icon: ShieldAlert },
        { title: "Monitor\nDrivers", icon: Tv },
    ];

    const steps = [
        {
            title: "Identify the Issue",
            text: "Understand what’s not working.",
        },
        {
            title: "Check Device Connection",
            text: "Ensure the device is properly connected.",
        },
        {
            title: "Review System Settings",
            text: "Check Device Manager and system settings.",
        },
        {
            title: "Check Driver Status",
            text: "See if driver is missing, outdated or corrupted.",
        },
        {
            title: "Update or Reinstall Driver",
            text: "Download and install the correct driver.",
        },
        {
            title: "Restart and Test Device",
            text: "Restart your system and test the device.",
        },
    ];

    return (
        <section className="bg-[#F7FAFF] px-6 py-6 font-[Poppins]">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* LEFT CARD */}
                <div className="bg-white border border-[#E6ECF8] rounded-2xl px-8 py-9 shadow-sm">
                    {/* Decorative Badge */}
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
                            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Supported Hardware</span>
                        </div>
                    </div>

                    <div className="text-center mb-9">
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <Library className="w-7 h-7 text-[#1557E8]" />
                            <h2 className="text-[30px] md:text-[34px] font-bold text-[#0F1B3D] leading-tight">
                                Technical <span className="text-[#1557E8]">Data Covered</span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#5B6478] mt-2 font-medium">
                            Comprehensive documentation for all critical system hardware components.
                        </p>
                    </div>

                    <div className="grid grid-cols-5 gap-x-7 gap-y-8">
                        {drivers.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <div className="w-[50px] h-[50px] rounded-xl bg-[#F1F6FF] flex items-center justify-center mb-3">
                                        <Icon className="w-6 h-6 text-[#1557E8]" strokeWidth={2.4} />
                                    </div>

                                    <h3 className="text-[13px] font-semibold text-[#0F1B3D] ">
                                        {item.title}
                                    </h3>
                                </div>
                            );
                        })}
                    </div>


                </div>

                {/* RIGHT CARD */}
                <div className="bg-white border border-[#E6ECF8] rounded-2xl px-8 py-9 shadow-sm overflow-hidden">
                    {/* Decorative Badge */}
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
                            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Repair Guide</span>
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <Wrench className="w-7 h-7 text-[#1557E8]" />
                            <h2 className="text-[30px] md:text-[34px] font-bold text-[#0F1B3D] leading-tight">
                                How to <span className="text-[#1557E8]">Fix Driver Issues</span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#5B6478] mt-2 font-medium">
                            Follow these simple steps to resolve driver problems effectively.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_270px] gap-6 items-center">
                        {/* Steps */}
                        <div className="space-y-4">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="w-7 h-7 shrink-0 rounded-full bg-[#1557E8] text-white flex items-center justify-center text-[13px] font-bold">
                                        {index + 1}
                                    </div>

                                    <div>
                                        <h3 className="text-[15px] font-semibold text-[#0F1B3D] leading-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-[12px] text-[#5B6478] mt-1 font-medium leading-relaxed">
                                            {step.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Image */}
                        <div className="hidden md:block">
                            <img
                                src="/images/fix-driver-monitor.png"
                                alt="How to fix driver issues"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>


                </div>

            </div>
        </section>
    );
}