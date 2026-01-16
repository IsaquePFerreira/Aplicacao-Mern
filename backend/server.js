import express from 'express';
import 'dotenv/config.js';
import {connectToDabase} from './config/db.js';
import {Book} from './book.model.js';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

app.post('/api/v1/books', async (req, res) => {
	const {title, subtitle, author, genrer, cover} = req.body;

	try {
		const book = new Book({
			title, subtitle, author, genrer, cover,
		});
		await book.save();
		res.status(201).json({sucess: true, data: book});
	} catch (error) {
		console.error('Error saving book', error);
		res.status(500).json({sucess: false, error: 'Error while save the book'});
	}
});

app.get('/api/v1/books', async (req, res) => {
	try {
		const books = await Book.find();
		res.status(200).json({sucess: true, data: books});
	} catch (error) {
		console.error('Error fetching books: ', error);
		res.status(500).json({sucess: false, error: 'Error fetching books.'});
	}
});

app.get('/api/v1/books/:id', async (req, res) => {
	const {id} = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).json({sucess: false, error: 'Id not is valid.'});
	}

	try {
		const books = await Book.findById();
		if (!books) {
			return res.status(404).json({sucess: false, error: 'Book not found.'});
		}

		res.status(200).json({sucess: true, data: books});
	} catch (error) {
		console.error('Error fetching books: ', error);
		res.status(500).json({sucess: false, error: 'Error fetching books.'});
	}
});

app.listen(3000, () => {
	console.log('Server is running on port 3000. CTRL + C stop.');
	connectToDabase();
});
