import React from 'react';
import Header from '../components/Header';
import { MessageSquare, Coins, Home, CreditCard, Info, ArrowRight, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
const FAQ = () => {
  return <div className="min-h-screen font-clash">
      <Header />
      
      <div className="pt-16 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link to="/" className="inline-flex items-center text-housify-blue hover:underline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                <span>Back to home</span>
              </Link>
            </div>
            
            <div className="text-center mb-12">
              <div className="inline-block text-xs font-medium py-1 px-3 rounded-full bg-housify-blue/10 text-housify-blue mb-4">
                Help Center
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked <span className="text-housify-blue">Questions</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Get answers to the most common questions about Housify and how it works.
              </p>
            </div>
            
            {/* General Questions */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-housify-blue/10 flex items-center justify-center mr-3">
                  <Info className="h-5 w-5 text-housify-blue" />
                </div>
                <h2 className="text-xl font-semibold">General Questions</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-lg mb-2">What is Housify?</h3>
                  <p className="text-gray-600">
                    Housify is a platform that connects house seekers with landlords and verified listings. No agent stress, no hidden fees – just direct access to available homes near you.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-lg mb-2">How does Housify work?</h3>
                  <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-2">
                    <li>Browse available listings on the app with filters.</li>
                    <li>Unlock landlord contacts using Housify Points (HP).</li>
                    <li>Contact the landlord directly to schedule a visit.</li>
                  </ol>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-lg mb-2">Is Housify available across Nigeria?</h3>
                  <p className="text-gray-600">
                    Right now, we are focused on major cities, but we're expanding fast! Stay tuned.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Earning & Using HP */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-housify-orange/10 flex items-center justify-center mr-3">
                  <Coins className="h-5 w-5 text-housify-orange" />
                </div>
                <h2 className="text-xl font-semibold">Earning & Using Housify Points (HP)</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-lg mb-2">What is HP (Housify Points)?</h3>
                  <p className="text-gray-600">
                    HP is our in-app currency used to unlock landlord contact details and premium features.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-lg mb-2">How can I get free HP?</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
                    <li>50 HP Free when you sign up.</li>
                    <li>100 HP for every friend you refer.</li>
                    <li>200 HP when you list your own property.</li>
                    <li>30 HP for completing your profile.</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-lg mb-2">How much does HP cost?</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
                    <li>100 HP = ₦500</li>
                    <li>250 HP = ₦1,200</li>
                    <li>400 HP = ₦1,800</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Payments & Refunds */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <CreditCard className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex items-center">
                  <h2 className="text-xl font-semibold">Payments & Refunds</h2>
                  <span className="ml-2 text-sm bg-gray-100 px-2 py-1 rounded-full flex items-center">
                    Powered by <img src="/squad.png" alt="Squad" className="inline-block h-4 mx-1" />
                  </span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-lg mb-2">How do I pay for HP or a Featured Boost?</h3>
                  <p className="text-gray-600 mb-2">
                    We use Squad for secure payments. You can pay with:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                    <li>Debit/Credit Cards (Visa, Mastercard, Verve)</li>
                    <li>Bank Transfers & USSD</li>
                    <li>Mobile Wallets (Opay, PalmPay, Moniepoint)</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-lg mb-2">What if I pay but don't receive my HP?</h3>
                  <p className="text-gray-600">
                    No worries! Contact our support team with your payment receipt, and we'll sort it out ASAP.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-lg mb-2">Do you offer refunds?</h3>
                  <p className="text-gray-600">
                    Yes! If a listing is fake or doesn't match the description, we will refund your HP after verification.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Landlords & Listings */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <Home className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold">Landlords & Listings</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-lg mb-2">How do I list my property on Housify?</h3>
                  <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-2">
                    <li>Sign up and go to "List a Property."</li>
                    <li>Fill in the details and upload clear photos.</li>
                    <li>Our team will verify and approve your listing.</li>
                  </ol>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-lg mb-2">How much does it cost to list a property?</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
                    <li>Basic Listing → Free</li>
                    <li>Boosted Listing (3 Days) → ₦2,000</li>
                    <li>Premium Listing (7 Days) → ₦5,000</li>
                    <li>Ultimate Boost (14 Days + Ads) → ₦10,000</li>
                  </ul>
                </div>
                
                {/* <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-lg mb-2">How do I get paid as a landlord?</h3>
                  <p className="text-gray-600">
                    You negotiate and receive payments directly from tenants. Housify does not take a commission.
                  </p>
                </div> */}
              </div>
            </div>
            
            {/* Support & Contact */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <MessageSquare className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold">Support & Contact</h2>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-lg mb-4">How do I contact Housify for help?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4 text-center">
                    <div className="font-medium mb-1">Call/WhatsApp</div>
                    <div className="text-housify-blue">+234 701 454 1564</div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 text-center">
                    <div className="font-medium mb-1">Email</div>
                    <div className="text-housify-blue">cybersmithstudios@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Still have questions */}
            <div className="bg-housify-blue text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="mb-6">Our team is ready to help you with anything you need.</p>
              <Link to="/contact">  
                <Button variant="outline" size="lg" className="group inline-flex items-center">
                  <span>Contact Support</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer - simplified version of the main footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container-width px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-clash font-bold text-xl mb-4 md:mb-0">Housify</div>
            <div className="text-gray-400 text-sm">© 2023 Housify. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>;
};
export default FAQ;