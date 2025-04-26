const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//handles user actions for registering
const registeruser = async(req,res)=>{
    try{
        const {username,email,password} = req.body;
        const hashpassword = await bcrypt.hash(password,10);
        const user = await User.create({username,email,password:hashpassword});

        res.status(201).json({message:"Registered successfully"});
    }catch(err){
        res.status(400).json({message:"Not registered ",error:err.message});
    }
};

//handles users actions for logging in
const loginuser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};


const getusers = async(req,res)=>{
    try{
        const users = await User.find({},"-password");
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({message:"error encountered",error:err.message});
    }
}

module.exports = {registeruser,loginuser,getusers};