import React from "react";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function WhenNeedDrivers() {
    const scenarios = [
        {
            title: "New Hardware",
            problem: "You just plugged in a new mouse, camera, or printer.",
            why: "Our guide helps your PC see and talk to the new part.",
            img: "/needdriver/need-new-device_thumb.webp",
            path: "/guide/fix-driver-not-installed"
        },
        {
            title: "After Updates",
            problem: "Your computer just finished a big Windows update.",
            why: "Read this if things feel slow or stop working after the update.",
            img: "/needdriver/need-windows-update_thumb.webp",
            path: "/guide/fix-driver-update-failed"
        },
        {
            title: "Suddenly Stopped",
            problem: "A part was working fine, but now it has stopped.",
            why: "Our guide shows you how to fix parts that suddenly quit.",
            img: "/needdriver/need-hardware-stop_thumb.webp",
            path: "/guide/fix-device-not-detected"
        },
        {
            title: "Printer Errors",
            problem: "Your PC cannot find your printer or scanner anymore.",
            why: "We show you how to help your PC find the printer again.",
            img: "/needdriver/need-printer-scanner_thumb.webp",
            path: "/guide/fix-printer-driver-issues"
        },
        {
            title: "No Connection",
            problem: "Your WiFi or internet is not connecting at all.",
            why: "Read this to fix your connection and get back online fast.",
            img: "/needdriver/need-audio-wifi_thumb.webp",
            path: "/guide/fix-wifi-network-issues"
        },
        {
            title: "Error Boxes",
            problem: "You see an error box saying 'Part not found'.",
            why: "Our guide explains what those error boxes mean for your PC.",
            img: "/needdriver/need-driver-errors_thumb.webp",
            path: "/guide/fix-driver-update-failed"
        },
    ];

    return (
        <section className="bg-white px-6 py-20 font-sans">
            <div className="max-w-[1600px] mx-auto">
                {/* Clean Header */}
                <div className="mb-16 border-l-4 border-blue-600 pl-8">
                    <h2 className="text-[32px] md:text-[40px] font-bold text-slate-900 leading-tight">
                        Common Situations:<br />
                        <span className="text-blue-600">When you should read these guides</span>
                    </h2>
                    <p className="mt-4 text-[16px] text-slate-500 font-medium max-w-xl">
                        Computer parts use "Drivers" to talk to your PC. Read our information guides if you face any of these common problems.
                    </p>
                </div>

                {/* Wide Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {scenarios.map((item, index) => (
                        <div key={index} className="flex flex-col sm:flex-row bg-slate-50 border border-slate-200 rounded-[10px] overflow-hidden hover:border-blue-300 transition-colors group">
                            {/* Left Side: Image */}
                            <div className="sm:w-[220px] h-[200px] sm:h-auto shrink-0 overflow-hidden bg-slate-200">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
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
