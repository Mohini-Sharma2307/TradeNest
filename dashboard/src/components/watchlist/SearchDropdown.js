import React from "react";

const SearchDropdown = ({ results, handleAdd }) => {
  if (!results || results.length === 0) return null;

  return (
    <div className="search-dropdown">
      {results.map((stock, index) => (
        <div className="search-item" key={index}>
          <div className="search-left">
            <h4>{stock.name}</h4>
            <p>₹{stock.price}</p>
          </div>

          <button
            className="add-btn"
            onClick={() => handleAdd(stock)}
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
};

export default SearchDropdown;


