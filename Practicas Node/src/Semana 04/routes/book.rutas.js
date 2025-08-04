import express from 'express';
import Book from '../models/book.model.js';

const router = express.Router();

//Middleware
const getBook = async (req, res, next) => {
 let book;
 const { id } = req.params;
 if (!id.match(/^[0-9a-fA-F]{24}$/)) {
   return res.status(400).json({ message: 'ID de libro inválido' });
 }
 try {
   book = await Book.findById(id);
   if (!book) {
     return res.status(404).json({ message: 'Libro no encontrado' });
   }
 } catch (error) {
   return res.status(500).json({ message: error.message });
 }
 req.book = book;
 next();
};

//[GET ALL] Obtener todos los libros
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    console.log('GET ALL BOOKS:', books);
    if (books.length === 0) {
      return res.status(204).json({ message: 'No se encontraron Libros' });
    }
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//[POST] Crear un nuevo libro
router.post('/', async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    year: req.body.year
  });

  if (!book.title || !book.author || !book.genre || !book.year) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  try {
    const newBook = await book.save();
    console.log('POST NEW BOOK:', newBook);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
