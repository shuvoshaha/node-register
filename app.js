const express = require("express")
const app = express();
const Router = require("./routers/router")
const port = process.env.PORT || 8000;
const hbs = require("hbs");
const path = require("path");
require("./db/db")

// custom path
const static_path = path.join(__dirname, "./public")
const template_path = path.join(__dirname, "./template/views")
const partials_path = path.join(__dirname, "./template/partials")

// register router
app.use(Router)

// set template engine
app.set("views engine", "hbs");
app.set("view", template_path)

//patials folder register
hbs.registerPartials(partials_path)

router.get("/", async(req, res) =>{
 res.send("Hello this is for test");
})

app.listen(port, () =>{
    console.log(`Server is running on ${port} `)
})