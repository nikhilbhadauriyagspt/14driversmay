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
  Cpu,
  BookOpen,
  MousePointer2,
  HardDrive,
  Keyboard,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CommonProblems() {
  const brandColor = "#104CEF";

  const categories = [
    {
      title: "WiFi & Network",
      count: "Network Guides",
      desc: "Learn about wireless connectivity, signal stability, and local network data.",
      icon: <Wifi />,
      slug: "understand-wifi-network-topics",
      image: "/guide/guide-network-driver.avif",
    },
    {
      title: "Audio & Sound",
      count: "Audio Guides",
      desc: "Detailed information on sound output, speaker data, and microphone logic.",
      icon: <Volume2 />,
      slug: "understand-audio-driver-topics",
      image: "/guide/guide-audio-driver.avif",
    },
    {
      title: "Graphics & Display",
      count: "Display Guides",
      desc: "Explore GPU data, resolution settings, and visual performance details.",
      icon: <Monitor />,
      slug: "understand-graphics-driver-topics",
      image: "/guide/guide-graphics-driver.avif",
    },
    {
      title: "Printer Drivers",
      count: "Printer Guides",
      desc: "Information on print spoolers, device connection, and hardware response.",
      icon: <Printer />,
      slug: "understand-printer-driver-topics",
      image: "/guide/guide-printer-driver.avif",
    },
    {
      title: "USB Recognition",
      count: "USB Guides",
      desc: "Understand universal serial bus detection and external device connectivity.",
      icon: <Usb />,
      slug: "understand-usb-driver-topics",
      image: "/guide/guide-usb-driver.avif",
    },
    {
      title: "Missing Drivers",
      count: "Device Guides",
      desc: "Data regarding unknown devices and system recognition notifications.",
      icon: <Download />,
      slug: "understand-driver-not-installed",
      image: "/guide/guide-driver-not-installed.avif",
    },
    {
      title: "Bluetooth Topics",
      count: "Bluetooth Guides",
      desc: "Wireless pairing protocols, device visibility, and connection information.",
      icon: <Bluetooth />,
      slug: "understand-bluetooth-driver-topics",
      image: "/needdriver/need-new-device.avif",
    },
    {
      title: "Webcam Drivers",
      count: "Camera Guides",
      desc: "Information on video input hardware and camera system integration.",
      icon: <Video />,
      slug: "understand-webcam-driver-topics",
      image: "/images/support-agent.avif",
    },
    {
      title: "Scanner Drivers",
      count: "Scanner Guides",
      desc: "Explore digital imaging hardware and scanner communication data.",
      icon: <Scan />,
      slug: "understand-scanner-driver-topics",
      image: "/needdriver/need-printer-scanner.avif",
    },
    {
      title: "Chipset Info",
      count: "System Guides",
      desc: "Learn how the chipset manages communication between CPU and hardware components.",
      icon: <Cpu />,
      slug: "guide-chipset-drivers",
      image: "/about/aboutmain_01.avif",
    },
    {
      title: "Touchpad Data",
      count: "Input Guides",
      desc: "Understand touchpad gesture recognition, sensitivity settings, and input logic.",
      icon: <MousePointer2 />,
      slug: "understand-input-latency-drivers",
      image: "/images/choose-1.avif",
    },
    {
      title: "Storage Drives",
      count: "Drive Guides",
      desc: "Technical data on SSD and HDD controllers and data transfer protocols.",
      icon: <HardDrive />,
      slug: "understand-device-not-detected",
      image: "/images/choose-2.avif",
    },
    {
      title: "Keyboard Input",
      count: "Input Guides",
      desc: "Learn about key mapping, input lag, and internal keyboard hardware connections.",
      icon: <Keyboard />,
      slug: "understand-input-latency-drivers",
      image: "/images/choose-3.avif",
    },
    {
      title: "BIOS Firmware",
      count: "Firmware Guides",
      desc: "Low-level system information regarding hardware initialization and boot logic.",
      icon: <ShieldCheck />,
      slug: "guide-bios-firmware-updates",
      image: "/needdriver/need-hardware-stop.avif",
    },
    {
      title: "Battery Logic",
      count: "Power Guides",
      desc: "Data on power management settings, charging protocols, and ACPI drivers.",
      icon: <Zap />,
      slug: "understand-driver-update-topics",
      image: "/needdriver/need-windows-update.avif",
    },
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-6 font-[Poppins]">
      <div className="max-w-[1500px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span 
              className="w-10 h-10 rounded-full border border-dashed flex items-center justify-center"
              style={{ borderColor: brandColor, color: brandColor }}
            >
              <BookOpen size={18} />
            </span>
            <p 
              className="text-[14px] font-semibold uppercase tracking-wider"
              style={{ color: brandColor }}
            >
              Driver Categories
            </p>
          </div>

          <h2 className="text-[32px] md:text-[42px] font-semibold text-[#202124] leading-tight">
            Browse Simple Driver
            <br />
            Information Topics
          </h2>

          <div 
            className="w-[190px] h-[2px] mx-auto mt-6 rounded-full"
            style={{ backgroundColor: brandColor }}
          ></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {categories.map((item, index) => (
            <Link
              key={index}
              to={`/guide/${item.slug}`}
              className="group relative h-[150px] rounded-[12px] border border-dashed border-[#d8dcff] bg-white overflow-hidden flex items-center px-8 transition-all duration-500 hover:border-transparent"
            >
              {/* Hover Image Background with Darker Layer */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-cover bg-center scale-110 group-hover:scale-100"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* Darker Overlay for content visibility */}
                <div className="absolute inset-0 bg-black/75"></div>
              </div>

              {/* Icon */}
              <div 
                className="relative z-10 w-[74px] h-[74px] rounded-full bg-[#f8f8f8] group-hover:bg-white flex items-center justify-center shrink-0 transition-all duration-500 shadow-sm"
                style={{ color: brandColor }}
              >
                {React.cloneElement(item.icon, {
                  size: 30,
                  strokeWidth: 1.8,
                })}
              </div>

              {/* Text Area */}
              <div className="relative z-10 ml-8 flex-1">
                <h3 className="text-[20px] md:text-[22px] font-semibold text-[#252525] group-hover:text-white transition-colors duration-500 leading-tight">
                  {item.title}
                </h3>

                {/* Badge (Hidden on Hover) */}
                <span 
                  className="inline-flex mt-3 px-3 py-1 rounded-[4px] bg-[#effdf8] text-[13px] font-medium group-hover:hidden transition-all duration-500"
                  style={{ color: brandColor }}
                >
                  {item.count}
                </span>

                {/* Content/Desc (Shown on Hover - 2 lines) */}
                <p className="hidden group-hover:block text-white/80 text-[13px] mt-2 leading-snug line-clamp-2 animate-fadeIn">
                  {item.desc}
                </p>
              </div>

              {/* Arrow */}
              <div 
                className="relative z-10 ml-auto w-[44px] h-[44px] rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#555] group-hover:text-white transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1]" style={{ backgroundColor: brandColor }}></div>
                <ArrowRight size={18} className="relative z-10" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease forwards;
        }
      `}</style>
    </section>
  );
}
