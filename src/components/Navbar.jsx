import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-red-500">CineVault 🎬</h1>

      <div className="space-x-4">
        <Link to="/" className="hover:text-red-400">
          Home
        </Link>
        <Link to="/movies" className="hover:text-red-400">
          Movies
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;