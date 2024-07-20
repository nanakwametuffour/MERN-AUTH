import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData]= useState({})

  console.log(formData);
   const handleChange = (e)=>{
     setFormData({
      ...formData,
      [e.target.id]:e.target.value
     })
   }
  return (
    <main className='p-3 max-w-lg mx-auto'>
      <h1 className=" font-semibold text-3xl text-center my-7 uppercase">Sign Up</h1>
      <form className='flex flex-col gap-3'>
        
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
            id='password'
            onChange={handleChange}
          />
         <button  className=' uppercase bg-slate-900 text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-80'>sign up</button>
          <div className="flex gap-2">
            <span>Have an account?</span>
             <Link to={'/sign-in'}>
               <span className='text-blue-800 font-semibold'>Sign in</span>
             </Link>
          </div>
      </form>
    </main>
  );
}
