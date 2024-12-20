```jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable button component with consistent styling
 */
export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
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
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'accent']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string
};
```