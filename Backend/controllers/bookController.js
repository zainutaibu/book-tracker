const Book = require("../models/Book");

// ➕ Add a new book
exports.createBook = async (req, res, next) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    next(err);
  }
};

// 📚 Get all books
exports.getBooks = async (req, res, next) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (err) {
    next(err);
  }
};

// 📖 Get single book
exports.getBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    next(err);
  }
};

// ✏️ Update book
exports.updateBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    next(err);
  }
};

// ❌ Delete book
exports.deleteBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    next(err);
  }
};

// ⭐ Rate a book
exports.rateBook = async (req, res, next) => {
  try {
    const { rating } = req.body;
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });

    const total = book.rating * book.ratingsCount + rating;
    book.ratingsCount += 1;
    book.rating = total / book.ratingsCount;

    await book.save();
    res.json(book);
  } catch (err) {
    next(err);
  }
};
