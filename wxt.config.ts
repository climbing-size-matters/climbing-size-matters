import { defineConfig } from 'wxt';
import tailwindcss from 'tailwindcss';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  publicDir: 'src/public',
  outDir: 'dist',
  manifest: ({ browser }) => ({
    name: 'Climbing Size Matters',
    description: 'To help people display MP sizes',
    permissions: ['storage'],
    host_permissions: ['*://www.mountainproject.com/*'],
    icons: {
      16: '/icon/cams16.png',
      32: '/icon/cams32.png',
      48: '/icon/cams48.png',
      128: '/icon/cams128.png',
    },
    action: {
      default_popup: 'popup.html',
    },
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
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
  }),
});
