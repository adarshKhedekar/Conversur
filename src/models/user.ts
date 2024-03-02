const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    email:{
        type: String,
        required: [true, "Email is required"]
    },
    password:{
        type: String,
        required: [true, "Password is required"]
    },
    passwordChangedAt:{
        type: Date,
    },
    passwordResetToken:{
        type: String,
    },
    passwordResetExpires:{
        type: Date,
    },
    createdAt:{
        type: Date,
    },
    updatedAt:{
        type: Date,
    },
    verified:{
        type: Boolean,
        default: false,
    },
    opt:{
        type: Number,
    },
    opt_expiry_time:{
        type: Number
    }
});

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User