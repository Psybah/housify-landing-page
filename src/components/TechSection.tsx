import React from 'react';
import { Bot } from 'lucide-react';

const TechSection: React.FC = () => {
  return (
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
                  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 text-[#61dafb]">
                    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                    <g stroke="#61dafb" strokeWidth="1" fill="none">
                      <ellipse rx="11" ry="4.2"/>
                      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                    </g>
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Frontend</div>
                  <div className="text-sm text-gray-600">React Native</div>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <svg viewBox="0 0 32 32" className="w-5 h-5">
                    <path
                      d="M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z"
                      fill="#ffa000"
                    />
                    <path
                      d="M13.445 8.543l2.972 5.995-11.97 11.135z"
                      fill="#f57f17"
                    />
                    <path
                      d="M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z"
                      fill="#ffca28"
                    />
                    <path
                      d="M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z"
                      fill="#ffa000"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Backend</div>
                  <div className="text-sm text-gray-600">Firebase</div>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                  <img src="/squad-icon.png" alt="Squad" className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">Payments</div>
                  <div className="text-sm text-gray-600">Squad API</div>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <Bot className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-medium">Verification <span className="text-xs text-red-500">(Coming Soon)</span></div>
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
                  <div className="font-medium">Intuitive Listings View</div>
                  <div className="text-sm text-gray-600">Scroll through house listings with essential details at a glance</div>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-housify-blue/10 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-housify-blue text-xs">✓</span>
                </div>
                <div>
                  <div className="font-medium">  Rewards System</div>
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
                  <div className="font-medium">AI Verification <span className="text-xs text-red-500">(Coming Soon)</span></div>
                  <div className="text-sm text-gray-600">Detects & reduces fake listings</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
