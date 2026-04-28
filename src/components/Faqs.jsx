import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, ArrowRight } from "lucide-react";

export default function FAQHelpSection() {
    const [active, setActive] = useState(null);

    const faqs = [
        "Why is my driver not installed?",
        "How do I know if my driver is outdated?",
        "Why is my device not detected?",
        "Is it safe to update drivers?",
        "Why did my driver update fail?",
        "What happens if I install the wrong driver?",
    ];

    return (
        <section className="bg-[#F7FAFF] px-6 py-6 font-[Poppins]">
            <div className="max-w-[1600px] mx-auto bg-white border border-[#E6ECF8] rounded-2xl px-8 py-7 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_0.9fr] gap-8 items-center">

                    {/* FAQ Left */}
                    <div>
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="text-[20px] font-semibold text-[#0F1B3D]">
                                Frequently Asked Questions
                            </h2>

                            <a
                                href="#"
                                className="flex items-center gap-1 text-[13px] font-semibold text-[#1557E8]"
                            >
                                View All FAQs
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {faqs.map((q, i) => (
                                <div
                                    key={i}
                                    className="border border-[#E6ECF8] rounded-lg bg-white overflow-hidden"
                                >
                                    <button
                                        onClick={() => setActive(active === i ? null : i)}
                                        className="w-full px-4 py-3 flex items-center justify-between text-left"
                                    >
                                        <span className="text-[13px] font-semibold text-[#0F1B3D]">
                                            {q}
                                        </span>

                                        <span className="text-[#1557E8]">
                                            {active === i ? (
                                                <Minus className="w-4 h-4" />
                                            ) : (
                                                <Plus className="w-4 h-4" />
                                            )}
                                        </span>
                                    </button>

                                    {active === i && (
                                        <div className="px-4 pb-3 text-[12px] leading-5 text-[#5B6478]">
                                            Follow the related guide and check your device settings,
                                            connection, and driver status before applying the fix.
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Help Card Right */}
                    <div className="relative rounded-2xl bg-[#F3F7FF] min-h-[175px] overflow-hidden px-6 py-6 flex items-center justify-end">
                        <img
                            src="/images/support-agent.png"
                            alt="Information"
                            className="absolute left-3 bottom-0 w-[260px] h-auto object-contain"
                        />

                        <div className="relative z-10 max-w-[210px]">
                            <h3 className="text-[20px] font-semibold text-[#0F1B3D]">
                                Resource Center
                            </h3>

                            <p className="mt-2 text-[13px] leading-5 text-[#5B6478] font-medium">
                                Our documentation library is refreshed daily with the latest data.
                            </p>

                            <Link to="/guides" className="mt-4 bg-[#1557E8] text-white px-5 py-2.5 rounded-lg text-[13px] font-semibold flex items-center gap-2 hover:bg-[#0F46C8] transition">
                                Browse Guides
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}