import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import FAQ from '../components/Faqs';
import CommonProblems from '../components/commanissue';
import WhenNeedDrivers from '../components/needdrivers';
import DriverFixIssue from '../components/driverfixissue.jsx';
import Guides from '../components/guides';
import Stats from '../components/stact';
import DriverCategoryMarquee from '../components/drivercategorymarquee';
import InfoMarquee from '../components/InfoMarquee';
import BrandsMarquee from '../components/BrandsMarquee';
import DriverChallengeSection from '../components/DriverChallengeSection';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Clear With Us | Driver Information Guides</title>
        <meta name="description" content="Technical repository for hardware specifications, driver-level architectural data, and system documentation for the global technical community." />
        <link rel="canonical" href="https://clearwithus.co" />
      </Helmet>

      <Hero />
      <InfoMarquee />
      <DriverChallengeSection />

      <CommonProblems />

      <DriverFixIssue />
      <WhyChooseUs />
      <Guides />
      <FAQ />


    </>
  );
};

export default Home;