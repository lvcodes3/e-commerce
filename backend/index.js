// express web server //
import express from "express";
const app = express();

// env vars //
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;

// middlewares //
app.use(express.json());

import cors from "cors";
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

import morgan from "morgan";
app.use(morgan("tiny"));

// routes //
/*
const consumerRoutes = require("./routes/consumerRoutes.js");
app.use("/api/v1/consumer", consumerRoutes);

const nutritionRoutes = require("./routes/nutritionRoutes.js");
app.use("/api/v1/nutrition", nutritionRoutes);
*/

// server //
app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT} ...`);
});
