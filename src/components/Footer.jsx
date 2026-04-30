import React from "react";
import {
  Settings,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Main Footer - Professional & Clean */}
      <footer className="bg-[#040B1D] text-white px-6 pt-20 pb-10 font-[Poppins] border-t border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 pb-16">

            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <img
                  src="/logo/logo.avif"
                  alt="Mister PC Driver"
                  className="h-10 w-auto object-contain bg-white py-1 px-2 rounded-full"
                />
              </Link>

              <p className="text-[14px] leading-relaxed text-white/50 font-medium max-w-[280px] mb-8">
                Your resource for understanding hardware drivers and device communication.
              </p>
            </div>

            <FooterColumn
              title="Quick Links"
              links={[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Guides", path: "/guides" },
                { name: "FAQ", path: "/faq" },
                { name: "Contact", path: "/contact" }
              ]}
            />

            <FooterColumn
              title="Guides"
              links={[
                { name: "Installation Guides", path: "/guide/fix-driver-not-installed" },
                { name: "Update Information", path: "/guide/fix-driver-not-installed" },
                { name: "Hardware Connection", path: "/guide/fix-usb-driver-issues" },
                { name: "Audio Problems", path: "/guide/fix-audio-driver-problems" },
                { name: "WiFi & Network", path: "/guide/fix-wifi-network-issues" },
                { name: "Graphics & Display", path: "/guide/fix-graphics-driver-issues" },
              ]}
            />

            <FooterColumn
              title="Driver Topics"
              links={[
                { name: "Printer Drivers", path: "/driver/printer-drivers" },
                { name: "Network Drivers", path: "/driver/network-drivers" },
                { name: "Audio Drivers", path: "/driver/audio-drivers" },
                { name: "Graphics Drivers", path: "/driver/graphics-drivers" },
                { name: "Bluetooth Drivers", path: "/driver/bluetooth-drivers" },
                { name: "USB Support", path: "/driver/usb-support" },
              ]}
            />

            <div className="space-y-10">
              <FooterColumn
                title="Policies"
                links={[
                  { name: "Privacy Policy", path: "/privacy-policy" },
                  { name: "Terms of Service", path: "/terms-of-service" },
                  { name: "Cookie Policy", path: "/cookie-policy" },
                  { name: "Disclaimer", path: "/disclaimer" },
                ]}
              />

              <div>
                <h4 className="text-[14px] font-bold text-blue-500 uppercase tracking-widest mb-4">Email Us</h4>
                <a href="mailto:info@misterpcdriver.com" className="flex items-center gap-2 text-[14px] text-white/60 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  info@misterpcdriver.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[13px] text-white/30 font-medium text-center md:text-left">
              © {currentYear} Mister PC Driver. All information is for educational purposes.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-[14px] font-bold text-blue-500 uppercase tracking-widest mb-6">{title}</h4>

      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="text-[14px] text-white/50 font-medium hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
