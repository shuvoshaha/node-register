const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/register", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then((res) => {
        console.log("Connection is successfully");
    })
    .catch((err) => {
        console.log(err)
    })
    