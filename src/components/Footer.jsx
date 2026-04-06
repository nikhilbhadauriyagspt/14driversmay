import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaCogs } from 'react-icons/fa';

const Footer = () => {
  const coreDrivers = [
    { name: 'Chipset Drivers', slug: 'chipset-drivers' },
    { name: 'Graphics Support', slug: 'graphics-drivers' },
    { name: 'Audio & Sound', slug: 'audio-drivers' },
    { name: 'Network & Wi-Fi', slug: 'network-drivers' },
    { name: 'Storage Controllers', slug: 'storage-controller' },
  ];

  const quickLinks = [
    { name: 'About Ecosystem', path: '/about' },
    { name: 'How It Works', path: '/#process' },
    { name: 'Support FAQ', path: '/#faq' },
    { name: 'Technical Support', path: '/contact' },
  ];

  const policies = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
  ];

  return (
    <footer className="bg-[#05070a] text-white pt-20 pb-10 overflow-hidden relative font-poppins">
      {/* Decorative Blur Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-blue-600/20">
                <FaCogs className="text-white text-xl" />
              </div>
              <span className="text-2xl font-extrabold tracking-tighter uppercase italic leading-none">
                Driver<span className="text-blue-600">Vista</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Leading the way in hardware communication standards. We provide technical diagnostics and verified driver solutions for peak system performance.
            </p>

          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-8 uppercase tracking-widest border-l-4 border-blue-600 pl-4">Core Drivers</h4>
            <ul className="space-y-4">
              {coreDrivers.map((link) => (
                <li key={link.slug}>
                  <Link to={`/service/${link.slug}`} className="text-slate-400 hover:text-blue-600 transition-colors text-sm font-medium flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-blue-600/40 rounded-full group-hover:bg-blue-600 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-8 uppercase tracking-widest border-l-4 border-blue-600 pl-4">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.path.startsWith('/#') ? (
                    <a href={link.path} className="text-slate-400 hover:text-blue-600 transition-colors text-sm font-medium flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-blue-600/40 rounded-full group-hover:bg-blue-600 transition-colors"></span>
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.path} className="text-slate-400 hover:text-blue-600 transition-colors text-sm font-medium flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-blue-600/40 rounded-full group-hover:bg-blue-600 transition-colors"></span>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-8 uppercase tracking-widest border-l-4 border-blue-600 pl-4">System Support</h4>
            <ul className="space-y-6">

              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-500 border border-white/10 shadow-sm">
                  <FaEnvelope size={14} />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Email Support</p>
                  <p className="text-white text-sm font-bold tracking-tight">support@drivervista.tech</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-500 border border-white/10 shadow-sm">
                  <FaMapMarkerAlt size={14} />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Operations</p>
                  <p className="text-white text-sm font-bold tracking-tight">Tech Corridor, CA, USA</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-10 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-medium">
            © {new Date().getFullYear()} <span className="text-white font-bold tracking-tight uppercase">DriverVista</span>. Technical Integrity Guaranteed.
          </p>
          <div className="flex gap-8">
            {policies.map(policy => (
              <Link key={policy.path} to={policy.path} className="text-slate-500 hover:text-white text-[10px] uppercase font-bold tracking-[2px] transition-colors">{policy.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;