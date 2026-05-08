import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQHelpSection() {
    const [active, setActive] = useState(1);

    const faqs = [
        {
            q: "Why do driver issues affect system performance?",
            a: "Drivers help hardware communicate with the operating system. When a driver is missing, outdated, or incompatible, devices like WiFi, audio, printer, USB, webcam, or display may not work smoothly.",
        },
        {
            q: "How can I understand if a driver is outdated?",
            a: "You may notice slow performance, connection drops, sound issues, display glitches, or devices not responding. Our guides explain these topics in simple steps so users can understand the possible reason clearly.",
        },
        {
            q: "Why is my device not detected by the system?",
            a: "A device may not be detected because of a loose cable, disabled port, missing chipset driver, outdated USB driver, or compatibility issue between the device and operating system.",
        },
        {
            q: "Can wrong driver information create problems?",
            a: "Yes. Learning the correct driver type matters because an incorrect or incompatible driver may cause hardware errors, poor performance, or unstable device behavior.",
        },
    ];

    return (
        <section className="w-full bg-[#F7F7F7]  overflow-hidden">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[720px]">

                {/* Left Image */}
                <div className="relative h-[420px] lg:h-auto">
                    <img
                        src="/images/faq-driver.avif"
                        alt="Driver learning information"
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                {/* Right FAQ */}
                <div className="flex items-center px-6 sm:px-10 lg:px-28 py-20">
                    <div className="w-full max-w-[560px]">
                        <p className="text-[15px] font-bold uppercase tracking-wide text-[#0065E8] mb-5">
                            Why Choose Us
                        </p>
                        <h2 className="text-[30px] md:text-[40px] font-semibold leading-[1.15] text-slate-900 mb-8 ">
                            Simple Driver Learning Better System Understanding
                        </h2>


                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-[6px] overflow-hidden"
                                >
                                    <button
                                        onClick={() => setActive(active === index ? null : index)}
                                        className="w-full flex items-center justify-between gap-5 px-7 py-6 text-left"
                                    >
                                        <span className="text-[17px] md:text-[18px] font-bold text-black">
                                            {faq.q}
                                        </span>

                                        <span className="text-[#0065E8] shrink-0">
                                            {active === index ? (
                                                <Minus size={24} strokeWidth={3} />
                                            ) : (
                                                <Plus size={24} strokeWidth={3} />
                                            )}
                                        </span>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${active === index
                                            ? "max-h-[240px] opacity-100"
                                            : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="px-7 pb-7 text-[16px] leading-[1.9] text-slate-600">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}