/**
 * Utility functions for formatting numbers and currency
 * @module utils/format
 */

/**
 * Format a number using Indian number system (with commas)
 * @param num - Number to format
 * @returns Formatted string with Indian number system
 * 
 * @example
 * ```ts
 * formatIndianNumber(100000); // "1,00,000"
 * ```
 */
export const formatIndianNumber = (num: number): string => {
  return new Intl.NumberFormat('en-IN').format(num);
};

/**
 * Format amount in Indian Rupees
 * @param amount - Amount in rupees
 * @returns Formatted currency string
 * 
 * @example
 * ```ts
 * formatCurrency(100000); // "₹1,00,000.00"
 * ```
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(amount);
};

/**
 * Format large numbers in a compact form (K/M/B)
 * @param num - Number to format
 * @returns Compact number string
 * 
 * @example
 * ```ts
 * formatCompactNumber(1000000); // "1M"
 * ```
 */
export const formatCompactNumber = (num: number): string => {
  return new Intl.NumberFormat('en-IN', {
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(num);
};