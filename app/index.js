// 引入模板
const koa = require('koa');
const error=require("koa-json-error");
const router=require("./router");
 
// 实例化
const app = new koa();

app.use(error())
// app.use(async (ctx,next)=>{
//     try{
//         await next();
//     }catch(err){
//         //500时不返回status
//         ctx.status=err.status||err.statusCode || 500;
//         ctx.body={
//             message:err.message
//         }
//     }
// })

// 要调用routes方法
app.use(router.routes());
 
app.listen(8088,()=>console.log("程序启动在8088"));