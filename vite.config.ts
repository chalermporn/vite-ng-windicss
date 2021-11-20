import type { UserConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss'
const config: UserConfig = {};

export default {
   plugins: [
    WindiCSS(),
  ],
  ...config,
  optimizeDeps: {
    include: [
      'zone.js/dist/zone',
      '@angular/core',
      '@angular/platform-browser-dynamic',
      '@angular/platform-browser',
      '@angular/common',
      "@angular/animations",
      "@angular/compiler",
      "@angular/forms",
      "@angular/router",
    ],
    exclude: ['rxjs'],
  },
};
