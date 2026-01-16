import express from "express"
import { createTeacher, deleteTeacher } from "../controllers/adminController.js";
import protect from "../middleware/authMiddleware.js";
import allowRoles from "../middleware/roleMiddleware.js";


const adminRouter = express.Router();



adminRouter.post("/teachers", protect, allowRoles("admin"), createTeacher);
adminRouter.delete("/teachers", protect, allowRoles("admin"), deleteTeacher);


export default adminRouter;

