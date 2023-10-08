'use client';

import { useState } from "react";

export function Navbar({ onSubmit }) {
  const [name, setName] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
    setName('');
  };

  return (
    <div id="Navbar" className="flex items-center justify-center w-[425px]">
      <form className="mb-6 flex items-center justify-center w-full" onSubmit={handleSubmit}>
        <input placeholder="name or id" className="text-black focus:outline-none focus:border-sky-500 rounded w-full p-2 mr-3" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
      </form>
    </div>
  )
}

