import { useState } from "react";
import API from "../services/API";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/login", form);

      localStorage.setItem("token", res.data.access_token);

      navigate("/");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded">
        <h2 className="text-xl mb-4">Login</h2>

        <input
          placeholder="Username"
          className="block mb-2 p-2 bg-gray-700"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="block mb-2 p-2 bg-gray-700"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button onClick={handleLogin} className="bg-red-500 px-4 py-2">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;