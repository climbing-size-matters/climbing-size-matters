import { defineConfig } from 'vitest/config';
import { WxtVitest } from 'wxt/testing';

export default defineConfig({
  // @ts-ignore TODO
  plugins: [WxtVitest()],
  test: {
    include: ['test/**/*.spec.ts', 'test/**/*.spec.js']
  },
  coverage: {
    all: true,
    provider: 'v8',
    include: ['src'],
  }
});
