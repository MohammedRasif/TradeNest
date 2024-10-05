import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const Promotions = () => {
  const [footData, setFootData] = useState([]); // Original data
  const [sortedData, setSortedData] = useState([]); // Sorted data
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [isHovered, setIsHovered] = useState(false);


  const options = [
    'sort by Popularity', 
    'sort by Latest', 
    'sort by High', 
    'sort by Low'
  ];
  const defaultOption = options[0];

  const itemsPerPage = 10;

const handleSelect = (option) => {
  let sortedArray = [...footData]; 

  if (option.value === 'sort by High') {
    sortedArray = sortedArray
      .filter(item => item.price !== undefined)
  } else if (option.value === 'sort by Low') {
    sortedArray = sortedArray
      .filter(item => item.price !== undefined)
      .sort((a, b) => a.price - b.price);
  } else if (option.value === 'sort by Latest') {
    sortedArray = sortedArray
      .filter(item => item.latest)
      .sort((a, b) => new Date(b.latest) - new Date(a.latest));
  } else {
    sortedArray = [...footData];
  }

  setSortedData(sortedArray); 
  setCurrentPage(1); 
};

  const handleAddToCart = () => {
    console.log("Item added to cart");
  };

  useEffect(() => {
    fetch("VeganMeat.json")
      .then((res) => res.json())
      .then((data) => {
        setFootData(data);
        setSortedData(data); 
      });
  }, []);

  // Calculate the current items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  return (
    <div className="lg:mx-40 md:px-2 px-2">
      <div className="mx-3 my-3 lg:flex md:flex-row flex-col lg:space-y-0 space-y-3  items-center justify-between">
        <div>
          <h1 className="text-2xl">Promotions</h1>
          <button className="text-sm">
            <Link to="/">HOME</Link>
          </button>{" "}
          / <button className="text-sm">PROMOTIONS</button>
        </div>
        
        <div>
          <Dropdown 
            options={options} 
            onChange={handleSelect} 
            value={defaultOption} 
            placeholder="Select an option" 
            className="w-64"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2">
        {currentItems.map((foots) => (
         <Link to={`/veganMeat/${foots.id}`} key={foots.id}>
          <div
            key={foots.id}
            className="card bg-base-100 lg:w-64 md:w-56 w-36 lg:h-auto md:h-auto h-60 shadow-lg border rounded-lg relative group overflow-hidden transition-all duration-300"
          >
            <figure className="px-4 pt-4">
              <img
                src={foots.image}
                alt={foots.name || "Vegan Meat"}
                className="rounded-md lg:h-44 md:h-44 h-32 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </figure>

            <div className="lg:card-body md:card-body p-4">
              <h2 className="lg:text-[17px] md:text-[17px] text-sm text-left">
                {foots.name || "Vegan Meat"}
              </h2>
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-400 text-left">
                  {foots.title?.type || "Delicious vegan meat product"}
                </p>
                <button className="font-extrabold text-black text-xl">
                  <CiHeart />
                </button>
              </div>

              <div className="text-green-600 font-semibold lg:mt-2 md:mt-2 text-left">
                {foots.discountPrice ? (
                  <>
                    <span className="line-through text-red-400 mr-2">
                      ${foots.price}
                    </span>
                    <span>${foots.discountPrice}</span>
                  </>
                ) : (
                  <span>${foots.price}</span>
                )}
              </div>

              <div className="w-full relative">
                <button
                  className="w-full py-4 text-sm text-white bg-green-500 flex items-center justify-center transition-all duration-500 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0"
                  onClick={handleAddToCart}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span
                    className={`absolute transition-all flex gap-3 duration-300 ease-in-out ${
                      isHovered
                        ? "translate-y-full opacity-0"
                        : "translate-y-0 opacity-100"
                    }`}
                  >
                    Add to Cart
                  </span>

                  <BsCart
                    size={20}
                    className={`absolute transition-all duration-300 ease-in-out ${
                      isHovered
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
         </Link>
        ))}
      </div>

      <div className="join flex items-center justify-center py-5">
        <button 
          className="join-item btn" 
          onClick={() => paginate(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          «
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button 
            key={index + 1} 
            className={`join-item btn ${currentPage === index + 1 ? "btn-active" : ""}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button 
          className="join-item btn" 
          onClick={() => paginate(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Promotions;
