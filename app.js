const express = require("express")
const app = express();
const router = express.Router();
const port = process.env.PORT || 8000;
const hbs = require("hbs");
const path = require("path");
require("./db/db")

const static_path = path.join(__dirname, "./public")
const template_path = path.join(__dirname, "./template/views")
const partials_path = path.join(__dirname, "./template/partials")

app.use(router)
app.set("views engine", "hbs");


app.set("view" )

router.get("/", async(req, res) =>{
 res.send("Hello this is for test");
})

app.listen(port, () =>{
    console.log(`Server is running on ${port} `)
})