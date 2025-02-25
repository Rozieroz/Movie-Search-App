import React from 'react';
import './MovieCard.css';

// MovieCard component displays individual movie information
// Props:
// - movie: object containing movie data (title, year, poster, type)
// - onClick: function to handle when card is clicked
const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="movie" onClick={onClick}>
      {/* Year overlay (shows on hover) */}
      <div>
        <p>{movie.Year}</p>
      </div>

      {/* Movie poster */}
      <div>
        <img 
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} 
          alt={movie.Title}
        />
      </div>

      {/* Movie info */}
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;