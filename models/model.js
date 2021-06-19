const mongoose = require("mongoose");
const validator = require("validator");

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
    phone: {
        type: Number,
        required: true,
        unique: [true, "Phone number is used"]
    },
    password: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now,
        trim: true
    }
})

const Register = mongoose.model("register", RegisterSchema);

module.exports = Register