import express from "express";
import cors from "cors";
import config from "./config/config";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

//getting the value from the config 
const port = config.port || 5000;
const  mongo_uri = config.mongoURI

if (!mongo_uri) {
    console.error("Error: MONGO_URI is not defined in the environment variables.");
    process.exit(1); // Exit the application with an error code
  }

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

//connecting mongodb
const connectDb = async () => {
    try {
        await mongoose.connect(mongo_uri);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}
connectDb();
