const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt =  require("bcryptjs");

const RegisterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: [true, "Email is already used"],
        trim: true,
        vallidate(val) {
            if (!validator.isEmail(val)) {
                throw new Error("Email is not valid")
            }
        }

    },

    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        trim: true
    }
})

RegisterSchema.pre("save", async function (next){

    if(this.isModified("password")){
        console.log(this.password);
        this.password = await bcrypt.hash(this.password, 10);
        console.log(this.password)
        this.cpassword = undefined;
    }
    next();
})

const Register = mongoose.model("registers", RegisterSchema);

module.exports = Register