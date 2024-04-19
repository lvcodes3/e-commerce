// express web server //
const express = require("express");
const app = express();

// env vars //
require("dotenv").config();
const PORT = process.env.PORT;

// middlewares //
app.use(express.json());

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const morgan = require("morgan");
app.use(morgan("tiny"));

// routes //
const inventoryRoutes = require("./routes/inventoryRoutes.js");
app.use("/api/v1/inventory", inventoryRoutes);

// server //
app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT} ...`);
});
