import { LogLevel, LogCategory, LogEntry } from './types';
import { LOG_LEVELS } from './constants';

class Logger {
  private static instance: Logger;
  
  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private createLogEntry(
    level: LogLevel,
    category: LogCategory,
    message: string,
    data?: Record<string, unknown>
  ): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      category,
      message,
      data
    };
  }

  private log(entry: LogEntry): void {
    // In development, log to console
    if (import.meta.env.DEV) {
      const logMethod = entry.level === LOG_LEVELS.ERROR ? console.error :
                       entry.level === LOG_LEVELS.WARNING ? console.warn :
                       console.log;
      
      logMethod(
        `[${entry.timestamp}] [${entry.level.toUpperCase()}] [${entry.category}]:`,
        entry.message,
        entry.data || ''
      );
    }
    
    // In production, you might want to send logs to a service
    if (import.meta.env.PROD) {
      // Implement production logging here
      // e.g., send to logging service
    }
  }

  info(category: LogCategory, message: string, data?: Record<string, unknown>): void {
    this.log(this.createLogEntry(LOG_LEVELS.INFO, category, message, data));
  }

  warning(category: LogCategory, message: string, data?: Record<string, unknown>): void {
    this.log(this.createLogEntry(LOG_LEVELS.WARNING, category, message, data));
  }

  error(category: LogCategory, message: string, data?: Record<string, unknown>): void {
    this.log(this.createLogEntry(LOG_LEVELS.ERROR, category, message, data));
  }

  debug(category: LogCategory, message: string, data?: Record<string, unknown>): void {
    if (import.meta.env.DEV) {
      this.log(this.createLogEntry(LOG_LEVELS.DEBUG, category, message, data));
    }
  }
}

export const logger = Logger.getInstance();