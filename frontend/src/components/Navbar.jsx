import React from 'react'

export default function Navbar({ count }) {
  return (
    <header className="bg-pink-500 p-4 rounded-lg shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold text-white">📚 Book Tracker</h1>
      <div className="text-sm text-white">Total Books: {count}</div>
    </header>
  )
}
