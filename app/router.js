const Router = require("koa-router");
const router= new Router();
const { getPkds, index, getAllMovies, getPds, getIkds } = require("./controller");

// http://localhost:8088/
router.get("/",index);
// http://localhost:8088/allMovies
router.get("/allMovies",getAllMovies);
// http://localhost:8088/pkds?page=0
router.get("/pkds",getPkds);
// http://localhost:8088/pds?start=0&count=4
router.get("/pds",getPds);
// http://localhost:8088/ikds?since=0&pagesize=10
router.get("/ikds",getIkds);

module.exports= router;