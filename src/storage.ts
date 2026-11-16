import { storage } from 'wxt/utils/storage';

// Cam ids from database.cams
export const inventoryItem = storage.defineItem<string[]>('local:inventory', {
  fallback: [],
});
