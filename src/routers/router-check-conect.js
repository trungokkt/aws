import Router from 'koa-router';
const router = new Router();

router.get('/v1/ping', async (ctx, next) => {
    ctx.body = "pong"
});

export default router;