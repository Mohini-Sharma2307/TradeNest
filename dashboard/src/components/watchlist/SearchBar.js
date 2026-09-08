import React from "react";

const SearchBar = ({
  search,
  setSearch,
  filteredCount,
  totalCount,
}) => {
  return (
    <div className="search-container">
      <input
        className="search"
        type="text"
        placeholder="Search eg: INFY, TCS..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <span className="counts">
        {filteredCount} / {totalCount}
      </span>
    </div>
  );
};

export default SearchBar;