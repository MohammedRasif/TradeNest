import React, { useState } from "react";
import { FaChevronRight, FaGoogle, FaHeart, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user, logOut, loading } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [activeTab, setActiveTab] = useState("categories"); // Controls active tab

  const categories = [
    { name: "Vegetables & Fruits", icon: "🍏", path: "/vegetables" },
    { name: "Vegan Meat", icon: "🍖", path: "/Vegan" },
    { name: "Seafood", icon: "🦐", path: "/Seafood" },
    { name: "Dairy", icon: "🧀", path: "/Dairy" },
    { name: "Bakery", icon: "🥖", path: "/Bakery" },
    { name: "Beverages", icon: "🥤", path: "/Beverages" },
    { name: "Weekly Discounts", icon: "💸", path: "/Weekly" },
  ];

  const menuItems = [
    { name: "Item 1", path: "/item1" },
    { name: "Item 2", path: "/item2" },
    { name: "Item 3", path: "/item3" },
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
            Trade<span className="text-green-600">Nest</span>
          </h1>
        </div>

        {/* Search bar for lg, hidden on md and sm */}
        <div className="hidden lg:flex ">
          <input
            type="search"
            placeholder="Search ..."
            className="border-l border-t border-b border-black w-64 lg:w-[600px] pt-2 pb-2 px-2 py-2 border-dashed rounded-l-full focus:outline-dashed focus:ring-0"
          />
          <button className="relative right-12 bg-green-600 rounded-l-none border-b border-green-600 border-t-border-orange-600 flex text-white pt-[10px] pr-4 pb-[9px] pl-4 rounded-r-full focus:outline-none focus:ring-0">
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
          <div className="navbar-end">
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10  ring ring-black rounded-full">
                      <img className="" alt="User Image" src={user?.photoURL} />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <img
                      src={user?.photoURL}
                      className="h-20 w-20 rounded-full ml-14"
                      alt=""
                    />
                    <p className="text-blue-500 text-center text-xl">
                      {user?.displayName}
                    </p>

                    <Link to="/dashboard/profile">
                      <h1 className="px-3 py-2 bg-gray-200 my-1 font-bold">
                        My Profile
                      </h1>
                    </Link>

                    <li>
                      <button
                        onClick={logOut}
                        className="btn text-white  bg-green-500 hover:bg-green-800 hover:text-white"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <Link to="/login">
                <button className="relative bg-green-200/50 hover:bg-green-300/50 cursor-pointer rounded-full p-2">
                  <FaUserAlt className="text-lg text-green-600" />
                </button>
              </Link>
            )}
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

        <div className="w-full h-screen bg-gray-100 flex flex-col items-center">
          {/* Tabs for switching between Categories and Menu */}
          <div className="flex justify-center w-full border-b border-gray-300">
            <button
              onClick={() => setActiveTab("categories")}
              className={`w-1/2 py-3 text-center ${
                activeTab === "categories"
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-500"
              }`}
            >
              Categories
            </button>
            <button
              onClick={() => setActiveTab("menu")}
              className={`w-1/2 py-3 text-center ${
                activeTab === "menu"
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-500"
              }`}
            >
              Menu
            </button>
          </div>

          {/* Content for Categories */}
          <div className="flex-1 overflow-y-auto w-full">
            {activeTab === "categories" && (
              <ul className="mt-4">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center px-6 py-3 hover:bg-gray-200"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{category.icon}</span>
                      <span className="text-lg text-gray-700">
                        {category.name}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* Content for Menu */}
            {activeTab === "menu" && (
              <ul className="mt-4">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center px-6 py-3 hover:bg-gray-200"
                  >
                    <div className="text-lg text-gray-700">{item.name}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Right-side icons for mobile */}
        <div className="flex justify-center md:ml-48 ml-14 space-x-2 sm:space-x-4 mt-4">
          {/* Cart Icon */}
          <div className="relative flex items-center justify-center bg-orange-200/50 hover:bg-green-300/50 cursor-pointer rounded-full w-10 h-10">
            <FaCartShopping className="text-xl text-green-600" />
            <span className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-green-600 px-1 py-[1px] text-[10px] text-white">
              9+
            </span>
          </div>
          <div className="relative flex items-center justify-center bg-green-200/50 hover:bg-green-300/50 cursor-pointer rounded-full w-10 h-10">
            <IoGitCompareOutline className="text-xl text-green-600" />
            <span className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-green-600 px-1 py-[1px] text-[10px] text-white">
              9+
            </span>
          </div>
          <div className="relative flex items-center justify-center bg-green-200/50 hover:bg-green-300/50 cursor-pointer rounded-full w-10 h-10">
            <FaHeart className="text-xl text-green-600" />
            <span className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-green-600 px-1 py-[1px] text-[10px] text-white">
              9+
            </span>
          </div>

          {/* User Dropdown */}
          <div className="navbar-end ">
            {user ? (
              <>
                <div className="dropdown dropdown-end ">
                  {/* Avatar Button */}
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-8 sm:w-10 md:w-12 ring ring-black rounded-full">
                      <img
                        className="object-cover"
                        alt="User Image"
                        src={user?.photoURL}
                      />
                    </div>
                  </div>

                  {/* Dropdown Menu */}
                  <ul
                    tabIndex={0}
                    className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-44 sm:w-52"
                  >
                    {/* Profile Image */}

                    <div className="flex justify-center mb-2">
                      <img
                        src={user?.photoURL}
                        className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full"
                        alt=""
                      />
                    </div>

                    {/* User's Name */}
                    <p className="text-blue-500 text-center text-sm sm:text-lg md:text-xl">
                      {user?.displayName}
                    </p>

                    {/* My Profile Link */}
                    <Link to="/dashboard/profile">
                      <h1 className="px-3 py-2 bg-gray-200 my-1 font-bold text-sm sm:text-base text-center">
                        My Profile
                      </h1>
                    </Link>

                    {/* Logout Button */}
                    <li>
                      <button
                        onClick={logOut}
                        className="btn w-full text-white text-sm sm:text-base bg-green-500 hover:bg-green-800 hover:text-white"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <Link to="/login">
                <button className="relative bg-green-200/50 hover:bg-green-300/50 cursor-pointer rounded-full p-2">
                  <FaUserAlt className="text-lg text-green-600" />
                </button>
              </Link>
            )}
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
                <ul className="mt-8 space-y-4 ">
                  {activeTab === "categories" && (
                    <ul className="mt-4">
                      {categories.map((category, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center px-2 py-3  hover:bg-gray-200"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-xl">{category.icon}</span>
                            <span className="text-lg text-gray-700">
                              {category.name}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </ul>
              </div>
            </div>

            {/* Large Screen Menu Items */}
            <nav className="hidden lg:flex space-x-6">
              <Link to="promotions" className="text-gray-700 hover:text-green-600">
                Promotions
              </Link>
              {/* <Link to="stores" className="text-gray-700 hover:text-green-600">
                Stores
              </Link>
              <Link to="outContacts" className="text-gray-700 hover:text-green-600">
                Our Contacts
              </Link> */}
              <Link to="delivery" className="text-gray-700 hover:text-green-600">
                Delivery & Return
              </Link>
              <Link to="outlet" className="text-gray-700 hover:text-green-600">
                Outlet
              </Link>
            </nav>
            {/* support  */}
            <div className="flex items-center pl-[570px] font-semibold  py-2">
              <div className="flex items-center space-x-6">
                <div className="flex items-center ">
                  <MdOutlineLocationOn className="text-green-600 text-[20px]" />
                  <h1 className="ml-1 mt-1 text-sm">Anowara</h1>
                </div>
                <div className="flex items-center">
                  <BiSupport className="text-green-600 text-[20px]" />
                  <h1 className="ml-2  mt-1 text-sm">01976-600215</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
