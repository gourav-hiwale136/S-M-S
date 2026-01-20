import students from "../models/studentModel.js";


const addStudent = async(req,res)=>{
  try {
    const {name,email,rollNo,className,marks} = req.body;
    const newStudent = await students({
      name,
      email,
      rollNo,
      className,
      marks,
    });

    await newStudent.save();
    return res.status(201).json({Message:"New Student Added", newStudent})
  } catch (error) {
    return res.status(500).json({Message:"Internal Server Issues", error})
    
  };

};


const getAllstudents = async(req,res)=>{
  try {
    // const {email,rollNo} = req.body;
    const Student = await students.find();
    return res.status(201).json({Message:"Get All Students", Student});
  } catch (error) {
    res.status(500).json({
      Message: "Internal Server Error",
      error: error.message,
    });
  }
};


const getStudent = async(req,res)=>{
  try {
    const {id} = req.params;
    const student = await students.findById(id);
    if(!student){
      return res.status(404).json({Message:"Not Found"})
    }
    return res.status(200).json(student);
  } catch (error) {
    return res.status(500).json(error.Message)
    
  }
};


const updateStudent = async(req,res)=>{
   try {
     const updatedStudent = await students.findByIdAndUpdate(
       req.params.id, // student ID from URL
       req.body, // updated data
       {
         new: true, // return updated document
        
       }
     );

     if (!updatedStudent) {
       return res.status(404).json({
         Message: "Student not found",
       });
     }

     return res.status(200).json({
       Message: "Student Updated Successfully",
       students: updatedStudent,
     });
   } catch (error) {
     return res.status(500).json({
       Message: "Internal Server Error",
       error: error.message,
     });
   }
 };


 const deleteStudent = async(req,res)=>{
  try {
    const {id} = req.params;
    const deletedStudent = await students.findByIdAndDelete(id,{new:true});
    if (!deletedStudent) {
      return res.status(404).json({
        Message: "Student not found",
      });
    }

    return res.status(200).json({Message:"Student Deleted Successfully",students:deletedStudent})
  } catch (error) {
    return res.status(500).json({Message:"Internal Server Issues",error:error.message})
  }
 
 }



export {addStudent,getAllstudents,getStudent,updateStudent,deleteStudent};