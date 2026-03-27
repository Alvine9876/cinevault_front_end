import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
      const navigate = useNavigate();
  return (
    <div 
    onClick={() => navigate(`/movies/${movie.id}`)}
    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition cursor-pointer"
    >
      
      {/* Movie Image */}
      <img
        src={movie.image_url || "https://via.placeholder.com/300x400"}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />

      {/* Movie Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold">{movie.title}</h3>
        
        <p className="text-sm text-gray-400">
          {movie.genre} • {movie.year}
        </p>

        <p className="text-sm mt-2 line-clamp-3">
          {movie.description || "No description available."}
        </p>

        <button className="mt-3 bg-red-500 px-3 py-1 rounded hover:bg-red-600 w-full">
          View Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;