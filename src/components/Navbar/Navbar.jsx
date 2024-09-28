import React, { useState } from "react";
import { FaChevronRight, FaHeart, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoGitCompareOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [activeTab, setActiveTab] = useState('categories'); // Controls active tab

  const categories = [
    { name: 'Vegetables & Fruits', icon: '🍏' },
    { name: 'Vegan Meat', icon: '🍖' },
    { name: 'Seafood', icon: '🦐' },
    { name: 'Dairy', icon: '🧀' },
    { name: 'Bakery', icon: '🥖' },
    { name: 'Beverages', icon: '🥤' },
    { name: 'Weekly Discounts', icon: '💸' },
  ];

  const menuItems = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
  ];

  return (
    <div>
      {/* Navbar container */}
      <div className="flex items-center justify-between px-4 py-3 lg:py-0">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://res.cloudinary.com/dqb5izi3a/image/upload/v1727444853/ntlxfntthlwu1oevmpgm.png"
            className="h-16"
            alt="TradeNast Logo"
          />
          <h1 className="text-2xl lg:text-4xl font-josefin font-semibold">
            Trade<span className="text-green-600">Nast</span>
          </h1>
        </div>

        {/* Search bar for lg, hidden on md and sm */}
        <div className="hidden lg:flex lg:ml-96">
          <input
            type="search"
            placeholder="Search ..."
            className="border-l border-t border-b border-black w-64 lg:w-96 pt-2 pb-2 px-2 py-2 border-dashed rounded-l-full focus:outline-dashed focus:ring-0"
          />
          <button className="relative right-12 bg-green-600 rounded-l-none border-b border-green-600 border-t-border-orange-600 flex text-white pt-[8px] pr-4 pb-[9px] pl-4 rounded-r-full focus:outline-none focus:ring-0">
            Search
          </button>
        </div>

        {/* Right-side icons for lg, hidden on sm/md */}
        <div className="hidden lg:flex items-center space-x-3">
          <div className="relative bg-orange-200/50 hover:bg-green-300/50 cursor-pointer rounded-full p-2">
            <FaCartShopping className="text-lg text-green-600" />
            <span className="absolute -right-2 -top-2 rounded-full bg-green-600 px-1 py-[1px] text-[10px] text-white">
              9+
            </span>
          </div>
          <div className="relative bg-green-200/50 hover:bg-green-300/50 cursor-pointer rounded-full p-2">
            <IoGitCompareOutline className="text-lg text-green-600" />
            <span className="absolute -right-2 -top-2 rounded-full bg-green-600 px-1 py-[1px] text-[10px] text-white">
              9+
            </span>
          </div>
          <div className="relative bg-green-200/50 hover:bg-green-300/50 cursor-pointer rounded-full p-2">
            <FaHeart className="text-lg text-green-600" />
            <span className="absolute -right-2 -top-2 rounded-full bg-green-600 px-1 py-[1px] text-[10px] text-white">
              9+
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden bg-blue-50 px-4 py-2`}
      >
        {/* Search bar for md/sm devices */}
        <div className="flex justify-center mb-4">
          <input
            type="search"
            placeholder="Search ..."
            className="border-l border-t border-b border-black w-64 pt-2 pb-2 px-2 py-2 border-dashed rounded-l-full focus:outline-dashed focus:ring-0"
          />
          <button className="relative right-12 bg-green-600 rounded-l-none border-b border-green-600 border-t-border-orange-600 flex text-white pt-[8px] pr-4 pb-[9px] pl-4 rounded-r-full focus:outline-none focus:ring-0">
            Search
          </button>
        </div>

        {/* Mobile Menu Items */}
        {/* <nav className="flex flex-col space-y-4">
          <h3 className="text-2xl font-bold text-green-600 ">Menu</h3>
          <a href="#" className="text-gray-700 hover:text-green-600">
            Promotions
          </a>
          <a href="#" className="text-gray-700 hover:text-green-600">
            Stores
          </a>
          <a href="#" className="text-gray-700 hover:text-green-600">
            Our Contacts
          </a>
          <a href="#" className="text-gray-700 hover:text-green-600">
            Delivery & Return
          </a>
          <a href="#" className="text-gray-700 hover:text-green-600">
            Outlet
          </a>
          <h3 className="text-2xl font-bold text-green-600 ">Category</h3>

        </nav> */}
         <div className="w-full h-screen bg-gray-100 flex flex-col items-center">
      {/* Tabs for switching between Categories and Menu */}
      <div className="flex justify-center w-full border-b border-gray-300">
        <button
          onClick={() => setActiveTab('categories')}
          className={`w-1/2 py-3 text-center ${activeTab === 'categories' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`}
        >
          Categories
        </button>
        <button
          onClick={() => setActiveTab('menu')}
          className={`w-1/2 py-3 text-center ${activeTab === 'menu' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`}
        >
          Menu
        </button>
      </div>

      {/* Content for Categories */}
      <div className="flex-1 overflow-y-auto w-full">
        {activeTab === 'categories' && (
          <ul className="mt-4">
            {categories.map((category, index) => (
              <li key={index} className="flex justify-between items-center px-6 py-3 hover:bg-gray-200">
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{category.icon}</span>
                  <span className="text-lg text-gray-700">{category.name}</span>
                </div>
                <FaChevronRight className="text-gray-500" />
              </li>
            ))}
          </ul>
        )}

        {/* Content for Menu */}
        {activeTab === 'menu' && (
          <ul className="mt-4">
            {menuItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center px-6 py-3 hover:bg-gray-200">
                <div className="text-lg text-gray-700">{item.name}</div>
                <FaChevronRight className="text-gray-500" />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>

        {/* Right-side icons for mobile */}
        <div className="flex justify-center space-x-4 mt-4">
          <div className="relative bg-orange-200/50 hover:bg-green-300/50 cursor-pointer rounded-full p-2">
            <FaCartShopping className="text-lg text-green-600" />
            <span className="absolute -right-2 -top-2 rounded-full bg-green-600 px-1 py-[1px] text-[10px] text-white">
              9+
            </span>
          </div>
          <div className="relative bg-green-200/50 hover:bg-green-300/50 cursor-pointer rounded-full p-2">
            <IoGitCompareOutline className="text-lg text-green-600" />
            <span className="absolute -right-2 -top-2 rounded-full bg-green-600 px-1 py-[1px] text-[10px] text-white">
              9+
            </span>
          </div>
          <div className="relative bg-green-200/50 hover:bg-green-300/50 cursor-pointer rounded-full p-2">
            <FaHeart className="text-lg text-green-600" />
            <span className="absolute -right-2 -top-2 rounded-full bg-green-600 px-1 py-[1px] text-[10px] text-white">
              9+
            </span>
          </div>
        </div>
      </div>

      {/* Large Screen Categories Dropdown */}
      <header className="bg-blue-50 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center space-x-6">
            <div>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2"
                onClick={toggleMenu}
              >
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>All Categories</span>
              </button>
              {/* Category Menu */}
              <div
                className={`fixed inset-y-0 left-0 z-50 w-full lg:w-64 bg-white shadow-lg p-4 transition-transform duration-300 ease-in-out ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <div
                  className="absolute top-2 left-2 cursor-pointer"
                  onClick={toggleMenu}
                >
                  <FaTimes className="text-xl text-orange-500" />
                </div>
                <ul className="mt-8 space-y-4">
                  <li className="py-2 hover:bg-gray-100">
                    <a href="#">Item 1</a>
                  </li>
                  <li className="py-2 hover:bg-gray-100">
                    <a href="#">Item 2</a>
                  </li>
                  <li className="py-2 hover:bg-gray-100">
                    <a href="#">Item 3</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Large Screen Menu Items */}
            <nav className="hidden lg:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-green-600">
                Promotions
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600">
                Stores
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600">
                Our Contacts
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600">
                Delivery & Return
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600">
                Outlet
              </a>
              
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
