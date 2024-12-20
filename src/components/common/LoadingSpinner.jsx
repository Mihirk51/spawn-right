```jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Loading spinner component with customizable size and color
 */
export const LoadingSpinner = ({ size = 'md', color = 'white' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex justify-center items-center">
      <div 
        className={`${sizes[size]} border-4 border-t-transparent rounded-full animate-spin`}
        style={{ borderColor: `${color} transparent transparent` }}
      />
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.string
};
```