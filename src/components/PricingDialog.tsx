import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Award } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from './Button';

interface PricingDialogProps {
  trigger: React.ReactNode;
}

const PricingDialog: React.FC<PricingDialogProps> = ({ trigger }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-5xl overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            <span className="text-housify-blue">Housify</span> Simple, Transparent Pricing
          </DialogTitle>
          <DialogDescription className="text-base">
            No hidden fees. No agent wahala. Just verified listings & direct landlord connections.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Free Plan */}
          <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition-shadow">
            <div className="text-lg font-semibold mb-2">Free Plan</div>
            <div className="text-3xl font-bold mb-4">₦0</div>
            <p className="text-gray-600 mb-4">Get started at no cost</p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Browse nearby listings on the map</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Save & bookmark favorite houses</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Earn 50 HP Free on sign-up!</span>
              </li>
            </ul>
            
            <Button className="w-full">Sign Up & Start Searching</Button>
            <p className="text-sm text-gray-500 mt-3 text-center">Perfect for first-time users exploring the platform!</p>
          </div>
          
          {/* HP Unlock */}
          <div className="border-2 border-housify-blue rounded-xl p-6 bg-white shadow-lg relative">
            <div className="absolute -top-3 -right-3 bg-housify-orange text-white text-xs font-bold py-1 px-3 rounded-full">POPULAR</div>
            <div className="text-lg font-semibold mb-2">HP Unlock</div>
            <div className="text-3xl font-bold mb-1">Pay-As-You-Go</div>
            <p className="text-gray-600 mb-4">Buy HP when you need it</p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span>Unlock One Listing</span>
                <span className="font-bold">100 HP (₦500)</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span>Unlock Three Listings</span>
                <span className="font-bold">250 HP (₦1,200)</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span>Unlock Five Listings</span>
                <span className="font-bold">400 HP (₦1,800)</span>
              </li>
            </ul>
            
            <Button variant="primary" className="w-full">Buy HP & Unlock Listings</Button>
            <p className="text-sm text-gray-500 mt-3 text-center">No subscription. Just buy HP when you need it!</p>
          </div>
          
          {/* Landlord Boost */}
          <div className="border border-gray-200 rounded-xl p-6 bg-gray-100 hover:shadow-md transition-shadow relative">
            <div className="absolute -top-3 -right-3 bg-gray-500 text-white text-xs font-bold py-1 px-3 rounded-full">COMING SOON</div>
            <div className="text-lg font-semibold mb-2 text-gray-500">Landlord Boost</div>
            <div className="text-3xl font-bold mb-1 text-gray-500">Get More Tenants</div>
            <p className="text-gray-500 mb-4">Feature your listings</p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex justify-between items-center p-3 bg-gray-200 rounded-lg">
                <span>Basic Boost (3 Days)</span>
                <span className="font-bold">₦2,000</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-gray-200 rounded-lg">
                <span>Premium Boost (7 Days)</span>
                <span className="font-bold">₦5,000</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-gray-200 rounded-lg">
                <span>Ultimate Boost (14 Days + Ads)</span>
                <span className="font-bold">₦10,000</span>
              </li>
            </ul>
            
            <Button variant="secondary" className="w-full" disabled>Boost Your Listing</Button>
            <p className="text-sm text-gray-500 mt-3 text-center">Reach more serious house seekers!</p>
          </div>
        </div>
        
        {/* How to Earn Free HP */}
        <div className="mt-8 bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Award className="h-5 w-5 text-housify-orange mr-2" />
            How to Earn Free HP
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-semibold mb-1">Sign-Up Bonus</div>
              <div className="text-housify-blue font-bold">50 HP</div>
              <div className="text-sm text-gray-500 mt-1">Just create an account</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-semibold mb-1">Refer a Friend</div>
              <div className="text-housify-blue font-bold">100 HP</div>
              <div className="text-sm text-gray-500 mt-1">Per successful referral</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-semibold mb-1">List a Property</div>
              <div className="text-housify-blue font-bold">200 HP</div>
              <div className="text-sm text-gray-500 mt-1">For verified listings</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-semibold mb-1">Complete Profile</div>
              <div className="text-housify-blue font-bold">30 HP</div>
              <div className="text-sm text-gray-500 mt-1">Update all your details</div>
            </div>
          </div>
        </div>
        
        {/* Payment Method powered by Squad */}
        <div className="mt-6 border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <span>Safe, Secure Payments Powered by</span>
            <img src="/squad.png" alt="Squad" className="inline-block h-6 mx-1" />
          </h3>
          
          <div className="p-3 bg-green-50 text-green-800 rounded-lg text-sm flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>100% Refund Guarantee – If a listing is fake, you get your HP back!</span>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center">
          <Link to="/waitlist">
            <Button variant="primary" size="lg">Get Started with Housify</Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PricingDialog;
