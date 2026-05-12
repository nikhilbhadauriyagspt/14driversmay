import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { guidesData } from "../data/guidesData";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showGuides, setShowGuides] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = showSearch || isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSearch, isOpen]);

  const results = guidesData.filter(
    (item) =>
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navLink = (path) =>
    location.pathname === path
      ? "text-blue-500"
      : "text-slate-700 hover:text-blue-500";

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] bg-white/95 backdrop-blur-md font-[Poppins]">
        <div className="max-w-[1600px] mx-auto h-[86px] px-6 lg:px-10 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/logo/logo.avif"
              alt="Clear With Us"
              className="h-[54px] w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            <Link to="/" className={`text-[15px] font-medium ${navLink("/")}`}>
              Home
            </Link>

            <Link to="/about" className={`text-[15px] font-medium ${navLink("/about")}`}>
              About Us
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setShowGuides(true)}
              onMouseLeave={() => setShowGuides(false)}
            >
              <Link
                to="/guides"
                className={`text-[15px] font-medium flex items-center gap-1 ${location.pathname.startsWith("/guide") ||
                  location.pathname === "/guides"
                  ? "text-blue-500"
                  : "text-slate-700 hover:text-blue-500"
                  }`}
              >
                Guides <ChevronDown size={15} />
              </Link>

              <div
                className={`absolute top-8 left-1/2 -translate-x-1/2 w-[560px] bg-white rounded-[24px] shadow-[0_20px_60px_rgba(15,23,42,0.14)] border border-slate-100 p-5 transition-all duration-300 ${showGuides
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-3"
                  }`}
              >
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Graphics",
                    "Audio",
                    "Wi-Fi",
                    "Printer",
                    "USB",
                    "Bluetooth",
                    "Webcam",
                    "Scanner",
                    "Chipset",
                    "BIOS / UEFI",
                  ].map((item) => (
                    <Link
                      key={item}
                      to="/guides"
                      className="px-4 py-3 rounded-[14px] text-[14px] text-slate-700 hover:bg-[#EFF8FF] hover:text-blue-500 transition"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/faq" className={`text-[15px] font-medium ${navLink("/faq")}`}>
              FAQ
            </Link>

            <Link to="/contact" className={`text-[15px] font-medium ${navLink("/contact")}`}>
              Ask Us
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setShowSearch(true)}
              aria-label="Search guides"
              className="w-[48px] h-[48px] rounded-full bg-black text-white flex items-center justify-center hover:bg-blue-500 hover:text-white transition"
            >
              <Search size={19} />
            </button>

            <Link
              to="/guides"
              className="h-[48px] px-6  pr-2 rounded-full bg-blue-500 text-white text-[15px] font-medium flex items-center gap-2 hover:bg-[#0B82C7] transition"
            >
              Explore Guides
              <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                <ArrowRight size={17} />
              </span>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden w-11 h-11 rounded-full bg-blue-500 text-white flex items-center justify-center"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Search Drawer */}
      <div
        className={`fixed inset-0 z-[300] transition ${showSearch ? "visible" : "invisible"
          }`}
      >
        <div
          onClick={() => setShowSearch(false)}
          className={`absolute inset-0 bg-slate-950/50 transition ${showSearch ? "opacity-100" : "opacity-0"
            }`}
        />

        <div
          className={`absolute right-0 top-0 h-full w-full sm:w-[520px] bg-white shadow-2xl transition-transform duration-500 ${showSearch ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="p-6 border-b flex items-center justify-between">
            <div>
              <h3 className="text-[24px] font-medium text-slate-900">
                Search Driver Guides
              </h3>
              <p className="text-[14px] text-slate-500 mt-1">
                Find simple topics about drivers and devices.
              </p>
            </div>

            <button
              onClick={() => {
                setShowSearch(false);
                setSearchTerm("");
              }}
              className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center"
              aria-label="Close search"
            >
              <X size={21} />
            </button>
          </div>

          <div className="p-6">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-500" size={20} />
              <input
                autoFocus={showSearch}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search graphics, audio, printer..."
                className="w-full h-[58px] rounded-full border border-slate-200 pl-14 pr-5 outline-none text-[15px] focus:border-blue-500"
              />
            </div>

            <div className="mt-7 space-y-3 max-h-[calc(100vh-210px)] overflow-y-auto pr-2">
              {searchTerm.trim() === "" ? (
                [
                  "Graphics",
                  "Audio",
                  "Wi-Fi",
                  "Printer",
                  "USB",
                  "Bluetooth",
                  "Webcam",
                  "Scanner",
                ].map((item) => (
                  <Link
                    key={item}
                    to="/guides"
                    onClick={() => setShowSearch(false)}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-[#EFF8FF] transition"
                  >
                    <span className="w-11 h-11 rounded-full bg-white text-blue-500 flex items-center justify-center">
                      <BookOpen size={19} />
                    </span>
                    <span className="text-[15px] font-medium text-slate-800">
                      {item} Guides
                    </span>
                  </Link>
                ))
              ) : results.length > 0 ? (
                results.map((res, index) => (
                  <Link
                    key={index}
                    to={`/guide/${res.slug}`}
                    onClick={() => {
                      setShowSearch(false);
                      setSearchTerm("");
                    }}
                    className="block p-5 rounded-2xl border border-slate-100 hover:border-blue-500 hover:bg-[#EFF8FF] transition"
                  >
                    <h4 className="text-[16px] font-medium text-slate-900">
                      {res.title}
                    </h4>
                    <p className="text-[13px] text-slate-500 mt-2 line-clamp-2">
                      {res.desc}
                    </p>
                  </Link>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-slate-500 text-[15px]">
                    No guide found for this search.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[200] lg:hidden transition ${isOpen ? "visible" : "invisible"}`}>
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/40 transition ${isOpen ? "opacity-100" : "opacity-0"}`}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[84%] bg-white p-6 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between mb-8">
            <img src="/logo/logo.avif" alt="Clear With Us" className="h-10" />
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-3">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Guides", "/guides"],
              ["FAQ", "/faq"],
              ["Ask Us", "/contact"],
            ].map(([name, path]) => (
              <Link
                key={name}
                to={path}
                onClick={() => setIsOpen(false)}
                className="block px-5 py-4 rounded-2xl bg-slate-50 text-slate-800 font-medium"
              >
                {name}
              </Link>
            ))}

            <button
              onClick={() => {
                setIsOpen(false);
                setShowSearch(true);
              }}
              className="w-full px-5 py-4 rounded-2xl bg-[#EFF8FF] text-blue-500 font-medium flex items-center justify-center gap-2"
            >
              <Search size={18} /> Search Guides
            </button>
          </div>
        </div>
      </div>
    </>
  );
}