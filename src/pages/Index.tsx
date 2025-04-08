
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import PartnershipsSection from '../components/PartnershipsSection';
import UserTypesSection from '../components/UserTypesSection';
import VerificationSection from '../components/VerificationSection';
import PointsSection from '../components/PointsSection';
import LandlordToolsSection from '../components/LandlordToolsSection';
import MarketSection from '../components/MarketSection';
import CompetitiveEdgeSection from '../components/CompetitiveEdgeSection';
import TechSection from '../components/TechSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

const Index = () => {
  // Function to scroll to an element by ID
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="min-h-screen font-clash">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problem Section */}
      <ProblemSection />
            
      {/* Solution Section */}
      <SolutionSection />

      {/* User Types Section */}
      <UserTypesSection />
      
      {/* Verification Process Section */}
      <VerificationSection />
      
      {/* Points System Section */}
      <PointsSection />
      
      {/* Landlord Tools Section */}
      <LandlordToolsSection />
      
      {/* Partnerships Section */}
      <PartnershipsSection />
      
      {/* Market Potential Section */}
      <MarketSection />
      
      {/* Competitive Edge Section */}
      <CompetitiveEdgeSection />
      
      {/* Tech Section */}
      <TechSection />
      
      {/* CTA Section */}
      <CtaSection />
      
      {/* Footer */}
      <Footer scrollToElement={scrollToElement} />
    </div>
  );
};

export default Index;
