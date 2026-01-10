import express from "express";
import { addStudent, getAllstudents, getStudent, updateStudent } from "../controllers/studentController.js";

const studentRouter = express.Router();


studentRouter.post("/add", addStudent);
studentRouter.get("/get", getAllstudents);
studentRouter.get("/get/:id", getStudent);
studentRouter.put("/update/:id", updateStudent);



export default studentRouter;