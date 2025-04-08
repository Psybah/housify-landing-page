import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-8 transition-all duration-300">
      <div
        className={cn(
          'mx-auto max-w-screen-xl rounded-full glass-morphism transition-all duration-500 py-3 px-4 md:px-6',
          'flex items-center justify-between',
          scrolled ? 'shadow-lg' : 'shadow'
        )}
      >
        <a href="/" className="flex items-center">
          <img src="/logo.png" alt="Housify" className="h-10" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleSectionClick('problem')} 
            className="text-sm font-medium text-gray-700 hover:text-housify-blue transition-colors"
          >
            Problem
          </button>
          <button 
            onClick={() => handleSectionClick('solution')} 
            className="text-sm font-medium text-gray-700 hover:text-housify-blue transition-colors"
          >
            Solution
          </button>
          <button 
            onClick={() => handleSectionClick('market')} 
            className="text-sm font-medium text-gray-700 hover:text-housify-blue transition-colors"
          >
            Market
          </button>
          <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-housify-blue transition-colors">
            About
          </Link>
          <Link to="/faq" className="text-sm font-medium text-gray-700 hover:text-housify-blue transition-colors">
            FAQ
          </Link>
          <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-housify-blue transition-colors">
            Contact
          </Link>
          <Link to="/waitlist">
            <Button variant="primary" size="sm">
              Get Early Access
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          <Menu className="h-6 w-6 text-housify-blue" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-50 p-6 flex flex-col transition-transform duration-300 ease-in-out',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex justify-between items-center mb-8">
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="Housify" className="h-10" />
          </a>
          <button onClick={toggleMobileMenu}>
            <X className="h-6 w-6 text-housify-blue" />
          </button>
        </div>
        
        <nav className="flex flex-col space-y-6">
          <button 
            onClick={() => handleSectionClick('problem')}
            className="text-lg font-medium text-gray-700 hover:text-housify-blue transition-colors text-left"
          >
            Problem
          </button>
          <button 
            onClick={() => handleSectionClick('solution')}
            className="text-lg font-medium text-gray-700 hover:text-housify-blue transition-colors text-left"
          >
            Solution
          </button>
          <button 
            onClick={() => handleSectionClick('market')}
            className="text-lg font-medium text-gray-700 hover:text-housify-blue transition-colors text-left"
          >
            Market
          </button>
          <Link 
            to="/about" 
            className="text-lg font-medium text-gray-700 hover:text-housify-blue transition-colors"
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <Link 
            to="/faq" 
            className="text-lg font-medium text-gray-700 hover:text-housify-blue transition-colors"
            onClick={toggleMobileMenu}
          >
            FAQ
          </Link>
          <Link 
            to="/contact" 
            className="text-lg font-medium text-gray-700 hover:text-housify-blue transition-colors"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
          <Link to="/waitlist">
            <Button variant="primary" size="lg" className="mt-4" onClick={toggleMobileMenu}>
              Get Early Access
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
