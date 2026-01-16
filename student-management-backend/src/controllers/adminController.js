import students from "../models/studentModel.js";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";




const createTeacher = async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        const hashedPassword = await bcrypt.hash(password,10)
        const teacher = await userModel({ name, email, password:hashedPassword, role:"teacher"});
        return res.status(201).json({teacher});
    } catch (error) {
        return res.status(500).json({error:error.Message})
    }
};


const deleteTeacher = async(req,res)=>{
    try {
        const {id} = req.params;
        const deletedTeacher = await userModel.findByIdAndDelete(id,{new:true});
        if (!deletedTeacher) {
          return res.status(404).json({
            Message: "Teacher not found",
          });
        };
        return res.status(200).json({Message:"Teacher Deleted Successfully",teachers:deletedTeacher})
    } catch (error) {
        return res.status(500).json({ Message: "Internal Server Issues", error: error.message });
    }
};


export {createTeacher,deleteTeacher}