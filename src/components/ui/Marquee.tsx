import React from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
}

export function Marquee({ 
  children, 
  className, 
  reverse = false, 
  pauseOnHover = false 
}: MarqueeProps) {
  return (
    <div 
      className={cn(
        "flex min-w-full gap-6 py-4",
        "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div 
        className={cn(
          "flex min-w-full shrink-0 gap-6",
          "animate-[marquee_40s_linear_infinite]",
          reverse && "animate-[marquee-reverse_40s_linear_infinite]",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div 
        className={cn(
          "flex min-w-full shrink-0 gap-6",
          "animate-[marquee_40s_linear_infinite]",
          reverse && "animate-[marquee-reverse_40s_linear_infinite]",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
    </div>
  );
} 