
import React from 'react';
import { Building, Banknote, Star } from 'lucide-react';

const MarketSection: React.FC = () => {
  return (
    <section id="market" className="py-20 md:py-28 bg-housify-blue text-white">
      <div className="container-width section-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-xs font-medium py-1 px-3 rounded-full bg-white/20 text-white mb-4">
            Market Potential
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A <span className="text-housify-orange">₦3.5 trillion</span> opportunity
          </h2>
          <p className="text-white/80 text-lg">
            With over 2 million Nigerians moving annually, the demand for a direct landlord-to-tenant platform has never been higher.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
            <div className="text-4xl font-bold mb-2">2M+</div>
            <div className="text-white/70">Nigerians move annually</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
            <div className="text-4xl font-bold mb-2">₦3.5T</div>
            <div className="text-white/70">Nigerian rental market</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
            <div className="text-4xl font-bold mb-2">68%</div>
            <div className="text-white/70">Prefer direct landlord contact</div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">How Housify Makes Money</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-10 h-10 rounded-full bg-housify-orange/20 flex items-center justify-center mb-4">
                <Banknote className="h-5 w-5 text-housify-orange" />
              </div>
              <h4 className="text-lg font-medium mb-2">HP Monetization</h4>
              <p className="text-white/70 text-sm">
                Users buy HP to unlock verified listings
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-10 h-10 rounded-full bg-housify-orange/20 flex items-center justify-center mb-4">
                <Building className="h-5 w-5 text-housify-orange" />
              </div>
              <h4 className="text-lg font-medium mb-2">Rent Processing</h4>
              <p className="text-white/70 text-sm">
                Small fee on landlord rent management
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 relative">
              <div className="w-10 h-10 rounded-full bg-housify-orange/20 flex items-center justify-center mb-4">
                <Star className="h-5 w-5 text-housify-orange" />
              </div>
              <h4 className="text-lg font-medium mb-2">Premium Listings</h4>
              <p className="text-white/70 text-sm">
                Listings with higher visibility, featured placements and better exposure
              </p>
              <span className="absolute top-2 right-2 text-xs font-medium py-1 px-2 rounded-full bg-housify-orange text-white">
                V2.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
