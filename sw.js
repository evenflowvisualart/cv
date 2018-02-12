importScripts('./node_modules/workbox-sw/build/importScripts/workbox-sw.prod.v2.1.2.js');

const staticAssets = [
    './',
    './index.html',
    './english.html',
    './img/moi.jp2',
    './img/moi.jpg',
    './style.css',
    './add2home.css',
    './add2home.js',
    './app.js',
    './script.js',
    './ios.js'
];

const wb = new WorkboxSW();
wb.precache(staticAssets);
