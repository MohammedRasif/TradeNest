import { AiOutlineBars } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { MdProductionQuantityLimits } from "react-icons/md";
import { GoChevronRight } from "react-icons/go";

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(true);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  // Close sidebar when an item is clicked on small screens
  const handleCloseSidebar = () => {
    setActive(true);
  };

  // State to toggle the dropdowns individually
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isUsersOpen, setIsUsersOpen] = useState(false);

  // Toggle individual dropdowns
  const toggleProductsDropdown = () => {
    setIsProductsOpen(!isProductsOpen);
    if (isUsersOpen) setIsUsersOpen(false); // Close Users dropdown if it's open
  };

  const toggleUsersDropdown = () => {
    setIsUsersOpen(!isUsersOpen);
    if (isProductsOpen) setIsProductsOpen(false); // Close Products dropdown if it's open
  };

  return (
    <div>
      <>
        {/* Small Screen Navbar */}
        <div className="bg-green-500 flex justify-between md:hidden">
          <div className="block cursor-pointer p-4 font-bold">
            <h3 className="text-xl text-white font-semibold text-center lg:-ml-4">
              Trade<span className="text-green-900">Nest</span>
            </h3>
          </div>
          <button
            onClick={handleToggle} 
            className="mobile-menu-button p-4 focus:outline-none focus:bg-green-400"
          >
            <AiOutlineBars className="h-5 w-5" />
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden text-white bg-green-500 lg:w-72 md:72 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
            isActive && "-translate-x-full"
          }  md:translate-x-0  transition duration-200 ease-in-out`}
        >
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg justify-center items-center bg-green-500 mx-auto">
              <Link to="/">
                <h3 className="text-3xl font-semibold text-center lg:-ml-4">
                  Trade<span className="text-green-900">Nest</span>
                </h3>
              </Link>
            </div>

            {/* Nav Items */}
            <div className="flex flex-col justify-between flex-1 mt-6 space-y-4">
              <Link onClick={handleCloseSidebar}>
                <button className="flex justify-start lg:text-[19px] w-full md:text-[19px] pb-2 text-[17px] hover:bg-green-700 p-2">
                  <h1 className="font-semibold">🏠 Dashboard</h1>
                </button>
              </Link>

              {/* Products Dropdown */}
              <button onClick={toggleProductsDropdown}>
                <div className="flex items-center justify-between space-x-1 lg:text-[19px] md:text-[19px] text-[17px] cursor-pointer hover:bg-green-700 p-2">
                  <div className="flex items-center space-x-2 pl-1">
                    <MdProductionQuantityLimits />
                    <h1 className="font-semibold">Products</h1>
                  </div>
                  <GoChevronRight
                    className={`transition-transform duration-300 pt-1 font-extrabold text-2xl ${
                      isProductsOpen ? "rotate-90" : ""
                    }`}
                  />
                </div>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isProductsOpen ? "max-h-40" : "max-h-0"
                }`}
              >
                <Link to="/dashboard/addProduct" onClick={handleCloseSidebar}>
                  <div className="mt-2 ml-6 p-2 bg-green-600 shadow-lg hover:bg-green-700">
                    <h1 className="lg:text-lg md:text-lg text-[15px] text-white">🛒 Add Product</h1>
                  </div>
                </Link>
                <Link to="/dashboard/editProduct" onClick={handleCloseSidebar}>
                  <div className="mt-2 ml-6 p-2 bg-green-600 shadow-lg hover:bg-green-700">
                    <h1 className="lg:text-lg md:text-lg text-[15px] text-white">✏️ Edit Product</h1>
                  </div>
                </Link>
                <Link to="/dashboard/viewProduct" onClick={handleCloseSidebar}>
                  <div className="mt-2 ml-6 p-2 bg-green-600 shadow-lg hover:bg-green-700">
                    <h1 className="lg:text-lg md:text-lg text-[15px] text-white">👁️ View Product</h1>
                  </div>
                </Link>
              </div>

              {/* Categories */}
              <Link onClick={handleCloseSidebar}>
                <button className="flex justify-start lg:text-[19px] w-full md:text-[19px] -mt-5 pb-2 text-[17px] hover:bg-green-700 p-2">
                  <h1 className="font-semibold">📂 Categories</h1>
                </button>
              </Link>

              {/* Orders */}
              <Link onClick={handleCloseSidebar}>
                <button className="flex justify-start lg:text-[19px] w-full md:text-[19px] pb-2 text-[17px] hover:bg-green-700 p-2">
                  <h1 className="font-semibold">📦 Orders</h1>
                </button>
              </Link>

              {/* Users Dropdown */}
              <div>
                <button onClick={toggleUsersDropdown} className="w-full">
                  <div className="flex items-center  justify-between space-x-1 lg:text-[19px] md:text-[19px] text-[17px] cursor-pointer hover:bg-green-700 p-2">
                    <div className="flex items-center space-x-2 pl-1">
                      <h1 className="font-semibold">👥 User</h1>
                    </div>
                    <GoChevronRight
                      className={`transition-transform duration-300 pt-1 font-extrabold text-2xl ${
                        isUsersOpen ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isUsersOpen ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <Link to="/dashboard/viewUser" onClick={handleCloseSidebar}>
                    <div className="mt-2 ml-6 p-2 bg-green-600 shadow-lg hover:bg-green-700">
                      <h1 className="lg:text-lg md:text-lg text-[15px] text-white">👁️ View User</h1>
                    </div>
                  </Link>
                  <Link to="/dashboard/editUser" onClick={handleCloseSidebar}>
                    <div className="mt-2 ml-6 p-2 bg-green-600 shadow-lg hover:bg-green-700">
                      <h1 className="lg:text-lg md:text-lg text-[15px] text-white">✏️ Edit User</h1>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Reviews */}
              <Link to="/dashboard/review" onClick={handleCloseSidebar}>
                <button className="flex justify-start lg:text-[19px] w-full md:text-[19px] pb-2 text-[17px] hover:bg-green-700 p-2">
                  <h1 className="font-semibold">📝 Reviews</h1>
                </button>
              </Link>

              {/* Payments */}
              <Link onClick={handleCloseSidebar}>
                <button className="flex justify-start lg:text-[19px] w-full md:text-[19px] pb-2 text-[17px] hover:bg-green-700 p-2">
                  <h1 className="font-semibold">💳 Payments</h1>
                </button>
              </Link>
            </div>
          </div>

          <div>
            <hr />
            <button
              onClick={() => {
                logOut();
                handleCloseSidebar(); // Close sidebar on logout
              }}
              className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-green-700 transition-colors duration-300 transform"
            >
              <GrLogout />
              <span className="mx-4 font-medium">Logout</span>
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default Sidebar;
