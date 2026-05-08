import React from "react";
import { Check, ShieldCheck, BookOpen, Monitor } from "lucide-react";

export default function WhyChooseUs() {
    return (
        <section className="w-full bg-white border-y border-gray-200 y-24 px-6 py-20 overflow-hidden font-[Poppins]">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Left Side - Image with subtle styling */}
                <div className="relative">

                    <div className="relative  overflow-hidden ">
                        <img
                            src="/about/aboutmain.avif"
                            alt="Simple computer learning"
                            width="604"
                            height="604"
                            className="w-full h-auto object-cover transform "
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div>
                    <div className="inline-flex items-center gap-3 mb-6">
                        <span className="h-[2px] w-10 bg-gradient-to-r from-[#CF00FE] to-[#005DE0]"></span>
                        <span className="text-[12px] font-semibold text-slate-600 uppercase tracking-[0.25em]">
                            Why Choose Us
                        </span>
                    </div>

                    <h2 className="text-[30px] md:text-[40px] font-semibold leading-tight text-slate-900 mb-10">
                        Easy Computer Learning <br />
                        For Everyday Users
                    </h2>

                    <div className="grid grid-cols-1 gap-8">
                        {/* Point 1 */}
                        <div className="flex gap-6 p-6 bg-white border border-slate-100 rounded-sm shadow-sm hover:shadow-md transition-all group">
                            <div className="w-12 h-12 rounded-full bg-[#005DE0]/10 text-[#005DE0] flex items-center justify-center shrink-0 group-hover:bg-[#005DE0] group-hover:text-white transition-all duration-300">
                                <BookOpen size={22} />
                            </div>

                            <div>
                                <h3 className="text-[20px] font-semibold text-slate-900 mb-2">
                                    Simple Step-by-Step Guides
                                </h3>
                                <p className="text-[15px] leading-relaxed text-slate-500 max-w-[500px]">
                                    Learn how WiFi, sound, and other parts work in very simple language that anyone can understand.
                                </p>
                            </div>
                        </div>

                        {/* Point 2 */}
                        <div className="flex gap-6 p-6 bg-white border border-slate-100 rounded-sm shadow-sm hover:shadow-md transition-all group">
                            <div className="w-12 h-12 rounded-full bg-[#005DE0]/10 text-[#005DE0] flex items-center justify-center shrink-0 group-hover:bg-[#005DE0] group-hover:text-white transition-all duration-300">
                                <ShieldCheck size={22} />
                            </div>

                            <div>
                                <h3 className="text-[20px] font-semibold text-slate-900 mb-2">
                                    Trusted Information
                                </h3>
                                <p className="text-[15px] leading-relaxed text-slate-500 max-w-[500px]">
                                    We explain common computer issues clearly, helping you understand how to use your devices without any fear.
                                </p>
                            </div>
                        </div>

                        {/* Point 3 - New Point */}
                        <div className="flex gap-6 p-6 bg-white border border-slate-100 rounded-sm shadow-sm hover:shadow-md transition-all group">
                            <div className="w-12 h-12 rounded-full bg-[#005DE0]/10 text-[#005DE0] flex items-center justify-center shrink-0 group-hover:bg-[#005DE0] group-hover:text-white transition-all duration-300">
                                <Monitor size={22} />
                            </div>

                            <div>
                                <h3 className="text-[20px] font-semibold text-slate-900 mb-2">
                                    Learning For Beginners
                                </h3>
                                <p className="text-[15px] leading-relaxed text-slate-500 max-w-[500px]">
                                    Whether you are new to computers or use them every day, our guides help you feel more confident and in control.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
