import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow-md bg-slate-400">
      <div className="flex justify-between p-3 max-w-6xl mx-auto items-center">
        <div className="">
          <Link to={"/"}>
            <h1 className=" font-semibold text-white">
              <span className=" text-blue-700">MERN</span>
              -AUTH.COM
            </h1>
          </Link>
        </div>
        <div className="flex gap-5 text-white">
          <Link to={"/"}>
            <span className=" hover:underline">Home</span>
          </Link>
          <Link to={"/sign-in"}>
            <span className=" hover:underline">Sign In</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
