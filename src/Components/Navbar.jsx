import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
function Navbar() {
  const [Nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);

  const handlenav = () => {
    setNav(!Nav);
    setLogo(!logo);
  };
  return (
    <div className=" flex w-full justify-between items-center h-20 px-4 bg-white z-10 text-black  sticky top-2 left-0">
      <div>
        <h1 onClick={handlenav} className={logo ? "hidden" : "block"}>
          TravelBee.
        </h1>
      </div>

      <ul className=" cursor-pointer hidden md:flex">
        <li className="overlay-animation">Home</li>
        <li className="overlay-animation">Destination</li>
        <li className="overlay-animation">Travel</li>
        <li className="overlay-animation">View</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch
          size={20}
          className="mx-2 cursor-pointer text-7xl font-bold	"
        />
        <BsPerson size={20} className="mx-2 cursor-pointer " />
      </div>
      <div onClick={handlenav} className="md:hidden">
        {Nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
        {/* <HiOutlineMenuAlt4 size={20} /> */}
      </div>
      {/* Mobile menue */}
      <div
        onClick={handlenav}
        className={
          Nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul className="cursor-pointer">
          <h1> TravelBee.</h1>
          <li className="border-b">Home</li>
          <li className="border-b ">Destination</li>
          <li className="border-b ">Travel</li>
          <li className="border-b ">View</li>
          <div className="flex flex-col">
            <button className="my-6 ">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
