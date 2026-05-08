import React from "react";
import {
  ArrowRight,
  Wifi,
  Volume2,
  Monitor,
  Printer,
  Usb,
  Download,
  Bluetooth,
  Video,
  Scan,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CommonProblems() {
  const issues = [
    {
      title: "WiFi & Network Driver Topics",
      desc: "Learn why wireless connections may drop, slow down, or fail to detect available networks.",
      icon: <Wifi />,
      slug: "understand-wifi-network-topics",
    },
    {
      title: "Audio & Sound Driver Topics",
      desc: "Understand speaker, headphone, and microphone issues caused by audio driver communication.",
      icon: <Volume2 />,
      slug: "understand-audio-driver-topics",
    },
    {
      title: "Graphics & Display Driver Topics",
      desc: "Explore screen flickering, display scaling, brightness, and visual performance related topics.",
      icon: <Monitor />,
      slug: "understand-graphics-driver-topics",
    },
    {
      title: "Printer Driver Connection Guides",
      desc: "Learn why printers may appear offline, fail to respond, or not show correctly on your device.",
      icon: <Printer />,
      slug: "understand-printer-driver-topics",
    },
    {
      title: "USB Device Recognition Topics",
      desc: "Understand why USB devices may not be detected, load slowly, or disconnect unexpectedly.",
      icon: <Usb />,
      slug: "understand-usb-driver-topics",
    },
    {
      title: "Missing Driver Information",
      desc: "Learn what it means when a system shows driver not found, unavailable, or unknown device notices.",
      icon: <Download />,
      slug: "understand-driver-not-installed",
    },
    {
      title: "Bluetooth Pairing Topics",
      desc: "Understand common wireless pairing, device visibility, and connection stability topics.",
      icon: <Bluetooth />,
      slug: "understand-bluetooth-driver-topics",
    },
    {
      title: "Webcam Driver Topics",
      desc: "Learn why a webcam may show a black screen, not open, or fail to appear in apps.",
      icon: <Video />,
      slug: "understand-webcam-driver-topics",
    },
    {
      title: "Scanner Driver Topics",
      desc: "Explore scanner detection, response, and communication topics in a simple educational format.",
      icon: <Scan />,
      slug: "understand-scanner-driver-topics",
    },
    {
      title: "Driver Update Topics",
      desc: "Understand why driver updates may pause, fail midway, or require careful compatibility checking.",
      icon: <ArrowRight />,
      slug: "understand-driver-update-topics",
    },
  ];

  return (
    <section className="relative bg-white py-24 md:py-28 px-4 sm:px-6  overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Heading */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-12 h-[2px] bg-gradient-to-r from-[#CF00FE] to-[#005DE0]" />
            <p className="text-[13px] font-[500]text-slate-400 uppercase tracking-[0.2em]">
              Popular Topics
            </p>
          </div>

          <h2 className="text-[30px] md:text-[40px] leading-[1.15] font-semibold text-slate-900">
            Learn About Common Driver Issues
          </h2>

          <p className="mt-5 text-[15px] md:text-[16px] leading-[1.8] text-slate-500">
            Explore clear educational guides about WiFi, sound, and other parts
            that help your computer work correctly every day.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-6">
          {issues.map((issue, idx) => (
            <Link
              key={idx}
              to={`/guide/${issue.slug}`}
              className={`group relative min-h-[320px] rounded-[12px] p-8 overflow-hidden transition-all duration-500 bg-[#F8FAFC] text-slate-900 hover:bg-gradient-to-br hover:from-[#CF00FE] hover:to-[#005DE0] hover:text-white ${idx === 9 ? "hidden 2xl:block" : "block"
                }`}
            >
              {/* Background Icon Pattern - Only on Hover */}
              <img
                src="/about/bg-icon-box.avif"
                alt=""
                width="160"
                height="203"
                className="absolute top-6 right-2 w-[160px] opacity-0 group-hover:opacity-10 pointer-events-none transition-all duration-700 transform translate-x-4 group-hover:translate-x-0"
              />

              {/* Icon */}
              <div
                className="relative z-10 w-[56px] h-[56px] rounded-2xl flex items-center justify-center mb-7 transition-all duration-500 bg-white text-[#005DE0] group-hover:bg-white/20 group-hover:text-white"
              >
                {React.cloneElement(issue.icon, {
                  size: 28,
                  strokeWidth: 2,
                })}
              </div>

              <div className="relative z-10">
                <h3 className="text-[18px] leading-[1.4] font-semibold mb-4">
                  {issue.title}
                </h3>

                <p className="text-[14px] leading-[1.6] mb-8 text-slate-500 group-hover:text-white/90 transition-colors duration-500">
                  {issue.desc}
                </p>

                <div className="inline-flex items-center gap-2 text-[13px] font-[500] uppercase tracking-wider group-hover:text-white transition-colors duration-500">
                  Read More
                  <ArrowRight size={15} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}