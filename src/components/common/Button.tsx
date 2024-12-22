import React from 'react';
import { useLogger } from '../../hooks/useLogger';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  actionName?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  actionName,
  onClick,
  ...props 
}) => {
  const { logUserAction } = useLogger();
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (actionName) {
      logUserAction(`Button clicked: ${actionName}`);
    }
    onClick?.(e);
  };

  const baseStyles = 'rounded-full font-medium transition-colors';
  const variants = {
    primary: 'bg-white text-black hover:bg-pink-500 hover:text-white',
    secondary: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black',
    accent: 'bg-pink-500 text-white hover:bg-pink-600'
  };
  const sizes = {
    sm: 'px-4 py-1 text-sm',
    md: 'px-6 py-2',
    lg: 'px-8 py-3 text-lg'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};