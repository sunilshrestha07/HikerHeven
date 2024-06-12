import dotenv from "dotenv";

dotenv.config();

const config = {
    port: process.env.PORT,
    mongoURI : process.env.MONGO_URI,
    api : process.env.api
}
export default config