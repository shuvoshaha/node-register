const express = require("express")
const app = express();
// const router = require("./routers/router")
const port = process.env.PORT || 8080;
const path = require("path")
require("./db/db")
const hbs = require("hbs");
const router = express.Router()



const template_path = path.join(__dirname, "./templates/views")
const partials_path = path.join(__dirname, "./templates/partials")
console.log(template_path)
// set template engine
app.set("view engine", "hbs");
app.set("views", template_path)

//patials folder register
hbs.registerPartials(partials_path)

// custom path
const static_path = path.join(__dirname, "./public")
console.log(static_path)


// register router
app.use(router)

// static file register
app.use(express.static(static_path))



router.get("/", async(req, res) =>{
 res.render("index")
})

app.listen(port, () =>{
    console.log(`Server is running on ${port} `)
})