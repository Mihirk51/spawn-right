```js
import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for handling async operations with loading and error states
 * 
 * @param {Function} asyncFn - Async function to execute
 * @param {Array} deps - Dependencies array for useEffect
 * @returns {Object} Status object containing data, loading, and error states
 */
export const useAsync = (asyncFn, deps = []) => {
  const [status, setStatus] = useState({
    data: null,
    loading: true,
    error: null
  });

  const execute = useCallback(async () => {
    setStatus(prev => ({ ...prev, loading: true }));
    try {
      const data = await asyncFn();
      setStatus({ data, loading: false, error: null });
    } catch (error) {
      setStatus({ data: null, loading: false, error: error.message });
    }
  }, [asyncFn]);

  useEffect(() => {
    execute();
  }, [...deps]);

  return status;
};
```