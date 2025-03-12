
import React from 'react';
import { Loader, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingScreenProps {
  message?: string;
  className?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  message = "Finding your perfect home...", 
  className 
}) => {
  const messages = [
    "Finding your perfect home...",
    "Connecting with landlords...",
    "Verifying listings...",
    "Calculating affordability...",
    "Checking neighborhood details..."
  ];
  
  const [currentMessage, setCurrentMessage] = React.useState(message);
  
  React.useEffect(() => {
    if (message) return;
    
    const interval = setInterval(() => {
      setCurrentMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [message]);
  
  return (
    <div className={cn(
      "fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-housify-blue to-blue-900 text-white z-50",
      className
    )}>
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-white/10 blur-xl animate-pulse-subtle" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="text-3xl font-bold mb-2">Housify</div>
          <Loader className="h-12 w-12 animate-spin text-housify-orange mb-4" />
          <p className="text-lg font-medium animate-fade-in">{currentMessage}</p>
        </div>
      </div>
      
      <div className="mt-10 flex flex-col items-center animate-fade-in-delay">
        <div className="w-16 h-1 bg-housify-orange/40 rounded-full mb-4"></div>
        <p className="text-sm text-white/70">No agents. No stress.</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
