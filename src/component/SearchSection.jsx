import React from "react";

const SearchSection = () => {
  return (
    <section className="container mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="md:col-span-2 border border-gray-300 rounded-lg p-6">
          <h2 className="text-lg font-semibold">Still not found?</h2>
          <p className="text-gray-500 text-sm mb-4">Tell us what you are looking for</p>


          <h3 className="text-sm font-medium text-gray-700 mb-3">Popular Searches</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex items-center space-x-3">
              <div className="bg-orange-100 p-3 rounded-lg">
                <img src="https://img.icons8.com/ios-filled/50/FD7E14/export.png" alt="icon" className="w-5" />
              </div>
              <div>
                <p className="font-semibold text-sm">Dubai - Marina</p>
                <a href="#" className="text-orange-500 text-xs">View all Listings →</a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-orange-100 p-3 rounded-lg">
                <img src="https://img.icons8.com/ios-filled/50/FD7E14/export.png" alt="icon" className="w-5" />
              </div>
              <div>
                <p className="font-semibold text-sm">Downtown area</p>
                <a href="#" className="text-orange-500 text-xs">View all Listings →</a>
              </div>
            </div>
          </div>


          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 text-sm text-gray-700 gap-y-2">
            <li>• Flats for Rent in Whitefield</li>
            <li>• Flats for Rent in Marathahalli</li>
            <li>• Flats for Rent in Sarjapur Road</li>
            <li>• Flats for Rent in Hebbal</li>
            <li>• Flats for Rent in Koramangala</li>
            <li>• Flats for Rent in Kanakapura</li>
            <li>• Flats for Rent in Dubai</li>
            <li>• Flats for Rent in Bellandur</li>
          </ul>
        </div>


        <div className="bg-orange-500 text-white p-6 rounded-lg flex flex-col justify-center text-center">
          <div className="flex justify-center mb-3">
            <img src="https://img.icons8.com/ios-filled/50/FFFFFF/compass.png" alt="compass" className="w-10" />
          </div>
          <h2 className="text-xl font-bold">Buyer's guide</h2>
          <p className="text-sm mt-2">The complete guide to locating and purchasing a home in Dubai</p>
          <button className="bg-white text-gray-700 mt-4 py-2 px-5 rounded-lg text-sm font-medium">
            Download PDF file
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
