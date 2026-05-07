import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import FAQ from '../components/Faqs';
import CommonProblems from '../components/commanissue';
import WhenNeedDrivers from '../components/needdrivers';
import Driverfixisuue from '../components/driverfixissue';
import Guides from '../components/guides';
import Stats from '../components/stact';
import DriverCategoryMarquee from '../components/drivercategorymarquee';
import InfoMarquee from '../components/BrandsMarquee';
import DriverChallengeSection from '../components/DriverChallengeSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Lappy Learns Top | Driver Information Guides</title>
        <meta name="description" content="Technical repository for hardware specifications, driver-level architectural data, and system documentation for the global technical community." />
        <link rel="canonical" href="https://lappylearnstop.co" />
      </Helmet>

      <Hero />
      <InfoMarquee />
      <DriverChallengeSection />
      {/* <DriverCategoryMarquee /> */}
      <CommonProblems />

      <Driverfixisuue />
      <Guides />
      <FAQ />


    </>
  );
};

export default Home;