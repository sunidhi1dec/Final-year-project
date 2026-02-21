import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        minLength:[6, "Email must be at least 6 characters long"],
        maxLength: [50, "Email cannot be more than 50 characters long"]
    },
    password:{
        type: String,
        required: true
    }
});

userSchema.statics.hashPassword = async function(password){
    // Implement password hashing logic here
    // Placeholder, replace with actual hashed password
    return await bcrypt.hash(password, 10);
}

userSchema.methods.isValidPassword = async function(password){
    // Implement password validation logic here
    // Placeholder, replace with actual password comparison
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAuthToken = function(){
    // Implement JWT generation logic here
    return jwt.sign({email: this.email }, process.env.JWT_SECRET);
}

const User = mongoose.model('user', userSchema);

export default User;