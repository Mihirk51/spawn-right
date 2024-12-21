import { useCallback } from 'react';
import { logger } from '../lib/logger';
import { LOG_CATEGORIES } from '../lib/logger/constants';
import type { LogCategory } from '../lib/logger/types';

export const useLogger = () => {
  const logUserAction = useCallback((action: string, data?: Record<string, unknown>) => {
    logger.info(LOG_CATEGORIES.USER_ACTION, action, data);
  }, []);

  const logNavigation = useCallback((path: string, data?: Record<string, unknown>) => {
    logger.info(LOG_CATEGORIES.NAVIGATION, `Navigated to ${path}`, data);
  }, []);

  const logError = useCallback((category: LogCategory, error: Error, data?: Record<string, unknown>) => {
    logger.error(category, error.message, { ...data, stack: error.stack });
  }, []);

  return {
    logUserAction,
    logNavigation,
    logError
  };
};