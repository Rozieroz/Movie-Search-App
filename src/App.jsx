import { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchBar, MovieList, MovieDetails } from './components';
import './App.css';

// API endpoint with key
const API_URL = "https://www.omdbapi.com?apikey=53414e19";

function App() {
  // State management for different data
  const [movies, setMovies] = useState([]); // Search results
  const [searchTerm, setSearchTerm] = useState(''); // User's search input
  const [selectedMovie, setSelectedMovie] = useState(null); // Detailed movie info
  const [searchError, setSearchError] = useState(''); // Error handling
  const [popularMovies, setPopularMovies] = useState([]); // Popular movies list
  const [topRatedMovies, setTopRatedMovies] = useState([]); // Top rated movies list

  // Fetch popular movies from current year
  const getPopularMovies = async () => {
    try {
      const response = await axios.get(`${API_URL}&s=2023&type=movie`);
      setPopularMovies(response.data.Search || []);
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    }
  };

  // Fetch highly rated movies
  const getTopRatedMovies = async () => {
    try {
      const response = await axios.get(`${API_URL}&s=movie&type=movie&r=high`);
      setTopRatedMovies(response.data.Search || []);
    } catch (error) {
      console.error('Error fetching top rated movies:', error);
    }
  };

  // Search movies by user input
  const searchMovies = async (title) => {
    try {
      const response = await axios.get(`${API_URL}&s=${title}`);
      if (response.data.Response === "False") {
        setSearchError('No movies found. Please try a different search.');
        setMovies([]);
      } else {
        setMovies(response.data.Search || []);
        setSearchError('');
      }
    } catch (error) {
      setSearchError('An error occurred while searching for movies.');
      setMovies([]);
    }
  };

  // Get detailed information about a specific movie
  const getMovieDetails = async (id) => {
    try {
      const response = await axios.get(`${API_URL}&i=${id}`);
      setSelectedMovie(response.data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  // Load initial data when component mounts
  useEffect(() => {
    getPopularMovies();
    getTopRatedMovies();
  }, []);

  // Reset to homepage
  const returnToHome = () => {
    setSearchTerm('');
    setSelectedMovie(null);
    setMovies([]);
    setSearchError('');
  };

  return (
    <div className="app">
      <h1 onClick={returnToHome}>Apex Movies</h1>

      <SearchBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchMovies={searchMovies}
      />

      {!searchTerm && !selectedMovie && (
        <>
          <MovieList 
            title="Popular Movies"
            movies={popularMovies}
            onMovieClick={getMovieDetails}
          />
          <MovieList 
            title="Top Rated"
            movies={topRatedMovies}
            onMovieClick={getMovieDetails}
          />
        </>
      )}

      {searchTerm && (
        <MovieList 
          movies={movies}
          onMovieClick={getMovieDetails}
        />
      )}

      {selectedMovie && (
        <MovieDetails 
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

      {searchError && (
        <div className="error-message">{searchError}</div>
      )}
    </div>
  );
}

export default App;