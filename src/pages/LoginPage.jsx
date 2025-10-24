import { useState } from "react";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Logging in...");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success && data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user || { email }));
        setStatus("Logged in!");
        navigate("/admin/messages");
      } else {
        setStatus(data.error || "Login failed");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error connecting to server");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Admin Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" required className="w-full p-2 border rounded" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" required className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded">Login</button>
      </form>
      {status && <p className="mt-3">{status}</p>}
    </div>
  );
};

export default LoginPage;
