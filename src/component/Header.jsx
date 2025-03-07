import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full mb-1">

      <div className="bg-orange-400 text-white text-sm py-3 text-center">
        Usage of Illegal Property Images to upload content showing area in non-standard/Illegal units is prohibited
        <button className="ml-3 bg-white text-black text-xs px-3 py-1 rounded-full">
          Learn More
        </button>
      </div>


      <nav className="flex justify-between items-center px-6 py-4 shadow-md">

        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>

        </button>


        <div className="text-xl font-bold flex items-center">
          <span className="text-black">ABC</span>
          <span className="text-green-600">PROPERTIES</span>
        </div>


        <ul className="hidden md:flex space-x-6 text-gray-700 text-sm font-medium">
          <li className="hover:text-black cursor-pointer">Buy</li>
          <li className="text-orange-500 font-semibold cursor-pointer">Rent</li>
          <li className="hover:text-black cursor-pointer">Navigator's Edge</li>
          <li className="hover:text-black cursor-pointer">Our Agents</li>
          <li className="hover:text-black cursor-pointer">Blogs & Insights</li>
          <li className="hover:text-black cursor-pointer">New Launches</li>
          <li className="hover:text-black cursor-pointer">About Us</li>
          <li className="hover:text-black cursor-pointer">Help & Support</li>
        </ul>

        <button className="hidden md:block bg-orange-100 text-black font-semibold px-4 py-2 rounded-full">
          Sell Property
        </button>
      </nav>

      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-3 py-3 bg-gray-100">
          <li className="hover:text-black cursor-pointer">Buy</li>
          <li className="text-orange-500 font-semibold cursor-pointer">Rent</li>
          <li className="hover:text-black cursor-pointer">Navigator's Edge</li>
          <li className="hover:text-black cursor-pointer">Our Agents</li>
          <li className="hover:text-black cursor-pointer">Blogs & Insights</li>
          <li className="hover:text-black cursor-pointer">New Launches</li>
          <li className="hover:text-black cursor-pointer">About Us</li>
          <li className="hover:text-black cursor-pointer">Help & Support</li>
          <button className="bg-orange-100 text-black font-semibold px-4 py-2 rounded-full">
            Sell Property
          </button>
        </ul>
      )}
    </header>
  );
};

export default Header;
