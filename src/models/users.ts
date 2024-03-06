import { ObjectId } from "mongodb";

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email:{
        type: String,
        required: [true, "Email is required"]
    },
    password:{
        type: String,
    },
    verified:{
        type: Boolean,
        default: false,
    },
    friends:[{
        email:{
            type: String,
            required: [true, "Email is required"]
        }
    }],
    requests:[{
        email:{
            type: String,
            required: [true, "Email is required"]
        }
    }]
});

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User