import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
//import usersRoute from "./routes/users.js"
import livestreamsRoute from "./routes/livestreams.js"
import cookieParser from "cookie-parser";

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

const app = express();
const secretKey = "streamyard";

const USERS = [];

//middlewares
app.use(cors());
app.use(cookieParser()) //cookie middleware
app.use(bodyParser.json());

app.use("/auth", authRoute)
app.use("/user", userRoute)

//Error handling best practice
app.use((err, req, res, next)=>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: err.message,
    stack: err.stack
  })
})

// });

// mongoose.connection.on("disconnected", () => {
//   console.log("mongoDB disconnected");
// });

// mongoose.connection.on("connected", () => {
//   console.log("mongoDb connected");
// });

app.listen(3000, () => {
  connect();
  console.log("Server running on port 3000");
});
