import next from 'next';

import Koa, { Context, Next } from 'koa';

import Router from '@koa/router';

import { config } from './config';

import {createConnections, getConnectionManager} from "typeorm";

const app = next({ dev: config.isDev });

const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const server = new Koa();
  
  const router = new Router();

  await createConnections()

  const defaultConnection = getConnectionManager().get("actor_c1");
  
  console.log('connect', defaultConnection);

  router.all('(.*)', async (ctx: Context) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx: Context, next: Next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());
  server.listen(config.port, () => {
    console.log(`> Ready on http://localhost:${config.port}`);
  });
});
