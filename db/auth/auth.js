const jwt = require("jsonwebtoken")
const Register = require("../models/model")

const auth = async(req, res, next) =>{
   try{
       const token = req.cookies.jwt;
       const verifyToken = jwt.verify(token, process.env.SECRETKEY)
       next()
   }

   catch(err){
       res.status(401).send(err)
   }
}