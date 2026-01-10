import express from "express";
import dotenv from "dotenv";
import connectDB from "../src/config/db.js"
import studentRouter from "../src/routes/studentRoutes.js"

dotenv.config()
const app = express();
connectDB(process.env.MONGO_URL)
app.use(express.json());


app.use("/api/student", studentRouter)

const PORT = process.env.PORT || 4545

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})