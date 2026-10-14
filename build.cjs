const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const read = name => fs.readFileSync(path.join(__dirname, name), 'utf8');
const app = read('scene-app.js');
new Function(read('room-i18n.js') + '\n' + app);
const html = read('page-shell.html') + '<script>' + read('three-inline.tmp.js') + '</script><script>' + read('room-i18n.js') + '\n' + app + '</script></body></html>';
fs.writeFileSync(path.join(__dirname, 'pastel-study.html'), html);
// Keep the portable single file, and also build an entry that loads media on demand.
const webDir = path.join(__dirname, 'assets', 'web');
fs.mkdirSync(webDir, { recursive: true });
const webAssets = new Map();
const extensions = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'audio/mpeg': 'mp3' };
const workPhotos = JSON.parse(app.match(/const workPhotos=(\[.*?\]);/)[1]);
const albumSources = new Set(workPhotos.map(photo => photo.src));
let webApp = app.replace(/data:([^;]+);base64,([A-Za-z0-9+/=]+)/g, (uri, mime, encoded) => {
  if (!extensions[mime] || encoded.length < 4096) return uri;
  // WebGL textures stay embedded so double-clicking index.html also works under
  // file://, whose texture uploads reject external images as cross-origin.
  if (mime !== 'audio/mpeg' && !albumSources.has(uri)) return uri;
  const bytes = Buffer.from(encoded, 'base64');
  const name = crypto.createHash('sha256').update(bytes).digest('hex').slice(0, 16) + '.' + extensions[mime];
  const relative = 'assets/web/' + name;
  if (!webAssets.has(name)) fs.writeFileSync(path.join(webDir, name), bytes);
  webAssets.set(name, { path: relative, mime, bytes: bytes.length });
  return relative;
});
webApp = webApp.replace(/(["'])(JVBERi0[A-Za-z0-9+/=]+)\1/g, (literal, quote, encoded) => {
  const bytes = Buffer.from(encoded, 'base64');
  const name = crypto.createHash('sha256').update(bytes).digest('hex').slice(0, 16) + '.pdf';
  const relative = 'assets/web/' + name;
  fs.writeFileSync(path.join(webDir, name), bytes);
  webAssets.set(name, { path: relative, mime: 'application/pdf', bytes: bytes.length });
  return quote + relative + quote;
});
fs.writeFileSync(path.join(__dirname, 'scene-web.js'), read('room-i18n.js') + '\n' + webApp);
fs.writeFileSync(path.join(__dirname, 'index.html'), read('page-shell.html') + '<script src="three-inline.tmp.js"></script><script src="scene-web.js"></script></body></html>');
fs.writeFileSync(path.join(webDir, 'manifest.json'), JSON.stringify([...webAssets.values()], null, 2));
console.log('Built pastel-study.html (portable) and index.html (on-demand media)');
