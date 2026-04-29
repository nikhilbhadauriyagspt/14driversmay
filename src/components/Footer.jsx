import React from "react";
import {
  Settings,
  Mail,
  MessageCircle,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* Top CTA */}
      <section className="bg-[#F7FAFF] px-6 py-5 font-heading">
        <div className="max-w-[1600px] mx-auto rounded-xl bg-gradient-to-r from-[#064CD9] to-[#1557E8] px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden min-h-[160px]">
          <div className="flex items-center gap-8">
            <img
              src="/images/support-agent.webp"
              alt="Hardware documentation"
              width={250}
              height={180}
              className="hidden md:block w-[250px] aspect-[250/180] object-contain"
              fetchPriority="high"
            />

            <div>
              <h2 className="text-white text-[26px] font-semibold leading-tight">
                Learn More About Driver's Issues?
              </h2>
              <p className="text-white/85 text-[14px] leading-6 mt-1 max-w-[520px] font-medium">
                Our hardware registry is updated daily with the latest architectural specifications
                and installation protocols for modern devices.
              </p>
            </div>
          </div>

          <Link to="/guides" className="bg-white text-[#1557E8] px-7 py-3 rounded-lg text-[14px] font-semibold flex items-center gap-2 hover:shadow-lg transition shrink-0">
            Browse Archive
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#061B3D] text-white px-6 pt-9 pb-5 font-heading">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 pb-8 border-b border-white/10">

            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#1557E8] flex items-center justify-center">
                  <Settings className="w-5 h-5 text-white" />
                </div>

                <div>
                  <h3 className="text-[18px] font-semibold leading-none">
                    DriverZenith
                  </h3>
                  <p className="text-[9px] text-white/60 mt-1">
                    Technical Hardware Registry
                  </p>
                </div>
              </div>

              <p className="text-[12px] leading-6 text-white/65 font-medium max-w-[210px]">
                Comprehensive resource for hardware-software communication protocols
                and system optimization documentation.
              </p>
            </div>

            <FooterColumn
              title="Quick Links"
              links={[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Guides", path: "/guides" },
                { name: "FAQ", path: "/faq" },
                { name: "Contact", path: "/contact" }
              ]}
            />

            <FooterColumn
              title="Technical Guides"
              links={[
                { name: "Installation Manuals", path: "/guide/fix-driver-not-installed" },
                { name: "Update Protocols", path: "/guide/fix-driver-not-installed" },
                { name: "Hardware Recognition", path: "/guide/fix-usb-driver-issues" },
                { name: "Legacy Support", path: "/guide/fix-audio-driver-problems" },
                { name: "Network Security", path: "/guide/fix-wifi-network-issues" },
                { name: "Display Optimization", path: "/guide/fix-graphics-driver-issues" },
              ]}
            />

            <FooterColumn
              title="Hardware Archive"
              links={[
                { name: "Printer Drivers", path: "/service/printer-drivers" },
                { name: "Network Drivers", path: "/service/network-drivers" },
                { name: "Audio Drivers", path: "/service/audio-drivers" },
                { name: "Graphics Drivers", path: "/service/graphics-drivers" },
                { name: "Bluetooth Drivers", path: "/service/bluetooth-drivers" },
                { name: "USB Support", path: "/service/usb-support" },
              ]}
            />

            <FooterColumn
              title="Information"
              links={[
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms of Service", path: "/terms-of-service" },
                { name: "Cookie Policy", path: "/cookie-policy" },
                { name: "Disclaimer", path: "/disclaimer" },
              ]}
            />

            {/* Contact */}
            <div>
              <h4 className="text-[14px] font-semibold mb-4">Resource Center</h4>

              <div className="space-y-3 text-[12px] text-white/70 font-medium">
                <p className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 text-white" />
                  <a href="mailto:info@driverzenith.net" className="text-white/70 hover:text-white transition">
                    info@driverzenith.net
                  </a>
                </p>


              </div>
            </div>
          </div>


        </div>
      </footer >
    </>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-[14px] font-semibold mb-4">{title}</h4>

      <ul className="space-y-2.5">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="text-[12px] text-white/65 font-medium hover:text-white transition"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}   