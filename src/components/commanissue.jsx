import React from "react";
import {
  ArrowRight, Wifi, Volume2, Monitor, Printer, Usb, Download,
  Cpu, Bluetooth, Video, Scan, RefreshCcw, XCircle, BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CommonProblems() {
  const issues = [
    { title: "WiFi and network topics", desc: "Identify connection drops and slow speeds.", image: "/guide/guide-network-driver.webp", avif: "/guide/guide-network-driver.avif", png: "/guide/guide-network-driver.png", icon: <Wifi />, slug: "understand-wifi-network-topics" },
    { title: "Audio and sound topics", desc: "Learn about speaker and microphone functions.", image: "/guide/guide-audio-driver.webp", avif: "/guide/guide-audio-driver.avif", png: "/guide/guide-audio-driver.png", icon: <Volume2 />, slug: "understand-audio-driver-topics" },
    { title: "Graphics and display topics", desc: "Identify screen flickering and gaming lag.", image: "/guide/guide-graphics-driver.webp", avif: "/guide/guide-graphics-driver.avif", png: "/guide/guide-graphics-driver.png", icon: <Monitor />, slug: "understand-graphics-driver-topics" },
    { title: "Printer connection guides", desc: "Understand why printers go offline.", image: "/guide/guide-printer-driver.webp", avif: "/guide/guide-printer-driver.avif", png: "/guide/guide-printer-driver.png", icon: <Printer />, slug: "understand-printer-driver-topics" },
    { title: "USB device recognition", desc: "Understand plug-and-play and port topics.", image: "/guide/guide-usb-driver.webp", avif: "/guide/guide-usb-driver.avif", png: "/guide/guide-usb-driver.png", icon: <Usb />, slug: "understand-usb-driver-topics" },
    { title: "Missing system drivers", desc: "Learn about driver not found topics.", image: "/guide/guide-driver-not-installed.webp", avif: "/guide/guide-driver-not-installed.avif", png: "/guide/guide-driver-not-installed.png", icon: <Download />, slug: "understand-driver-not-installed" },
    { title: "Outdated drivers", desc: "Identify topics caused by old software.", image: "/guide/guide-driver-not-installed_thumb.webp", avif: "/guide/guide-driver-not-installed_thumb.avif", png: "/guide/guide-driver-not-installed.png", icon: <RefreshCcw />, slug: "understand-driver-update-topics" },
    { title: "Update topics", desc: "Learn when driver updates stop midway.", image: "/guide/guide-driver-not-installed.webp", avif: "/guide/guide-driver-not-installed.avif", png: "/guide/guide-driver-not-installed.png", icon: <XCircle />, slug: "understand-driver-update-topics" },
    { title: "Bluetooth pairing info", desc: "Identify wireless device connection topics.", image: "/guide/guide-usb-driver_thumb.webp", avif: "/guide/guide-usb-driver_thumb.avif", png: "/guide/guide-usb-driver.png", icon: <Bluetooth />, slug: "understand-bluetooth-driver-topics" },
    { title: "Webcam topics", desc: "Camera showing black screen or not found.", image: "/images/fix-driver-monitor.webp", avif: "/images/fix-driver-monitor.avif", png: "/images/fix-driver-monitor.png", icon: <Video />, slug: "understand-webcam-driver-topics" },
    { title: "Scanner topics", desc: "Scanner failing to respond to requests.", image: "/guide/guide-printer-driver_thumb.webp", avif: "/guide/guide-printer-driver_thumb.avif", png: "/guide/guide-printer-driver.png", icon: <Scan />, slug: "understand-scanner-driver-topics" },
    { title: "Chipset logic", desc: "Communication between PC parts.", image: "/guide/guide-audio-driver_thumb.webp", avif: "/guide/guide-audio-driver_thumb.avif", png: "/guide/guide-audio-driver.png", icon: <Cpu />, slug: "guide-chipset-drivers" },
  ];

  return (
    <section className="relative bg-[#F6FAFF] py-24 px-4 sm:px-6 font-['Poppins']">
      <div className="absolute top-0 left-0 w-full h-[360px] bg-[#0675DB]" />
      <div className="absolute top-16 left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute top-10 right-20 w-52 h-52 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 items-start">
          {/* Left Sticky Intro */}
          <div className="lg:sticky lg:top-[120px] self-start">
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-blue-100 shadow-none">
              <div className="w-16 h-16 rounded-2xl bg-[#0675DB] text-white flex items-center justify-center mb-7">
                <BookOpen size={28} />
              </div>

              <p className="text-[12px] font-black uppercase tracking-[0.25em] text-[#0675DB] mb-4">
                Information Guides
              </p>

              <h2 className="text-[28px] md:text-[34px] font-black leading-[1.08] text-slate-950 mb-6">
                Understand common driver topics
              </h2>

              <p className="text-[16px] leading-[1.8] text-slate-600 mb-8">
                Simple and clear information to help you identify hardware
                communication topics on your computer.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-blue-50 p-5">
                  <p className="text-3xl font-black text-[#0675DB]">12</p>
                  <p className="text-sm font-semibold text-slate-600 mt-1">
                    Guide Topics
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-3xl font-black text-slate-950">Easy</p>
                  <p className="text-sm font-semibold text-slate-600 mt-1">
                    Learning
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {issues.map((issue, idx) => (
              <Link
                key={idx}
                to={`/guide/${issue.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-blue-100/70 shadow-sm hover:shadow-md transition-all duration-500"
              >
                <div className="relative h-[230px] bg-slate-100 overflow-hidden">
                  <picture>
                    <source srcSet={issue.avif} type="image/avif" />
                    <source srcSet={issue.image} type="image/webp" />
                    <img
                      src={issue.png}
                      alt={issue.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </picture>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

                  <div className="absolute left-5 bottom-5 w-12 h-12 rounded-2xl bg-white text-[#0675DB] flex items-center justify-center shadow-lg">
                    {React.cloneElement(issue.icon, {
                      size: 21,
                      strokeWidth: 2.5,
                    })}
                  </div>

                  <div className="absolute top-5 right-5 rounded-full bg-white/90 px-4 py-1.5 text-[11px] font-black uppercase tracking-wider text-[#0675DB]">
                    Guide
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-[20px] font-black text-slate-950 leading-tight mb-3 group-hover:text-[#0675DB] transition">
                    {issue.title}
                  </h3>

                  <p className="text-[14px] leading-relaxed text-slate-500 mb-6 line-clamp-2">
                    {issue.desc}
                  </p>

                  <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                    <span className="text-[12px] font-black uppercase tracking-[0.18em] text-[#0675DB]">
                      Read Topic
                    </span>

                    <span className="w-9 h-9 rounded-full bg-blue-50 text-[#0675DB] flex items-center justify-center group-hover:bg-[#0675DB] group-hover:text-white transition">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}