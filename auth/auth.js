const jwt = require("jsonwebtoken")
const Register = require("../models/model")

const auth = async (req, res, next) =>{
   try{
       const token = req.cookies.jwt;
       const verifyToken = await jwt.verify(token, process.env.SECRETKEY)
       const user = await Register.findOne({_id: verifyToken._id})
       console.log(user.name)
       next()
   }

   catch(err){
       res.status(401).send(err)
   }
}

module.exports = auth