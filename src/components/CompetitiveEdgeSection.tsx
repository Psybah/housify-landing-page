
import React from 'react';

const CompetitiveEdgeSection: React.FC = () => {
  return (
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
                <td className="py-4 px-6 text-gray-800">100% Verified Listings</td>
                <td className="py-4 px-6 text-center text-green-500">✓</td>
                <td className="py-4 px-6 text-center text-red-500">✗</td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-800">Physical Property Checks</td>
                <td className="py-4 px-6 text-center text-green-500">✓</td>
                <td className="py-4 px-6 text-center text-red-500">✗</td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-800">Reward System</td>
                <td className="py-4 px-6 text-center text-green-500">✓</td>
                <td className="py-4 px-6 text-center text-red-500">✗</td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-800">Rent Management Tools</td>
                <td className="py-4 px-6 text-center text-green-500">✓</td>
                <td className="py-4 px-6 text-center text-red-500">✗</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveEdgeSection;
