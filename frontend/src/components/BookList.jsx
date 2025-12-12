import React from 'react'
import RateBook from './RateBook'

export default function BookList({ books, onRemove, onUpdate }) {
  if (!books.length) return <div className="bg-pink-100 p-4 rounded-lg">No books yet — add your first book!</div>

  return (
    <div>
      {books.map((book) => (
        <div key={book.id} className="bg-pink-200 p-4 rounded-lg mb-4 flex justify-between">
          <div>
            <div className="font-bold">{book.title}</div>
            <div className="text-sm text-gray-600">{book.author || 'Unknown author'} • {book.status}</div>
          </div>

          <div className="flex gap-2 items-center">
            <RateBook value={book.rating} onChange={(val) => onUpdate(book.id, { rating: val })} />
            <button
              className="bg-pink-600 text-white p-2 rounded-lg"
              onClick={() => onRemove(book.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
