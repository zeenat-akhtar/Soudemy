import React from "react";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
       
        <a href="#" className="text-2xl font-bold text-gray-800">
          Soudemy
        </a>

       
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="text-gray-600 text-lg font-semibold hover:text-gray-900">
            Products
          </a>
          <a href="#about" className="text-gray-600 text-lg font-semibold hover:text-gray-900">
            Features
          </a>
          <a href="#services" className="text-gray-600 text-lg font-semibold hover:text-gray-900">
            Reviews
          </a>
          <a href="#contact" className="text-gray-600 text-lg font-semibold hover:text-gray-900">
            Pricing
          </a>
          <button className="bg-[#0E8388] text-white px-4 py-2 rounded-xl">
            Sign Up
          </button>
        </nav>

       
        <button className="md:hidden text-gray-600 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
