import { useEffect, useState } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies([
      { id: 1, title: "Inception", year: 2010 },
      { id: 2, title: "Interstellar", year: 2014 },
      { id: 3, title: "The Dark Knight", year: 2008 },
    ]);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-6 text-red-500">Movies</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{movie.title}</h3>
            <p className="text-gray-400">{movie.year}</p>

            <button className="mt-3 bg-red-500 px-3 py-1 rounded hover:bg-red-600">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;