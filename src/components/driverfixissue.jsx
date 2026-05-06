import React from "react";
import {
    Monitor,
    Wifi,
    Volume2,
    Printer,
    Cpu,
    ShieldCheck,
} from "lucide-react";

export default function DriverTypesAndFix() {
    const points = [
        {
            icon: Monitor,
            title: "Display & Graphics",
            text: "Learn how graphics drivers help screens show clear visuals, correct resolution, and smooth movement.",
        },
        {
            icon: Wifi,
            title: "Network Connection",
            text: "Understand how network drivers support Wi-Fi, ethernet, routers, and stable internet connectivity.",
        },
        {
            icon: Volume2,
            title: "Audio & Sound",
            text: "Explore how audio drivers work with speakers, headphones, microphones, and sound settings.",
        },
        {
            icon: Printer,
            title: "Printer Communication",
            text: "Know how printer drivers help your device recognize printers and send print commands correctly.",
        },
    ];

    return (
        <section className="relative w-full bg-white overflow-hidden font-['Poppins'] py-20 px-4 md:px-8">
            <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div className="relative z-10">
                    <h2 className="text-[36px] md:text-[52px] leading-[1.08] font-extrabold text-[#00428f] max-w-[720px]">
                        Why Learn About{" "}
                        <span className="text-[#0783bd]">Device Drivers</span>,
                        Because...
                    </h2>

                    <p className="mt-7 text-[15px] md:text-[16px] leading-8 text-[#111827] max-w-[720px]">
                        Device drivers help your computer communicate with hardware like
                        display, sound, printer, network, USB, and other connected devices.
                        This guide explains driver topics in a simple and educational way.
                    </p>

                    <div className="mt-12 space-y-10">
                        {points.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div key={index} className="flex items-start gap-6">
                                    <div className="w-[62px] h-[62px] flex-shrink-0 rounded-2xl flex items-center justify-center text-[#006fc9]">
                                        <Icon size={48} strokeWidth={1.8} />
                                    </div>

                                    <div>
                                        <h3 className="text-[22px] md:text-[24px] font-extrabold text-[#00428f] leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-[15px] md:text-[16px] leading-7 text-[#111827] max-w-[520px]">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT IMAGE SIDE */}
                <div className="relative min-h-[650px] hidden lg:flex items-end justify-center overflow-hidden">
                    {/* Light blue big oval background */}
                    <div className="absolute right-[40px] top-[10px] w-[520px] h-[620px] rounded-t-full rounded-b-none bg-[#e9fbff]" />

                    {/* Thin outline rectangle */}
                    <div className="absolute right-[18px] bottom-[12px] w-[520px] h-[500px] border border-[#c9eef6]" />

                    {/* Dotted pattern */}
                    <div className="absolute left-[20px] top-[135px] grid grid-cols-12 gap-[13px] opacity-35 z-0">
                        {Array.from({ length: 96 }).map((_, i) => (
                            <span
                                key={i}
                                className="w-[4px] h-[4px] rounded-full bg-[#006fc9]"
                            />
                        ))}
                    </div>

                    {/* Main person image */}
                    <picture className="relative z-10">
                        <source srcSet="/images/fix-driver-monitor1.avif" type="image/avif" />
                        <source srcSet="/images/fix-driver-monitor1.webp" type="image/webp" />
                        <img
                            src="/images/fix-driver-monitor1.png"
                            alt="Device driver learning guide"
                            className="w-[560px] h-[650px] object-contain object-bottom"
                        />
                    </picture>

                    {/* Floating Card Right */}
                    <div className="absolute z-20 right-[0px] top-[300px] bg-white/95 border border-slate-100 rounded-[14px] px-8 py-5 max-w-[270px]">
                        <p className="text-[#00428f] text-[17px] leading-7 font-bold">
                            Understand Driver Topics Clearly
                        </p>
                    </div>

                    {/* Floating Card Bottom Left */}
                    <div className="absolute z-20 left-[5px] bottom-[95px] bg-white/95 border border-slate-100 rounded-[14px] px-8 py-5 max-w-[250px]">
                        <p className="text-[#00428f] text-[17px] leading-7 font-bold">
                            Simple Hardware Guide
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}