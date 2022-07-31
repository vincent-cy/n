import Router from "@koa/router";
import { Context } from "koa";
import { actor_service } from "../services/actorServices";
import { gm_service } from "../services/gmServer";
import { user_service } from "../services/userServices";

const api_router = new Router();

api_router.post('/send', async (ctx: Context) => {
  const { request } = ctx;
  // @ts-ignore
  const { actorid, itemid, count } = request.body
  const data = await gm_service.sendEquipment({ actorid, itemid, count })
  if (data) {
    ctx.status = 200
    ctx.body = {
      message: '发送邮件成功，5分钟内到账',
    }
  }
  else{
    ctx.body = {
      message: '发送邮件失败. 请检查',
    }
  }
})

api_router.post('/sendmoney', async (ctx: Context) => {
  const { request } = ctx;
  // @ts-ignore
  const { actorid, prodid } = request.body
  const data = await gm_service.sendMoney({ actorid, prodid });
  if (data) {
    ctx.status = 200
    ctx.body = {
      code: 1,
      message: '发送成功. 5分钟之内到账...'
    }
  }
})

api_router.post('/login', async (ctx) => {
  const { request } = ctx;
  // @ts-ignore
  const { username, password } = request.body
  const data = await user_service.login({ username, password });
  if (data) {
    ctx.status = 200;
    ctx.body = {
      code: 1,
      data
    }
  }
  else {
    ctx.body = {
      code: 0,
      message: '密码错误或账号不存在.'
    }
  }
});


api_router.post('/register', async (ctx) => {
  const { request } = ctx;
  // @ts-ignore
  const { username, password } = request.body
  const data = await user_service.register({ username, password });
  if (data) {
    ctx.status = 200;
    ctx.body = {
      code: 1,
      data
    }
  }
  else {
    ctx.body = {
      code: 0,
      message: '账号已存在.'
    }
  }
});

api_router.post('/change-password', async (ctx) => {
  const { request } = ctx;
  // @ts-ignore
  const { username, password, newPassword } = request.body
  const data = await user_service.changePassword({ username, password, newPassword });
  if (data) {
    ctx.status = 200;
    ctx.body = {
      code: 1,
      msg: '修改密码成功'
    }
  }
  else {
    ctx.body = {
      code: 0,
      message: '账号不存在或密码错误.'
    }
  }
});

api_router.get('/all-actors', async (ctx:Context)=>{
  try {
    const data = await actor_service.allActors()
    ctx.body = {
      data
    }
  } catch (error) {
    ctx.body = {
      data:[]
    }
  }
})



export default api_router
