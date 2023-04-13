import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
import requireTransform from 'vite-plugin-require-transform';

// import { ViteFaviconsPlugin } from "vite-plugin-favicon";


const path = require('path');

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@scripts': path.resolve(__dirname, './src/javascript'),
      '@parts': path.resolve(__dirname, './src/sass/partials'),
      '@styles': path.resolve(__dirname, './src/sass'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@': path.resolve(__dirname, './'),
      '~': path.resolve(__dirname, './'),
    },
  },
  plugins: [
    injectHTML(),    
    tsconfigPaths(),
    requireTransform({}),
    // ViteFaviconsPlugin({
    //   logo: "./src/assets/favicon.png",
    // }),
  ],
  
});

