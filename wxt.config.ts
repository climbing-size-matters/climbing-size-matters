import { defineConfig } from 'wxt';
import tailwindcss from 'tailwindcss';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  publicDir: 'src/public',
  outDir: 'dist',
  // originally adapted from a plain chrome mainfest json,
  // this now has been adapted to the WXT framework, meaning
  // the following are omitted here and automatically
  // discovered based on filepath:
  // - popup
  // - content scripts
  // - icons
  manifest: ({ browser }) => ({
    name: 'Climbing Size Matters',
    description: 'To help people display MP sizes',
    permissions: ['storage'],
    host_permissions: ['*://www.mountainproject.com/*'],
    ...(browser === 'firefox' && {
      browser_specific_settings: {
        gecko: {
          id: 'climbing-size-matters@googlegroups.com',
          data_collection_permissions: { required: ['none'] },
        },
      },
    }),
  }),
  imports: {
    eslintrc: {
      enabled: 9,
    },
  },
  vite: () => ({
    // Vite's dependency scan globs every .html file; limit it to src so old builds in dist aren't scanned
    optimizeDeps: {
      entries: ['src/**/*.html'],
    },
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
  }),
});
