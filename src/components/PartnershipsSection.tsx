import React from 'react';
import { CreditCard, User, Home } from 'lucide-react';

const PartnershipsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-width section-padding">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block text-xs font-medium py-1 px-3 rounded-full bg-housify-blue/10 text-housify-blue mb-4">
            Partnerships
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Solid <span className="text-housify-blue">Bonds</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Partnering with both our community and financial institutions to make housing accessible and affordable
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="glass-card p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-80">
            <div className="w-14 h-14 bg-housify-blue/10 rounded-full flex items-center justify-center mb-4">
              <User className="h-7 w-7 text-housify-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">You</h3>
            <p className="text-gray-600">
              Yes you! List a house, drop a tip—let's fix this housing wahala together!
            </p>
          </div>

          <div className="glass-card p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-80">
            <div className="w-14 h-14 bg-housify-blue/10 rounded-full flex items-center justify-center mb-4">
              <CreditCard className="h-7 w-7 text-housify-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Payment Partner</h3>
            <p className="text-gray-600">
              Collaborating with <img src="/squad.png" alt="Squad" className="inline-block h-6 mx-1" /> to streamline payments.
            </p>
          </div>

          <div className="glass-card p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 w-80">
            <div className="w-14 h-14 bg-housify-blue/10 rounded-full flex items-center justify-center mb-4">
              <Home className="h-7 w-7 text-housify-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Landlords</h3>
            <p className="text-gray-600">
              Easily list your properties, connect with verified tenants, and manage rentals hassle-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
