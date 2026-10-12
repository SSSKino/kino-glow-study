const fs = require('node:fs');
const path = require('node:path');
const read = name => fs.readFileSync(path.join(__dirname, name), 'utf8');
const app = read('scene-app.js');
new Function(read('room-i18n.js') + '\n' + app);
const html = read('page-shell.html') + '<script>' + read('three-inline.tmp.js') + '</script><script>' + read('room-i18n.js') + '\n' + app + '</script></body></html>';
fs.writeFileSync(path.join(__dirname, 'pastel-study.html'), html);
console.log('Built pastel-study.html');
