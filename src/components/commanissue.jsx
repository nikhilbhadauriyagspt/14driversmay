import React from "react";
import {
  Download,
  RefreshCcw,
  Monitor,
  XCircle,
  Printer,
  Volume2,
  Wifi,
  Bluetooth,
  Usb,
  MonitorSmartphone,
  Video,
  Scan,
  Cpu,
  ShieldAlert,
  Zap,
} from "lucide-react";

export default function CommonProblems() {
  const problems = [
    {
      title: "Driver Not Installed",
      desc: "Device not working because driver is missing.",
      icon: <Download />,
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      title: "Outdated Drivers",
      desc: "Old drivers causing errors or performance issues.",
      icon: <RefreshCcw />,
      color: "text-orange-500",
      bg: "bg-orange-100",
    },
    {
      title: "Device Not Detected",
      desc: "Connected device not showing in the system.",
      icon: <Monitor />,
      color: "text-green-500",
      bg: "bg-green-100",
    },
    {
      title: "Driver Update Failed",
      desc: "Update process fails or won’t complete.",
      icon: <XCircle />,
      color: "text-red-500",
      bg: "bg-red-100",
    },
    {
      title: "Printer Driver Issues",
      desc: "Printer not working or not responding.",
      icon: <Printer />,
      color: "text-indigo-500",
      bg: "bg-indigo-100",
    },
    {
      title: "Audio Not Working",
      desc: "Sound issues due to driver problems.",
      icon: <Volume2 />,
      color: "text-pink-500",
      bg: "bg-pink-100",
    },
    {
      title: "Network / WiFi Issues",
      desc: "Wi-Fi or LAN not working properly.",
      icon: <Wifi />,
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      title: "Bluetooth Problems",
      desc: "Bluetooth not connecting or pairing.",
      icon: <Bluetooth />,
      color: "text-purple-500",
      bg: "bg-purple-100",
    },
    {
      title: "USB Not Recognized",
      desc: "USB device not detected or not working.",
      icon: <Usb />,
      color: "text-teal-500",
      bg: "bg-teal-100",
    },
    {
      title: "Graphics / Display Issues",
      desc: "Screen flickering, lag or display problems.",
      icon: <MonitorSmartphone />,
      color: "text-orange-500",
      bg: "bg-orange-100",
    },
    {
      title: "Webcam Offline",
      desc: "Camera not found or black screen on calls.",
      icon: <Video />,
      color: "text-purple-500",
      bg: "bg-purple-100",
    },
    {
      title: "Scanner Errors",
      desc: "Scanner protocols not responding or TWAIN errors.",
      icon: <Scan />,
      color: "text-fuchsia-500",
      bg: "bg-fuchsia-100",
    },
    {
      title: "Chipset Logic",
      desc: "Motherboard component communication failures.",
      icon: <Cpu />,
      color: "text-cyan-500",
      bg: "bg-cyan-100",
    },
    {
      title: "BIOS / Firmware",
      desc: "Low-level startup errors and incompatibility.",
      icon: <ShieldAlert />,
      color: "text-red-500",
      bg: "bg-red-100",
    },
    {
      title: "Input Latency",
      desc: "Keyboard or touchpad lag and unresponsive gestures.",
      icon: <Zap />,
      color: "text-yellow-500",
      bg: "bg-yellow-100",
    },
  ];

  return (
    <section className="bg-[#F7FAFF] py-20 px-6 font-[Poppins]">
      <div className="max-w-[1600px] mx-auto text-center mb-14 relative">
        {/* Decorative Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Diagnostic Library</span>
          </div>
        </div>

        {/* Heading with lines */}
        <div className="flex items-center justify-center gap-6 mb-3">
          <div className="hidden md:block h-[1px] w-16 bg-gradient-to-r from-transparent to-blue-200" />
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#0F1B3D] tracking-tight">
            Common Driver <span className="text-blue-600">Problems</span>
          </h2>
          <div className="hidden md:block h-[1px] w-16 bg-gradient-to-l from-transparent to-blue-200" />
        </div>

        <p className="max-w-2xl mx-auto text-[#6B7280] text-[16px] font-medium leading-relaxed">
          Detailed technical documentation for common hardware communication protocols. 
          Identify the specific architecture and view documented troubleshooting steps.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-[1600px] mx-auto">
        {problems.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-[#E6ECF8] rounded-xl p-5 hover:shadow-md transition"
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-lg ${item.bg} mb-4`}
            >
              <div className={`${item.color}`}>
                {React.cloneElement(item.icon, { size: 20 })}
              </div>
            </div>

            <h4 className="text-[15px] font-semibold text-[#0F1B3D] mb-1">
              {item.title}
            </h4>

            <p className="text-[13px] text-[#6B7280] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-[14px] font-semibold hover:bg-blue-700 transition flex items-center gap-2 mx-auto">
          View All Issues →
        </button>
      </div>
    </section>
  );
}