import express from "express";
import { updateMarks, } from "../controllers/teacherController.js";
import protect from "../middleware/authMiddleware.js";
import allowRoles from "../middleware/roleMiddleware.js";



const teacherRouter = express.Router();


teacherRouter.put("/students/:id/marks", protect, allowRoles("teacher"), updateMarks);


export default teacherRouter;