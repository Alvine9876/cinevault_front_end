import { useEffect, useState } from "react";
import API from "../services/API";
import MovieCard from "../components/Moviecard";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
  API.get("/movies")
    .then((res) => setMovies(res.data))
    .catch((err) => console.error(err));
}, []);

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(search.toLowerCase()) &&
      (genre === "" || movie.genre === genre)
    );
  });

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-6 text-red-500">Movies</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        
        <input
          type="text"
          placeholder="Search movies..."
          className="p-2 rounded bg-gray-800 text-white w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-2 rounded bg-gray-800 text-white"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">All Genres</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
        </select>
      </div>

      {movies.length === 0 ? (
        <p>No movies available...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Movies;