import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';
import { BsCart } from 'react-icons/bs';

const Vegan = () => {
  const [footData, setFootData] = useState([]); // Original data
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetch("VeganMeat.json")
      .then((res) => res.json())
      .then((data) => {
        setFootData(data);
      });
  }, []);

  const handleAddToCart = () => {
    console.log("Item added to cart");
  };

  return (
    <div className="my-10">
      <div className="mb-5 lg:mx-32 md:mx-16 mx-5 flex items-center justify-between">
        <h5 className="text-xl font-bold">Vegan Meat</h5>
        <Link to="/veganMeat">
          <button className="text-sm text-slate-500">All Products</button>
        </Link>
      </div>

      <Swiper
        slidesPerView={1} // Default for mobile devices
        spaceBetween={2} // Space between slides
        breakpoints={{
          
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        centeredSlides={true}
        
        modules={[Pagination]}
        className="mySwiper "
      >
        {footData.slice(0, 10).map((foots) => (
          <SwiperSlide key={foots.id}>
            <Link to={`/veganMeat/${foots.id}`}>
              <div className="card bg-base-100 lg:w-64 md:w-56 w-72 lg:mx-0 md:mx-0 mx-3 h-auto shadow-lg border rounded-lg relative group overflow-hidden transition-all duration-300">
                <figure className="px-4 pt-4">
                  <img
                    src={foots.image}
                    alt={foots.name || "Vegan Meat"}
                    className="rounded-md h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </figure>

                <div className="card-body p-4">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Vegan;
