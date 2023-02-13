//import bcrypt from "bcryptjs";

const bcrypt = require("bcryptjs");
const User = require("../model/User");


const getAllUsers = async (req,res, next)  => {
    let users;
    try{
        users = await User.find();
        }
        catch(err) {
             return console.log(err);
        }
        if(!users) {
            return res.status(404).json({message: "no user found"})
        }
        return res.status(200).json({users});
}

const registerUser = async (req,res, next) => {
const {fullName, email, password} = req.body;

let existingUser;
try{
existingUser = await User.findOne({email});
}catch(err)
{
    console.log(err);
}
if(existingUser){
    return res.status(400).json({message:"User Already exist!! You can Login"})
}
const hashedpwd = bcrypt.hashSync(password);
const user = new User({
    fullName,
    email,
    //role,
    password: hashedpwd
   
});
try{
await user.save();
}catch(err) {
    console.log(err);
}
return res.status(201).json({user})
};

const login = async (req, res, next) => {
    const {email, password } = req.body;
    let existingUser;
    try{
    existingUser = await User.findOne({email});
    }catch(err)
    {
        console.log(err);
    }
    if(!existingUser){
        return res.status(404).json({message:"Couldnt find user by this email",success:0})
    }
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if(!isPasswordCorrect)
    {
        return res.status(400).json({message: "Incorrect Passowrd", success:0});
    }
    return res.status(200).json({message:"Successful Login", success:1});
}

module.exports = {getAllUsers, registerUser, login};