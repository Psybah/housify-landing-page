
import React from 'react';
import { Users, Home, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import Button from './Button';

const UserTypesSection: React.FC = () => {
  return (
    <section id="user-types" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/50">
      <div className="container-width section-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-xs font-medium py-1 px-3 rounded-full bg-housify-blue/10 text-housify-blue mb-4">
            User Roles
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Three ways to use <span className="text-housify-blue">Housify</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Whether you're looking for a house, have properties to rent, or know about available homes, Housify works for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* House Seeker Card */}
          <Card className="border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-housify-blue/10 flex items-center justify-center mb-4">
                <User className="text-housify-blue h-6 w-6" />
              </div>
              <CardTitle className="text-xl">House Seeker</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-housify-blue/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-housify-blue text-xs">✓</span>
                  </div>
                  <div className="text-sm">Browse 100% verified listings only</div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-housify-blue/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-housify-blue text-xs">✓</span>
                  </div>
                  <div className="text-sm">Deal directly with landlords, no agents</div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-housify-blue/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-housify-blue text-xs">✓</span>
                  </div>
                  <div className="text-sm">Use HP to unlock landlord contacts</div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-housify-blue/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-housify-blue text-xs">✓</span>
                  </div>
                  <div className="text-sm">Pay rent directly through the platform</div>
                </li>
              </ul>
              <Link to="/waitlist">
                <Button variant="secondary" size="sm" className="w-full inline-flex items-center justify-center">
                  <span>Find a Home</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Listing Creator Card */}
          <Card className="border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-housify-orange/10 flex items-center justify-center mb-4">
                <Users className="text-housify-orange h-6 w-6" />
              </div>
              <CardTitle className="text-xl">Listing Creator</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-housify-orange/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-housify-orange text-xs">✓</span>
                  </div>
                  <div className="text-sm">Submit properties for verification</div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-housify-orange/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-housify-orange text-xs">✓</span>
                  </div>
                  <div className="text-sm">Earn HP when listings get verified</div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-housify-orange/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-housify-orange text-xs">✓</span>
                  </div>
                  <div className="text-sm">Earn more HP when contacts are unlocked</div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-housify-orange/10 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-housify-orange text-xs">✓</span>
                  </div>
                  <div className="text-sm">Get commission on rented properties</div>
                </li>
              </ul>
              <Link to="/waitlist">
                <Button variant="secondary" size="sm" className="w-full inline-flex items-center justify-center">
                  <span>Submit Listings</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Landlord Card */}
          <Card className="border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Home className="text-green-600 h-6 w-6" />
              </div>
              <CardTitle className="text-xl">Landlord</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <div className="text-sm">List properties directly on the platform</div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <div className="text-sm">Access serious, verified tenants</div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <div className="text-sm">Manage rent collection & payments</div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <div className="text-sm">Track tenant payment history</div>
                </li>
              </ul>
              <Link to="/waitlist">
                <Button variant="secondary" size="sm" className="w-full inline-flex items-center justify-center">
                  <span>List Property</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UserTypesSection;
