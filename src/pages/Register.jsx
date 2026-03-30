import { useState } from "react";
import API from "../services/API";

function Register() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "user"
  });

  const handleRegister = async () => {
    await API.post("/register", form);
    alert("Registered!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded">
        <h2 className="text-xl mb-4">Register</h2>

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

        <select
          className="mb-2 p-2 bg-gray-700"
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button onClick={handleRegister} className="bg-green-500 px-4 py-2">
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;