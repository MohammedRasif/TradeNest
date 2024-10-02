import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Pages/Banner";
import Marque from "./components/Pages/Marque";
import VeganMeat from "./components/VeganMeat/VeganMeat";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Marque></Marque>
            <VeganMeat></VeganMeat>
        </div>
    );
};

export default Home;