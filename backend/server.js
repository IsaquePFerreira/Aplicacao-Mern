import express from "express";
import "dotenv/config.js";
import { connectToDabase } from "./config/db.js";
import { Book } from "./book.model.js";

const app = express();

app.use(express.json());

app.post("/api/v1/books", async(req, res) => {
    const {title, subtitle, author, genrer, cover} = req.body;

    try {
        const book = new Book({title, subtitle, author, genrer, cover});
        await book.save();
        res.status(201).json({sucess: true, data: book});
    } catch(error) {
        console.error("Error saving book", error);
        res.status(500).json({sucess: false, error: "Error while save the book"})
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000. CTRL + C stop.");
    connectToDabase();
});
