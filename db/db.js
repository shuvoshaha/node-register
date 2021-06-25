const mongoose = require("mongoose");

mongoose.connect("", {
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
    