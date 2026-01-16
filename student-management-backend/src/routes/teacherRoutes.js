import express from "express";
import { addStudent, deleteAllstudent, deleteStudent, getAllstudents, getStudent, updateMarks, updateStudent } from "../controllers/teacherController.js";
import protect from "../middleware/authMiddleware.js";
import allowRoles from "../middleware/roleMiddleware.js";



const teacherRouter = express.Router();
const studentRouter = express.Router();

teacherRouter.put("/students/:id/marks", protect, allowRoles("teacher"), updateMarks);
teacherRouter.delete("/students/:id", protect, allowRoles("teacher"), deleteAllstudent);

// students routes
studentRouter.post("/add", protect, allowRoles("admin"), addStudent);
studentRouter.get("/getAll", protect, allowRoles("admin", "teacher"), getAllstudents);
studentRouter.get("/get/:id", protect, allowRoles("admin", "teacher"), getStudent);
studentRouter.put("/update/:id", protect, allowRoles("admin"), updateStudent);
studentRouter.delete("/delete/:id", protect, allowRoles("admin"), deleteStudent);

export default teacherRouter;