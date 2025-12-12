import React, { useEffect, useState } from "react";
import API from "../api";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";

const Home = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const { data } = await API.get("/");
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 pb-8">
      <BookForm onBookAdded={(b) => setBooks([...books, b])} />
      <BookList
        books={books}
        onDelete={(id) => setBooks(books.filter((b) => b._id !== id))}
        onRated={(updatedBook) =>
          setBooks(books.map((b) => (b._id === updatedBook._id ? updatedBook : b)))
        }
      />
    </div>
  );
};

export default Home;
