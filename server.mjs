import { createServer } from 'node:http';
import { toNodeListener, createApp, eventHandler, fromWebHandler } from 'h3';
import handler from './dist/server/server.js';

const port = process.env.PORT || 10000;
const serverHandler = handler.fetch || handler;

console.log('Starting Eagle Vision server...');

const app = createApp();
app.use(eventHandler(fromWebHandler(serverHandler)));

const server = createServer(toNodeListener(app));

server.listen(port, () => {
  console.log(`\n  ➜  Production Server: http://localhost:${port}\n`);
});
