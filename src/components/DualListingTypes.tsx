
import React from 'react';
import { Home, User, CheckCircle, XCircle } from 'lucide-react';

const DualListingTypes: React.FC = () => {
  return (
    <div className="mt-16 max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold text-center mb-8">Two Types of Verified Listings</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Landlord-Posted Listings */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100">
          <div className="bg-green-50 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                <Home className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Landlord-Posted Listings</h3>
            </div>
          </div>
          
          <div className="p-6">
            <p className="text-gray-600 mb-6">
              Properties directly listed and managed by landlords with full payment processing through Housify.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Directly contact landlord in-app</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Pay rent through Housify</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Rent payment tracking</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Premium placement in search</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Higher trust & verification level</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* User-Posted Listings */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-housify-blue/20">
          <div className="bg-housify-blue/5 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-housify-blue/10 flex items-center justify-center mr-4">
                <User className="h-6 w-6 text-housify-blue" />
              </div>
              <h3 className="text-xl font-semibold">User-Posted Listings</h3>
            </div>
          </div>
          
          <div className="p-6">
            <p className="text-gray-600 mb-6">
              Community-submitted properties that have been verified by Housify but require HP to unlock landlord contact.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-housify-blue mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Use HP to unlock landlord contact</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-housify-blue mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Physically verified by Housify</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-housify-blue mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Genuine landlord consent</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-housify-blue mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">No agent fees</span>
              </li>
              <li className="flex items-start">
                <XCircle className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Pay rent outside the platform</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DualListingTypes;
