import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const DashboardLayout = () => {
    return (
       
            <div className="relative min-h-screen md:flex font-josefin ">
            {/* sidebar */}
            <Sidebar></Sidebar>
            {/* Outlet --> Dynamic content */}
            <div className="flex-1 md:ml-64 lg:ml-72 bg-slate-100">
            <div className="p-5"><Outlet></Outlet></div>
            </div>
        </div>
      
    );
};

export default DashboardLayout;