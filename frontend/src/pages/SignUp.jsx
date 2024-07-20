import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
   const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in')
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <main className="p-3 max-w-lg mx-auto">
      <h1 className=" font-semibold text-3xl text-center my-7 uppercase">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="p-3 rounded-lg focus:outline-none border"
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
        />
        <input
          className="p-3 rounded-lg focus:outline-none border"
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChange}
        />
        <input
          className="p-3 rounded-lg focus:outline-none border"
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
        />
        <button disabled={loading} className=" uppercase bg-slate-900 text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-80">
          {loading ? "loading..." : "sign up"}
        </button>
        <div className="flex gap-2">
          <span>Have an account?</span>
          <Link to={"/sign-in"}>
            <span className="text-blue-800 font-semibold">Sign in</span>
          </Link>
        </div>
      </form>
     
        {error && <span className="text-red-700">{error}</span>}
      
    </main>
  );
}
