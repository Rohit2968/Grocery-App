import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
dotenv.config();

const app = express();

connectDB();
const allowedOriginals = ["http://localhost:5173"];
// middleware
app.use(express.json());
app.use(cors({ origin: allowedOriginals, credentials: true }));
app.use(cookieParser());

// Api Endpoints
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
