import React from 'react';
import { CreditCard, BarChart3, Calendar, Bell, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';
import PhoneMockup from './PhoneMockup';

const LandlordToolsSection: React.FC = () => {
  return (
    <section id="landlord-tools" className="py-20 md:py-28 bg-white">
      <div className="container-width section-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-xs font-medium py-1 px-3 rounded-full bg-green-100 text-green-600 mb-4">
            For Landlords
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Powerful <span className="text-housify-blue">Tools</span> For Property Owners
          </h2>
          <p className="text-gray-600 text-lg">
            Manage your properties, tenants, and rent collections all in one place with Housify's landlord dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center h-[500px] md:h-[580px] relative">
            <PhoneMockup src="mockup2.jpeg" />
            {/* Accent elements */}
            <div className="absolute top-1/3 -left-8 w-6 h-6 rounded-full bg-green-500/20 animate-pulse-subtle" />
            <div className="absolute bottom-1/4 -right-4 w-4 h-4 rounded-full bg-housify-blue/30 animate-pulse-subtle" />
          </div>
          
          <div className="space-y-6">5t6
            <h3 className="text-2xl font-semibold">Manage Your Properties Effortlessly</h3>
            <p className="text-gray-600">
              Housify provides landlords with powerful tools to manage properties, collect rent, and find quality tenants - all without agent fees.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-housify-blue/10 flex items-center justify-center mr-4 mt-1">
                  <CreditCard className="h-5 w-5 text-housify-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Virtual Account System</h4>
                  <p className="text-gray-600">
                    Each tenant gets a unique virtual account for easy rent payments and automatic tracking.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-housify-blue/10 flex items-center justify-center mr-4 mt-1">
                  <BarChart3 className="h-5 w-5 text-housify-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Payment Analytics</h4>
                  <p className="text-gray-600">
                    Track payment history, occupancy rates, and property performance with detailed analytics.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-housify-blue/10 flex items-center justify-center mr-4 mt-1">
                  <Calendar className="h-5 w-5 text-housify-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Automated Reminders</h4>
                  <p className="text-gray-600">
                    Set up automatic rent reminders for tenants and receive notifications for all property activities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Link to="/waitlist">
                <Button variant="primary" size="lg" className="group inline-flex items-center">
                  <span>Join as a Landlord</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandlordToolsSection;
