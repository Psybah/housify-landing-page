
import React from 'react';
import { Coins, ArrowRight, Share2, Upload, UserCheck } from 'lucide-react';
import Button from './Button';
import { Link } from 'react-router-dom';

const PointsSection: React.FC = () => {
  return (
    <section id="points" className="py-20 md:py-28 bg-gradient-to-b from-housify-blue/5 to-white">
      <div className="container-width section-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-xs font-medium py-1 px-3 rounded-full bg-housify-orange/10 text-housify-orange mb-4">
            Housify Points (HP)
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Earn & use <span className="text-housify-orange">Housify Points</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our point system rewards users who contribute to the platform while giving everyone access to verified listings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-housify-orange/10 flex items-center justify-center mr-3">
                    <Upload className="h-5 w-5 text-housify-orange" />
                  </div>
                  <h3 className="text-xl font-semibold">Submit Listings</h3>
                </div>
                <div className="pl-14">
                  <p className="text-gray-600 mb-3">
                    Add new properties to Housify that get verified.
                  </p>
                  <div className="text-housify-orange font-semibold">Earn 200 HP</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-housify-orange/10 flex items-center justify-center mr-3">
                    <Share2 className="h-5 w-5 text-housify-orange" />
                  </div>
                  <h3 className="text-xl font-semibold">Refer Friends</h3>
                </div>
                <div className="pl-14">
                  <p className="text-gray-600 mb-3">
                    Invite friends to join Housify with your code.
                  </p>
                  <div className="text-housify-orange font-semibold">Earn 20 HP per referral</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-housify-orange/10 flex items-center justify-center mr-3">
                    <UserCheck className="h-5 w-5 text-housify-orange" />
                  </div>
                  <h3 className="text-xl font-semibold">Complete Your Profile</h3>
                </div>
                <div className="pl-14">
                  <p className="text-gray-600 mb-3">
                    Fill in your details and verify your account.
                  </p>
                  <div className="text-housify-orange font-semibold">Earn 20 HP</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="bg-housify-blue text-white p-6">
                <div className="flex items-center">
                  <Coins className="h-8 w-8 mr-3" />
                  <h3 className="text-2xl font-bold">Housify Points</h3>
                </div>
                <p className="mt-2 text-white/80">
                  Your gateway to verified housing contacts
                </p>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-gray-600">What are HP?</span>
                    <span className="font-medium">In-app currency</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-gray-600">What can you unlock?</span>
                    <span className="font-medium">Landlord contacts</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-gray-600">100 HP</span>
                    <span className="font-medium">₦500</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-gray-600">250 HP</span>
                    <span className="font-medium">₦1,200</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-gray-600">400 HP</span>
                    <span className="font-medium">₦1,800</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sign up bonus</span>
                    <span className="font-medium text-housify-orange">20 HP Free</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link to="/waitlist">
                    <Button variant="primary" size="lg" className="w-full inline-flex items-center justify-center">
                      <span>Get Started</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PointsSection;
