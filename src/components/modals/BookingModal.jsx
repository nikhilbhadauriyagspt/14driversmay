import React, { useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import { FaTimes, FaCheckCircle, FaWrench, FaShieldAlt, FaMicrochip, FaSpinner } from 'react-icons/fa';
import CONFIG from '../../config';

const BookingModal = () => {
  const { isModalOpen, closeBookingModal, selectedService } = useBooking();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    os: '',
    description: ''
  });

  if (!isModalOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Mapping modal fields to match contact_submissions table structure
      const payload = {
        first_name: formData.name,
        last_name: '(Modal Request)',
        email: 'request@modal.tech', // Placeholder for modal
        category: formData.os,
        message: formData.description + " | Phone: " + formData.phone,
        site_origin: window.location.hostname
      };

      const response = await fetch(`${CONFIG.API_BASE_URL}/contact.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.status === 'success') {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          closeBookingModal();
        }, 3000);
      }
    } catch (error) {
      console.error("Modal Error:", error);
      alert("Failed to send request.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
        onClick={closeBookingModal}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">

        {/* Close Button */}
        <button
          onClick={closeBookingModal}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all z-10"
          aria-label="Close modal"
        >
          <FaTimes size={18} />
        </button>

        {isSubmitted ? (
          <div className="p-12 text-center py-20">
            <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <FaCheckCircle size={48} />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Request Received</h3>
            <p className="text-slate-500 font-medium">A technical specialist will review your system details and contact you within 30 minutes.</p>
          </div>
        ) : (
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                <FaMicrochip size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">System Diagnostic</h3>
                <p className="text-blue-600 text-[10px] font-bold uppercase tracking-[2px] mt-1">Free Driver Compatibility Check</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1">Full Name</label>
                  <input name="name" value={formData.name} onChange={handleChange} required type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-600/50 focus:bg-white transition-all text-sm font-medium" placeholder="e.g. John Doe" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1">Phone Number</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} required type="tel" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-600/50 focus:bg-white transition-all text-sm font-medium" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1">System/OS Type</label>
                <select
                  name="os"
                  value={formData.os}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-600/50 focus:bg-white transition-all text-sm font-medium text-slate-600 appearance-none"
                  defaultValue={selectedService}
                >
                  <option value="">Select your operating system</option>
                  <option value="Windows 11">Windows 11</option>
                  <option value="Windows 10">Windows 10</option>
                  <option value="macOS">macOS</option>
                  <option value="Linux">Linux Distro</option>
                  <option value="Custom">Custom Workstation</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1">Issue Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} required rows="3" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-600/50 focus:bg-white transition-all resize-none text-sm font-medium" placeholder="Briefly describe the hardware problem..."></textarea>
              </div>

              <div className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50 mb-2">
                <FaShieldAlt className="text-blue-600 flex-shrink-0" size={16} />
                <p className="text-[10px] text-blue-800 font-semibold leading-relaxed">
                  Your system data is protected by AES-256 encryption.
                </p>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold uppercase tracking-wider py-5 rounded-2xl shadow-xl shadow-slate-900/10 hover:shadow-blue-600/20 hover:-translate-y-0.5 active:scale-[0.98] transition-all mt-4 text-xs flex items-center justify-center gap-3"
              >
                {isLoading ? <FaSpinner className="animate-spin" /> : 'Start Free Diagnostic'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
