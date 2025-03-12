
import React from 'react';
import { MapPin, Key, Home, ChevronRight } from 'lucide-react';
import Button from './Button';
import TestimonialsCarousel from './TestimonialsCarousel';

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-housify-blue/5 to-transparent rounded-bl-full opacity-70" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-housify-orange/5 to-transparent rounded-tr-full opacity-60" />
      
      <div className="container-width section-padding relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-xs font-medium py-1 px-3 rounded-full bg-housify-blue/10 text-housify-blue mb-4">
            The Solution
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A <span className="text-housify-blue">crowd-sourced</span> housing marketplace
          </h2>
          <p className="text-gray-600 text-lg">
            Housify lets you search, list, and connect with landlords—without agent fees!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12 mb-16">
          {/* Step 1 */}
          <div className="relative">
            <div className="glass-card p-8 h-full flex flex-col">
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-housify-blue text-white flex items-center justify-center font-bold text-lg shadow-lg">
                1
              </div>
              <div className="pt-6 pb-4">
                <MapPin className="h-8 w-8 text-housify-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">Search Nearby</h3>
                <p className="text-gray-600">
                  Search for homes near you with our interactive map and smart filters.
                </p>
              </div>
            </div>
            {/* Arrow connector (desktop only) */}
            <div className="hidden md:block absolute top-1/2 -right-3 transform translate-y-1/2">
              <ChevronRight className="h-6 w-6 text-gray-300" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="glass-card p-8 h-full flex flex-col">
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-housify-orange text-white flex items-center justify-center font-bold text-lg shadow-lg">
                2
              </div>
              <div className="pt-6 pb-4">
                <Key className="h-8 w-8 text-housify-orange mb-4" />
                <h3 className="text-xl font-semibold mb-2">Unlock Contacts</h3>
                <p className="text-gray-600">
                  Use Housify Points (HP) to unlock verified landlord contacts directly.
                </p>
              </div>
            </div>
            {/* Arrow connector (desktop only) */}
            <div className="hidden md:block absolute top-1/2 -right-3 transform translate-y-1/2">
              <ChevronRight className="h-6 w-6 text-gray-300" />
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <div className="glass-card p-8 h-full flex flex-col">
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-housify-blue text-white flex items-center justify-center font-bold text-lg shadow-lg">
                3
              </div>
              <div className="pt-6 pb-4">
                <Home className="h-8 w-8 text-housify-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">Earn Rewards</h3>
                <p className="text-gray-600">
                  List properties and earn HP rewards when others view your listings.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo GIF */}
        <div id="demo" className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="aspect-video bg-gray-100 flex items-center justify-center">
            <div className="text-gray-400 text-lg">
              Quick demo video placeholder
            </div>
          </div>
          <div className="p-6 flex justify-between items-center">
            <div>
              <h4 className="font-semibold text-lg">See Housify in action</h4>
              <p className="text-gray-500 text-sm">Watch how easy it is to find your next home</p>
            </div>
            <Button variant="primary" size="sm" className="inline-flex items-center">
              <span>Watch Demo</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <TestimonialsCarousel />
      </div>
    </section>
  );
};

export default SolutionSection;
