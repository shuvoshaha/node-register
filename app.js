const express = require("express")
const app = express();
const router = express.Router();
const port = process.env.PORT || 8000
require("./db/db")

app.use(router)

router.get("/", async(req, res) =>{
 res.send("Hello this is for test");
})

app.listen(port, () =>{
    console.log(`Server is running on ${port} `)
})