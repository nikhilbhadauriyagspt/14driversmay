import React from "react";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function WhenNeedDrivers() {
    const scenarios = [
        {
            title: "New Hardware",
            problem: "You just plugged in a new mouse, camera, or printer.",
            why: "Our guide helps you understand how your PC sees the new part.",
            img: "/needdriver/need-new-device_thumb.webp",
            avif: "/needdriver/need-new-device_thumb.avif",
            png: "/needdriver/need-new-device.png",
            path: "/guide/understand-driver-not-installed"
        },
        {
            title: "After Updates",
            problem: "Your computer just finished a big Windows update.",
            why: "Read this to understand changes in system behavior after the update.",
            img: "/needdriver/need-windows-update_thumb.webp",
            avif: "/needdriver/need-windows-update_thumb.avif",
            png: "/needdriver/need-windows-update.png",
            path: "/guide/understand-driver-update-topics"
        },
        {
            title: "Hardware Topics",
            problem: "A part was working fine, but now its behavior has changed.",
            why: "Our guide explains why hardware communication might change.",
            img: "/needdriver/need-hardware-stop_thumb.webp",
            avif: "/needdriver/need-hardware-stop_thumb.avif",
            png: "/needdriver/need-hardware-stop.png",
            path: "/guide/understand-device-not-detected"
        },
        {
            title: "Printer Info",
            problem: "Your PC shows a printer or scanner recognition topic.",
            why: "We show you how to understand printer and scanner data.",
            img: "/needdriver/need-printer-scanner_thumb.webp",
            avif: "/needdriver/need-printer-scanner_thumb.avif",
            png: "/needdriver/need-printer-scanner.png",
            path: "/guide/understand-printer-driver-topics"
        },
        {
            title: "Network Basics",
            problem: "Your WiFi or internet connection basics have changed.",
            why: "Read this to understand wireless adapter and network data.",
            img: "/needdriver/need-audio-wifi_thumb.webp",
            avif: "/needdriver/need-audio-wifi_thumb.avif",
            png: "/needdriver/need-audio-wifi.png",
            path: "/guide/understand-wifi-network-topics"
        },
        {
            title: "System Data",
            problem: "You see a system box with driver information.",
            why: "Our guide explains what system data means for your PC hardware.",
            img: "/needdriver/need-driver-errors_thumb.webp",
            avif: "/needdriver/need-driver-errors_thumb.avif",
            png: "/needdriver/need-driver-errors.png",
            path: "/guide/understand-driver-update-topics"
        },
    ];

    return (
        <section className="bg-white px-6 py-20 font-sans">
            <div className="max-w-[1600px] mx-auto">
                {/* Clean Header */}
                <div className="mb-16 border-l-4 border-blue-600 pl-8">
                    <h2 className="text-[32px] md:text-[40px] font-bold text-slate-900 leading-tight">
                        Common Situations:<br />
                        <span className="text-blue-600">When to read these information guides</span>
                    </h2>
                    <p className="mt-4 text-[16px] text-slate-500 font-medium max-w-xl">
                        Computer parts use "Drivers" to talk to your PC. Read our information guides to understand these common technical topics.
                    </p>
                </div>

                {/* Wide Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {scenarios.map((item, index) => (
                        <div key={index} className="flex flex-col sm:flex-row bg-slate-50 border border-slate-200 rounded-[10px] overflow-hidden hover:border-blue-300 transition-colors group">
                            {/* Left Side: Image */}
                            <div className="sm:w-[220px] h-[200px] sm:h-auto shrink-0 overflow-hidden bg-slate-200">
                                <picture>
                                    <source srcSet={item.avif} type="image/avif" />
                                    <source srcSet={item.img} type="image/webp" />
                                    <img
                                        src={item.png}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </picture>
                            </div>

                            {/* Right Side: Content */}
                            <div className="p-6 flex flex-col justify-between flex-1">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                            <h3 className="text-[18px] font-bold text-slate-900">{item.title}</h3>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex gap-3">
                                            <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">The Problem</p>
                                                <p className="text-[13px] text-slate-600 leading-snug font-medium">{item.problem}</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-3 pt-3 border-t border-slate-200">
                                            <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                            <div>
                                                <p className="text-[10px] font-bold text-blue-500 uppercase tracking-wider mb-0.5">Our Guide Helps</p>
                                                <p className="text-[13px] text-slate-800 leading-snug font-semibold">{item.why}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Link to={item.path} className="mt-6 flex items-center gap-2 text-[13px] font-bold text-blue-600 hover:text-blue-700 transition-all">
                                    Read Full Guide <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
