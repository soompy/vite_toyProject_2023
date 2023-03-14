import { defineConfig } from 'vite';
// import handlebars from '@vituum/vite-plugin-handlebars'
import injectHTML from 'vite-plugin-html-inject';

const path = require('path');

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@scripts': path.resolve(__dirname, './src/javascript'),
      '@parts': path.resolve(__dirname, './src/sass/partials'),
      '@styles': path.resolve(__dirname, './src/sass'),
      '@': path.resolve(__dirname, './'),
      '~': path.resolve(__dirname, './')
    }
  },
  plugins: [
    // handlebars({
    //   reload: true,
    //   root: null,
    //   helpers: {},
    //   partials: {
    //     directory: null,
    //     extname: true
    //   },
    //   data: '*.json',
    //   globals: {
    //     template: 'path/to/template.hbs'
    //   },
    //   filetypes: {
    //     html: /.(json.html|hbs.json.html|hbs.html)$/,
    //     json: /.(json.hbs.html)$/
    //   },
    //   handlebars: {
    //     compileOptions: {},
    //     runtimeOptions: {}
    //   }
    // }),
    injectHTML(),
  ]
});
