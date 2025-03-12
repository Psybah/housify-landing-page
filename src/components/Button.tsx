
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  withIcon?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  withIcon = false,
  className,
  children,
  ...props
}) => {
  const variantClasses = {
    primary: 'bg-housify-blue text-white hover:shadow-lg hover:shadow-housify-blue/20 active:opacity-90',
    secondary: 'bg-white text-housify-blue border border-housify-blue/20 hover:bg-gray-50',
    outline: 'bg-transparent border border-white/30 text-white backdrop-blur-sm hover:bg-white/10',
    ghost: 'bg-transparent text-housify-blue hover:bg-gray-100/50',
  };

  const sizeClasses = {
    sm: 'text-xs py-2 px-3',
    md: 'text-sm py-3 px-6',
    lg: 'text-base py-4 px-8',
  };

  return (
    <button
      className={cn(
        'rounded-full font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.99]',
        variantClasses[variant],
        sizeClasses[size],
        withIcon ? 'inline-flex items-center justify-center' : '',
        'inline-flex items-center justify-center', // Always inline-flex to fix arrow alignment
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
