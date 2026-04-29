import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 font-poppins">
      <Helmet>
        <title>Terms of Service - DriverZenith</title>
        <meta name="description" content="Official Terms of Service for DriverZenith. Agreement to our legal terms and conditions." />
        <link rel="canonical" href="https://www.driverzenith.net/terms-of-service" />
      </Helmet>

      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full mb-6 border border-blue-100">
          <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[2px]">Legal Agreement</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Terms of Service</h1>
        <p className="text-slate-400 mb-12 italic font-medium">Last updated February 06, 2026</p>

        <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-10 font-medium">

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">AGREEMENT TO OUR LEGAL TERMS</h2>
            <p>
              We are DriverZenith ("<strong>Company</strong>," "<strong>we</strong>," "<strong>us</strong>," "<strong>our</strong>"), a company registered in Idaho,
              United States at 1267 Filer Ave E, Twin Falls, ID 83301.
            </p>
            <p>
              We operate the website <a href="https://www.driverzenith.net/" className="text-blue-600 hover:underline font-bold">https://www.driverzenith.net/</a> (the "<strong>Site</strong>"), as well as any other related
              products and services that refer or link to these legal terms (the "<strong>Legal Terms</strong>") (collectively,
              the "<strong>Services</strong>").
            </p>
            <p>
              DriverZenith specializes in expert computer driver support and hardware diagnostics. We provide technical solutions to optimize system performance and ensure hardware-software synchronization.
            </p>
            <p>
              You can contact us by email at <a href="mailto:info@driverzenith.net" className="text-blue-600 font-bold">info@driverzenith.net</a>, or by
              mail to 1267 Filer Ave E, Twin Falls, ID 83301, United States.
            </p>
            <p>
              These Legal Terms constitute a legally binding agreement made between you, whether
              personally or on behalf of an entity ("<strong>you</strong>"), and DriverZenith, concerning your access to
              and use of the Services. You agree that by accessing the Services, you have read,
              understood, and agreed to be bound by all of these Legal Terms. <strong>IF YOU DO NOT AGREE
                WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE
                SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</strong>
            </p>
          </section>

          <section className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight">TABLE OF CONTENTS</h2>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 list-decimal pl-6 font-bold text-xs uppercase tracking-wider text-slate-400">
              <li><a href="#services" className="hover:text-blue-600 transition-colors">OUR SERVICES</a></li>
              <li><a href="#intellectual" className="hover:text-blue-600 transition-colors">INTELLECTUAL PROPERTY RIGHTS</a></li>
              <li><a href="#representations" className="hover:text-blue-600 transition-colors">USER REPRESENTATIONS</a></li>
              <li><a href="#prohibited" className="hover:text-blue-600 transition-colors">PROHIBITED ACTIVITIES</a></li>
              <li><a href="#management" className="hover:text-blue-600 transition-colors">SERVICES MANAGEMENT</a></li>
              <li><a href="#privacy" className="hover:text-blue-600 transition-colors">PRIVACY POLICY</a></li>
              <li><a href="#termination" className="hover:text-blue-600 transition-colors">TERM AND TERMINATION</a></li>
              <li><a href="#law" className="hover:text-blue-600 transition-colors">GOVERNING LAW</a></li>
              <li><a href="#disclaimer" className="hover:text-blue-600 transition-colors">DISCLAIMER</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors">CONTACT US</a></li>
            </ol>
          </section>

          <section id="services">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4 uppercase tracking-widest">1. OUR SERVICES</h3>
            <p>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.</p>
          </section>

          <section id="intellectual">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4 uppercase tracking-widest">2. INTELLECTUAL PROPERTY RIGHTS</h3>
            <p>We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services.</p>
          </section>

          <section id="#law">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4 uppercase tracking-widest">3. GOVERNING LAW</h3>
            <p>These Legal Terms and your use of the Services are governed by and construed in accordance with the laws of the State of Idaho applicable to agreements made and to be entirely performed within the State of Idaho, without regard to its conflict of law principles.</p>
          </section>

          <section id="contact" className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4 uppercase tracking-widest">4. CONTACT US</h3>
            <p>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</p>
            <address className="not-italic bg-slate-900 text-white p-10 rounded-[3rem] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-bl-full"></div>
              <p className="font-black text-xl mb-2 italic">DriverZenith Legal Dept</p>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-4">Operations & Compliance</p>
              <p className="text-lg font-bold">1267 Filer Ave E</p>
              <p className="text-lg font-bold">Twin Falls, ID 83301</p>
              <p className="text-lg font-bold">United States</p>
              <p className="mt-4">
                <a href="mailto:info@driverzenith.net" className="text-blue-400 hover:underline">info@driverzenith.net</a>
              </p>
            </address>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
