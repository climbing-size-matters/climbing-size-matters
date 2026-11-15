import { storage } from 'wxt/storage';
import { Cam } from '@/cam-database/types';

export const inventoryItem = storage.defineItem<Cam[]>('local:inventory', {
  fallback: [],
});
