import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  ShieldCheck,
  Settings,
  Printer,
  Wifi,
  Volume2,
  Usb,
  AlertTriangle,
} from "lucide-react";
import { FaCogs } from "react-icons/fa";
import { servicesData } from "../data/services";

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const phrases = [
    "Printer Not Working.",
    "WiFi Disconnected.",
    "Audio Driver Issues.",
    "Display Problems.",
    "USB Not Detected.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Search Logic
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }
    const results = servicesData.filter(
      (service) =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchBox(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    if (searchResults.length > 0) {
      navigate(`/service/${searchResults[0].slug}`);
      setShowSearchBox(false);
      setSearchTerm("");
    }
  };

  return (
    <section className="relative w-full h-[100vh] min-h-[600px] flex items-center overflow-visible bg-[#F6FAFF]">
      {/* Background Image */}
      <img
        src="/banner/banner_01.png"
        alt="Driver help hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Left Soft Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 w-full py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-100 shadow-sm text-[#1557E8] text-[12px] font-extrabold mb-6">
            <ShieldCheck className="w-4 h-4" />
            TECHNICAL DATABASE & HARDWARE WIKI
          </div>

          {/* Sliding Heading */}
          <div className="h-[100px] md:h-[130px] overflow-hidden">
            <h1 className="text-[38px] md:text-[52px] leading-[1.1] font-bold text-[#071A3D] tracking-[-0.03em]">
              Hardware Specs?
              <br />
              <span className="text-[#1557E8] block transition-all duration-500 animate-slide-up">
                {phrases[currentTextIndex]}
              </span>
            </h1>
          </div>

          {/* Text */}
          <p className="mt-4 text-[17px] leading-[1.6] text-[#24324F] font-medium max-w-xl">
            Step-by-step solutions for driver installation, update, and
            troubleshooting for all your hardware devices.
          </p>

          {/* Search */}
          <div className="mt-10 w-full max-w-[520px] relative" ref={searchRef}>
            <form
              onSubmit={handleSearchSubmit}
              className="h-[64px] bg-white rounded-full shadow-sm border border-[#E6ECF8] flex items-center p-1.5 focus-within:ring-2 focus-within:ring-blue-100 transition-all"
            >
              <div className="pl-5 pr-3 text-[#8A96AB]">
                <Search className="w-5 h-5" />
              </div>

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowSearchBox(true);
                }}
                onFocus={() => setShowSearchBox(true)}
                placeholder="Search your driver issue..."
                className="flex-1 h-full outline-none text-[16px] text-[#0F1B3D] placeholder:text-[#8A96AB] bg-transparent"
              />

              <button
                type="submit"
                className="h-full px-8 bg-[#1557E8] text-white text-[15px] font-bold rounded-full hover:bg-[#0F46C8] transition-all shadow-md shadow-blue-200 active:scale-95"
              >
                Search
              </button>
            </form>

            {/* Search Dropdown */}
            {showSearchBox && searchTerm && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-2xl border border-gray-100 rounded-xl overflow-hidden z-[100]">
                <div className="max-h-80 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    searchResults.map((result) => (
                      <div
                        key={result.id}
                        onClick={() => {
                          navigate(`/service/${result.slug}`);
                          setShowSearchBox(false);
                          setSearchTerm("");
                        }}
                        className="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0 transition-colors"
                      >
                        <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-xs">
                          <FaCogs />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">
                            {result.title}
                          </p>
                          <p className="text-[10px] text-gray-500 line-clamp-1">
                            {result.shortDesc}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center">
                      <Search className="mx-auto text-gray-300 w-8 h-8 mb-3" />
                      <p className="text-sm text-gray-400 font-medium">
                        No records found for "{searchTerm}"
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Live Issue Detector - Overlapping 50% */}
      <div className="absolute left-0 right-0 bottom-0 z-20 px-6 lg:px-12 translate-y-1/2">
        <div className="max-w-[1600px] mx-auto bg-[#071F4A] rounded-2xl shadow-xl border border-white/10 p-5">
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_repeat(5,1fr)] gap-4 items-center">
            <div className="flex items-center gap-4 border-r border-white/10 pr-4">
              <div className="w-11 h-11 rounded-xl bg-[#082B66] flex items-center justify-center shrink-0">
                <Settings className="w-5 h-5 text-[#1C9CFF]" />
              </div>
              <div>
                <h4 className="text-white text-[16px] font-bold leading-tight">
                  Live Issue Detector
                </h4>
                <p className="text-white/60 text-[12px]">Real-time fixes</p>
              </div>
            </div>

            <IssueCard
              icon={<Printer />}
              title="Printer"
              status="Fixing..."
              color="text-red-400"
            />
            <IssueCard
              icon={<Wifi />}
              title="WiFi"
              status="Resolved"
              color="text-green-400"
            />
            <IssueCard
              icon={<Volume2 />}
              title="Audio"
              status="No Sound"
              color="text-yellow-400"
            />
            <IssueCard
              icon={<AlertTriangle />}
              title="Driver"
              status="Missing"
              color="text-red-400"
            />
            <IssueCard
              icon={<Usb />}
              title="USB"
              status="Detected"
              color="text-green-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function IssueCard({ icon, title, status, color }) {
  return (
    <div className="bg-[#09285E]/50 border border-white/5 rounded-xl px-4 py-3 flex items-center gap-3">
      <div className={`${color} shrink-0`}>
        {React.cloneElement(icon, { className: "w-5 h-5" })}
      </div>
      <div className="overflow-hidden">
        <h5 className="text-white text-[14px] font-bold truncate">
          {title}
        </h5>
        <p className={`${color} text-[11px] font-medium mt-0.5`}>{status}</p>
      </div>
    </div>
  );
};
