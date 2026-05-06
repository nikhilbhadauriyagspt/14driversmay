import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, ArrowRight, HelpCircle } from "lucide-react";

export default function FAQHelpSection() {
    const [active, setActive] = useState(null);

    const faqs = [
        {
            q: "Why is my driver not installed?",
            a: "This usually happens when Windows cannot find a matching driver in its local database. You may need to manually download the specific driver package from the manufacturer's official support website."
        },
        {
            q: "How do I know if my driver is outdated?",
            a: "Signs of an outdated driver include system lag, frequent crashes, or hardware (like WiFi or Sound) performing poorly. You can check the 'Driver Date' in Device Manager to see how old it is."
        },
        {
            q: "Why is my device not detected?",
            a: "A device might not be detected due to a faulty cable, a disabled port in BIOS, or missing motherboard chipset drivers. Try a different port or 'Scan for hardware changes' in Device Manager."
        },
        {
            q: "Is it safe to update drivers?",
            a: "Yes, provided you download them from official sources. Official drivers are tested for stability and security. Avoid third-party 'driver updater' software that isn't from your PC manufacturer."
        },
        {
            q: "Why did my driver update fail?",
            a: "Common reasons include insufficient disk space, an incompatible driver version, or background security software blocking the installation. Try running the installer as an Administrator."
        },
        {
            q: "What happens if I install the wrong driver?",
            a: "Installing the wrong driver can cause hardware malfunctions or 'Blue Screen' errors. Windows usually allows you to 'Roll Back' to the previous driver version in Device Manager to fix this."
        },
        {
            q: "How often should I check for updates?",
            a: "Generally, if your system is running smoothly, you don't need to check often. However, checking every 3-6 months or after a major Windows update is a good practice for optimal performance."
        },
        {
            q: "Do I need to restart after an update?",
            a: "Most driver installations require a system restart to fully initialize the new software and clear the old driver from memory. Always restart if prompted by the installer."
        },
        {
            q: "Can a bad driver damage hardware?",
            a: "While rare, a very poorly optimized driver can cause overheating or incorrect voltage levels. However, modern hardware has safety protocols to prevent permanent physical damage."
        },
        {
            q: "How do I uninstall a faulty driver?",
            a: "Open Device Manager, right-click the specific hardware component, and select 'Uninstall device'. Check the box for 'Delete the driver software' if you want a clean removal."
        },
        {
            q: "What are OEM vs Generic drivers?",
            a: "OEM drivers are customized by your laptop brand (like HP or Dell), while Generic drivers come directly from the component maker (like Intel or Realtek). OEM versions are often more stable."
        },
        {
            q: "Can I update without internet?",
            a: "Yes, if you have previously downloaded the driver setup file (.exe or .msi) on a USB drive. You can run the installer offline to update the system drivers."
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
                        Find quick answers to common technical queries about drivers, system updates, and hardware troubleshooting.
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