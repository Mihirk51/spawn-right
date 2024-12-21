import { LOG_LEVELS, LOG_CATEGORIES } from './constants';

export type LogLevel = typeof LOG_LEVELS[keyof typeof LOG_LEVELS];
export type LogCategory = typeof LOG_CATEGORIES[keyof typeof LOG_CATEGORIES];

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  category: LogCategory;
  message: string;
  data?: Record<string, unknown>;
}