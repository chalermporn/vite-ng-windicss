import type { UserConfig } from 'vite';

const config: UserConfig = {};

export default {
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
