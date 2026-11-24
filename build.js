const fs = require('node:fs');
const release = fs.readFileSync('release.txt', 'utf8').trim();
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', '<!doctype html><title>Stratus deploy fixture</title><h1>' + release + '</h1>');
