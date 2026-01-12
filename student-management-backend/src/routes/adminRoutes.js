import express from "express"
import { createTeacher, deleteAllstudent } from "../controllers/adminController.js";
import protect from "../middleware/authMiddleware.js";
import allowRoles from "../middleware/roleMiddleware.js";


const adminRouter = express.Router();


adminRouter.delete("/students", protect, allowRoles("admin"), deleteAllstudent);
adminRouter.post("/teachers", protect, allowRoles("admin"), createTeacher);


export default adminRouter;

