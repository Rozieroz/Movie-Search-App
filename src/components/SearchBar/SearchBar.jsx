import React from 'react';
import './SearchBar.css';

// SearchBar component handles the search functionality
// Props:
// - searchTerm: current search input value
// - setSearchTerm: function to update search input
// - searchMovies: function to perform the search
const SearchBar = ({ searchTerm, setSearchTerm, searchMovies }) => {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (searchTerm.trim()) { // Only search if there's a non-empty term
      searchMovies(searchTerm);
    }
  };

  return (
    <div className="search-section">
      <form className="search" onSubmit={handleSubmit}>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies and TV shows"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;