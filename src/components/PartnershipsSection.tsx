
import React from 'react';
import { Building, CreditCard, Users } from 'lucide-react';

const PartnershipsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-width section-padding">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block text-xs font-medium py-1 px-3 rounded-full bg-housify-blue/10 text-housify-blue mb-4">
            Partnerships
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Strategic <span className="text-housify-blue">Alliances</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We're working with industry leaders to transform the housing experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 bg-housify-blue/10 rounded-full flex items-center justify-center mb-4">
              <Building className="h-7 w-7 text-housify-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Real Estate Developers</h3>
            <p className="text-gray-600">
              Partnering with top developers to bring new properties directly to users without intermediaries.
            </p>
          </div>

          <div className="glass-card p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 bg-housify-blue/10 rounded-full flex items-center justify-center mb-4">
              <Users className="h-7 w-7 text-housify-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Housing Cooperatives</h3>
            <p className="text-gray-600">
              Working with housing cooperatives to offer exclusive listings and special rates to their members.
            </p>
          </div>

          <div className="glass-card p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 bg-housify-blue/10 rounded-full flex items-center justify-center mb-4">
              <CreditCard className="h-7 w-7 text-housify-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Digital Banking Partners</h3>
            <p className="text-gray-600">
              Collaborating with <img src="/squad.png" alt="Squad" className="inline-block h-6 mx-1" /> to streamline payments and offer rent financing options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
