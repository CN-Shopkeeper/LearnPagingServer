// 引入模板
var koa = require('koa');

const router=require("./router");
 
// 实例化
var app = new koa();


app.use(async (ctx,next)=>{
    try{
        await next();
    }catch(err){
        //500时不返回status
        ctx.status=err.status||err.statusCode || 500;
        ctx.body={
            message:err.message
        }
    }
})

// 要调用routes方法
app.use(router.routes());
 
app.listen(8088,()=>console.log("程序启动在8088"));