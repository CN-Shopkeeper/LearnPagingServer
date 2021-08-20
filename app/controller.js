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
        // 不需要判断是否越界，slice方法帮助我们处理了越界问题
        const result=db.slice(startPosition,endPosition);
        ctx.body={
            count: db.length,
            movies: result
        };
    }

    index(ctx){
        ctx.body="<h2>hello world</h2>"
    }

    getAllMovies(ctx){
        // const temp_db=[];
        // for (let movie of db){
        //     delete movie.episodes_info;
        //     delete movie.cover_x;
        //     delete movie.playable;
        //     delete movie.id;
        //     delete movie.cover_y;
        //     delete movie.is_new;
        //     delete movie.url;
        //     temp_db.push(movie);
        // }
        ctx.body={
            count: db.length,
            movies: db
        };
    }
}

// 要返回一个对象   
module.exports = new MovieCtl();