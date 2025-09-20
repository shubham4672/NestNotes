import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

const limiter = rateLimit({
  windowMs: 20 * 1000,
  max: 10,
  message: "Too many requests, please try again after few seconds.",
});

app.use(limiter);

// middleware
app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
