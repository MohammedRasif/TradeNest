import { AiOutlineBars } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";

const Sidebar = () => {
    const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };


    return (
        <div>
             <>
      {/* Small Screen Navbar */}
      <div className="bg-green-500  flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer  p-4 font-bold">
          <h3 className="text-xl text-white font-semibold text-center lg:-ml-4">Trade<span className="text-green-900">Nest</span></h3>

          </div>
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
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden text-white bg-green-500 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden   md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-green-500 mx-auto">
              <Link to="/">
                <h3 className="text-3xl font-semibold text-center lg:-ml-4">Trade<span className="text-green-900">Nest</span></h3>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          
        </div>

        <div>
          <hr />

         
          
          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-green-700    transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
        </div>
    );
};

export default Sidebar;