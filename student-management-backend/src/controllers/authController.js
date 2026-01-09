import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Signup = async(req,res)=>{
    try {
        const {name,email,password,role} = req.body;
        const hashedPassword = await bcrypt.hash(password,10) 
        const newUser = new User({ name, email, password:hashedPassword, role});
        await newUser.save();
        return res.status(201).json({Message:"User Registerd Sucessfully", user:newUser});
        
    } catch (error) {
        
        console.log(error);
        return res.status(500).json({Message:"Internal Server Issues"});
        
    };
};


const Login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(404).json({Message:"User Not Found"});

        const isMatch  = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(401).json({Message:"Invalid Password"});

        const token = jwt.sign(
            {id:user._id, role:user.role},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        );
        res.json({token});
    } catch (error) {
        return res.status(500).json({Messaage:"Internal Server Issues",error})
    }

}

export {Signup,Login};