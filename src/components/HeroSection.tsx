import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';
import PhoneMockup from './PhoneMockup';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-16 md:pt-30">
      {/* Background Elements */}
      <div className="absolute top-0 inset-0 -z-10 bg-gradient-to-b from-white to-blue-50/50" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(2,43,96,0.05),rgba(255,255,255,0))]" />
      
      {/* Map Background */}
      <div 
        className="absolute inset-0 -z-10 opacity-50 blur-[3px]"
        style={{
          backgroundImage: 'url(/Map.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      <div className="container-width h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 section-padding min-h-[calc(100vh-6rem)]">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center space-y-8 animate-fade-in max-w-2xl mx-auto lg:mx-0">
            <div className="space-y-3">
              <div className="inline-block text-xs font-medium py-1 px-3 rounded-full bg-housify-blue/10 text-housify-blue animate-fade-in">
                No Agents, No Stress
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Find & Secure Your Next {' '}
                <span className="text-housify-blue">Home in Nigeria</span>
              </h1>
              <p className="text-gray-600 text-lg mt-4 md:text-xl max-w-xl">
                The fastest way to find verified homes near you. Earn rewards for listing houses, and unlock landlord contacts with Housify Points (HP).
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/waitlist">
                <Button variant="primary" size="lg" className="group inline-flex items-center justify-center">
                  <span>Get Early Access</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/waitlist">
                <Button variant="secondary" size="lg" className="inline-flex items-center justify-center">
                  <span>Learn More</span>
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4 mt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    style={{
                      backgroundImage: `url(https://api.dicebear.com/7.x/avataaars/svg?seed=user${i})`,
                      backgroundSize: 'cover'
                    }}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-housify-blue">300+</span> users on the waitlist
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual Elements */}
          <div className="flex items-center justify-center">
            {/* Phone in the foreground */}
            <div className="relative">
              <PhoneMockup />
              
              {/* Accent elements */}
              <div className="absolute top-1/3 -left-8 w-6 h-6 rounded-full bg-housify-orange/20 animate-pulse-subtle" />
              <div className="absolute bottom-1/4 -right-4 w-4 h-4 rounded-full bg-housify-blue/30 animate-pulse-subtle" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce hidden md:flex">
        <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">Scroll</div>
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 animate-pulse-subtle" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
