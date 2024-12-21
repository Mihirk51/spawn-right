export const LOG_LEVELS = {
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
  DEBUG: 'debug'
} as const;

export const LOG_CATEGORIES = {
  NAVIGATION: 'navigation',
  USER_ACTION: 'user_action',
  API: 'api',
  RENDER: 'render',
  PERFORMANCE: 'performance'
} as const;