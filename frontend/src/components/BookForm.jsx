import React, { useState } from 'react'

export default function BookForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [status, setStatus] = useState('to-read')

  function submit(e) {
    e.preventDefault()
    if (!title.trim()) return alert('Please enter a title')
    onAdd({ title: title.trim(), author: author.trim(), status })
    setTitle('')
    setAuthor('')
  }

  return (
    <form className="bg-pink-100 p-6 rounded-lg shadow-md mb-4" onSubmit={submit}>
      <div className="flex gap-4">
        <input
          className="p-2 rounded-lg bg-pink-200 text-gray-900 w-full"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="p-2 rounded-lg bg-pink-200 text-gray-900 w-full"
          placeholder="Author (optional)"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select
          className="p-2 rounded-lg bg-pink-200 text-gray-900"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="to-read">To read</option>
          <option value="reading">Reading</option>
          <option value="finished">Finished</option>
        </select>
        <button className="bg-pink-500 text-white p-2 rounded-lg" type="submit">Add</button>
      </div>
    </form>
  )
}
