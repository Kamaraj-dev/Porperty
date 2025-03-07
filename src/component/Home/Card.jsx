import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { MdLocationOn, MdVerified } from "react-icons/md";
import img from "./img/download.jpg";
import { FaBed, FaCarAlt } from "react-icons/fa";
import { TbBath } from "react-icons/tb";
import { MdCheckCircle, MdHeadsetMic } from "react-icons/md";
import { LuMoveUpRight } from "react-icons/lu";


const Card = (props) => {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className="md:flex max-w-4xl mx-auto bg-white shadow-lg rounded-lg m-1 overflow-hidden">
      <div className="md:w-1/3 relative">
        <img src={img}
          className=" h-64 object-cover"
        />
        <div className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 rounded text-sm">
          Listed 5 Days ago
        </div>
        <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded flex items-center text-sm">
          <MdVerified className="mr-1" /> Verified by Atharid
        </div>
      </div>


      <div className="p-4">
        <h2 className="text-xl font-semibold">{props.name}</h2>
        <p className="text-orange-500 text-2xl font-bold">{props.price} AED YEARLY</p>
        <div className="flex items-center text-gray-600 mt-1">
          <MdLocationOn className="mr-1 text-blue-500" />
          <span>{props.location}</span>
        </div>
        <p className="flex text-gray-600 text-sm mt-2">
          {props.feature.map((data,index)=><div key={index}> {data} | </div>)}
        </p>
    <hr className="m-2 "/>
        <div className="bg-white rounded-lg shadow-md">

      <div className="flex items-center justify-between text-gray-700">
        <div className="flex-col items-center">
          <div className="flex items-center text-orange-500">
            <MdCheckCircle />
            <span>Ready to move</span>
          </div>
          <div className="flex items-center text-orange-500">
            <MdHeadsetMic  />
            <span>Premium customer support</span>
          </div>
        </div>
        <div className="text-teal-500 flex items-center text-md font-semibold">
          <LuMoveUpRight className="mr-1" />
          <span>1500.00 square ft</span>
        </div>
      </div>


      <div className="mt-3 flex items-center gap-3 text-gray-700">
        <div className="flex items-center bg-gray-100 p-2 rounded-md">
          <FaBed className="mr-2" /> <span>1 Bedroom</span>
        </div>
        <div className="flex items-center bg-gray-100 p-2 rounded-md">
          <TbBath className="mr-2" /> <span>1 Bathroom</span>
        </div>
        <div className="flex items-center bg-gray-100 p-2 rounded-md">
          <FaCarAlt className="mr-2" /> <span>Parking available</span>
        </div>
      </div>
    </div>


        <div className="mt-4 flex space-x-2">
          <button 
            className={`flex-1 flex items-center justify-center py-2 rounded-lg transition duration-200 ${activeButton === 'whatsapp' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white hover:bg-green-600'}`}
            onClick={() => setActiveButton('whatsapp')}
          >
            <FaWhatsapp className="mr-2" /> WHATSAPP
          </button>
          <button 
            className={`flex items-center justify-center p-3 rounded-lg transition duration-200 ${activeButton === 'phone' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-orange-500 hover:text-white'}`}
            onClick={() => setActiveButton('phone')}
          >
            <FiPhone />
          </button>
          <button 
            className={`flex items-center justify-center p-3 rounded-lg transition duration-200 ${activeButton === 'mail' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-orange-500 hover:text-white'}`}
            onClick={() => setActiveButton('mail')}
          >
            <FiMail />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
