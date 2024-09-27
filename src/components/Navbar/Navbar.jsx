import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { IoGitCompareOutline } from 'react-icons/io5';

const Navbar = () => {
    return (
        <div >
            <div className='flex items-center'>

            <div>
                <img src="https://res.cloudinary.com/dqb5izi3a/image/upload/v1727444853/ntlxfntthlwu1oevmpgm.png" className='h-16' alt="" />

            </div>
            <div>
                <h1 className='text-4xl font-josefin font-semibold mt-5'>Trade<span className='text-green-600'>Nast</span></h1>
            </div>
            <div className='flex lg:ml-96 mt-3'>
            <input
          type="search"
          placeholder="Search ..."
          className="border-l border-t border-b border-black w-96 pt-2 pb-2 px-2 py-2 border-dashed rounded-l-full focus:outline-dashed  focus:ring-0"
        />

        <button className="relative right-12 bg-green-500 rounded-l-none border-b border-green-500 border-t-border-orange-500 flex text-white   pt-[8px]  pr-4 pb-[9px] pl-4  rounded-r-full focus:outline-none focus:ring-0">
          Search
        </button>
            </div>
            </div>

            {/* header section */}
            <header className="bg-blue-50">
        <div className="container mx-auto flex justify-between items-center py-4">
            {/* <!-- Left Section --> */}
            <div className="flex items-center space-x-6">
                {/* <!-- Categories Button --> */}
                <button className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>All Categories</span>
                </button>

                {/* <!-- Menu Items --> */}
                <nav className="hidden lg:flex space-x-6">
                    <a href="#" className="text-gray-700 hover:text-green-500">Promotions</a>
                    <a href="#" className="text-gray-700 hover:text-green-500">Stores</a>
                    <a href="#" className="text-gray-700 hover:text-green-500">Our Contacts</a>
                    <a href="#" className="text-gray-700 hover:text-green-500">Delivery & Return</a>
                    <a href="#" className="text-gray-700 hover:text-green-500">Outlet</a>
                </nav>
            </div>

            {/* <!-- Right Section --> */}
            <div className="flex items-center space-x-6">
                {/* <!-- Country Dropdown --> */}
                <div className="relative">
                    <select className="bg-transparent text-gray-700 border-none focus:ring-0">
                        <option>USD</option>
                        <option>Canada</option>
                        <option>UK</option>
                    </select>
                </div>

                {/* <!-- Currency Dropdown --> */}
                <div className="relative">
                    <select className="bg-transparent text-gray-700 border-none focus:ring-0">
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                    </select>
                </div>

                {/* <!-- User Icon Section --> */}
                <div className="flex space-x-4">
                <div className="hidden lg:flex space-x-3">
       <div className="relative bg-orange-200/50 hover:bg-green-300/50 cursor-pointer  rounded-full p-2">
          <FaCartShopping className="text-lg text-green-600 " />
          <span className="absolute -right-2 -ml-1 -top-2 rounded-[100%]  bg-green-500 px-1 py-[1px] text-[10px] text-white">9+</span>
        </div>
        <div className="relative bg-green-200/50 hover:bg-green-300/50 cursor-pointer  rounded-full p-2">
          <IoGitCompareOutline className="text-lg text-green-600 " />
          <span className="absolute -right-2 -ml-1 -top-2 rounded-[100%]  bg-green-500 px-1 py-[1px] text-[10px] text-white">9+</span>
        </div>
        <div className="relative bg-green-200/50 hover:bg-green-300/50 cursor-pointer  rounded-full p-2">
          <FaHeart className="text-lg text-green-600 " />
          <span className="absolute -right-2 -ml-1 -top-2 rounded-[100%]  bg-green-500 px-1 py-[1px] text-[10px] text-white">9+</span>
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