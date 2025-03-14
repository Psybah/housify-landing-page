
import React from 'react';
import { CreditCard, BarChart3, Calendar, Bell, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

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
          <div>
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl p-1">
              <div className="bg-gray-900 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-medium">Landlord Dashboard</div>
                  <div className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Live</div>
                </div>
                <div className="text-2xl font-bold mb-1">₦560,000</div>
                <div className="text-xs text-gray-400 mb-6">Total rent collected this month</div>
                
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="text-xs text-gray-400">Properties</div>
                      <div className="text-lg font-semibold">5</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Tenants</div>
                      <div className="text-lg font-semibold">12</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Occupancy</div>
                      <div className="text-lg font-semibold">92%</div>
                    </div>
                  </div>
                  
                  <div className="h-12 bg-gray-700 rounded-md flex overflow-hidden">
                    <div className="w-3/4 bg-gradient-to-r from-housify-blue to-blue-500"></div>
                    <div className="w-1/12 bg-yellow-500"></div>
                    <div className="w-1/6 bg-gray-600"></div>
                  </div>
                  <div className="flex justify-between text-xs mt-2 text-gray-400">
                    <span>Paid</span>
                    <span>Pending</span>
                    <span>Vacant</span>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="font-medium">Recent Activity</div>
                    <div className="text-xs text-gray-400">View All</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                        <CreditCard className="h-4 w-4 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div className="text-sm">Rent Payment</div>
                          <div className="text-sm font-semibold text-green-400">+₦120,000</div>
                        </div>
                        <div className="text-xs text-gray-400">2 bedroom flat - David O.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                        <Bell className="h-4 w-4 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div className="text-sm">New Contact</div>
                          <div className="text-xs text-gray-400">Yesterday</div>
                        </div>
                        <div className="text-xs text-gray-400">Sarah viewed your 3 bedroom listing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
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
