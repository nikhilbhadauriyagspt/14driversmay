import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
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
        <section className="w-full bg-[#EEF4F8] font-[Poppins] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[44%_56%] min-h-[760px]">
                {/* Left Image */}
                <div className="hidden lg:block relative overflow-hidden">
                    <img
                        src="/about/faq-main.avif"
                        alt="Driver information learning"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#071B34]/10" />
                </div>

                {/* Right FAQ */}
                <div className="px-6 md:px-14 lg:px-24 py-24 flex items-center">
                    <div className="w-full max-w-[900px]">
                        <div className="mb-10">
                            <p className="flex items-center gap-4 text-[#315BFF] text-[13px] font-semibold uppercase tracking-[0.18em] mb-6">
                                <span className="w-12 h-px bg-[#315BFF]" />
                                Driver Questions
                                <span className="w-12 h-px bg-[#315BFF]" />
                            </p>

                            <h2 className="text-[36px] md:text-[54px] leading-tight font-semibold text-[#071B34]">
                                Simple answers to common{" "}
                                <span className="text-[#315BFF]">driver topics.</span>
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white rounded-[8px] overflow-hidden">
                                    <button
                                        onClick={() => setActive(active === index ? null : index)}
                                        className="w-full min-h-[76px] px-7 flex items-center justify-between gap-6 text-left"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="text-[26px] text-slate-300 font-medium">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span className="text-[17px] font-semibold text-[#071B34]">
                                                {faq.q}
                                            </span>
                                        </div>

                                        <span className="text-[#315BFF] shrink-0">
                                            {active === index ? <Minus size={22} /> : <Plus size={22} />}
                                        </span>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${active === index
                                            ? "max-h-[180px] opacity-100"
                                            : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="px-7 pb-6 pl-[78px] text-[15px] leading-7 text-slate-600">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            to="/guides"
                            className="mt-9 inline-flex items-center gap-3 h-[52px] px-7 rounded-full bg-[#315BFF] text-white text-[15px] font-semibold hover:bg-[#1DA7F2] transition"
                        >
                            Browse Driver Guides
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}