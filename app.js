require("dotenv").config()
const express = require("express")
const app = express();
const port = process.env.PORT || 8080;
const path = require("path")
require("./db/db")
const hbs = require("hbs");
const router = express.Router()
const Register = require("./models/model")
const jwt = require("jsonwebtoken");
const { totalmem } = require("os");


// custom path
const static_path = path.join(__dirname, "./public")
const template_path = path.join(__dirname, "./templates/views")
const partials_path = path.join(__dirname, "./templates/partials")

app.use(express.static(static_path))

// set template engine
app.set("view engine", "hbs");
app.set("views", template_path)

//patials folder register
hbs.registerPartials(partials_path)

// register router
app.use(router)

// post json data 

app.use(express.json());

// For get data from html form
app.use(express.urlencoded({ extended: false }));

router.get("/", async (req, res) => {
    res.render("index")
})

router.get("/register",  (req, res) => {
    res.render("register")
})


// register
app.post("/register", async(req, res) => {
    try {
        if(req.body.password === req.body.cpassword){

         const registerd = new Register({
            name: req.body.fname,
            email: req.body.email,
            password: req.body.password,
            cpassword: req.body.cpassword,
            gender: req.body.gender,
            age: req.body.age
         })

         // generate token with register
         const token = registerd.generateAuthToken();

         // save document into db
         const result = await registerd.save();
         console.log(result)
         res.render("index");

    } else {
        res.status(500).send("Password don't match");
    }
}
    catch(err) {
        res.status(400).send(err)
    }
})

//login
app.get("/login", (req, res) => {
  res.render("login")
})

app.post("/login", async(req, res) =>{
    try{
          Register.findOne({email: req.body.email}, async(err, data)=>{
              console.log(data.cpassword)
              const cpass = await bcrypt.compare(data.password, req.body.password)
              
            if(cpass)
           {
                res.status(200).send(data)
            } else{
                res.status(200).send("Password don't match") 
            }
        })
    }

    catch(err){
        res.status(500).send(err)
    }
})

// jwt verification
// const createToken = async () =>{
//  const token = await jwt.sign({_id: "60d02d1cd06e6d2974a25103"}, process.env.SECRETKEY, {
//      expiresIn: "2 minutes"
//  })

//  const userVerify = await jwt.verify(tokens, process.env.SECRETKEY)
//  console.log(userVerify)
// }

// createToken()

app.listen(port, () => {
    console.log(`Server is running on ${port} `);
})