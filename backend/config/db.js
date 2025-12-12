import mongoose from "mongoose";

export async function connectToDabase() {
    try {
        // await mongoose.connect(process.env.MONGO_URI);
        mongoose.connect(process.env.MONGO_URI);
        console.log("Connect to the database");
    } catch (error) {
        console.error("Error connecting database...", error);
        process.exit(1);
    }
}
