import express from "express";
import {
  addStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";

import protect from "../middleware/authMiddleware.js";
import isAdmin from "../middleware/roleMiddleware.js";


const router = express.Router();

router.post("/", protect, isAdmin, addStudent);
router.get("/", protect, getStudents);
router.put("/:id", protect, isAdmin, updateStudent);
router.delete("/:id", protect, isAdmin, deleteStudent);

export default router;
