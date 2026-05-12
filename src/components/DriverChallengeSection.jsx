import React from "react";
import {
    Check,
    Cpu,
    Monitor,
    Volume2,
    Wifi,
    Printer,
    Usb,
    ArrowRight,
    BookOpen,
    SearchCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutDriverInfoSection() {
    const points = [
        "Learn what drivers do",
        "Understand device-related signs",
        "Explore hardware categories",
        "Read simple learning guides",
    ];

    const topics = [
        "Graphics & Display",
        "Audio & Sound",
        "Wi-Fi & Network",
        "Printer Topics",
    ];

    return (
        <section className="w-full bg-[#F4F7FB] py-20 px-6 font-[Poppins] overflow-hidden">
            <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Image */}
                <div className="relative max-w-[620px] mx-auto w-full">

                    <div className="relative">
                        <img
                            src="/about/driver-learning-1.avif"
                            alt="Person learning about computer drivers"
                            width="620"
                            height="650"
                            className="w-full h-[520px] md:h-[650px] object-cover"
                        />
                    </div>


                </div>

                {/* Right Content */}
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1DA7F2] text-[#1DA7F2] text-[13px] font-semibold uppercase tracking-[0.12em] mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#1DA7F2]" />
                        About Our Driver Guides
                    </div>

                    <h2 className="text-[36px] 2xl:text-[45px] leading-[1.08] font-semibold text-[#071B34] max-w-[760px] mb-7">
                        Simple driver information for everyday computer users.
                    </h2>

                    <p className=" hidden 2xl:block text-[16px] md:text-[18px] leading-[1.8] text-[#34435E] max-w-[760px] mb-9">
                        Our website explains computer drivers in a simple educational way.
                        Learn how graphics, audio, network, USB, printer, Bluetooth, and
                        other drivers connect hardware with your system.
                    </p>

                    {/* Feature Icons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-9">
                        <div className="flex items-center gap-4">
                            <span className="w-[64px] h-[64px] rounded-full bg-[#1DA7F2] text-white flex items-center justify-center">
                                <BookOpen size={30} />
                            </span>
                            <h3 className="text-[20px] font-semibold text-[#071B34] leading-snug">
                                Learning First <br /> Content
                            </h3>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="w-[64px] h-[64px] rounded-full bg-[#06123A] text-white flex items-center justify-center">
                                <SearchCheck size={30} />
                            </span>
                            <h3 className="text-[20px] font-semibold text-[#071B34] leading-snug">
                                Clear Device <br /> Information
                            </h3>
                        </div>
                    </div>

                    <div className="h-px w-full bg-slate-200 mb-7" />

                    {/* Points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {points.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <span className="w-5 h-5 rounded-full bg-[#315BFF] text-white flex items-center justify-center">
                                    <Check size={13} />
                                </span>
                                <span className="text-[15px] font-medium text-[#071B34]">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mb-10">
                        {topics.map((item) => (
                            <span
                                key={item}
                                className="px-5 py-3 rounded-full bg-white border border-slate-200 text-[14px] font-medium text-[#34435E]"
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    <Link
                        to="/guides"
                        className="inline-flex items-center gap-3 h-[58px] px-8 pr-2 rounded-full bg-[#315BFF] text-white text-[15px] font-semibold hover:bg-[#1DA7F2] transition"
                    >
                        Explore Driver Guides
                        <span className="w-9 h-9 rounded-full bg-white text-[#315BFF] flex items-center justify-center">
                            <ArrowRight size={18} />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}