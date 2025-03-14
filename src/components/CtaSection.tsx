
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
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
                <Link to="/waitlist">
                  <Button variant="outline" size="lg" className="group inline-flex items-center">
                    <span>Get Early Access</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
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
                    3
                  </div>
                  <div>
                    <div className="font-medium text-white">Landlord Tools</div>
                    <div className="text-sm text-white/70">Dedicated platform for property owners</div>
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

                <Link to="/waitlist">
                  <Button variant="primary" size="lg" className="w-full mt-4 inline-flex items-center justify-center">
                    <span>Join Our Waitlist</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
