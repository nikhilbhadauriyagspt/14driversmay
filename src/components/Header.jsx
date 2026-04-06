import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaBars, FaTimes, FaCogs, FaChevronDown, 
  FaMicrochip, FaDesktop, FaVolumeUp, FaWifi, 
  FaHdd, FaUsb, FaBluetooth, FaKeyboard, 
  FaPrint, FaSearchPlus, FaVideo, 
  FaCode, FaShieldAlt, FaTv, FaSearch, FaBolt, FaDatabase
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Search Logic
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

  const driverCategories = [
    {
      title: "Essential Drivers",
      subtitle: "The System Foundation",
      description: "Fundamental software required for a computer to start, run, and be usable.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      items: [
        { name: "Chipset Driver", icon: <FaMicrochip />, slug: "chipset-drivers", info: "CPU & Motherboard Logic Sync" },
        { name: "Graphics Driver", icon: <FaDesktop />, slug: "graphics-drivers", info: "Visual Rendering & GPU Protocols" },
        { name: "Audio Driver", icon: <FaVolumeUp />, slug: "audio-drivers", info: "Sound Input/Output Processing" },
        { name: "Network Driver", icon: <FaWifi />, slug: "network-drivers", info: "Wi-Fi 6 & High-Speed LAN Link" }
      ]
    },
    {
      title: "Hardware-Specific",
      subtitle: "Internal Control",
      description: "Drivers that manage specific internal modules to improve performance.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      items: [
        { name: "Storage Controller", icon: <FaHdd />, slug: "storage-controller", info: "NVMe & SSD Data Transmission" },
        { name: "USB Support", icon: <FaUsb />, slug: "usb-support", info: "Port Recognition & Power" },
        { name: "Bluetooth Driver", icon: <FaBluetooth />, slug: "bluetooth-drivers", info: "Wireless Device Sync" },
        { name: "Input Drivers", icon: <FaKeyboard />, slug: "input-drivers", info: "Tactile Response & Gestures" }
      ]
    },
    {
      title: "Peripheral Drivers",
      subtitle: "External Access",
      description: "Software bridges for all your connected external devices.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      items: [
        { name: "Printer Driver", icon: <FaPrint />, slug: "printer-drivers", info: "Document Spooling & Accuracy" },
        { name: "Scanner Support", icon: <FaSearchPlus />, slug: "scanner-support", info: "Image Digitizing Protocols" },
        { name: "Webcam Driver", icon: <FaVideo />, slug: "webcam-drivers", info: "HD Stream Synchronization" }
      ]
    },
    {
      title: "Advanced Systems",
      subtitle: "Security & BIOS",
      description: "Low-level system protection and firmware management.",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      items: [
        { name: "BIOS/UEFI", icon: <FaCode />, slug: "bios-uefi-firmware", info: "Pre-OS Hardware Initialization" },
        { name: "Security Drivers", icon: <FaShieldAlt />, slug: "security-drivers", info: "Data Encryption & TPM 2.0" },
        { name: "Monitor Driver", icon: <FaTv />, slug: "monitor-calibration", info: "Color Calibration & Refresh" }
      ]
    }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 font-poppins transition-all duration-300 ${scrolled ? 'shadow-xl' : ''}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}} />

      {/* Top Bar */}
      <div className={`hidden lg:block w-full bg-gray-900 transition-all duration-300 origin-top ${scrolled ? 'scale-y-0 h-0 py-0 opacity-0 overflow-hidden' : 'scale-y-100 h-auto py-2 opacity-100'}`}>
        <div className="container mx-auto px-4 lg:px-12 flex justify-between items-center text-[11px] font-medium text-white/60">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><FaDatabase className="text-blue-500" /> Database Version: 4.2.0-STABLE</span>
            <span className="flex items-center gap-2 font-semibold text-white/80"><FaBolt className="text-yellow-500" /> 50,000+ Hardware Protocols Mapped</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/services" className="hover:text-blue-500 transition-colors">Documentation Library</Link>
            <Link to="/contact" className="hover:text-blue-500 transition-colors">Technical Support</Link>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className={`w-full bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${scrolled ? 'py-3 border-blue-50/50' : 'py-5 border-gray-100'}`}>
        <div className="container mx-auto px-4 lg:px-12">
          <nav className="flex items-center justify-between gap-8">
            
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center shadow-lg transition-transform group-hover:rotate-6">
                <FaCogs className="text-white text-xl animate-spin-slow" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-gray-900 leading-none">
                  Driver<span className="text-blue-600">Vista</span>
                </span>
                <span className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-widest">System Guide Portal</span>
              </div>
            </Link>

            {/* Desktop Search */}
            <div className="hidden xl:flex items-center flex-grow max-w-md relative" ref={searchRef}>
              <div className="relative w-full group">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowSearchBox(true);
                  }}
                  onFocus={() => setShowSearchBox(true)}
                  placeholder="Search hardware, drivers or firmware..." 
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>

              {showSearchBox && searchTerm && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-2xl border border-gray-100 rounded-xl overflow-hidden z-50">
                  <div className="max-h-80 overflow-y-auto">
                    {searchResults.length > 0 ? (
                      searchResults.map((result) => (
                        <div 
                          key={result.id}
                          onClick={() => {
                            navigate(`/service/${result.slug}`);
                            setShowSearchBox(false);
                            setSearchTerm('');
                          }}
                          className="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0 transition-colors"
                        >
                          <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-xs">
                             <FaCogs />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900">{result.title}</p>
                            <p className="text-[10px] text-gray-500 line-clamp-1">{result.shortDesc}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-8 text-center">
                        <FaSearch className="mx-auto text-gray-300 text-3xl mb-3" />
                        <p className="text-sm text-gray-400 font-medium">No records found for "{searchTerm}"</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Main Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              <ul className="flex items-center gap-1">
                <li>
                  <Link to="/" className="px-4 py-2 text-[14px] font-semibold text-gray-700 hover:text-blue-600 transition-all">Home</Link>
                </li>
                
                <li 
                  className="static group"
                  onMouseEnter={() => setActiveDropdown('drivers')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className={`flex items-center gap-2 px-4 py-2 text-[14px] font-semibold transition-all ${activeDropdown === 'drivers' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'}`}>
                    Explore Drivers <FaChevronDown size={10} className={`transition-transform duration-300 ${activeDropdown === 'drivers' ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`absolute left-0 right-0 top-full bg-white shadow-2xl border-t border-gray-100 transition-all duration-300 origin-top p-12 ${activeDropdown === 'drivers' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
                    <div className="container mx-auto grid grid-cols-4 gap-12">
                      {driverCategories.map((cat, idx) => (
                        <div key={idx} className="space-y-6">
                          <div>
                            <span className={`inline-block px-3 py-1 rounded-full ${cat.bgColor} ${cat.color} text-[10px] font-bold uppercase tracking-wider mb-4`}>
                              {cat.subtitle}
                            </span>
                            <h4 className="text-gray-900 font-bold text-lg mb-3">{cat.title}</h4>
                            <p className="text-gray-400 text-xs leading-relaxed font-medium">{cat.description}</p>
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
                </li>

                <li><a href="/#process" className="px-4 py-2 text-[14px] font-semibold text-gray-700 hover:text-blue-600 transition-all">How It Works</a></li>
                <li><Link to="/about" className="px-4 py-2 text-[14px] font-semibold text-gray-700 hover:text-blue-600 transition-all">About Guide</Link></li>
              </ul>

              <div className="ml-4 pl-4 border-l border-gray-100">
                <Link to="/contact" className="flex items-center gap-3 bg-blue-600 text-white px-7 py-3 rounded-lg text-sm font-bold shadow-lg shadow-blue-500/20 hover:bg-gray-900 transition-all active:scale-95">
                  <FaBolt className="text-yellow-400" /> Technical Support
                </Link>
              </div>
            </div>

            <button className="lg:hidden text-gray-900 w-10 h-10 flex items-center justify-center bg-gray-50 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed inset-0 z-[60] transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-[85%] bg-white shadow-2xl transition-transform duration-500 p-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-10">
            <span className="text-xl font-extrabold text-gray-900">Driver<span className="text-blue-600">Vista</span></span>
            <button onClick={() => setIsOpen(false)} className="w-10 h-10 bg-gray-50 rounded-lg text-gray-500 flex items-center justify-center"><FaTimes /></button>
          </div>
          <ul className="space-y-6">
            <li><Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-900">Home</Link></li>
            <li><a href="/#process" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-900">How It Works</a></li>
            {driverCategories.map((cat, idx) => (
              <li key={idx}>
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4">{cat.title}</p>
                <ul className="space-y-4 pl-2">
                  {cat.items.map((item, i) => (
                    <li key={i}>
                      <Link to={`/service/${item.slug}`} onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                         <span className={`${cat.color}`}>{item.icon}</span>
                         <span className="text-sm font-semibold text-gray-700">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
      `}} />
    </header>
  );
};

export default Header;