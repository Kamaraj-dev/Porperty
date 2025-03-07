import React from "react";
import { FaFilter } from "react-icons/fa";

const PropertyFilter = () => {
  return (
    <div className="w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl  bg-gray shadow-lg rounded-lg p-4 text-center ">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Filter</h2>
        <FaFilter className="text-gray-600" />
      </div>

      <div className="space-y-2">
        <label className="flex items-center justify-between">
          Mark already seen
          <input type="checkbox" className="toggle-switch" />
        </label>
        <label className="flex items-center justify-between">
          Properties with photos
          <input type="checkbox" className="toggle-switch" />
        </label>
      </div>
      

      <div className="mt-4">
        <h3 className="font-medium">Completion Status</h3>
        <label className="flex items-center">
          <input type="radio" name="completion" className="mr-2" /> Ready
        </label>
        <label className="flex items-center">
          <input type="radio" name="completion" className="mr-2" /> Off-Plan
        </label>
      </div>
      

      <div className="mt-4">
        <h3 className="font-medium">Property Type</h3>
        {[
          "Premium",
          "Apartments",
          "Ready to move",
          "Individual Homes",
          "Townhouse",
          "Penthouse",
        ].map((type) => (
          <label key={type} className="flex items-center">
            <input type="checkbox" className="mr-2" /> {type}
          </label>
        ))}
      </div>
      

      <div className="mt-4">
        <h3 className="font-medium">Furnished Status</h3>
        {["Furnished", "Semi-Furnished", "Un-Furnished"].map((status) => (
          <label key={status} className="flex items-center">
            <input type="checkbox" className="mr-2" /> {status}
          </label>
        ))}
      </div>
      

      <div className="mt-4">
        <h3 className="font-medium">Amenities</h3>
        {[
          "Parking Facility",
          "Security",
          "Gas Pipeline",
          "Lift Facility",
          "Power Backup",
        ].map((amenity) => (
          <label key={amenity} className="flex items-center">
            <input type="checkbox" className="mr-2" /> {amenity}
          </label>
        ))}
      </div>
      

      <div className="mt-4">
        <h3 className="font-medium">BHK Facility</h3>
        {["1BHK", "2BHK", "3BHK", "4BHK", "5BHK", "Studio"].map((bhk) => (
          <label key={bhk} className="flex items-center">
            <input type="checkbox" className="mr-2" /> {bhk}
          </label>
        ))}
      </div>
      
      {/* Bathrooms */}
      <div className="mt-4">
        <h3 className="font-medium">Bathrooms</h3>
        {["1", "2", "3+"].map((bathroom) => (
          <label key={bathroom} className="flex items-center">
            <input type="checkbox" className="mr-2" /> {bathroom}
          </label>
        ))}
      </div>
    </div>
  );
};

export default PropertyFilter;