import React from 'react'

export default function RateBook({ value = 0, onChange }) {
  const stars = [1, 2, 3, 4, 5]

  const handleRatingChange = (rating) => {
    onChange(rating);  // Update the rating value on star click
  };

  return (
    <div className="flex gap-1">
      {stars.map((s) => (
        <span
          key={s}
          className={`cursor-pointer ${s <= value ? 'text-yellow-500' : 'text-gray-300'} text-2xl`}
          onClick={() => handleRatingChange(s)}  // Handle rating change on click
        >
          ★
        </span>
      ))}
    </div>
  )
}
