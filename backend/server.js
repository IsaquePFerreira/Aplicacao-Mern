import express from "express";
import "dotenv/config.js";

const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000. CTRL + C stop.");
});
