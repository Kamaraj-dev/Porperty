import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdLocationOn, MdBusiness } from "react-icons/md";
import { BiMap } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { BsFilter } from "react-icons/bs";
import PropertyFilter from "./Home/PropertyFilter";

const SearchBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceOpen, setPriceOpen] = useState(false);
  const [price, setPrice] = useState(750000);
  const [manualPrice, setManualPrice] = useState("");
  const [propertyType, setPropertyType] = useState("Rent");

  const suggestions = [
    { icon: <MdLocationOn className="text-orange-400" />, label: "City, Towns, Texas" },
    { icon: <BiMap className="text-orange-400" />, label: "Areas" },
    { icon: <MdBusiness className="text-orange-400" />, label: "Commercial, Rental" },
  ];

  return (
    <div className="w-full px-4 mb-1">

      <div className="md:hidden flex items-center bg-white shadow-lg rounded-lg p-2">

        <div className="flex items-center bg-gray-100 px-4 py-3 rounded-lg flex-1">
          <FaSearch className="text-orange-500" />
          <input
            type="text"
            placeholder="Search property"
            className="ml-2 w-full outline-none bg-transparent text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchOpen(true)}
            onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
          />
        </div>


        <button
          className="ml-2 bg-blue-500 text-white p-3 rounded-lg"
          onClick={() => setPriceOpen(!priceOpen)}
        >
          <BsFilter className="text-lg" />
        </button>
      </div>


      {searchOpen && (
        <div className="md:hidden absolute left-0 mt-1 w-full bg-orange-50 shadow-lg rounded-lg py-2">
          {suggestions.map((item, index) => (
            <div key={index} className="flex items-center px-4 py-2 hover:bg-orange-100 cursor-pointer">
              {item.icon}
              <span className="ml-2 text-gray-700 text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      )}


      {priceOpen && (
        <div className="md:hidden relative left-0 mt-2 w-full bg-white shadow-lg rounded-lg p-4">
          <div className="text-center font-bold text-gray-700">{price.toLocaleString()}</div>
          <input
            type="range"
            min="50000"
            max="2000000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full my-2"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>Min</span>
            <span>Max</span>
          </div>


          <input
            type="text"
            placeholder="Enter Amount in AED"
            className="w-full mt-3 px-3 py-2 border border-gray-300 rounded-lg m-1 text-sm outline-none focus:border-orange-500"
            value={manualPrice}
            onChange={(e) => setManualPrice(e.target.value.replace(/\D/, ""))} // Allow only numbers
            onBlur={() => {
              if (manualPrice) setPrice(Number(manualPrice));
            }}
          />
          <PropertyFilter className=""/>
        </div>
      )}


      <div className="hidden md:flex items-center bg-white shadow-lg rounded-lg p-2 w-full max-w-screen-xl mx-auto">

        <div className="flex bg-gray-100 rounded-lg p-1">
          {["Buy", "Rent"].map((type) => (
            <button
              key={type}
              className={`px-4 py-3 rounded-lg ${propertyType === type ? "bg-blue-500 text-white" : "text-gray-700"}`}
              onClick={() => setPropertyType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="relative flex-1 mx-2">
          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-lg w-full">
            <FaSearch className="text-orange-500" />
            <input
              type="text"
              placeholder="Search property"
              className="ml-2 w-full outline-none bg-transparent text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
            />
          </div>

          {searchOpen && (
            <div className="absolute left-0 mt-1 w-full bg-orange-50 shadow-lg rounded-lg py-2">
              {suggestions.map((item, index) => (
                <div key={index} className="flex items-center px-4 py-2 hover:bg-orange-100 cursor-pointer">
                  {item.icon}
                  <span className="ml-2 text-gray-700 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>


        <div className="relative">
          <button
            className="flex items-center bg-gray-100 px-6 py-3 rounded-lg"
            onClick={() => setPriceOpen(!priceOpen)}
          >
            Price <IoIosArrowDown className="ml-2 text-gray-500" />
          </button>

          {priceOpen && (
            <div className="absolute left-0 mt-1 w-72 bg-white shadow-lg rounded-lg p-4">
              <div className="text-center font-bold text-gray-700">{price.toLocaleString()}</div>
              <input
                type="range"
                min="50000"
                max="2000000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full my-2"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Min</span>
                <span>Max</span>
              </div>

              <input
                type="text"
                placeholder="Enter Amount in AED"
                className="w-full mt-3 px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-orange-500"
                value={manualPrice}
                onChange={(e) => setManualPrice(e.target.value.replace(/\D/, ""))}
                onBlur={() => {
                  if (manualPrice) setPrice(Number(manualPrice));
                }}
              />
            </div>
          )}
        </div>

        <button className="ml-2 bg-orange-500 text-white px-8 py-3 rounded-lg">Find</button>
      </div>
    </div>
  );
};

export default SearchBar;
