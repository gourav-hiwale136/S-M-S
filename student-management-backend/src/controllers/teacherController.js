import students from "../models/studentModel.js";


const updateMarks = async (req, res) => {
  try {
    const { id } = req.params;
    const { marks } = req.body;

     if (marks === undefined) {
       return res.status(400).json({
         Message: "Marks are required",
       });
     };


    const student = await students.findByIdAndUpdate(
      id,
      { marks },
      { new: true }
    );

    if (!student) {
      return res.status(404).json({ Message: "Student not found" });
    }

    return res.status(200).json({
      Message: "Marks Updated Successfully",
      student,
    });
  } catch (error) {
    return res.status(500).json({
      Message: "Error updating marks",
      error: error.message,
    });
  }
};


export {updateMarks};
