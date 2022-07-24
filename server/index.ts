import 'reflect-metadata';

import next from 'next';

import bodyparser from 'koa-bodyparser';

import Koa, { Context, Next } from 'koa';

import Router from '@koa/router';

import { config } from './config';

import {
  createConnections,
  // getConnectionManager,
  getTreeRepository,
} from 'typeorm';
import { Globaluser } from './model/mmo_account/entities/Globaluser';

const app = next({ dev: config.isDev });

// const handle = app.getRequestHandler();

app.prepare().then(async () => {
  await createConnections();

  const server = new Koa();
  const router = new Router();

  router.get('/api/hello', async (ctx: Context) => {
    const url: string = ctx.url,
      query: object = ctx.query,
      queryString: string = ctx.querystring;
    ctx.cookies.set('chen', 'hello');
    // const account_db = getConnectionManager().get('account')
    const blogRepository = getTreeRepository(Globaluser, 'account');
    // console.log('account_db', account_db)
    console.log('blogRepository', blogRepository);
    let s = await blogRepository.find();
    console.log('s', s);
    ctx.body = {
      url,
      query,
      queryString,
      s,
    };
  });

  router.post('/api/login', async (ctx, next: Next) => {
    const url: string = decodeURIComponent(ctx.url),
      query: object = ctx.query,
      queryString: string = ctx.querystring;
    // @ts-ignore
    let bodyData = ctx.request.body;
    console.log('sssss', bodyData);
    ctx.cookies.set('kssssey', 'sssss');
    ctx.body = {
      url,
      query,
      queryString,
      bodyData,
    };
    next();
  });

  // server.use(async (ctx: Context, next: Next) => {
  // //   await handle(ctx.req, ctx.res);
  // console.log('ctx',ctx);
  //   await next();
  // });

  server.use(bodyparser());
  server.use(router.routes());
  server.listen(config.port, () => {
    console.log(`> Ready on http://localhost:${config.port}`);
  });
});
