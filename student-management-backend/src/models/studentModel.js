import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    rollNo: { type: Number, required: true },
    className: { type: String, required: true },
    age: { type: Number },
    marks: {
      maths: { type: Number, default: 0 },
      science: { type: Number, default: 0 },
      english: { type: Number, default: 0 },
    },
  },
  { timestamps: true },
);

const Students = mongoose.model("Student", studentSchema);

export default Students;