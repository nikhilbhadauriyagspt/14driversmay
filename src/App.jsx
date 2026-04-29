import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { BookingProvider } from './context/BookingContext';
import { SettingsProvider } from './context/SettingsContext';
import BookingModal from './components/modals/BookingModal';
import QuickSupportFAB from './components/QuickSupportFAB';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQPage = lazy(() => import('./pages/FAQ'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));
const BlogDetails = lazy(() => import('./pages/BlogDetails'));
const GuideDetails = lazy(() => import('./pages/GuideDetails'));
const Guides = lazy(() => import('./pages/Guides'));
const PrivacyPolicy = lazy(() => import('./pages/policies/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/policies/TermsOfService'));
const RefundPolicy = lazy(() => import('./pages/policies/RefundPolicy'));
const CookiePolicy = lazy(() => import('./pages/policies/CookiePolicy'));
const Disclaimer = lazy(() => import('./pages/policies/Disclaimer'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  // No longer hiding header/footer for specific appliance pages as they are removed
  const hideHeaderFooter = false;

  return (
    <div className="App overflow-x-hidden">
      {!hideHeaderFooter && <Header />}
      <BookingModal />
      <CookieConsent />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />

          {/* Dynamic route for all Drivers */}
          <Route path="/service/:slug" element={<ServiceDetails />} />

          {/* Dynamic route for all Guides */}
          <Route path="/guide/:slug" element={<GuideDetails />} />

          {/* Catch-all for blogs */}
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
        {!hideHeaderFooter && <Footer />}
      </Suspense>
    </div>
  );
};

function App() {
  return (
    <SettingsProvider>
      <BookingProvider>
        <Router>
          <ScrollToTop />
          <AppContent />
        </Router>
      </BookingProvider>
    </SettingsProvider>
  );
}

export default App;