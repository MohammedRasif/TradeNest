import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom
import { FiShoppingCart } from "react-icons/fi"; // Shopping cart icon
import { FaCartShopping } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";

const Promotions = () => {
  const [footData, setFootData] = useState([]); // Renamed to avoid conflict
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    console.log("Item added to cart");
  };

  useEffect(() => {
    fetch("VeganMeat.json")
      .then((res) => res.json())
      .then((data) => setFootData(data)); // Updated the state name to setFootData
  }, []);

  return (
    <div className="mx-20">
      <div className="mx-3 my-3">
        <h1 className="text-2xl">Promotions</h1>
        <button className="text-sm">
          <Link to="/">HOME</Link>
        </button>
        {" "} / <button className="text-sm">PROMOTIONS</button>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-3">
        {footData.map((foots) => (
          <div
            key={foots.id}
            className="card bg-base-100 w-64 shadow-lg border rounded-lg relative group overflow-hidden transition-all duration-300"
          >
            {/* Image Section */}
            <figure className="px-4 pt-4">
              <img
                src={foots.image}
                alt={foots.name || "Vegan Meat"}
                className="rounded-md h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </figure>

            {/* Card Body */}
            <div className="card-body p-4">
              <h2 className="text-base font-medium text-left">{foots.name || "Vegan Meat"}</h2>
              <p className="text-sm text-slate-400 text-left">{foots.title.type || "Delicious vegan meat product"}</p>

              {/* Price Section */}
              <div className="text-green-600 font-semibold mt-2 text-left">
                {foots.discountPrice ? (
                  <>
                    <span className="line-through text-red-400 mr-2">${foots.price}</span>
                    <span>${foots.discountPrice}</span>
                  </>
                ) : (
                  <span>${foots.price}</span>
                )}
              </div>

              {/* Add to Cart Button (Hidden by default, show on hover) */}
              <div className="w-full mt-4 relative">
                <button
                  className="w-full py-4  text-sm text-white bg-green-500 flex items-center justify-center transition-all duration-500 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0"
                  onClick={handleAddToCart}
                  onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
                >
                  <span
              className={`absolute transition-all flex gap-3 duration-300 ease-in-out ${isHovered ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                }`}
            >
               Add to Cart
            </span>

            <BsCart
              size={20}
              className={`absolute transition-all duration-300 ease-in-out ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
            />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotions;
