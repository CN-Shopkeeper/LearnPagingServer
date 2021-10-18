const Router = require("koa-router");
const router = new Router({ prefix: "/api/jetpack-paging-server" });
const {
  getPkds,
  index,
  getAllMovies,
  getPds,
  getIkds,
} = require("./controller");

// http://localhost:8088/api/jetpack-paging-server/
router.get("/", index);
// http://localhost:8088/api/jetpack-paging-server/allMovies
router.get("/allMovies", getAllMovies);
// http://localhost:8088/api/jetpack-paging-server/pkds?page=0
router.get("/pkds", getPkds);
// http://localhost:8088/api/jetpack-paging-server/pds?start=0&count=4
router.get("/pds", getPds);
// http://localhost:8088/api/jetpack-paging-server/ikds?since=0&pagesize=10
router.get("/ikds", getIkds);

module.exports = router;
