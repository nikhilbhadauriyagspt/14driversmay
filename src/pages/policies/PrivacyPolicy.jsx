import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 font-poppins">
      <Helmet>
        <title>Privacy Policy | DriverZenith Official Standards</title>
        <meta name="description" content="Detailed Privacy Policy for DriverZenith. Understand how we collect, use, and protect your technical data." />
      </Helmet>

      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full mb-6 border border-blue-100">
          <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[2px]">Legal Documentation</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-slate-400 mb-12 italic font-medium">Last updated February 06, 2026</p>

        <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-10 font-medium">
          <section>
            <p>
              This Privacy Notice for DriverZenith ("<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>"), describes how and why we
              might access, collect, store, use, and/or share ("<strong>process</strong>") your personal information when
              you use our technical services ("<strong>Services</strong>"), including when you:
            </p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>Visit our technical portal at <a href="https://www.driverzenith.net/" className="text-blue-600 hover:underline">https://www.driverzenith.net/</a> or any website of ours that links to this Privacy Notice</li>
              <li>Engage with DriverZenith for hardware diagnostics. At DriverZenith, we focus on technical accuracy and system synchronization. Our mission is built on providing diagnostic clarity and performing software-hardware optimizations that aim to extend the lifecycle of your computer systems. We serve clients with a commitment to maintaining standard operating procedures.</li>
              <li>Connect with our technical architects for hardware issue resolutions or system audits.</li>
            </ul>
            <p className="mt-6">
              <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:info@driverzenith.net" className="text-blue-600">info@driverzenith.net</a>.
            </p>
          </section>

          <section className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Summary of Key Points</h2>
            <p className="mb-6 text-slate-500 italic">This summary provides key points from our Privacy Notice regarding your technical data protection.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div>
                <p className="font-bold text-slate-900 mb-1">Information Processing</p>
                <p>We process your information to provide, improve, and administer our technical Services, communicate with you for diagnostics, and for security prevention.</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Sensitive Data</p>
                <p>We do not process sensitive personal information (racial origins, religious beliefs, etc.). We only focus on system-level parameters.</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Third-Party Collection</p>
                <p>We do not collect any information from third-party databases. All data is provided directly during diagnostic sessions.</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Security Standards</p>
                <p>We have organizational and technical processes in place to protect your system information. We focus on OS-level integrity and secure data handling.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-widest border-b border-slate-100 pb-4">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-xs uppercase tracking-wider">
              <a href="#collect" className="text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> What information do we collect?</a>
              <a href="#process" className="text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> How do we process your information?</a>
              <a href="#safe" className="text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> How do we keep your information safe?</a>
              <a href="#contact" className="text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> How can you contact us?</a>
            </div>
          </section>

          <section id="collect" className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">1. What Information do we collect?</h3>
            <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining technical support or diagnostics for your hardware. This includes names, contact phone numbers, technical email addresses, and hardware symptom descriptions.</p>
          </section>

          <section id="process" className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">2. How do we process your information?</h3>
            <p>We process your personal information to deliver and facilitate the delivery of technical services to the user. This includes analyzing hardware symptoms and providing driver-level resolution steps.</p>
          </section>

          <section id="safe" className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">3. How do we keep your information safe?</h3>
            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any technical information we process. However, no electronic transmission over the Internet can be guaranteed to be 100% secure.</p>
          </section>

          <section id="contact" className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900">4. How can you contact us?</h3>
            <p>If you have questions or comments about this notice, you may email us at <strong>info@driverzenith.net</strong> or contact us by post at:</p>
            <address className="not-italic bg-slate-900 text-white p-10 rounded-[3rem] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-bl-full"></div>
              <p className="font-black text-xl mb-2 italic">DriverZenith HQ</p>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-4">Technical Operations Center</p>
              <p className="text-lg">1267 Filer Ave E</p>
              <p className="text-lg">Twin Falls, ID 83301, USA</p>
            </address>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
