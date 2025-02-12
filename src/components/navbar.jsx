import React from "react";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md">
       <div className="flex flex-row gap-2 justify-center items-center ">
        <img src="/images/Vector.png" alt="logo" className="h-auto w-auto mb-[5px]"/>
      <h1 className="text-lg  text-black font-inspiration">Pavan Devops</h1>
      </div>
      <nav className="flex space-x-6">
        <a href="#about" className="text-gray-700 hover:text-purple-700">
          About us
        </a>
        <a href="#services" className="text-gray-700 hover:text-purple-700">
          Services
        </a>
        <a href="#case-studies" className="text-gray-700 hover:text-purple-700">
          Case Studies
        </a>
        <a href="#blog" className="text-gray-700 hover:text-purple-700">
          Blog
        </a>
        <a href="#how-it-works" className="text-gray-700 hover:text-purple-700">
          How it Works
        </a>
        <a href="#hire" className="text-gray-700 hover:text-purple-700">
          Hire
        </a>
      </nav>
      <button className="px-4 py-2 bg-gradient-to-r from-[#57007B] to-[#6675F7] text-white rounded-md hover:cursor-pointer hover:shawdow-lg">
        Contact us
      </button>
    </header>
  );
}
