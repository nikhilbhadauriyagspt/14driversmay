import React from "react";
import {
    ArrowRight,
    ShieldCheck,
    BookOpen,
    Cpu,
    Monitor,
    Volume2,
    Wifi,
    Printer,
    Usb,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutDriverInfoSection() {
    const topics = [
        { name: "Display looks unusual", icon: Monitor },
        { name: "Audio is not working properly", icon: Volume2 },
        { name: "Wi-Fi keeps disconnecting", icon: Wifi },
        { name: "Printer is not responding", icon: Printer },
        { name: "USB device is not detected", icon: Usb },
        { name: "Chipset sounds confusing", icon: Cpu },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-white px-6 py-24 font-[Poppins]">
            <div className="absolute left-0 top-20 h-[360px] w-[360px] rounded-full bg-blue-50 blur-3xl" />

            <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
                {/* LEFT CONTENT */}
                {/* LEFT CONTENT */}
                <div>
                    <span className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#F1F6FF] px-5 py-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-blue-600">
                        <BookOpen size={16} />
                        About Driver Learning
                    </span>

                    <h2 className="max-w-[760px] text-[38px] font-[500] leading-[1.4] text-[#071B34] md:text-[40px]">
                        We explain computer drivers in a simple way for{" "}
                        <span className="text-blue-600">everyday users.</span>
                    </h2>

                    <p className="mt-6 max-w-[650px] text-[16px] leading-8 text-slate-600 md:text-[18px] hidden 2xl:blcok ">
                        Sometimes your sound, Wi-Fi, printer, display, USB device, or Bluetooth may
                        not behave as expected. Our guides help you understand what drivers are, why
                        they matter, and how they connect your computer with different devices.
                    </p>

                    {/* 4 POINTS */}
                    <div className="mt-11 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                        <div className="flex gap-4">
                            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#EFE9FF] text-violet-600">
                                <BookOpen size={25} strokeWidth={1.8} />
                            </span>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#071B34]">
                                    Easy to understand
                                </h3>
                                <p className="mt-2 text-[14px] leading-6 text-slate-500">
                                    Simple explanations for everyday computer users.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFECE7] text-orange-600">
                                <Cpu size={25} strokeWidth={1.8} />
                            </span>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#071B34]">
                                    Helpful guides
                                </h3>
                                <p className="mt-2 text-[14px] leading-6 text-slate-500">
                                    Driver topics explained in a clear learning style.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFF1E8] text-orange-500">
                                <Monitor size={25} strokeWidth={1.8} />
                            </span>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#071B34]">
                                    All major devices
                                </h3>
                                <p className="mt-2 text-[14px] leading-6 text-slate-500">
                                    Covers audio, display, Wi-Fi, USB, printer, and more.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#EFE9FF] text-blue-600">
                                <ShieldCheck size={25} strokeWidth={1.8} />
                            </span>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#071B34]">
                                    Safe & educational
                                </h3>
                                <p className="mt-2 text-[14px] leading-6 text-slate-500">
                                    Focused on learning, not downloads or tech support.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <Link
                            to="/guides"
                            className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-[15px] font-medium text-white transition hover:bg-[#071B34]"
                        >
                            Explore Driver Guides
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-blue-600">
                                <ArrowRight size={18} />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative">

                    <div className="relative overflow-hidden rounded-[38px]">
                        <img
                            src="/about/driver-learning-1.png"
                            alt="Person learning about computer drivers"
                            width="720"
                            height="650"
                            className="h-[750px] w-full object-cover "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}