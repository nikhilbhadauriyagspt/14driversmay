import React from "react";
import {
  Download, RefreshCcw, Monitor, XCircle, Printer, Volume2, Wifi,
  Bluetooth, Usb, MonitorSmartphone, Video, Scan, Cpu, ShieldAlert, Zap, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CommonProblems() {
  const issues = [
    ["Driver Not Installed", "Required driver file missing.", "Fresh OS setup or new device added.", <Download />, "from-sky-50 to-blue-50 text-sky-600", "fix-driver-not-installed"],
    ["Outdated Drivers", "Old driver can create errors.", "System update or older software version.", <RefreshCcw />, "from-orange-50 to-amber-50 text-orange-500", "fix-driver-update-failed"],
    ["Device Not Detected", "Device not visible in system.", "Loose connection or driver mismatch.", <Monitor />, "from-emerald-50 to-teal-50 text-emerald-600", "fix-device-not-detected"],
    ["Driver Update Failed", "Update may stop midway.", "Low storage or version conflict.", <XCircle />, "from-rose-50 to-red-50 text-rose-500", "fix-driver-update-failed"],
    ["Printer Driver Issues", "Printer may not respond.", "Queue, connection, or driver setting.", <Printer />, "from-violet-50 to-purple-50 text-violet-600", "fix-printer-driver-issues"],
    ["Audio Not Working", "Sound output may stop.", "Muted output or audio driver issue.", <Volume2 />, "from-pink-50 to-rose-50 text-pink-500", "fix-audio-driver-problems"],
    ["Network / WiFi Issues", "Wi-Fi or LAN may fail.", "Adapter setting or router conflict.", <Wifi />, "from-cyan-50 to-sky-50 text-cyan-600", "fix-wifi-network-issues"],
    ["Bluetooth Problems", "Bluetooth may not pair.", "Disabled service or pairing conflict.", <Bluetooth />, "from-indigo-50 to-blue-50 text-indigo-500", "fix-bluetooth-driver-problems"],
    ["USB Not Recognized", "USB device may not appear.", "Port, cable, or controller issue.", <Usb />, "from-teal-50 to-emerald-50 text-teal-600", "fix-usb-driver-issues"],
    ["Graphics / Display Issues", "Screen may flicker or lag.", "Resolution or display adapter conflict.", <MonitorSmartphone />, "from-purple-50 to-fuchsia-50 text-purple-600", "fix-graphics-driver-issues"],
    ["Webcam Offline", "Camera may show black screen.", "Privacy permission or webcam driver.", <Video />, "from-rose-50 to-pink-50 text-rose-500", "fix-webcam-driver-issues"],
    ["Scanner Errors", "Scanner may fail to respond.", "App setting, connection, or driver mismatch.", <Scan />, "from-lime-50 to-green-50 text-lime-600", "fix-scanner-driver-problems"],
    ["Chipset Logic", "Components may not sync.", "Missing or incompatible chipset driver.", <Cpu />, "from-blue-50 to-indigo-50 text-blue-600", "update-chipset-drivers"],
    ["BIOS / Firmware", "Startup issues may appear.", "Firmware mismatch or older BIOS.", <ShieldAlert />, "from-amber-50 to-yellow-50 text-amber-600", "guide-bios-firmware-updates"],
    ["Input Latency", "Keyboard or touchpad may lag.", "Input driver or background load.", <Zap />, "from-yellow-50 to-orange-50 text-yellow-600", "fix-input-latency-drivers"],
  ];

  return (
    <section className="relative overflow-hidden bg-[#F6F9FF] py-20 px-4 font-[Poppins]">
      <div className="absolute top-[-120px] left-[-120px] w-[360px] h-[360px] bg-blue-100/60 rounded-full blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[360px] h-[360px] bg-purple-100/60 rounded-full blur-3xl" />

      <div className="relative max-w-[1600px] mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/80 border border-blue-100 px-4 py-2 rounded-full shadow-sm mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-[11px] text-blue-600 font-medium tracking-[0.16em] uppercase">
              Driver Issue Library
            </span>
          </div>

          <h2 className="text-[#07153A] text-[34px] md:text-[46px] font-semibold leading-tight">
            Explore Common Driver Issues
          </h2>

          <p className="max-w-[760px] mx-auto mt-4 text-[#667085] text-[15px] leading-relaxed">
            Clean and easy guide-based information about common driver problems,
            why they may appear, and what users should understand first.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">
          {issues.map(([title, desc, reason, icon, style, slug], index) => (
            <Link
              key={index}
              to={`/guide/${slug}`}
              className="group bg-white/85 backdrop-blur border border-white rounded-[10px] p-5  hover:-translate-y-1 transition-all duration-300 block relative overflow-hidden"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${style} flex items-center justify-center mb-4`}>
                {React.cloneElement(icon, { size: 23, strokeWidth: 2 })}
              </div>

              <h3 className="text-[#101828] text-[15px] font-[600] mt-1 mb-2 leading-snug">
                {title}
              </h3>

              <p className="text-[#667085] text-[13px] leading-relaxed">
                {desc}
              </p>

              <div className="mt-4 pt-4 border-t border-[#EEF2F7] relative">
                <div className="group-hover:opacity-0 transition-opacity duration-300">
                  <p className="text-[#475467] text-[12.5px] leading-relaxed line-clamp-2">
                    <span className="font-medium text-[#344054]">Why:</span>{" "}
                    {reason}
                  </p>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="text-blue-600 font-bold text-[13px] uppercase tracking-widest flex items-center gap-2">
                    Read Full Guide <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}