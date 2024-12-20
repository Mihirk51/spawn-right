```js
/**
 * Format a number with Indian number system
 * 
 * @param {number} num - Number to format
 * @returns {string} Formatted number string
 */
export const formatIndianNumber = (num) => {
  return new Intl.NumberFormat('en-IN').format(num);
};

/**
 * Format currency in INR
 * 
 * @param {number} amount - Amount in rupees
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(amount);
};

/**
 * Format large numbers to K/M/B format
 * 
 * @param {number} num - Number to format
 * @returns {string} Formatted string
 */
export const formatCompactNumber = (num) => {
  return new Intl.NumberFormat('en-IN', {
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(num);
};
```