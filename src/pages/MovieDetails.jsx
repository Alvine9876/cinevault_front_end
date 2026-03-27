import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/API";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    API.get(`/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) return <p className="text-white p-6">Loading...</p>;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      
      <div className="max-w-4xl mx-auto">
        
        <img
          src={movie.image_url || "https://via.placeholder.com/400"}
          alt={movie.title}
          className="w-full h-96 object-cover rounded-lg"
        />

        <h1 className="text-4xl font-bold mt-4">{movie.title}</h1>

        <p className="text-gray-400 mt-2">
          {movie.genre} • {movie.year}
        </p>

        <p className="mt-4">{movie.description}</p>

      </div>
    </div>
  );
}

export default MovieDetails;