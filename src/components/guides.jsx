import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PopularDriverGuides() {
    const guides = [
        {
            title: "Fix Driver Not Installed",
            desc: "Complete guide to install missing drivers easily.",
            img: "/guide/guide-driver-not-installed_thumb.webp",
            slug: "fix-driver-not-installed",
        },
        {
            title: "Fix Printer Driver Issues",
            desc: "Solve printer not working or printing problems.",
            img: "/guide/guide-printer-driver_thumb.webp",
            slug: "fix-printer-driver-issues",
        },
        {
            title: "Fix Audio Driver Problems",
            desc: "Fix no sound, audio not working or codec issues.",
            img: "/guide/guide-audio-driver_thumb.webp",
            slug: "fix-audio-driver-problems",
        },
        {
            title: "Fix WiFi / Network Issues",
            desc: "Fix WiFi not working or limited connection issues.",
            img: "/guide/guide-network-driver_thumb.webp",
            slug: "fix-wifi-network-issues",
        },
        {
            title: "Fix USB Driver Issues",
            desc: "Solve USB not recognized or device not working.",
            img: "/guide/guide-usb-driver_thumb.webp",
            slug: "fix-usb-driver-issues",
        },
        {
            title: "Fix Graphics Driver Issues",
            desc: "Update or reinstall graphics drivers for better performance.",
            img: "/guide/guide-graphics-driver_thumb.webp",
            slug: "fix-graphics-driver-issues",
        },
    ];

    return (
        <section className="bg-[#F7FAFF] px-6 py-6 font-[Poppins]">
            <div className="max-w-[1600px] mx-auto bg-white border border-[#E6ECF8] rounded-2xl px-10 py-8 shadow-sm">
                {/* Header */}
                <div className="relative text-start mb-8">
                    <h2 className="text-[30px] font-semibold text-[#0F1B3D] leading-tight">
                        Popular Driver Guides
                    </h2>

                    <p className="text-[14px] text-[#5B6478] mt-2 font-medium">
                        Step-by-step articles to help you fix driver related problems.
                    </p>

                    <Link
                        to="/guides"
                        className="hidden md:flex absolute right-0 top-2 items-center gap-2 text-[15px] font-semibold text-[#1557E8] hover:text-[#0F46C8]"
                    >
                        View All Guides
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-7">
                    {guides.map((guide, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="w-full h-[155px] rounded-xl overflow-hidden bg-[#EEF4FF] border border-[#E6ECF8] shadow-sm group">
                                <img
                                    src={guide.img}
                                    alt={guide.title}
                                    width={220}
                                    height={155}
                                    className="w-full h-full object-contain transition-transform group-hover:scale-105"
                                />
                            </div>

                            <h3 className="mt-4 text-[16px] font-semibold text-[#0F1B3D] leading-snug">
                                {guide.title}
                            </h3>

                            <p className="mt-2 text-[13px] leading-[1.6] text-[#5B6478] font-medium line-clamp-2">
                                {guide.desc}
                            </p>

                            <Link
                                to={`/guide/${guide.slug}`}
                                className="mt-4 flex items-center gap-1 text-[13px] font-bold text-[#1557E8] hover:text-[#0F46C8] transition-colors"
                            >
                                Read Guide: {guide.title}
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}