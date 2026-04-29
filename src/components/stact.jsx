import React from "react";
import {
    ShieldCheck,
    CheckCircle2,
    Monitor,
    UserRound,
    Clock3,
    Headphones,
} from "lucide-react";

export default function FeatureStrip() {
    const features = [

        {
            title: "Technical Manuals",
            text: "Comprehensive guides for all hardware architectures.",
            icon: CheckCircle2,
        },
        {
            title: "System Analysis",
            text: "Deep technical insights into hardware communication.",
            icon: UserRound,
        },
        {
            title: "Resource Library",
            text: "Extensive archive of technical specifications.",
            icon: Clock3,
        },
        {
            title: "Daily Updates",
            text: "Information refreshed to match latest hardware releases.",
            icon: Headphones,
        },
    ];

    return (
        <section className="bg-[#F7FAFF] px-6 py-5 font-[Poppins]">
            <div className="max-w-[1600px] mx-auto rounded-2xl bg-[#EEF7FF] border border-[#DDEBFF] px-7 py-5 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {features.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="flex items-start gap-3 min-h-[72px]"
                            >
                                <div className="w-[46px] h-[46px] shrink-0 rounded-full bg-white border border-[#DDEBFF] flex items-center justify-center shadow-sm">
                                    <Icon className="w-6 h-6 text-[#1557E8]" strokeWidth={2.3} />
                                </div>

                                <div>
                                    <h3 className="text-[15px] font-semibold text-[#1557E8] leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1 text-[12px] leading-[1.55] text-[#0F1B3D] font-medium">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}