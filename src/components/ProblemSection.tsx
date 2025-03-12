
import React, { useState, useEffect } from 'react';
import { User, AlertTriangle, Banknote } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const userStories = [
    "Meet Tolu. She just got a new job in Lagos but spent weeks struggling with fake listings, ridiculous agent fees, and wasted time.",
    "Tolu stays in Ibadan and gets a job in Lagos. Tolu lists her current apartment that she's leaving on our app and gets points for it. Tolu then uses the points to view other listings in Lagos that she's going to relocate to.",
    "Ade just graduated from the University of Ibadan, and he would be leaving his apartment in Ibadan. Ade posts his apartment on the platform for other students that might be interested in the house to rent it.",
    "Bello's neighbor just relocated. Bello is the first to know, so Bello posts the apartment on our platform."
  ];

  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % userStories.length);
    }, 5000); // Change story every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="problem" className="py-20 md:py-28 bg-gray-50">
      <div className="container-width section-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-xs font-medium py-1 px-3 rounded-full bg-housify-orange/10 text-housify-orange mb-4">
            The Problem
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Renting in Nigeria is <span className="gradient-text">broken</span>
          </h2>
          <p className="text-gray-600 text-lg min-h-[4rem] transition-opacity duration-500">
            {userStories[currentStoryIndex]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Problem Card 1 */}
          <div className="glass-card p-8 flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-housify-blue/10 flex items-center justify-center mb-6">
              <User className="text-housify-blue h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Agent Dependency</h3>
            <p className="text-gray-600 mb-4">
              90% of Nigerian renters rely on agents, often leading to scams & overpricing.
            </p>
            <div className="mt-auto pt-4">
              <div className="text-2xl font-bold gradient-text">90%</div>
              <div className="text-sm text-gray-500">Agent Reliance</div>
            </div>
          </div>

          {/* Problem Card 2 */}
          <div className="glass-card p-8 flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-housify-orange/10 flex items-center justify-center mb-6">
              <AlertTriangle className="text-housify-orange h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Outdated Listings</h3>
            <p className="text-gray-600 mb-4">
              Most housing apps list outdated properties or require unnecessary middlemen.
            </p>
            <div className="mt-auto pt-4">
              <div className="text-2xl font-bold gradient-text">65%</div>
              <div className="text-sm text-gray-500">Fake Listings</div>
            </div>
          </div>

          {/* Problem Card 3 */}
          <div className="glass-card p-8 flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-housify-blue/10 flex items-center justify-center mb-6">
              <Banknote className="text-housify-blue h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Affordability Crisis</h3>
            <p className="text-gray-600 mb-4">
              High demand for affordable housing, yet no trustworthy direct platform exists.
            </p>
            <div className="mt-auto pt-4">
              <div className="text-2xl font-bold gradient-text">₦3.5T</div>
              <div className="text-sm text-gray-500">Market Size</div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-sm text-gray-500 mb-2">THE SITUATION</div>
            <p className="text-xl font-medium">
              "We're committed to eliminating the middleman, reducing costs, and giving renters direct access to verified landlords."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
