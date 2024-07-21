import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
export default function SignIn() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const { error, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <main className="p-3 max-w-lg mx-auto">
      <h1 className=" font-semibold text-3xl text-center my-7 uppercase">
        Sign in
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
        <button
          disabled={loading}
          className=" uppercase bg-slate-900 text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-80"
        >
          {loading ? "loading..." : "sign in"}
        </button>
        <div className="flex gap-2">
          <span>Dont have an account?</span>
          <Link to={"/sign-up"}>
            <span className="text-blue-800 font-semibold">Sign up</span>
          </Link>
        </div>
      </form>

      {error && <span className="text-red-700">{error}</span>}
    </main>
  );
}
