import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaSpinner, FaDatabase, FaBolt, FaChevronRight } from 'react-icons/fa';
import CONFIG from '../config';

const Contact = () => {
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [formData, setFormData] = useState({
      first_name: '',
      last_name: '',
      email: '',
      category: '',
      message: ''
   });

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);

      try {
         // Using the base URL from config
         const response = await fetch(`${CONFIG.API_BASE_URL}/contact.php`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               ...formData,
               site_origin: window.location.hostname // Dynamically pick domain
            }),
         });

         const result = await response.json();

         if (result.status === 'success') {
            setIsSubmitted(true);
            setFormData({ first_name: '', last_name: '', email: '', category: '', message: '' });
            window.scrollTo({ top: 0, behavior: 'smooth' });
         } else {
            alert("Error: " + result.message);
         }
      } catch (error) {
         console.error("Submission Error:", error);
         alert("Could not connect to the backend. Please check if XAMPP is running and the PHP file exists.");
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <div className="min-h-screen bg-white font-poppins pt-20">
         <Helmet>
            <title>Technical Support | DriverVista Support Hub</title>
            <meta name="description" content="Request technical diagnostic support for hardware driver issues. Our specialists are available for system optimization." />
         </Helmet>

         {/* Modern Sub-Hero Section */}
         <section className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden border-b border-slate-100">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/20 -skew-x-12 translate-x-1/2"></div>
            <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
               <div className="inline-flex items-center gap-2 bg-blue-600/5 border border-blue-600/10 px-4 py-1.5 rounded-full mb-6 shadow-sm">
                  <FaDatabase className="text-blue-600 text-[10px]" />
                  <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[2px]">Technical Support Hub</span>
               </div>
               <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                  Initialize <span className="text-blue-600">System Support</span>
               </h1>
               <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
                  Experiencing hardware communication errors? Provide your system details below for a professional driver-level diagnostic session.
               </p>
            </div>
         </section>

         <div className="container mx-auto px-6 lg:px-12 py-24 ">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

               {/* Left Side: Support Identity */}
               <div className="w-full lg:w-2/5">
                  <span className="text-blue-600 text-[11px] font-bold uppercase tracking-[3px] block mb-4">Support Channels</span>
                  <h2 className="text-3xl font-bold text-slate-900 mb-8 leading-tight">Expert Hardware <br />Diagnostics & Fixes</h2>
                  <p className="text-slate-500 text-base font-medium mb-12 leading-relaxed">
                     Our technical team specialized in resolving low-level system conflicts. We ensure your OS and hardware are perfectly synchronized.
                  </p>

                  <div className="space-y-10">


                     <div className="flex items-start gap-6 group">
                        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                           <FaEnvelope size={18} />
                        </div>
                        <div>
                           <h4 className="font-bold text-lg text-slate-900 mb-1">Email Correspondence</h4>
                           <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2 italic">Response Time: 2-4 Hours</p>
                           <a href="mailto:support@drivervista.tech" className="text-xl font-black text-slate-900 hover:text-blue-600 transition-colors tracking-tight break-all text-base md:text-xl">support@drivervista.tech</a>
                        </div>
                     </div>

                     <div className="flex items-start gap-6 group">
                        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                           <FaMapMarkerAlt size={18} />
                        </div>
                        <div>
                           <h4 className="font-bold text-lg text-slate-900 mb-1">Headquarters</h4>
                           <p className="text-slate-500 font-medium leading-relaxed mt-2 italic">
                              Tech Corridor South, <br />California, USA
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Side: Professional Form */}
               <div className="w-full lg:w-3/5">
                  <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50/50 rounded-bl-[100px]"></div>

                     {isSubmitted ? (
                        <div className="relative z-10 py-20 text-center">
                           <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-emerald-100 shadow-sm">
                              <FaCheckCircle size={32} />
                           </div>
                           <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Diagnostic Request Sent</h3>
                           <p className="text-slate-500 font-medium max-w-sm mx-auto leading-relaxed">System parameters received. A technical specialist will contact you within the standard response window.</p>
                           <button
                              onClick={() => setIsSubmitted(false)}
                              className="mt-10 text-blue-600 font-bold hover:text-slate-900 transition-colors underline decoration-2 underline-offset-8"
                           >
                              Submit another diagnostic
                           </button>
                        </div>
                     ) : (
                        <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              <div className="space-y-3">
                                 <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">First Name</label>
                                 <input name="first_name" value={formData.first_name} onChange={handleChange} required type="text" className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-medium placeholder:text-slate-300" placeholder="Ex: Alex" />
                              </div>
                              <div className="space-y-3">
                                 <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">Last Name</label>
                                 <input name="last_name" value={formData.last_name} onChange={handleChange} required type="text" className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-medium placeholder:text-slate-300" placeholder="Ex: Morgan" />
                              </div>
                           </div>

                           <div className="space-y-3">
                              <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">Technical Email Address</label>
                              <input name="email" value={formData.email} onChange={handleChange} required type="email" className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-medium placeholder:text-slate-300" placeholder="your@system-mail.com" />
                           </div>

                           <div className="space-y-3">
                              <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">Issue Category</label>
                              <div className="relative">
                                 <select name="category" value={formData.category} onChange={handleChange} required className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-medium text-slate-600 appearance-none cursor-pointer">
                                    <option value="">Select failure type...</option>
                                    <option value="Essential">Essential (Chipset/Graphics/Audio)</option>
                                    <option value="Hardware">Hardware (Storage/Bluetooth/Input)</option>
                                    <option value="Peripheral">Peripheral (Printer/Scanner/Webcam)</option>
                                    <option value="Advanced">Advanced (BIOS/UEFI/Security)</option>
                                    <option value="Other">Other System Failure</option>
                                 </select>
                                 <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                    <FaBolt size={10} />
                                 </div>
                              </div>
                           </div>

                           <div className="space-y-3">
                              <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">Symptom Description</label>
                              <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-medium resize-none placeholder:text-slate-300" placeholder="Describe flickers, BSOD codes, or connection errors..."></textarea>
                           </div>

                           <button
                              disabled={isLoading}
                              type="submit"
                              className="w-full bg-blue-600 hover:bg-slate-900 disabled:bg-slate-300 text-white font-bold uppercase tracking-widest text-xs py-5 rounded-2xl shadow-xl shadow-blue-600/10 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 group"
                           >
                              {isLoading ? (
                                 <>
                                    <FaSpinner className="animate-spin" /> Analyzing Parameters...
                                 </>
                              ) : (
                                 <>
                                    Initialize Diagnostic Request <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                                 </>
                              )}
                           </button>
                        </form>
                     )}
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
};

export default Contact;