import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

// MovieList component displays a grid of movie cards
// Props:
// - title: optional section title (e.g., "Popular Movies")
// - movies: array of movie objects to display
// - onMovieClick: function to handle when a movie is selected
const MovieList = ({ title, movies, onMovieClick }) => {
  return (
    <section className="featured-section">
      {title && <h2>{title}</h2>}
      <div className="movie-row">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onClick={() => onMovieClick(movie.imdbID)}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieList;