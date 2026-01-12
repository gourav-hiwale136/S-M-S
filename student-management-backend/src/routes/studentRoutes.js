import express from "express";
import { addStudent, deleteStudent, getAllstudents, getStudent, updateStudent } from "../controllers/studentController.js";
import protect from "../middleware/authMiddleware.js";
import allowRoles from "../middleware/roleMiddleware.js";

const studentRouter = express.Router();


studentRouter.post("/add", protect, allowRoles("admin"), addStudent);
studentRouter.get("/getAll", protect, allowRoles("admin", "teacher"), getAllstudents);
studentRouter.get("/get/:id", protect, allowRoles("admin", "teacher"), getStudent);
studentRouter.put("/update/:id", protect, allowRoles("admin"), updateStudent);
studentRouter.delete("/delete/:id", protect, allowRoles("admin"), deleteStudent);



export default studentRouter;