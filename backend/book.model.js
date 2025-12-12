import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
    },
    author: {
        type: String,
        required: true
    },
    genrer: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
}, {timestamps:true});

export const Book = mongoose.model("Book", bookSchema);
