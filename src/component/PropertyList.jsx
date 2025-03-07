import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const PropertyList = () => {
  const [mapView, setMapView] = useState(false);
  const [sortOption, setSortOption] = useState("Newest First");

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between w-full p-4 bg-white shadow-sm rounded-lg">
      <div className="ml-10">
        <h2 className="text-lg font-semibold">Properties for rent in United Arab Emirates</h2>
        <p className="text-gray-500 text-sm">10 listings</p>
      </div>
      <div className="flex items-center space-x-4 mt-3 md:mt-0">

        <label className="flex items-center bg-gray-100 px-4 py-2 rounded-lg cursor-pointer">
          <span className="text-gray-700 text-sm mr-2">Map View</span>
          <input
            type="checkbox"
            className="hidden"
            checked={mapView}
            onChange={() => setMapView(!mapView)}
          />
          <div className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 transition ${mapView ? 'bg-blue-500' : ''}`}>
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${mapView ? 'translate-x-5' : ''}`}></div>
          </div>
        </label>
        

        <div className="relative">
          <button className="flex items-center bg-gray-100 px-4 py-2 rounded-lg text-gray-700 text-sm">
            {sortOption} <FaChevronDown className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
