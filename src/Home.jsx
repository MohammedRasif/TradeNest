import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Pages/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;