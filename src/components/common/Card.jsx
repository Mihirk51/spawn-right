```jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component with consistent styling and optional hover effects
 */
export const Card = ({ 
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

Card.propTypes = {
  children: PropTypes.node.isRequired,
  hover: PropTypes.bool,
  className: PropTypes.string
};
```