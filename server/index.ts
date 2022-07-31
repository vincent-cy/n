import 'reflect-metadata';

import next from 'next';

const mount = require('koa-mount');

import bodyparser from 'koa-bodyparser';

import Koa, { Context } from 'koa';

import Router from '@koa/router';

import { config } from './config';

import {
  createConnections,
  // getConnectionManager,
} from 'typeorm';
import api_router from './api';
import { init_actor_service } from './services/actorServices';
import { init_user_service } from './services/userServices';
import { init_gm_service } from './services/gmServer';

const app = next({ dev: config.isDev, conf: { assetPrefix: '/site' } });

const handle = app.getRequestHandler();

app.prepare().then(async () => {
   await main()
});


async function main (){
  await createConnections();
  const server = new Koa();
  init_actor_service()
  init_user_service()
  init_gm_service()

  const site_router = new Router();

  site_router.all('(.*)', async (ctx: Context) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(bodyparser());

  server
    .use(mount('/api', api_router.middleware()))
    .use(mount('/site', site_router.middleware()));

  server.listen(config.port, () => {
    console.log(`> Ready on http://localhost:${config.port}`);
  });
}

// main()