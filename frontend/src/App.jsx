import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import BookForm from './components/BookForm'
import BookList from './components/BookList'

const STORAGE_KEY = 'bookTracker.books'

export default function App() {
  const [books, setBooks] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      console.error('Error reading localStorage', e)
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books))
  }, [books])

  function addBook(book) {
    setBooks(prev => [{ id: Date.now(), rating: 0, ...book }, ...prev])
  }

  function removeBook(id) {
    setBooks(prev => prev.filter(b => b.id !== id))
  }

  function updateBook(id, updates) {
    setBooks(prev => prev.map(b => (b.id === id ? { ...b, ...updates } : b)))
  }

  return (
    <div className="min-h-screen bg-pink-50 text-gray-900">
      <Navbar count={books.length} />
      <div className="container mx-auto p-4">
        <BookForm onAdd={addBook} />
        <BookList books={books} onRemove={removeBook} onUpdate={updateBook} />
      </div>
    </div>
  )
}
