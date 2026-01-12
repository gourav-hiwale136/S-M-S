import students from "../models/studentModel.js";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";


const deleteAllstudent = async(req,res) =>{
    try {
        const deletedStudents = await students.deleteMany();
        return res.status(200).json({Message:"All Students Deleted Sucessfully", deleteAllstudent});
    } catch (error) {
        return res.status(500).json({Message:"Internal Server Issues"})
    }
};

const createTeacher = async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        const hashedPassword = await bcrypt.hash(password,10)
        const teacher = await userModel({ name, email, password:hashedPassword, role:"teacher"});
        return res.status(201).json({teacher});
    } catch (error) {
        return res.status(500).json({error:error.Message})
    }
}


export {deleteAllstudent,createTeacher}