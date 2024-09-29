import Marquee from "react-fast-marquee";
import { FaShoppingCart, FaCreditCard, FaHeadphones, FaTags, FaTruck } from "react-icons/fa";

const Marque = () => {
  return (
    <div className="my-4">
      <Marquee pauseOnHover speed={50} gradient={false}>
        <div className="flex items-center gap-2 sm:gap-4">
          <FaShoppingCart className="text-green-600" size={20} />
          <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-semibold">
            Fresh Products Every Day
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 ml-4 sm:ml-10">
          <FaCreditCard className="text-purple-600" size={20} />
          <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-semibold">
            Safe Payment With Any Bank Card
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 ml-4 sm:ml-10">
          <FaHeadphones className="text-blue-600" size={20} />
          <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-semibold">
            24/7 Support Always Be There for You
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 ml-4 sm:ml-10">
          <FaTags className="text-orange-600" size={20} />
          <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-semibold">
            Low Prices Than in Other Stores
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 ml-4 sm:ml-10">
          <FaTruck className="text-blue-500" size={20} />
          <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-semibold">
            Free Delivery From £30
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default Marque;
