import React from "react";
import { Mail, ArrowRight, Globe, Shield, Book, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-white border-t border-slate-100 font-[Poppins] overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EEF4FF]/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F5F3FF]/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative max-w-[1500px] mx-auto px-6">
        <div className="py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_2fr] gap-16 xl:gap-24">
          {/* Brand & Contact Section */}
          <div className="flex flex-col items-start">
            <Link to="/" className="inline-block mb-8 group">
              <div className="relative">
                <img
                  src="/logo/logo.avif"
                  alt="Clear With Us - Driver Information Guides"
                  className="h-[72px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>

            <p className="text-[16px] leading-8 text-slate-500 max-w-[420px] mb-10">
              A comprehensive educational resource dedicated to teaching users about computer drivers,
              hardware communication, and system performance basics in simple language.
            </p>

            <div className="space-y-4">
              <p className="text-[13px] font-semibold text-slate-900 uppercase tracking-widest mb-4">
                Get In Touch
              </p>
              <a
                href="mailto:info@clearwithus.co"
                className="group flex items-center gap-4 p-2 pr-6 rounded-full bg-slate-50 border border-slate-100 hover:border-[#315BFF]/30 hover:bg-white transition-all duration-300"
              >
                <span className="w-12 h-12 rounded-full bg-[#315BFF] text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                  <Mail size={20} />
                </span>
                <span className="text-[15px] font-medium text-slate-700 group-hover:text-[#315BFF]">
                  info@clearwithus.co
                </span>
              </a>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8">
            <FooterColumn
              icon={<Globe size={16} className="text-[#315BFF]" />}
              title="Quick Links"
              links={[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Guides", path: "/guides" },
                { name: "Common Questions", path: "/faq" },
                { name: "Ask Us", path: "/contact" },
              ]}
            />

            <FooterColumn
              icon={<Sparkles size={16} className="text-[#315BFF]" />}
              title="Easy Guides"
              links={[
                { name: "Missing Drivers", path: "/guide/understand-driver-not-installed" },
                { name: "Update Topics", path: "/guide/understand-driver-update-topics" },
                { name: "Scanner Info", path: "/guide/understand-scanner-driver-topics" },
                { name: "Webcam Info", path: "/guide/understand-webcam-driver-topics" },
                { name: "BIOS Guides", path: "/guide/guide-bios-firmware-updates" },
              ]}
            />

            <FooterColumn
              icon={<Book size={16} className="text-[#315BFF]" />}
              title="Core Drivers"
              links={[
                { name: "Printer Info", path: "/guide/understand-printer-driver-topics" },
                { name: "Internet & WiFi", path: "/guide/understand-wifi-network-topics" },
                { name: "Sound & Audio", path: "/guide/understand-audio-driver-topics" },
                { name: "Screen & Video", path: "/guide/understand-graphics-driver-topics" },
                { name: "USB Ports", path: "/guide/understand-usb-driver-topics" },
              ]}
            />

            <FooterColumn
              icon={<Shield size={16} className="text-[#315BFF]" />}
              title="Our Policies"
              links={[
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms of Use", path: "/terms-of-service" },
                { name: "Cookie Policy", path: "/cookie-policy" },
                { name: "Disclaimer", path: "/disclaimer" },
              ]}
            />
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="py-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p className="text-slate-500 text-[14px]">
              © {currentYear}{" "}
              <span className="text-slate-900 font-semibold tracking-tight">Clear With Us</span>.
              All Rights Reserved.
            </p>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-200" />
            <p className="text-slate-400 text-[13px]">
              Simple Computer Learning Site
            </p>
          </div>

          <Link
            to="/guides"
            className="group h-[50px] px-7 rounded-full bg-[#315BFF] text-white text-[14px] font-semibold flex items-center gap-3 hover:bg-[#1DA7F2] transition-all duration-300 shadow-lg shadow-[#315BFF]/10"
          >
            Explore All Guides
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight size={15} />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links, icon }) {
  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center gap-2.5 mb-8">
        <div className="w-8 h-8 rounded-lg bg-[#315BFF]/5 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-[13px] font-bold uppercase tracking-[0.2em] text-slate-900">
          {title}
        </h3>
      </div>

      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="group flex items-center gap-2 text-[15px] text-slate-500 hover:text-[#315BFF] transition-all duration-300"
            >
              <span className="w-0 h-[1px] bg-[#315BFF] transition-all duration-300 group-hover:w-3" />
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}