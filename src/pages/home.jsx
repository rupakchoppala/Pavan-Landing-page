import React from "react";
import Navbar from "../components/navbar";
import Services from "./services";

export default function HomePage() {
  return (
    <div className="bg-white  min-h-screen min-w-screen font-inter  flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="grow flex flex-row items-center justify-center text-center px-4 relative overflow-hidden">
        <div className="text-start w-[470px]">
        <h2 className="text-[50px] font-light leading-[60px] ">
          Great <span className=" text-[50px] bg-gradient-to-b from-[#DE4396] to-[#0D1C9F] bg-clip-text text-transparent text-4xl font-semibold">Product</span> is{" "}
          <br />
          <span className="text-gray-800 font-bold text-[50px]">built by great 
          <span className="text-[50px] px-2 bg-gradient-to-b from-[#DE4396] to-[#0D1C9F] bg-clip-text text-transparent font-semibold">teams</span></span>
        </h2>
        <p className="text-gray-600 mt-4 leading-[30px]">
          We help build and manage a team of world-class developers to bring
          your vision to life.
        </p>
        <button className="mt-8 px-6 py-3 bg-[#3D63EA] text-white text-lg rounded-lg shadow hover:bg-blue-900">
          Let's get started!
        </button>
        </div>
        <div className=" relative w-auto max-w-5xl">

          <img
            src="/images/hero.png"
            alt="Team Illustration"
            className="w-[614px] h-[546px]"
          />
        </div>
        <div className="w-16 h-16 rounded-full absolute  z-100 left-[476px] -bottom-8 bg-gradient-to-b from-[#F76680] to-[#57007B]">

      </div>
      </main>
    
     
    </div>
  );
}
