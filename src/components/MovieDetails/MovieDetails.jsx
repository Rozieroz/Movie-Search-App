import React from 'react';
import './MovieDetails.css';

// MovieDetails component shows detailed information about a selected movie
// Props:
// - movie: detailed movie information object
// - onClose: function to handle closing the details modal
const MovieDetails = ({ movie, onClose }) => {
  return (
    <div className="overlay">
      <div className="movie-details">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{movie.Title} ({movie.Year})</h2>
        
        <div className="details-content">
          <img 
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} 
            alt={movie.Title}
          />
          
          <div className="info">
            <p><strong>IMDb Rating:</strong> {movie.imdbRating}/10</p>
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Cast:</strong> {movie.Actors}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
            
            <div className="streaming-links">
              <h3>Where to Watch:</h3>
              <div className="watch-buttons">
                <a 
                  href={`https://www.justwatch.com/us/search?q=${encodeURIComponent(movie.Title)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="watch-button justwatch"
                >
                  Find Streaming Options
                </a>
                <a 
                  href={`https://www.imdb.com/title/${movie.imdbID}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="watch-button imdb"
                >
                  View on IMDb
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;