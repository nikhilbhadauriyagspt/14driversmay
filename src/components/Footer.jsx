import React from "react";
import { Mail, BookOpen, ArrowRight, ShieldCheck, Info, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#050A33] text-white pt-24 overflow-hidden">

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#CF00FE] to-[#005DE0]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/5 blur-[100px] rounded-full -ml-48 -mb-48"></div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6">

        {/* Top Section: Brand & Newsletter-style info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-8 group">
              <div className="bg-white p-3 rounded-xl inline-block transition-transform duration-500 group-hover:scale-105">
                <img
                  src="/logo/logo.avif"
                  alt="Pix Circuit"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-white/60 text-[16px] leading-relaxed max-w-[360px] mb-10">
              A simple place to learn about your computer parts and how they work together to help you every day.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#005DE0]/20 group-hover:border-[#005DE0]/40 transition-all duration-300">
                  <Mail size={18} className="text-[#005DE0]" />
                </div>
                <div>
                  <p className="text-white/80 text-[12px] uppercase tracking-widest font-semibold">Write To Us</p>
                  <a href="mailto:info@pixcircuit.com" className="text-white font-medium hover:text-[#005DE0] transition-colors">info@pixcircuit.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <FooterColumn
                title="Quick Links"
                links={[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about" },
                  { name: "Our Guides", path: "/guides" },
                  { name: "Common Questions", path: "/faq" },
                  { name: "Contact Us", path: "/contact" },
                ]}
              />

              <FooterColumn
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
        </div>

        {/* Bottom Credits */}
        <div className="py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/60 text-[14px]">
            © {currentYear} <span className="text-white font-medium">Pix Circuit</span>. Simple Computer Learning Site.
          </p>

          <div className="flex items-center gap-8">
            <Link to="/guides" className="text-[14px] text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
              View All Guides <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[14px] font-bold uppercase tracking-[0.2em] text-[#3395FF]">
        {title}
      </h3>
      <ul className="flex flex-col gap-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="text-white/50 text-[15px] hover:text-white transition-colors duration-300 flex items-center gap-2 group"
            >
              <span className="w-0 group-hover:w-2 h-[1px] bg-[#005DE0] transition-all duration-300"></span>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
