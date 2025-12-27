import { Injectable } from '@angular/core';
import { APP_CONSTANTS } from '../constants/app.constants';

/**
 * Service for managing browser storage operations
 * Provides a type-safe abstraction over localStorage
 */
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  /**
   * Save data to localStorage
   */
  setItem<T>(key: string, value: T): void {
    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
    } catch (error) {
      console.error(`Error saving to localStorage: ${key}`, error);
    }
  }

  /**
   * Retrieve data from localStorage
   */
  getItem<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : null;
    } catch (error) {
      console.error(`Error reading from localStorage: ${key}`, error);
      return null;
    }
  }

  /**
   * Remove item from localStorage
   */
  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing from localStorage: ${key}`, error);
    }
  }

  /**
   * Clear all items from localStorage
   */
  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage', error);
    }
  }

  /**
   * Check if a key exists in localStorage
   */
  hasItem(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}

/**
 * Service for managing session storage operations
 */
@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  /**
   * Save data to sessionStorage
   */
  setItem<T>(key: string, value: T): void {
    try {
      const serialized = JSON.stringify(value);
      sessionStorage.setItem(key, serialized);
    } catch (error) {
      console.error(`Error saving to sessionStorage: ${key}`, error);
    }
  }

  /**
   * Retrieve data from sessionStorage
   */
  getItem<T>(key: string): T | null {
    try {
      const item = sessionStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : null;
    } catch (error) {
      console.error(`Error reading from sessionStorage: ${key}`, error);
      return null;
    }
  }

  /**
   * Remove item from sessionStorage
   */
  removeItem(key: string): void {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing from sessionStorage: ${key}`, error);
    }
  }

  /**
   * Clear all items from sessionStorage
   */
  clear(): void {
    try {
      sessionStorage.clear();
    } catch (error) {
      console.error('Error clearing sessionStorage', error);
    }
  }
}
