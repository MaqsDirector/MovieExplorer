// src/components/RatingFilter.tsx
import React, { useState } from "react";

const RatingFilter: React.FC = () => {
  const [rating, setRating] = useState("");

  return (
    <div>
      <h4>Filter by Rating</h4>
      {["Average", "Hit", "Super Hit", "Blockbuster"].map((rate) => (
        <label key={rate}>
          <input
            type="radio"
            value={rate}
            checked={rating === rate}
            onChange={(e) => setRating(e.target.value)}
          />
          {rate}
        </label>
      ))}
    </div>
  );
};

export default RatingFilter;
