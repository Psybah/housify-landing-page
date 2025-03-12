import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import PartnershipsSection from '../components/PartnershipsSection';
import Button from '../components/Button';
import PricingDialog from '../components/PricingDialog';
import { ArrowRight, Building, Banknote, Star } from 'lucide-react';
const Index = () => {
  // Function to scroll to an element by ID
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen font-clash">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problem Section */}
      <ProblemSection />
      
      {/* Solution Section */}
      <SolutionSection />
      
      {/* Partnerships Section */}
      <PartnershipsSection />
      
      {/* Market Potential Section */}
      <section id="market" className="py-20 md:py-28 bg-housify-blue text-white">
        <div className="container-width section-padding">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block text-xs font-medium py-1 px-3 rounded-full bg-white/20 text-white mb-4">
              Market Potential
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A <span className="text-housify-orange">₦3.5 trillion</span> opportunity
            </h2>
            <p className="text-white/80 text-lg">
              With over 2 million Nigerians moving annually, the demand for a direct landlord-to-tenant platform has never been higher.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
              <div className="text-4xl font-bold mb-2">2M+</div>
              <div className="text-white/70">Nigerians move annually</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
              <div className="text-4xl font-bold mb-2">₦3.5T</div>
              <div className="text-white/70">Nigerian rental market</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
              <div className="text-4xl font-bold mb-2">68%</div>
              <div className="text-white/70">Prefer direct landlord contact</div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8 text-center">How Housify Makes Money</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-housify-orange/20 flex items-center justify-center mb-4">
                  <Banknote className="h-5 w-5 text-housify-orange" />
                </div>
                <h4 className="text-lg font-medium mb-2">HP Monetization</h4>
                <p className="text-white/70 text-sm">
                  Users buy HP to unlock verified listings
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-housify-orange/20 flex items-center justify-center mb-4">
                  <Building className="h-5 w-5 text-housify-orange" />
                </div>
                <h4 className="text-lg font-medium mb-2">Sponsored Listings</h4>
                <p className="text-white/70 text-sm">
                  Landlords pay to boost their property
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-10 h-10 rounded-full bg-housify-orange/20 flex items-center justify-center mb-4">
                  <Star className="h-5 w-5 text-housify-orange" />
                </div>
                <h4 className="text-lg font-medium mb-2">Premium Services</h4>
                <p className="text-white/70 text-sm">
                  Verified landlords get exclusive tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* Competitive Edge Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-width section-padding">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block text-xs font-medium py-1 px-3 rounded-full bg-housify-blue/10 text-housify-blue mb-4">
              Competitive Edge
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why We <span className="gradient-text">Win</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Housify isn't just another property listing app. It's a revolution in how Nigerians find homes.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="py-4 px-6 text-left font-medium text-gray-500">Feature</th>
                  <th className="py-4 px-6 text-center font-medium text-housify-blue">Housify</th>
                  <th className="py-4 px-6 text-center font-medium text-gray-500">Other Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-4 px-6 text-gray-800">No Agent Fees</td>
                  <td className="py-4 px-6 text-center text-green-500">✓</td>
                  <td className="py-4 px-6 text-center text-red-500">✗</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-800">Verified Listings</td>
                  <td className="py-4 px-6 text-center text-green-500">✓</td>
                  <td className="py-4 px-6 text-center text-red-500">✗</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-800">Reward System</td>
                  <td className="py-4 px-6 text-center text-green-500">✓</td>
                  <td className="py-4 px-6 text-center text-red-500">✗</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-800">Gamified Monetization</td>
                  <td className="py-4 px-6 text-center text-green-500">✓</td>
                  <td className="py-4 px-6 text-center text-red-500">✗</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-800">Community-Powered Growth</td>
                  <td className="py-4 px-6 text-center text-green-500">✓</td>
                  <td className="py-4 px-6 text-center text-red-500">✗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Tech Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-width section-padding">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block text-xs font-medium py-1 px-3 rounded-full bg-housify-blue/10 text-housify-blue mb-4">
              Tech Breakdown
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built With <span className="gradient-text">Innovation</span>
            </h2>
            <p className="text-gray-600 text-lg">
              A seamless UX ensures high adoption & engagement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-housify-blue font-semibold">F</span>
                  </div>
                  <div>
                    <div className="font-medium">Frontend</div>
                    <div className="text-sm text-gray-600">React Native + Google Maps API</div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-600 font-semibold">B</span>
                  </div>
                  <div>
                    <div className="font-medium">Backend</div>
                    <div className="text-sm text-gray-600">Node.js (Hono.js) + MongoDB</div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-semibold">P</span>
                  </div>
                  <div>
                    <div className="font-medium">Payments</div>
                    <div className="text-sm text-gray-600">Squad API (for HP purchases)</div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-semibold">V</span>
                  </div>
                  <div>
                    <div className="font-medium">Verification</div>
                    <div className="text-sm text-gray-600">AI-powered fraud detection</div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-housify-blue/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-housify-blue text-xs">✓</span>
                  </div>
                  <div>
                    <div className="font-medium">Map-Based Listings</div>
                    <div className="text-sm text-gray-600">Live house locations, user's GPS</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-housify-blue/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-housify-blue text-xs">✓</span>
                  </div>
                  <div>
                    <div className="font-medium">Gamified Rewards System</div>
                    <div className="text-sm text-gray-600">Earn HP for contributions</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-housify-blue/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-housify-blue text-xs">✓</span>
                  </div>
                  <div>
                    <div className="font-medium">Smart Filtering</div>
                    <div className="text-sm text-gray-600">Find exactly what you're looking for</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-housify-blue/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-housify-blue text-xs">✓</span>
                  </div>
                  <div>
                    <div className="font-medium">AI Verification</div>
                    <div className="text-sm text-gray-600">Detects & reduces fake listings</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-housify-blue" />
        <div className="absolute inset-0 -z-10 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjQiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTRtMi0xMHYtOGgtNHY4aDRtLTEyIDB2LThoLTR2OGg0bTEyIDI0di04aC00djhoNG0tMTIgMHYtOGgtNHY4aDRtLTEyLTI0di04aC00djhoNG0wIDI0di04aC00djhoNFY0OG0xMi00OHYtNGgtNHY0aDRtLTEyIDB2LTRoLTR2NGg0TTQgNDh2LTRIMHYiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==')]" />
        
        <div className="container-width section-padding relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6">
                <div className="inline-block text-xs font-medium py-1 px-3 rounded-full bg-white/20 mb-4">
                  Join The Revolution
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to find your next home without agents?
                </h2>
                <p className="text-white/80 text-lg">
                  Be among the first to experience Housify and transform how you find housing in Nigeria.
                </p>
                
                <div className="pt-4">
                  <Button variant="outline" size="lg" className="group inline-flex items-center">
                    <span>Get Early Access</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold">300+</div>
                    <div className="text-xs text-white/70">Waitlist Users</div>
                  </div>
                  <div className="h-10 w-px bg-white/20"></div>
                  <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-xs text-white/70">Early Listings</div>
                  </div>
                  <div className="h-10 w-px bg-white/20"></div>
                  <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-xs text-white/70">Major Cities</div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-6">Future Roadmap</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-housify-orange text-white flex items-center justify-center mr-4 mt-0.5">
                      1
                    </div>
                    <div>
                      <div className="font-medium text-white">Launch MVP</div>
                      <div className="text-sm text-white/70">Initial release in Lagos</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center mr-4 mt-0.5">
                      2
                    </div>
                    <div>
                      <div className="font-medium text-white">Expand to Major Cities</div>
                      <div className="text-sm text-white/70">Abuja, Port Harcourt, Ibadan</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center mr-4 mt-0.5">
                      3
                    </div>
                    <div>
                      <div className="font-medium text-white">Landlord Tools</div>
                      <div className="text-sm text-white/70">Dedicated platform for property owners</div>
                    </div>
                  </div>
                  
                  <Button variant="primary" size="lg" className="w-full mt-4 inline-flex items-center justify-center">
                    <span>Join Our Waitlist</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container-width px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
            <a href="/" className="flex items-center">
              <img src="/Footer.png" alt="Housify" className="h-10" />
            </a>
              <p className="text-gray-400 mb-6 max-w-md">
                Find & secure your next home in Nigeria – no agents, no stress!
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" onClick={() => scrollToElement('solution')} className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" onClick={() => scrollToElement('demo')} className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                <li><PricingDialog trigger={<button className="text-gray-400 hover:text-white transition-colors">Pricing</button>} /></li>
                <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
            <div>© 2025 Housify. All rights reserved.</div>
            <div className="mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="mx-2">·</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;