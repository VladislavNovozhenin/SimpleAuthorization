const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoutes");
const cors = require("cors");

const app = express();
const PORT = config.get("serverPort");

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(config.get("dbUrl"));
    app.listen(PORT, () => {
      console.log("Server started on port", PORT);
    });
  } catch (error) {
    console.log(error)
  }
};

start()


