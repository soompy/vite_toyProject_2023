import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
// import { ViteFaviconsPlugin } from "vite-plugin-favicon";


const path = require('path');

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@scripts': path.resolve(__dirname, './src/javascript'),
      '@parts': path.resolve(__dirname, './src/sass/partials'),
      '@styles': path.resolve(__dirname, './src/sass'),
      '@': path.resolve(__dirname, './'),
      '~': path.resolve(__dirname, './'),
    },
  },
  plugins: [
    injectHTML(),    
    tsconfigPaths(),
    // ViteFaviconsPlugin({
    //   logo: "./src/assets/favicon.png",
    // }),
  ],
});

