import students from "../models/studentModel.js";

const updateMarks = async (req, res) => {
  try {
    const { id } = req.params;
    const { marks } = req.body;

    if (!marks || typeof marks !== "object") {
      return res.status(400).json({
        Message: "Marks object is required",
      });
    }

    const student = await students.findById(id);

    if (!student) {
      return res.status(404).json({
        Message: "Student not found",
      });
    }

    // ✅ Merge existing marks with new marks
    student.marks = {
      ...student.marks,
      ...marks,
    };

    await student.save();

    return res.status(200).json({
      Message: "Marks Updated Successfully",
      marks: student.marks,
    });
  } catch (error) {
    return res.status(500).json({
      Message: "Error updating marks",
      error: error.message,
    });
  }
};

export { updateMarks };
