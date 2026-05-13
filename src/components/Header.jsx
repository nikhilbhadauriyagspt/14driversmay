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
      ? "text-blue-600"
      : "text-slate-900 hover:text-blue-600";

  return (
    <>
      <header className="fixed top-0 left-0 z-[100] w-full bg-white font-[Poppins] shadow-[0_1px_0_rgba(15,23,42,0.08)]">
        <div className="mx-auto flex h-[86px] max-w-[1920px] items-center justify-between pl-6 lg:pl-16">
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo/logo.avif"
              alt="Clear With Us"
              className=" h-[40px] 2xl:h-[60px] w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-9 lg:flex">
            <Link to="/" className={`text-[15px] font-semibold ${navLink("/")}`}>
              Home
            </Link>

            <Link
              to="/about"
              className={`text-[15px] font-semibold ${navLink("/about")}`}
            >
              About Us
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setShowGuides(true)}
              onMouseLeave={() => setShowGuides(false)}
            >
              <Link
                to="/guides"
                className={`flex items-center gap-1 text-[15px] font-semibold ${location.pathname.startsWith("/guide") ||
                  location.pathname === "/guides"
                  ? "text-blue-600"
                  : "text-slate-900 hover:text-blue-600"
                  }`}
              >
                Guides <ChevronDown size={15} />
              </Link>

              <div
                className={`absolute left-1/2 top-8 w-[560px] -translate-x-1/2 rounded-[24px] border border-slate-100 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.14)] transition-all duration-300 ${showGuides
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-3 opacity-0"
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
                      className="rounded-[14px] px-4 py-3 text-[14px] text-slate-700 transition hover:bg-[#EFF8FF] hover:text-blue-600"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/faq"
              className={`text-[15px] font-semibold ${navLink("/faq")}`}
            >
              FAQ
            </Link>

            <Link
              to="/contact"
              className={`text-[15px] font-semibold ${navLink("/contact")}`}
            >
              Ask Us
            </Link>
          </nav>

          {/* RIGHT DESKTOP AREA */}
          <div className="hidden h-full items-center lg:flex">
            {/* Search button where image had Discover button */}
            <button
              onClick={() => setShowSearch(true)}
              aria-label="Search guides"
              className="mr-8 flex h-[54px] items-center gap-2 rounded-full border-2 border-blue-600 px-8 text-[15px] font-semibold text-slate-900 transition hover:bg-blue-600 hover:text-white"
            >
              Search Guides
              <Search size={18} />
            </button>

            {/* Blue area where number was */}
            <div className="flex h-full min-w-[285px] items-center gap-4 bg-blue-600 px-8 text-white">
              <Link
                to="/guides"
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <ArrowRight size={22} />
              </Link>

              <div>
                <p className="text-[14px] font-semibold leading-tight">
                  Start Learning
                </p>
                <Link to="/guides" className="text-[17px] font-bold leading-tight">
                  Explore Guides
                </Link>
              </div>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="mr-5 flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* SEARCH DRAWER */}
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
          className={`absolute right-0 top-0 h-full w-full bg-white shadow-2xl transition-transform duration-500 sm:w-[520px] ${showSearch ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between border-b p-6">
            <div>
              <h3 className="text-[24px] font-medium text-slate-900">
                Search Driver Guides
              </h3>
              <p className="mt-1 text-[14px] text-slate-500">
                Find simple topics about drivers and devices.
              </p>
            </div>

            <button
              onClick={() => {
                setShowSearch(false);
                setSearchTerm("");
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100"
              aria-label="Close search"
            >
              <X size={21} />
            </button>
          </div>

          <div className="p-6">
            <div className="relative">
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-600"
                size={20}
              />
              <input
                autoFocus={showSearch}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search graphics, audio, printer..."
                className="h-[58px] w-full rounded-full border border-slate-200 pl-14 pr-5 text-[15px] outline-none focus:border-blue-600"
              />
            </div>

            <div className="mt-7 max-h-[calc(100vh-210px)] space-y-3 overflow-y-auto pr-2">
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
                    className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 transition hover:bg-[#EFF8FF]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-600">
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
                    className="block rounded-2xl border border-slate-100 p-5 transition hover:border-blue-600 hover:bg-[#EFF8FF]"
                  >
                    <h4 className="text-[16px] font-medium text-slate-900">
                      {res.title}
                    </h4>
                    <p className="mt-2 line-clamp-2 text-[13px] text-slate-500">
                      {res.desc}
                    </p>
                  </Link>
                ))
              ) : (
                <div className="py-12 text-center">
                  <p className="text-[15px] text-slate-500">
                    No guide found for this search.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[200] transition lg:hidden ${isOpen ? "visible" : "invisible"
          }`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/40 transition ${isOpen ? "opacity-100" : "opacity-0"
            }`}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[84%] bg-white p-6 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <img src="/logo/logo.avif" alt="Clear With Us" className="h-10" />
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100"
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
                className="block rounded-2xl bg-slate-50 px-5 py-4 font-medium text-slate-800"
              >
                {name}
              </Link>
            ))}

            <button
              onClick={() => {
                setIsOpen(false);
                setShowSearch(true);
              }}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#EFF8FF] px-5 py-4 font-medium text-blue-600"
            >
              <Search size={18} /> Search Guides
            </button>

            <Link
              to="/guides"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-4 font-medium text-white"
            >
              Explore Guides <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}