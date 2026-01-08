import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  rollNo: String,
  course: String,
  year: Number,
  marks: Number,
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
