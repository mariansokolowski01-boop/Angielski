import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.mjs': 'application/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  // CORS & caching headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  let reqUrl = decodeURI(req.url.split('?')[0]);
  if (reqUrl === '/' || reqUrl === '') {
    reqUrl = '/index.html';
  }

  // Szukaj najpierw w folderze public, potem w głównym katalogu
  let filePath = path.join(PUBLIC_DIR, reqUrl);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(ROOT_DIR, reqUrl);
  }

  // Sprytne dopasowanie elastyczne dla plików z grafikami (podwójna kropka, spacje, ogonki)
  if (!fs.existsSync(filePath) && reqUrl.startsWith('/images/')) {
    const requestedName = path.basename(reqUrl);
    const searchDirs = [PUBLIC_DIR, path.join(PUBLIC_DIR, 'images'), ROOT_DIR, path.join(ROOT_DIR, 'images')];
    
    for (const sDir of searchDirs) {
      if (fs.existsSync(sDir)) {
        const files = fs.readdirSync(sDir);
        // Szukaj dopasowania bez względu na podwójne kropki czy spacje na końcu nazwy
        const normReq = requestedName.toLowerCase().replace(/[\s\.]+/g, '');
        const matched = files.find(f => f.toLowerCase().replace(/[\s\.]+/g, '') === normReq);
        if (matched) {
          filePath = path.join(sDir, matched);
          break;
        }
      }
    }
  }

  // Fallback dla SPA (Single Page Application)
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(PUBLIC_DIR, 'index.html');
    if (!fs.existsSync(filePath)) {
      filePath = path.join(ROOT_DIR, 'index.html');
    }
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
      res.end(`Błąd serwera: ${err.message}`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  const msg = `\n======================================================\n🌲 Aplikacja „Lisek wraca do domu” działa lokalnie!\n👉 Otwórz w przeglądarce: http://localhost:${PORT}\n======================================================\n`;
  console.log(msg);
  try { fs.writeFileSync(path.join(__dirname, 'server.log'), msg); } catch (e) {}
});
