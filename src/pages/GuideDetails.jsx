import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  ChevronRight, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  BookOpen,
  Share2
} from "lucide-react";
import { guidesData } from "../data/guidesData";

const GuideDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const guide = guidesData.find((g) => g.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!guide) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7FAFF] px-6">
        <h2 className="text-2xl font-bold text-[#0F1B3D]">Guide Not Found</h2>
        <p className="text-[#5B6478] mt-2 mb-6">The guide you are looking for does not exist.</p>
        <Link 
          to="/" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const otherGuides = guidesData.filter((g) => g.slug !== slug).slice(0, 4);

  return (
    <div className="bg-[#F7FAFF] min-h-screen pt-24 pb-20 font-[Poppins]">
      <Helmet>
        <title>{guide.title} | DriverZenith Guide</title>
        <meta name="description" content={guide.desc} />
      </Helmet>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[13px] font-medium text-[#5B6478] mb-8">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#0F1B3D]">Guides</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-blue-600 truncate">{guide.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          {/* Main Content */}
          <article className="bg-white rounded-3xl border border-[#E6ECF8] shadow-sm overflow-hidden">
            {/* Header Image */}
            <div className="w-full h-[300px] md:h-[400px] bg-[#EEF4FF] flex items-center justify-center p-10 border-b border-[#E6ECF8]">
              <img 
                src={guide.img} 
                alt={guide.title} 
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-6 mb-6 text-[13px] font-semibold text-[#5B6478]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>5 Min Read</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span>Tutorial</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
                  <Share2 className="w-4 h-4 text-blue-600" />
                  <span>Share Guide</span>
                </div>
              </div>

              <h1 className="text-[32px] md:text-[42px] font-bold text-[#0F1B3D] leading-[1.15] mb-6">
                {guide.title}
              </h1>

              <p className="text-[17px] leading-[1.7] text-[#5B6478] font-medium mb-10 border-l-4 border-blue-600 pl-6 bg-blue-50/30 py-4 rounded-r-xl">
                {guide.content.introduction}
              </p>

              {/* Common Reasons */}
              <div className="mb-12">
                <h2 className="text-[24px] font-bold text-[#0F1B3D] mb-6 flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-orange-500" />
                  Why This Happens?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {guide.content.reasons.map((reason, i) => (
                    <div key={i} className="flex gap-3 p-4 bg-[#F8FAFC] rounded-xl border border-[#E6ECF8]">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                      <p className="text-[14px] text-[#5B6478] font-medium">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps */}
              <div>
                <h2 className="text-[24px] font-bold text-[#0F1B3D] mb-8 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  Steps to Resolve
                </h2>
                <div className="space-y-8">
                  {guide.content.steps.map((step, i) => (
                    <div key={i} className="relative pl-14">
                      <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[18px] shadow-lg shadow-blue-200">
                        {i + 1}
                      </div>
                      <h3 className="text-[19px] font-bold text-[#0F1B3D] mb-2">{step.title}</h3>
                      <p className="text-[15px] leading-[1.7] text-[#5B6478] font-medium">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-16 p-8 bg-[#071F4A] rounded-2xl text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                <h4 className="text-white text-[20px] font-bold mb-4 relative z-10">Expand Your Knowledge</h4>
                <p className="text-white/70 text-[14px] mb-8 max-w-md mx-auto relative z-10">
                  Our technical library contains hundreds of articles on hardware optimization and system stability.
                </p>
                <Link 
                  to="/guides" 
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition relative z-10"
                >
                  Explore Technical Library
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-white rounded-3xl border border-[#E6ECF8] p-8 shadow-sm">
              <h3 className="text-[18px] font-bold text-[#0F1B3D] mb-6">Related Documentation</h3>
              <div className="space-y-6">
                {otherGuides.map((item, i) => (
                  <Link 
                    key={i} 
                    to={`/guide/${item.slug}`} 
                    className="flex gap-4 group"
                  >
                    <div className="w-20 h-20 rounded-xl bg-[#EEF4FF] border border-[#E6ECF8] overflow-hidden shrink-0">
                      <img src={item.img} alt={item.title} className="w-full h-full object-contain group-hover:scale-110 transition duration-300" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-[#0F1B3D] leading-tight group-hover:text-blue-600 transition line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#5B6478] mt-1 font-semibold uppercase tracking-wider">Read More</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl shadow-blue-200">
              <h3 className="text-[22px] font-bold mb-4">Hardware Archive</h3>
              <p className="text-white/80 text-[14px] leading-relaxed mb-6 font-medium">
                Access our complete archive of technical specifications and hardware-software communication protocols.
              </p>
              <Link to="/services" className="block w-full bg-white text-blue-600 py-3 rounded-xl font-bold text-[14px] hover:bg-blue-50 transition shadow-lg text-center">
                View Archive
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default GuideDetails;
