const Router = require("koa-router");
const router= new Router();
const { getPkds, index, getAllMovies, getPds } = require("./controller");

// http://localhost:8088/
router.get("/",index);
// http://localhost:8088/allMovies
router.get("/allMovies",getAllMovies);
// http://localhost:8088/pkds?page=0
router.get("/pkds",getPkds);

router.get("/pds",getPds);

module.exports= router;