import express from "express";
import dotenv from "dotenv";
import connectDB from "../src/config/db.js"
import adminRouter from "./routes/adminRoutes.js";
// import seedAdmin from "./utils/seedAdmin.js";
import studentRouter from "../src/routes/studentRoutes.js"
import teacherRouter from "./routes/teacherRoutes.js";
import authRouter from "./routes/authRoutes.js";

dotenv.config()
const app = express();
connectDB(process.env.MONGO_URL)
app.use(express.json());
// await seedAdmin();


app.use("/api/auth", authRouter)
app.use("/api/admin", adminRouter)
app.use("/api/teachers",  teacherRouter)
app.use("/api/students", studentRouter)

const PORT = process.env.PORT || 4545

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})