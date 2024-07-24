import books from '../models/bookModel.js';

export const getBooks = (req, res) => {
  res.json(books);
};
