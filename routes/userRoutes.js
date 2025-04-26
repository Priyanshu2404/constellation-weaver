const express = require("express");
const {registeruser,loginuser,getusers} = require("../controllers/userController");
const router = express.Router();

//defines user actions like login/register

router.post("/register",registeruser)
router.post("/login",loginuser);


router.get("/",getusers);

module.exports = router;