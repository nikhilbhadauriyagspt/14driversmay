import React from "react";
import { ArrowRight, Wifi, Volume2, Monitor, Printer, Usb, Download, Cpu, ShieldAlert, Zap, Bluetooth, Video, Scan, RefreshCcw, XCircle } from "lucide-react";
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
    <section className="relative bg-[#087dcc] py-24 px-6 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Modern Header UI */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-200 animate-pulse"></span>
            Information guides
          </div>

          <h2 className="text-4xl md:text-6xl font-[900] text-white tracking-tight mb-6 drop-shadow-sm">
            Understand common driver topics
          </h2>

          <div className="w-20 h-1.5 bg-white/30 rounded-full mb-8"></div>

          <p className="text-blue-50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-90">
            Simple and clear information to help you identify hardware communication on your computer.
          </p>
        </div>

        {/* Clean White Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {issues.map((issue, idx) => (
            <Link
              key={idx}
              to={`/guide/${issue.slug}`}
              className="group bg-white rounded-[15px] p-2.5 transition-all duration-500 flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative h-52 overflow-hidden rounded-[15px]">
                <picture>
                  <source srcSet={issue.avif} type="image/avif" />
                  <source srcSet={issue.image} type="image/webp" />
                  <img
                    src={issue.png}
                    alt={issue.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>

              {/* Content Area */}
              <div className="p-7">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm border border-blue-100 group-hover:bg-[#087dcc] group-hover:text-white transition-colors duration-300">
                    {React.cloneElement(issue.icon, { size: 18, strokeWidth: 2.5 })}
                  </div>
                  <h3 className="text-[19px] font-bold text-slate-900 group-hover:text-[#087dcc] transition-colors leading-tight">
                    {issue.title}
                  </h3>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {issue.desc}
                </p>

                <div className="flex items-center gap-2 text-[#087dcc] font-black text-[11px] uppercase tracking-widest">
                  <span>Learn more</span>
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center transition-all group-hover:bg-[#087dcc] group-hover:text-white">
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>


      </div>
    </section>
  );
}