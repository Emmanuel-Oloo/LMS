import React, { useEffect, useState } from 'react';

const Rating = ({ initialRating = 0, onRate }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRating = (value) => {
    console.log("Star clicked:", value); // Debugging
    setRating(value);
    if (onRate) onRate(value);
  };

  useEffect(() => {
    console.log("Initial Rating:", initialRating); // Debugging
    setRating(initialRating);
  }, [initialRating]);

  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={`text-xl sm:text-2xl cursor-pointer transition-colors ${
              starValue <= rating ? 'text-yellow-500' : 'text-gray-400'
            }`}
            onClick={() => handleRating(starValue)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
