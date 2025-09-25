import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes/allRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

const dbKey = process.env.MONGO_KEY;

app.use(cors());
app.use(express.json());
app.use("/api", routes);

async function main() {
  try {
    await mongoose.connect(dbKey, {
      serverSelectionTimeoutMS: 10000,
    });
    console.log("Connected to database");
  } catch (err) {
    console.error("Could not start server:", err);
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
  });
}

main();
