
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  location: string;
  seed: string;
}

const testimonials: Testimonial[] = [
  {
    text: "I found my new home in 2 days! No agent fees, no stress.",
    name: "Aisha O.",
    location: "Lagos, Nigeria",
    seed: "aisha"
  },
  {
    text: "After months of dealing with agents, Housify connected me directly to my landlord. Saved me over ₦200,000 in fees!",
    name: "Emmanuel T.",
    location: "Abuja, Nigeria",
    seed: "emmanuel"
  },
  {
    text: "The map feature made it so easy to find houses near my workplace. Game changer!",
    name: "Chioma N.",
    location: "Port Harcourt, Nigeria",
    seed: "chioma"
  },
  {
    text: "As a landlord, I love that I can list my properties directly. More profit, better tenants.",
    name: "Babatunde K.",
    location: "Ibadan, Nigeria",
    seed: "babatunde"
  }
];

const TestimonialsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto glass-card p-8">
      <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
        <button 
          onClick={prevTestimonial}
          className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 text-housify-blue" />
        </button>
      </div>
      
      <div className="overflow-hidden">
        <div 
          className="transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="min-w-full transition-opacity duration-300"
                style={{ opacity: activeIndex === index ? 1 : 0 }}
              >
                <div className="inline-block mb-4">
                  <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 0H7.5L0 12V24H12.5V12H5L12.5 0ZM30 0H25L17.5 12V24H30V12H22.5L30 0Z" fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient id="paint0_linear" x1="0" y1="12" x2="30" y2="12" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#022b60" />
                        <stop offset="1" stopColor="#022b60" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p className="text-xl md:text-2xl font-medium mb-6">
                  {testimonial.text}
                </p>
                <div className="flex items-center justify-center">
                  <div 
                    className="w-12 h-12 rounded-full mr-4"
                    style={{
                      backgroundImage: `url(https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.seed})`,
                      backgroundSize: 'cover'
                    }}
                  />
                  <div className="text-left">
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
        <button 
          onClick={nextTestimonial}
          className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ChevronRight className="h-5 w-5 text-housify-blue" />
        </button>
      </div>
      
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === index ? 'bg-housify-blue w-6' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
