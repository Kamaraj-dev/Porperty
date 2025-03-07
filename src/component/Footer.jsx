import React from "react";
import { FaInstagram, FaTwitter, FaDiscord, FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="container mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

          <div>
            <h3 className="font-semibold mb-3">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 text-2xl">
              <FaInstagram className="cursor-pointer hover:text-orange-500" />
              <FaTwitter className="cursor-pointer hover:text-blue-400" />
              <FaDiscord className="cursor-pointer hover:text-purple-500" />
            </div>
          </div>


          <div>
            <h3 className="font-semibold mb-3">Get In Touch</h3>
            <p className="flex items-center justify-center md:justify-start text-sm">
              <MdLocationOn className="mr-2 text-lg text-gray-500" />
              DAMAC Smart Heights - Dubai, UAE
            </p>
            <p className="flex items-center justify-center md:justify-start mt-2 text-sm">
              <MdPhone className="mr-2 text-lg text-gray-500" />
              +971 52 975 8969
            </p>
          </div>


          <div>
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="text-sm space-y-2">
              <li>Rent Services</li>
              <li>Buy/Sell Property</li>
              <li>Home Services</li>
              <li>Property Lawyers</li>
              <li>Design & Decor</li>
              <li>Property Services</li>
              <li>Agents</li>
            </ul>
          </div>


          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-3 flex items-center justify-center md:justify-start">
              <FaWhatsapp className="text-green-500 mr-2 text-xl" />
              Chat with us
            </h3>
            <p className="text-sm mb-3">
              We provide the most accurate information about the homes that you are looking for.
            </p>
            <button className="bg-green-500 text-white px-5 py-2 rounded-lg text-sm">
              Chat now
            </button>
          </div>
        </div>


        <hr className="my-5 border-gray-300" />


        <div className="flex flex-col md:flex-col justify-between items-center text-sm text-gray-500">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-700">About us</a>
            <a href="#" className="hover:text-gray-700">Terms & Conditions</a>
            <a href="#" className="hover:text-gray-700">Private Policy</a>
          </div>
          <hr className="my-5 border-gray-300" />

          <div className="relative flex items-center bg-gray-300 px-4 py-2 rounded-lg cursor-pointer">
            <span className="mr-2 font-semibold">CHOOSE</span>
            <IoIosArrowDown className="text-gray-700" />
          </div>

          <hr className="my-6 border-gray-300" />
          <div className="flex flex-wrap justify-center md:justify-end mt-4 md:mt-0 space-x-3 text-gray-700 font-medium">
            <span className="cursor-pointer hover:text-gray-900">DUBAI</span>
            <span className="cursor-pointer hover:text-gray-900">BAHRAIN</span>
            <span className="cursor-pointer hover:text-gray-900">USA</span>
            <span className="cursor-pointer hover:text-gray-900">UAE</span>
            <span className="cursor-pointer hover:text-gray-900">UK</span>
            <span className="cursor-pointer hover:text-gray-900">SAUDI</span>
            <span className="cursor-pointer hover:text-gray-900">QATAR</span>
            <span className="cursor-pointer hover:text-gray-900">INDIA</span>
            <span className="cursor-pointer hover:text-gray-900">OMAN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
