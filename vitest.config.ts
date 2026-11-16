import { defineConfig } from 'vitest/config';
import { WxtVitest } from 'wxt/testing/vitest-plugin';

export default defineConfig({
  plugins: [WxtVitest()],
  test: {
    environment: 'happy-dom',
    include: ['test/**/*.spec.ts', 'test/**/*.spec.tsx', 'test/**/*.spec.js'],
    coverage: {
      include: ['src/**/*.{ts,tsx}'],
    },
  },
});
