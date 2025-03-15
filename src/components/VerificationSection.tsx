import React from 'react';
import { CheckCircle, Camera, PhoneCall, Clock } from 'lucide-react';

const VerificationSection: React.FC = () => {
  return (
    <section id="verification" className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container-width section-padding">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 lg:mb-20 px-4">
          <div className="inline-block text-xs font-medium py-1 px-3 rounded-full bg-housify-blue/10 text-housify-blue mb-4 transform transition-all hover:scale-105">
            Verification Process
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Every listing is <span className="text-housify-blue">100% verified</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            We physically verify every property before it goes live to ensure there are no scams or fake listings.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-housify-blue/20 via-housify-blue to-housify-blue/20 transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Step 1 */}
          <div className="relative flex flex-col md:flex-row items-center mb-12 md:mb-24 group">
            <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right">
              <div className="transform transition-all duration-300 group-hover:translate-x-[-8px]">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Listing Submission</h3>
                <p className="text-gray-600">
                  Users or landlords submit property listings with detailed information and images.
                </p>
              </div>
            </div>
            <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 bg-white rounded-full border-4 border-housify-blue p-3 shadow-lg transition-transform duration-300 hover:scale-110">
              <div className="w-12 h-12 rounded-full bg-housify-blue flex items-center justify-center">
                <Camera className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 md:text-left"></div>
          </div>
          
          {/* Step 2 */}
          <div className="relative flex flex-col md:flex-row items-center mb-12 md:mb-24 group">
            <div className="md:w-1/2 md:pr-12 md:text-right"></div>
            <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 bg-white rounded-full border-4 border-housify-blue p-3 shadow-lg transition-transform duration-300 hover:scale-110">
              <div className="w-12 h-12 rounded-full bg-housify-blue flex items-center justify-center">
                <PhoneCall className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 text-center md:text-left">
              <div className="transform transition-all duration-300 group-hover:translate-x-[8px]">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Physical Verification</h3>
                <p className="text-gray-600">
                  Housify agents physically visit the property to confirm its existence and verify details with the landlord.
                </p>
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="relative flex flex-col md:flex-row items-center mb-12 md:mb-24 group">
            <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right">
              <div className="transform transition-all duration-300 group-hover:translate-x-[-8px]">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Landlord Consent</h3>
                <p className="text-gray-600">
                  We obtain direct consent from the landlord to list the property and confirm their ownership.
                </p>
              </div>
            </div>
            <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 bg-white rounded-full border-4 border-housify-blue p-3 shadow-lg transition-transform duration-300 hover:scale-110">
              <div className="w-12 h-12 rounded-full bg-housify-blue flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 md:text-left"></div>
          </div>
          
          {/* Step 4 */}
          <div className="relative flex flex-col md:flex-row items-center group">
            <div className="md:w-1/2 md:pr-12 md:text-right"></div>
            <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 bg-white rounded-full border-4 border-housify-blue p-3 shadow-lg transition-transform duration-300 hover:scale-110">
              <div className="w-12 h-12 rounded-full bg-housify-blue flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 text-center md:text-left">
              <div className="transform transition-all duration-300 group-hover:translate-x-[8px]">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Periodic Verification</h3>
                <p className="text-gray-600">
                  Housify periodically reconfirms listing availability to ensure the property is still available for rent.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-20 lg:mt-24 max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Why This Matters</h3>
            <p className="text-gray-600 text-base md:text-lg">
              Our thorough verification process ensures that you never waste your time or money on fake listings or properties that aren't actually available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationSection;
