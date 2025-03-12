import React from 'react';
import { cn } from '@/lib/utils';

interface PhoneMockupProps {
  imageUrl?: string;
  className?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ 
  imageUrl = '/placeholder.svg',
  className
}) => {
  return (
    <div className={cn('relative animate-float py-12', className)}>
      {/* iPhone Frame */}
      <div className="relative w-[280px] h-[570px] rounded-[40px] border-[14px] border-[#022b60] bg-[#022b60] shadow-xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-40 bg-[#022b60] rounded-b-lg z-20" />
        
        {/* Screen */}
        <div className="relative h-full w-full rounded-[28px] overflow-hidden bg-gray-100">
          {/* App Screenshot */}
          <img 
            src="/mockup.jpeg" 
            alt="Housify App" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Home Bar */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1 w-1/3 bg-white/80 rounded-full" />
      </div>
      
      {/* Reflections 
      <div className="absolute top-[5%] left-[10%] h-1/3 w-4/5 bg-white/5 blur-md rounded-full transform rotate-[-20deg]" />
      
      {/* Improved Shadow - multiple layers for more natural fade 
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          {/* Outer shadow 
          <div className="absolute w-[260px] h-8 bg-black/5 blur-xl rounded-full" />
          {/* Middle shadow 
          <div className="absolute w-[220px] h-6 bg-black/10 blur-lg rounded-full translate-y-1" />
          {/* Inner shadow 
          <div className="absolute w-[180px] h-4 bg-black/15 blur-md rounded-full translate-y-2" />
        </div>
      </div> */}
    </div>
  );
};

export default PhoneMockup;
