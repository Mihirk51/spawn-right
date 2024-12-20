import React from 'react';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  hover = false,
  className = '' 
}) => {
  const baseStyles = 'bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-xl p-6';
  const hoverStyles = hover ? 'transition-transform hover:scale-102' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};