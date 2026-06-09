import http from 'node:http';

import handler from './dist/server/server.js';

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const server = http.createServer(async (req, res) => {
  try {
    const protocol = req.socket.encrypted ? 'https' : 'http';
    const host = req.headers.host || `localhost:${port}`;
    const url = `${protocol}://${host}${req.url}`;

    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers)) {
      if (v == null) continue;
      if (Array.isArray(v)) {
        for (const vv of v) headers.append(k, vv);
      } else {
        headers.set(k, String(v));
      }
    }

    const body = ['GET', 'HEAD'].includes(req.method ?? 'GET') ? null : req;
    const request = new Request(url, { method: req.method, headers, body });

    const response = await handler.fetch(request, {}, {});

    res.writeHead(response.status, Object.fromEntries(response.headers.entries()));
    const buffer = Buffer.from(await response.arrayBuffer());
    res.end(buffer);
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'content-type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
