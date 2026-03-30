import { useState } from "react";
import API from "../services/API";

function Admin() {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    year: "",
    genre: "",
    image_url: ""
  });

  const handleAddMovie = async () => {
    const token = localStorage.getItem("token");

    await API.post("/movies", movie, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    alert("Movie added!");
  };

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <h1 className="text-2xl mb-4">Admin Dashboard</h1>

      <input placeholder="Title" onChange={(e) => setMovie({...movie, title: e.target.value})} />
      <input placeholder="Genre" onChange={(e) => setMovie({...movie, genre: e.target.value})} />
      <input placeholder="Year" onChange={(e) => setMovie({...movie, year: e.target.value})} />
      <input placeholder="Image URL" onChange={(e) => setMovie({...movie, image_url: e.target.value})} />

      <button onClick={handleAddMovie} className="bg-red-500 px-4 py-2 mt-3">
        Add Movie
      </button>
    </div>
  );
}

export default Admin;