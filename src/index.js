// server/index.js
const Koa = require("koa");
const KoaRouter = require("koa-router");
const path = require("path");
const app = new Koa();
const router = new KoaRouter();

router.get("/user/get", async (ctx) => {
    ctx.body = {
      code: 0,
      data: {
        name: 'zuoxiaobai',
        desc: '测试接口'
      },
      msg: '成功',
    };
});

router.post("/user/edit", async (ctx) => {
    ctx.body = {
      code: 0,
      msg: '修改成功',
    };
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(9000, () => console.log(`服务监听 ${9000} 端口`));

// 作者：做前端的左小白
// 链接：https://juejin.cn/post/7070921715492061214
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。