const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const {createconstellation,
    getconstellation,
    updateconstellation,
    getconstellationbyid,
    deleteconstellation} = require("../controllers/constellationController");

//defining constellations routes/endpoints
router.get("/",getconstellation);
router.post("/",auth,createconstellation);
router.get("/:id",getconstellationbyid);
router.put("/:id",auth,updateconstellation);
router.delete("/:id",auth,deleteconstellation);

router.get("/",(req,res)=>{
    res.send("routes are working");
})


module.exports = router;