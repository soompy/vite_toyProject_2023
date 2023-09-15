import '@styles/main.scss';
import themeSwitcher from '@scripts/theme.js';
import choonsikCommon from '@scripts/choonsikCommon';
import index from '@scripts/index';
import anime from 'animejs/lib/anime.es.js';

themeSwitcher();
choonsikCommon();
index();
anime();

// main.js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';