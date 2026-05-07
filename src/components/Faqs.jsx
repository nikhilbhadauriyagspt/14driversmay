import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, ArrowRight, HelpCircle, BookOpen } from "lucide-react";

export default function FAQHelpSection() {
    const [active, setActive] = useState(null);

    const faqs = [
        {
            q: "Why is a driver not installed?",
            a: "This usually happens when Windows does not have a matching driver in its local database. You can learn about specific driver packages on the manufacturer's official support website.",
        },
        {
            q: "How can I identify if a driver is outdated?",
            a: "Signs of an outdated driver include system lag or hardware performing poorly. You can identify the Driver Date in Device Manager to see how old it is.",
        },
        {
            q: "Why might a device not be detected?",
            a: "A device might not be detected due to a faulty cable, a disabled port in BIOS, or missing motherboard chipset drivers. Identifying the connection type is a good first step.",
        },
        {
            q: "Is it safe to learn about driver updates?",
            a: "Yes, learning about drivers from official sources is a key part of system maintenance. Our guides provide information on these topics.",
        },
        {
            q: "Why might a driver update fail?",
            a: "Common reasons include insufficient disk space, an incompatible version, or background security software. Understanding system permissions can help identify the cause.",
        },
        {
            q: "What happens if a wrong driver is installed?",
            a: "Installing an incorrect driver can cause hardware malfunctions. Windows allows you to Roll Back to the previous driver version in Device Manager.",
        },
        {
            q: "How often should I check driver information?",
            a: "If your system is running smoothly, you don't need to check often. Understanding your hardware status every 3-6 months is a good practice.",
        },
        {
            q: "Do I need to restart after a driver process?",
            a: "Many driver processes require a system restart to fully initialize the software and clear the old data from memory.",
        },
        {
            q: "Can a driver affect hardware?",
            a: "A driver tells the hardware how to behave. A poorly optimized driver can affect hardware performance, though modern hardware has safety protocols.",
        },
        {
            q: "How do I remove a driver entry?",
            a: "In Device Manager, you can right-click a specific hardware component and select Uninstall device to remove its driver entry.",
        },
        {
            q: "What are OEM vs Generic drivers?",
            a: "OEM drivers are customized by your laptop brand, while Generic drivers come directly from the component maker. Both provide basic communication.",
        },
        {
            q: "Can I learn about drivers without internet?",
            a: "Yes, our offline-ready guides provide information that you can read any time to understand how your computer hardware works.",
        },
    ];

    return (
        <section className="w-full bg-[#F7FBFF] py-24 px-4 sm:px-6 font-[Poppins]">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10">
                {/* Left Panel */}
                <div className="bg-[#045fb4] text-white p-8 md:p-10 rounded-[12px] h-fit lg:sticky lg:top-28">
                    <div className="w-14 h-14 rounded-[8px] bg-white/15 flex items-center justify-center mb-7">
                        <HelpCircle size={28} />
                    </div>

                    <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-white mb-4">
                        Common Questions
                    </p>

                    <h2 className="text-[36px] md:text-[46px] font-black leading-[1.08] mb-6">
                        Frequently Asked Questions
                    </h2>

                    <p className="text-[15px] leading-[1.8] text-white mb-8">
                        Find simple answers about driver information, system settings,
                        device recognition, and driver learning topics.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="border border-white/20 p-4 rounded-[8px]">
                            <p className="text-3xl font-black">12</p>
                            <p className="text-[13px] text-white mt-1">Questions</p>
                        </div>

                        <div className="border border-white/20 p-4 rounded-[8px]">
                            <p className="text-3xl font-black">Easy</p>
                            <p className="text-[13px] text-white mt-1">Answers</p>
                        </div>
                    </div>

                    <Link
                        to="/guides"
                        className="inline-flex items-center gap-2 bg-white text-[#0675DB] px-6 py-3 rounded-[6px] text-[14px] font-black hover:bg-blue-50 transition"
                    >
                        Browse Guides
                        <ArrowRight size={16} />
                    </Link>
                </div>

                {/* FAQ Content */}
                <div className="bg-white border border-blue-100 rounded-[12px] p-4 md:p-6">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-4">
                        <div className="w-11 h-11 rounded-[8px] bg-blue-50 text-[#0675DB] flex items-center justify-center">
                            <BookOpen size={21} />
                        </div>

                        <div>
                            <h3 className="text-[22px] font-black text-slate-950">
                                Driver Learning FAQ
                            </h3>
                            <p className="text-[14px] text-slate-500 mt-1">
                                Educational answers for common driver topics.
                            </p>
                        </div>
                    </div>

                    <div className="divide-y divide-slate-100">
                        {faqs.map((faq, i) => (
                            <div key={i}>
                                <button
                                    onClick={() => setActive(active === i ? null : i)}
                                    className="w-full py-5 flex items-center justify-between gap-5 text-left group"
                                >
                                    <span
                                        className={`text-[15px] md:text-[16px] font-bold transition ${active === i
                                            ? "text-[#0675DB]"
                                            : "text-slate-900 group-hover:text-[#0675DB]"
                                            }`}
                                    >
                                        {faq.q}
                                    </span>

                                    <span
                                        className={`w-8 h-8 rounded-[6px] flex items-center justify-center shrink-0 transition ${active === i
                                            ? "bg-[#0675DB] text-white"
                                            : "bg-slate-50 text-slate-500 group-hover:bg-blue-50 group-hover:text-[#0675DB]"
                                            }`}
                                    >
                                        {active === i ? <Minus size={16} /> : <Plus size={16} />}
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${active === i ? "max-h-[260px] opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="pb-5 pr-12 text-[14px] md:text-[15px] leading-[1.8] text-slate-600">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 bg-[#F7FBFF] border border-blue-100 rounded-[8px] p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h4 className="text-[18px] font-black text-slate-950">
                                Want to read more?
                            </h4>
                            <p className="text-[14px] text-slate-500 mt-1">
                                Explore our full guide library for driver learning topics.
                            </p>
                        </div>

                        <Link
                            to="/guides"
                            className="inline-flex items-center justify-center gap-2 bg-[#0675DB] text-white px-6 py-3 rounded-[6px] text-[14px] font-black hover:bg-[#045fb4] transition whitespace-nowrap"
                        >
                            View Library
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}