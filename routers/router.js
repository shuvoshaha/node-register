const express = require("express");
const router = express.Router();
const RegisterDB = require("../models/model")


router.get("/", async(req, res) =>{
   res.render("index")
})

module.exports = router;