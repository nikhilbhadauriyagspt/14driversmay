import React, { useState } from "react";
import { Plus, Minus, HelpCircle, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FAQHelpSection() {
    const [active, setActive] = useState(0);

    const faqs = [
        {
            q: "Why do drivers matter for a computer?",
            a: "Drivers help the operating system communicate with hardware such as WiFi, audio, printer, USB, display, Bluetooth, and camera devices.",
        },
        {
            q: "How can I notice a possible driver-related issue?",
            a: "Common signs can include no sound, weak WiFi, printer not responding, display glitches, USB device not showing, or camera not opening properly.",
        },
        {
            q: "Is this website a tech support service?",
            a: "No. This website is an information-only learning resource. It explains driver topics in simple language and does not provide repair, remote access, or support services.",
        },
        {
            q: "What type of driver topics can I learn here?",
            a: "You can read about graphics, audio, network, printer, USB, Bluetooth, chipset, webcam, scanner, storage, and other device-driver basics.",
        },
    ];

    return (
        <section className="w-full bg-white py-24 px-6 overflow-hidden font-[Poppins]">
            <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-20 items-center">
                {/* Left */}
                <div className="relative  flex items-center justify-center">

                    <img
                        src="/about/faq-driver.webp"
                        alt="Driver information learning"
                        className="relative z-10 w-full  h-auto object-cover"
                    />

                </div>

                {/* Right */}
                <div>
                    <div className="inline-flex items-center gap-3 mb-5">
                        <span className="w-10 h-10 rounded-full border border-dashed border-[#2563eb] flex items-center justify-center text-[#2563eb]">
                            <HelpCircle size={18} />
                        </span>
                        <span className="text-[14px] font-semibold text-[#2563eb] uppercase tracking-wide">
                            Driver Questions
                        </span>
                    </div>

                    <h2 className="text-[34px] md:text-[44px] font-semibold leading-tight text-[#202124] mb-5">
                        Simple answers about driver topics.
                    </h2>

                    <p className="text-[16px] leading-[1.8] text-slate-500 max-w-[680px] mb-10">
                        Learn common driver basics without service claims, remote support,
                        or confusing technical language.
                    </p>

                    <div className="divide-y divide-slate-200">
                        {faqs.map((faq, index) => (
                            <div key={index} className="group">
                                <button
                                    onClick={() => setActive(active === index ? null : index)}
                                    className="w-full flex items-center justify-between gap-6 py-7 text-left"
                                >
                                    <span className="text-[18px] md:text-[21px] font-semibold text-slate-900 group-hover:text-[#2563eb] transition">
                                        {faq.q}
                                    </span>

                                    <span
                                        className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${active === index
                                            ? "bg-[#2563eb] text-white rotate-180"
                                            : "bg-[#f1f5ff] text-[#2563eb]"
                                            }`}
                                    >
                                        {active === index ? <Minus size={20} /> : <Plus size={20} />}
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${active === index
                                        ? "max-h-[180px] opacity-100 pb-7"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-[15px] leading-[1.9] text-slate-500 max-w-[780px]">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link
                        to="/guides"
                        className="mt-10 inline-flex items-center gap-3 text-[#2563eb] text-[15px] font-semibold border-b border-[#2563eb] pb-2 hover:gap-5 transition-all"
                    >
                        Browse Driver Guides
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}