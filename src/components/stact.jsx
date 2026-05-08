import React from "react";
import {
    CheckCircle2,
    UserRound,
    Clock3,
    Headphones,
    ArrowRight
} from "lucide-react";

export default function FeatureStrip() {
    const features = [
        {
            title: "Technical Manuals",
            text: "Comprehensive guides for all hardware architectures.",
            icon: CheckCircle2,
            color: "blue"
        },
        {
            title: "System Analysis",
            text: "Deep technical insights into hardware communication.",
            icon: UserRound,
            color: "indigo"
        },
        {
            title: "Resource Library",
            text: "Extensive archive of technical specifications.",
            icon: Clock3,
            color: "sky"
        },
        {
            title: "Daily Updates",
            text: "Information refreshed to match latest hardware releases.",
            icon: Headphones,
            color: "royalblue"
        },
    ];

    return (
        <section className="bg-white py-20 px-6 font-[Poppins]">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="group relative p-8 rounded-[24px] bg-[#F8FAFF] border border-[#E8F0FF] transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2"
                            >
                                {/* Icon Container */}
                                <div className="w-14 h-14 rounded-2xl bg-white border border-[#E8F0FF] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500">
                                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-500" strokeWidth={2} />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-[19px] font-[500]text-[#07153A] mb-3 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-[14px] leading-relaxed text-[#667085] font-medium">
                                        {item.text}
                                    </p>
                                </div>

                                {/* Bottom Accent */}
                                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-transparent group-hover:bg-blue-600 rounded-b-[24px] transition-all duration-500" />

                                {/* Decorative Element */}
                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <ArrowRight className="w-5 h-5 text-blue-200" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}