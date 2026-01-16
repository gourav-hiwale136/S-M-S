import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const Signup = async (req,res)=>{
    const {name,email,password,role} = req.body;
    const hashedPassword = await bcrypt.hash(password,10)
    const user = await userModel.create({ name, email, password:hashedPassword, role });
    return res.status(201).json({Message:"User Registerd",user});
};


const Login = async (req,res)=>{
    const {email,password} = req.body;
    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    
    // return res.status(201).json({Message:"User Login Sucessfull"})
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid password" });
    
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    
    return res.status(201).json({Message:"Login Successfull", token, user });
  
}


export {Signup,Login};