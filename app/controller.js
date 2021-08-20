const db= require("./db");

class MovieCtl{

    getPds(ctx){
        const startPosition=ctx.query.start;
        const endPosition =startPosition+ctx.query.count
        const result=db.slice(startPosition,endPosition);
        ctx.body={
            start:startPosition,
            count:ctx.query.count,
            total: db.length,
            subjects: result
        };
    }

    getPkds(ctx){
        const startPosition=ctx.query.page*10;
        const endPosition=startPosition+10;
        const hasMore=endPosition<db.length;
        // 不需要判断是否越界，slice方法帮助我们处理了越界问题
        const result=db.slice(startPosition,endPosition);
        ctx.body={
            has_more: hasMore,
            subjects: result
        };
    }

    getIkds(ctx){
        var since=ctx.query.since;
        var startPosition=0;
        var endPosition=0;
        const pagesize=ctx.query.pagesize;
        if (since==0){
            startPosition=0;
            endPosition=startPosition+pagesize;
        }else{
            for (var i=0;i<db.length;i++){
                if (db[i].id == since){
                    startPosition=i+1;
                    endPosition=startPosition+pagesize;
                    break;
                }
            }
        }
        const result=db.slice(startPosition,endPosition);
        ctx.body=result;
    }

    index(ctx){
        ctx.body="<h2>hello world</h2>"
    }

    getAllMovies(ctx){
        ctx.body={
            count: db.length,
            movies: db
        };
    }
}

// 要返回一个对象   
module.exports = new MovieCtl();