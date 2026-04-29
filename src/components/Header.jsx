import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  FaBars, FaTimes, FaSearch, FaCogs, FaChevronDown,
  FaQuestionCircle, FaBolt, FaMicrochip, FaDesktop,
  FaVolumeUp, FaWifi, FaUsb, FaBluetooth, FaKeyboard,
  FaPrint, FaVideo, FaCode, FaShieldAlt, FaTv, FaSearchPlus, FaDatabase
} from 'react-icons/fa';
import { servicesData } from '../data/services';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }
    const results = servicesData.filter(service =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchBox(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const driverCategories = [
    {
      title: "Essential Drivers",
      subtitle: "System Core",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      items: [
        { name: "Chipset Driver", icon: <FaMicrochip />, slug: "chipset-drivers", info: "Motherboard Logic" },
        { name: "Graphics Driver", icon: <FaDesktop />, slug: "graphics-drivers", info: "Visual Rendering" },
        { name: "Audio Driver", icon: <FaVolumeUp />, slug: "audio-drivers", info: "Sound Processing" },
        { name: "Network Driver", icon: <FaWifi />, slug: "network-drivers", info: "WiFi & LAN Sync" }
      ]
    },
    {
      title: "Connectivity",
      subtitle: "Data & Sync",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      items: [
        { name: "Bluetooth Driver", icon: <FaBluetooth />, slug: "bluetooth-drivers", info: "Wireless Devices" },
        { name: "USB Support", icon: <FaUsb />, slug: "usb-support", info: "Port Recognition" },
        { name: "Input Drivers", icon: <FaKeyboard />, slug: "input-drivers", info: "Touchpad & Keys" },
        { name: "Storage Control", icon: <FaDatabase />, slug: "storage-controller", info: "SSD & HDD Link" }
      ]
    },
    {
      title: "Peripherals",
      subtitle: "External Hardware",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      items: [
        { name: "Printer Driver", icon: <FaPrint />, slug: "printer-drivers", info: "Document Spooling" },
        { name: "Scanner Support", icon: <FaSearchPlus />, slug: "scanner-support", info: "Image Digitizing" },
        { name: "Webcam Driver", icon: <FaVideo />, slug: "webcam-drivers", info: "Video Capture" }
      ]
    },
    {
      title: "Advanced",
      subtitle: "Security & BIOS",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      items: [
        { name: "BIOS/UEFI", icon: <FaCode />, slug: "bios-uefi-firmware", info: "System Startup" },
        { name: "Security Drivers", icon: <FaShieldAlt />, slug: "security-drivers", info: "Data Protection" },
        { name: "Monitor Driver", icon: <FaTv />, slug: "monitor-calibration", info: "Color & Refresh" }
      ]
    }
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: "FAQ", path: "/faq" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-[1600px] mx-auto px-0">
        <div className={`relative flex items-center justify-between bg-white border border-slate-200/60 rounded-[50px] px-3 h-16 transition-all duration-500 ${scrolled ? 'shadow-2xl shadow-blue-900/10 backdrop-blur-xl bg-white/90' : 'shadow-sm'}`}>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center ">
              <FaCogs className="text-white text-lg animate-spin-slow" />
            </div>
            <span className="text-xl font-black  text-slate-900">
              Driver <span className="text-blue-600">Zenith</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-5 py-2 text-[13px] font-bold tracking-wide rounded-full transition-all ${location.pathname === link.path ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
              >
                {link.name}
              </Link>
            ))}

            {/* Drivers Mega Dropdown */}
            <div
              className="static group"
              onMouseEnter={() => setActiveDropdown('drivers')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1.5 px-5 py-2 text-[13px] font-bold tracking-wide rounded-full transition-all ${activeDropdown === 'drivers' ? 'bg-blue-50 text-blue-600' : 'text-slate-600'}`}>
                Hardware Index <FaChevronDown size={8} className={`transition-transform duration-300 ${activeDropdown === 'drivers' ? 'rotate-180' : ''}`} />
              </button>

              <div className={`absolute left-0 right-0 top-full pt-4 transition-all duration-300 ${activeDropdown === 'drivers' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                <div className="bg-white border border-slate-100 shadow-2xl rounded-[32px] p-10 grid grid-cols-4 gap-12 max-w-[1600px] mx-auto overflow-hidden">
                  {driverCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-6">
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full ${cat.bgColor} ${cat.color} text-[10px] font-bold uppercase tracking-wider mb-3`}>
                          {cat.subtitle}
                        </span>
                        <h4 className="text-gray-900 font-bold text-lg mb-1">{cat.title}</h4>
                      </div>
                      <ul className="space-y-4">
                        {cat.items.map((item, i) => (
                          <li key={i} className="group/item">
                            <Link
                              to={`/service/${item.slug}`}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start gap-4"
                            >
                              <div className={`w-9 h-9 rounded-lg ${cat.bgColor} ${cat.color} flex items-center justify-center text-sm transition-all group-hover/item:scale-110 shadow-sm`}>
                                {item.icon}
                              </div>
                              <div>
                                <span className="block text-gray-800 text-[13px] font-bold group-hover/item:text-blue-600 transition-colors">{item.name}</span>
                                <span className="block text-gray-400 text-[11px] font-medium leading-tight mt-1">{item.info}</span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-5 py-2 text-[13px] font-bold tracking-wide rounded-full transition-all ${location.pathname === link.path ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search & Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setShowSearchBox(!showSearchBox)}
                aria-label="Toggle search box"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${showSearchBox ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
              >
                <FaSearch size={14} />
              </button>

              {showSearchBox && (
                <div className="absolute top-full right-0 mt-4 w-[350px] bg-white border border-slate-100 shadow-2xl rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-2">
                  <div className="p-4 border-b border-slate-50">
                    <input
                      autoFocus
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search hardware components..."
                      aria-label="Search hardware components"
                      className="w-full bg-slate-50 border-none rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    {searchTerm && searchResults.length > 0 ? (
                      searchResults.map((res) => (
                        <div key={res.id} onClick={() => { navigate(`/service/${res.slug}`); setShowSearchBox(false); }} className="flex items-center gap-3 p-3 hover:bg-slate-50 cursor-pointer transition-colors border-b border-slate-50 last:border-0">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-[10px]"><FaCogs /></div>
                          <div>
                            <p className="text-[13px] font-bold text-slate-800">{res.title}</p>
                            <p className="text-[10px] text-slate-400 line-clamp-1">{res.shortDesc}</p>
                          </div>
                        </div>
                      ))
                    ) : searchTerm ? (
                      <div className="p-8 text-center text-xs text-slate-400">No results found</div>
                    ) : null}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="bg-slate-900 text-white px-6 h-10 rounded-full text-[13px] font-bold flex items-center gap-2 hover:bg-blue-600 transition-all shadow-lg active:scale-95"
            >
              <FaQuestionCircle className="text-blue-400" /> Help Center
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="lg:hidden w-10 h-10 rounded-full bg-slate-50 text-slate-900 flex items-center justify-center"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-[110] transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-[80%] bg-white shadow-2xl transition-transform duration-500 p-8 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-10">
            <span className="text-xl font-black text-slate-900 uppercase">YourPC<span className="text-blue-600">Driver</span></span>
            <button 
              onClick={() => setIsOpen(false)} 
              aria-label="Close menu"
              className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center"
            >
              <FaTimes />
            </button>
          </div>

          <div className="space-y-8 overflow-y-auto pr-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} onClick={() => setIsOpen(false)} className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-slate-100">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Driver Categories</p>
              <div className="grid grid-cols-1 gap-6">
                {driverCategories.flatMap(c => c.items).map((item, i) => (
                  <Link key={i} to={`/service/${item.slug}`} onClick={() => setIsOpen(false)} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <span className="font-bold text-slate-700">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl">
              <FaBolt className="text-yellow-400" /> Contact Us
            </Link>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
      `}} />
    </header>
  );
};

export default Header;
