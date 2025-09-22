import express from "express";
import dotenv from "dotenv";
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config();


const PORT = process.env.PORT || 3000;


const app = express();

app.use(express.json());
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routes would be imported and used here

app.use('/api/auth', authRoutes)
app.use('/api/message',messageRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB()
});

