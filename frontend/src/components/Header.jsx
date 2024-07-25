import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const {currentUser} = useSelector((state)=> state.user)
  return (
    <header className="shadow-md bg-slate-900">
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
          <Link to={"/profile"}>
            {currentUser ? (
             <img className=" h-7 w-7 rounded-full object-cover" src={currentUser.avatar} alt="avatar" />
            ):(

            <span className=" hover:underline">Sign In</span>
            )
            }
          </Link>
        </div>
      </div>
    </header>
  );
}
