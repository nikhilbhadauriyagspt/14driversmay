import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, ArrowRight, HelpCircle } from "lucide-react";

export default function FAQHelpSection() {
    const [active, setActive] = useState(null);

    const faqs = [
        {
            q: "Why is a driver not installed?",
            a: "This usually happens when Windows does not have a matching driver in its local database. You can learn about specific driver packages on the manufacturer's official support website."
        },
        {
            q: "How can I identify if a driver is outdated?",
            a: "Signs of an outdated driver include system lag or hardware (like WiFi or Sound) performing poorly. You can identify the 'Driver Date' in Device Manager to see how old it is."
        },
        {
            q: "Why might a device not be detected?",
            a: "A device might not be detected due to a faulty cable, a disabled port in BIOS, or missing motherboard chipset drivers. Identifying the connection type is a good first step."
        },
        {
            q: "Is it safe to learn about driver updates?",
            a: "Yes, learning about drivers from official sources is a key part of system maintenance. Official drivers are tested for stability. Our guides provide information on these topics."
        },
        {
            q: "Why might a driver update fail?",
            a: "Common reasons include insufficient disk space, an incompatible version, or background security software. Understanding system permissions can help identify the cause."
        },
        {
            q: "What happens if a wrong driver is installed?",
            a: "Installing an incorrect driver can cause hardware malfunctions. Windows allows you to 'Roll Back' to the previous driver version in Device Manager to return to a known state."
        },
        {
            q: "How often should I check driver information?",
            a: "If your system is running smoothly, you don't need to check often. However, understanding your hardware status every 3-6 months is a good practice for system knowledge."
        },
        {
            q: "Do I need to restart after a driver process?",
            a: "Many driver processes require a system restart to fully initialize the software and clear the old data from memory. This is a standard part of system updates."
        },
        {
            q: "Can a driver affect hardware?",
            a: "A driver tells the hardware how to behave. While rare, a poorly optimized driver can affect hardware performance. Modern hardware has safety protocols to prevent damage."
        },
        {
            q: "How do I remove a driver entry?",
            a: "In Device Manager, you can right-click a specific hardware component and select 'Uninstall device' to remove its driver entry from the system."
        },
        {
            q: "What are OEM vs Generic drivers?",
            a: "OEM drivers are customized by your laptop brand (like HP or Dell), while Generic drivers come directly from the component maker (like Intel or Realtek). Both provide the same basic communication."
        },
        {
            q: "Can I learn about drivers without internet?",
            a: "Yes, our offline-ready guides provide information that you can read any time to understand how your computer hardware works."
        },
    ];

    return (
        <section className="bg-white py-24 px-6 font-[Poppins]">
            <div className="max-w-[1600px] mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[12px] font-bold uppercase tracking-wider mb-4">
                        <HelpCircle size={14} /> Common Questions
                    </div>
                    <h2 className="text-[32px] md:text-[42px] font-bold text-[#07153A] leading-tight">
                        Frequently Asked <span className="text-blue-600">Questions</span>
                    </h2>
                    <p className="mt-4 text-[#667085] text-[16px] max-w-xl mx-auto leading-relaxed">
                        Find quick answers to common technical queries about drivers, system updates, and hardware documentation.
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`border transition-all duration-300 rounded-2xl h-fit ${active === i ? "border-blue-200 bg-blue-50/30" : "border-slate-100 bg-white hover:border-blue-100"
                                }`}
                        >
                            <button
                                onClick={() => setActive(active === i ? null : i)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left group"
                            >
                                <span className={`text-[15px] md:text-[16px] font-semibold transition-colors duration-300 ${active === i ? "text-blue-600" : "text-[#07153A] group-hover:text-blue-600"
                                    }`}>
                                    {faq.q}
                                </span>

                                <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${active === i ? "bg-blue-600 text-white rotate-180" : "bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600"
                                    }`}>
                                    {active === i ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </button>

                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${active === i ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                                }`}>
                                <div className="px-6 pb-6 text-[14px] leading-relaxed text-[#5B6478]">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Simplified Footer CTA */}
                <div className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 max-w-[900px] mx-auto">
                    <div>
                        <h3 className="text-[20px] font-bold text-[#07153A]">Still have questions?</h3>
                        <p className="text-[14px] text-[#667085] mt-1">Explore our deep-dive technical guides for more information.</p>
                    </div>
                    <Link to="/guides" className="flex items-center gap-2 bg-blue-600 text-white px-7 py-3 rounded-full text-[14px] font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 whitespace-nowrap">
                        Browse Full Library
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}