import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, LockOpen, Phone, CirclePlus, Check, Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import Button from '@/components/Button';
import Header from '@/components/Header';

const TeamMember = ({ name, role, avatar, socials }: { 
  name: string; 
  role: string; 
  avatar: string;
  socials: { type: 'linkedin' | 'twitter' | 'github' | 'instagram'; url: string }[];
}) => {
  const getIcon = (type: string) => {
    switch(type) {
      case 'linkedin': return <Linkedin size={16} />;
      case 'twitter': return <Twitter size={16} />;
      case 'github': return <Github size={16} />;
      case 'instagram': return <Instagram size={16} />;
      default: return null;
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <img 
        src={avatar} 
        alt={name} 
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-8 border-white/30 backdrop-blur-xl bg-white/10"
      />
      <h3 className="text-xl font-bold text-center mb-1">{name}</h3>
      <p className="text-white/70 text-center mb-4">{role}</p>
      <div className="flex justify-center gap-3">
        {socials.map((social, index) => (
          <a 
            key={index} 
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-housify-orange/20 transition-colors"
          >
            {getIcon(social.type)}
          </a>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-housify-blue to-[#001830] text-white relative">
      <Header />

      {/* Hero Section */}
      <div className="container-width section-padding">
      
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Housify</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Revolutionizing House Hunting in Nigeria
          </p>
        </div>

        <div className="mb-24">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <p className="text-lg mb-6">
              Finding a home in Nigeria shouldn't be stressful, expensive, or filled with endless agent fees. Housify was built to change that.
            </p>
            <p className="text-lg mb-6">
              We are a proptech solution that connects house seekers directly with landlords, eliminating unnecessary costs. Whether you're looking for a new apartment, a short-term rental, or a permanent home, Housify makes the search simple, transparent, and hassle-free.
            </p>
            
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">🚀 Our Mission</h2>
              <p className="text-lg">
                To make house hunting in Nigeria easy, affordable, and 100% transparent by leveraging technology and direct connections between tenants and landlords.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center">🎯 How Housify Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-housify-orange/20 flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-housify-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">Browse Listings</h3>
              <p className="text-white/70">
                Explore verified homes near you with smart filters.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-housify-orange/20 flex items-center justify-center mb-4">
                <LockOpen className="h-6 w-6 text-housify-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">Unlock Contact Details</h3>
              <p className="text-white/70">
                Use Housify Points (HP) to access landlord information.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-housify-orange/20 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-housify-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">Contact Landlords Directly</h3>
              <p className="text-white/70">
                No agents, no hidden fees, no stress.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-housify-orange/20 flex items-center justify-center mb-4">
                <CirclePlus className="h-6 w-6 text-housify-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">List a Property</h3>
              <p className="text-white/70">
                Users and landlords can list a property for free, with boosted listing options.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Housify */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center">💡 Why Choose Housify?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-housify-orange/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-housify-orange" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">No Agents, No Hidden Fees</h3>
                  <p className="text-white/70">
                    Direct access to landlords without middlemen.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-housify-orange/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-housify-orange" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Verified Listings</h3>
                  <p className="text-white/70">
                    We ensure quality, so you don't waste time on fake listings.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-housify-orange/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-housify-orange" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Affordable & Flexible</h3>
                  <p className="text-white/70">
                    Pay only for what you need with HP.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-housify-orange/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-housify-orange" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Secure Transactions</h3>
                  <p className="text-white/70">
                    Powered by Squad for safe and easy payments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meet the Team */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center">💙 Meet the Team</h2>
          
          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-10 text-center">
            Housify was founded by a passionate team of problem solvers, engineers, and designers who believe in simplifying the Nigerian rental experience. We understand the frustrations of house hunting, and we're committed to making it better, faster, and more reliable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
            <TeamMember 
              name="Mastemind" 
              role="Mobile Developer"
              avatar="./team/Mastermind.jpeg"
              socials={[
                { type: 'twitter', url: 'https://x.com/d3Mastermind' },
                { type: 'github', url: 'https://github.com/d3mastermind' }
              ]}
            />

            <TeamMember 
              name="Cybersmith" 
              role="Team Lead"
              avatar="./team/smith.png"
              socials={[
                { type: 'linkedin', url: 'https://www.linkedin.com/in/oluwamurewa/' },
                { type: 'twitter', url: 'https://x.com/_cybersmith' },
                { type: 'github', url: 'https://github.com/psybah' }
              ]}
            />
            
            <TeamMember 
              name="Youngestage" 
              role="Frontend Developer"
              avatar="./team/leslie.png"
              socials={[
                { type: 'twitter', url: 'https://x.com/_youngestage' },
                { type: 'github', url: 'https://github.com/youngestage' }
              ]}
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">📍 Get Started Today!</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Looking for a home? Browse listings now and find your perfect place.
            Have a property to rent out? List it for free and connect with tenants directly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Download the App
            </Button>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container-width border-t border-white/10 py-8 px-6 md:px-12 text-center text-white/50 text-sm">
        <p>&copy; {new Date().getFullYear()} Housify. All rights reserved.</p>
      </div>
    </div>
  );
};

export default About;
