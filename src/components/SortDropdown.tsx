// src/components/SortDropdown.tsx
import React, { useState } from "react";

const SortDropdown: React.FC = () => {
  const [sortOption, setSortOption] = useState("");

  return (
    <div>
      <h4>Sort By</h4>
      <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
        <option value="">Select</option>
        <option value="popularity">Popularity</option>
        <option value="release-date">Release Date</option>
      </select>
    </div>
  );
};

export default SortDropdown;
