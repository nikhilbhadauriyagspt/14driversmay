import React from "react";
import { Helmet } from "react-helmet-async";
import { FaEnvelope, FaPaperPlane, FaBookOpen } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen font-[Poppins]">
      <Helmet>
        <title>Contact | Lappy Learns Top Driver Learning Resource</title>
        <meta
          name="description"
          content="Contact Lappy Learns Top for driver learning topics, guide suggestions, educational feedback, or general website questions."
        />
      </Helmet>

      <section className="relative pt-32 pb-24 overflow-hidden bg-[#F7FBFF]">
        <div className="absolute top-0 right-0 w-[38%] h-full bg-[#0C66E5]" />
        <div className="absolute bottom-0 left-0 w-[280px] h-[280px] bg-blue-100 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-[1500px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 px-4 py-2 text-[12px] font-black uppercase tracking-[0.2em] text-[#0C66E5] mb-6">
              <FaBookOpen size={14} />
              Learning Resource
            </div>

            <h1 className="text-[42px] md:text-[68px] font-black leading-[1.02] text-slate-950 mb-7">
              Contact <span className="text-[#0C66E5]">Lappy Learns Top</span>
            </h1>

            <p className="text-[16px] md:text-[18px] leading-[1.8] text-slate-600 max-w-[720px]">
              Share a driver learning topic, suggest a guide, or send a general
              question about our educational driver information resources.
            </p>
          </div>

          <div className="bg-white border border-blue-100 p-8">
            <div className="w-14 h-14 bg-[#0C66E5] text-white flex items-center justify-center mb-6">
              <FaEnvelope size={22} />
            </div>

            <h4 className="font-black text-slate-950 text-[24px] mb-3">
              Learning Resource Contact
            </h4>

            <p className="text-slate-600 text-[16px] font-medium">
              <a
                href="mailto:info@lappylearnstop.co"
                className="hover:text-[#0C66E5] transition"
              >
                info@lappylearnstop.co
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-10">
            <div className="bg-[#0C66E5] text-white p-8 h-fit">
              <FaPaperPlane size={28} className="mb-6" />

              <h2 className="text-[30px] font-black leading-tight mb-5">
                Send a Learning Request
              </h2>

              <p className="text-white/80 text-[15px] leading-[1.8]">
                Use this form to share your guide suggestion, feedback, or
                learning topic.
              </p>
            </div>

            <div className="border border-slate-200 bg-[#F8FAFC] p-6 md:p-8">
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Full Name">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="inputBox"
                    />
                  </Field>

                  <Field label="Email Address">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="inputBox"
                    />
                  </Field>
                </div>

                <Field label="Topic">
                  <input
                    type="text"
                    placeholder="e.g. Audio driver learning guide"
                    className="inputBox"
                  />
                </Field>

                <Field label="Message">
                  <textarea
                    rows="5"
                    placeholder="Share your guide suggestion, feedback, or learning topic..."
                    className="inputBox resize-none"
                  />
                </Field>

                <button className="w-full bg-[#0C66E5] text-white py-4 font-black text-sm hover:bg-[#084db3] transition active:scale-[0.99]">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .inputBox {
          width: 100%;
          background: #ffffff;
          border: 1px solid #dbeafe;
          padding: 14px 16px;
          font-size: 14px;
          outline: none;
          color: #0f172a;
          transition: all 0.2s ease;
        }

        .inputBox:focus {
          border-color: #0C66E5;
          background: #ffffff;
        }

        .inputBox::placeholder {
          color: #94a3b8;
        }
      `}</style>
    </div>
  );
};

const Field = ({ label, children }) => (
  <div className="space-y-2">
    <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.18em]">
      {label}
    </label>
    {children}
  </div>
);

export default Contact;