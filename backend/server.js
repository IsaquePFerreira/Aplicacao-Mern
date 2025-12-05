import express from "express";
import "dotenv/config.js";
import mongoose from "mongoose";

const app = express();
function connectToDabase() {
    try {
        mongoose.connect(process.env, MONGO_URI);
    } catch () {}
}

app.listen(3000, () => {
    console.log("Server is running on port 3000. CTRL + C stop.");
});
