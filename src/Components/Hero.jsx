import React, { useState } from "react";
import beachVid from "../assets/beachVid.mp4";
import { AiOutlineSearch } from "react-icons/ai";

function Hero() {
  return (
    <div className="w-full h-screen relative">
      <video
        src={beachVid}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      ></video>
      <div className="w-full h-full absolute top-0 left-0 bg-gray-900/20"></div>
      <div className="text-white w-full h-full absolute justify-center text-center flex flex-col top-0 p-4 capitalize font-bold">
        <h1>first class Travel</h1>
        <h2 className="py-4">top 1% locations worldwide </h2>
        <form
          action=""
          className="flex justify-between max-w-[700px] mx-auto w-full p-1 items-center border rounded-md text-black bg-gray-100/90"
        >
          <div>
            <input
              type="text"
              placeholder="Search Destinations"
              className="bg-transparent w-[300px] focus:outline-none font-[Poppins] sm:w-[400px]"
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch size={20} />
            </button>
          </div>
        </form>
      </div>
      <div className="content">
        {
          // SelectsCard.filter
        }
      </div>
    </div>
  );
}

export default Hero;
