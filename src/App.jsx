import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FAQPage from './pages/FAQ';
import ServiceDetails from './pages/ServiceDetails';
import BlogDetails from './pages/BlogDetails';
import GuideDetails from './pages/GuideDetails';
import Guides from './pages/Guides';
import PrivacyPolicy from './pages/policies/PrivacyPolicy';
import TermsOfService from './pages/policies/TermsOfService';
import RefundPolicy from './pages/policies/RefundPolicy';
import CookiePolicy from './pages/policies/CookiePolicy';
import Disclaimer from './pages/policies/Disclaimer';
import { BookingProvider } from './context/BookingContext';
import { SettingsProvider } from './context/SettingsContext';
import BookingModal from './components/modals/BookingModal';
import QuickSupportFAB from './components/QuickSupportFAB';
import CookieConsent from './components/CookieConsent';
import './App.css';

const AppContent = () => {
  const location = useLocation();
  // No longer hiding header/footer for specific appliance pages as they are removed
  const hideHeaderFooter = false;

  return (
    <div className="App overflow-x-hidden">
      {!hideHeaderFooter && <Header />}
      <BookingModal />
      <CookieConsent />
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
    </div>
  );
};

function App() {
  return (
    <SettingsProvider>
      <BookingProvider>
        <Router>
          <AppContent />
        </Router>
      </BookingProvider>
    </SettingsProvider>
  );
}

export default App;