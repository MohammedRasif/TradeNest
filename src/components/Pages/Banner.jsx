import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="lg:mx-24 flex flex-col lg:flex-row items-center">
      {/* Swiper Slider Section */}
      <div className="lg:w-3/5 w-full">
        <Swiper
          spaceBetween={60}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className="relative bg-green-50 rounded-xl m-3 p-6 md:p-0 h-72 md:h-80 lg:h-96 flex items-center justify-start"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dqb5izi3a/image/upload/v1727514963/m0iauoajapdez4jd6bpx.webp')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay for background darkening effect */}
              <div className="absolute inset-0 bg-black/10 rounded-xl"></div>

              {/* Text Content */}
              <div className="relative z-10 text-left p-4 sm:p-6 md:p-10 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-2 sm:mb-4 pt-2 sm:pt-5">
                  Get Discounts on Fresh <br className="hidden md:block" />{" "}
                  Vegetables & Fruits
                </h2>

                <div className="flex items-center mb-4">
                  <p className="text-lg sm:text-xl text-gray-800">
                    Up to - 10%
                  </p>

                  <div className="flex items-center space-x-3 ml-3">
                    <div className="bg-green-500 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center">
                      <span role="img" aria-label="delivery-truck">
                        🚚
                      </span>
                      <span className="ml-2 text-xs sm:text-sm lg:text-base">
                        For orders with delivery
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-black">
                  Discount will apply when you order products{" "}
                  <br className="hidden sm:block" /> with our delivery from 11
                  am - 4 pm
                </p>

                <button className="bg-green-600 text-white text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 rounded-full mt-4 sm:mt-6">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className="relative bg-green-50 rounded-xl m-3 p-6 md:p-0 h-72 md:h-80 lg:h-96 flex items-center justify-start"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dqb5izi3a/image/upload/v1727514795/bvk1vkc1e353hmuopogb.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay for background darkening effect */}
              <div className="absolute inset-0 bg-black/10 rounded-xl"></div>

              {/* Text Content */}
              <div className="relative z-10 text-center flex justify-center items-center w-full h-full">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800">
                  <span className="text-green-500">Free Delivery </span> 🚚{" "}
                  <br className="hidden md:block" /> For Own Baked Goods
                </h1>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div
              className="relative bg-green-50 rounded-xl m-3 p-6 md:p-0 h-72 md:h-80 lg:h-96 flex items-center justify-start"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dqb5izi3a/image/upload/v1727514945/znfwlh303rpyatcvi07x.webp')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay for background darkening effect */}
              <div className="absolute inset-0 bg-black/10 rounded-xl"></div>

              {/* Text Content */}
              <div className="relative z-10 w-full h-full flex items-center justify-start sm:p-6 md:p-10 lg:p-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 md:pl-7">
                  Save up to 30% on <br className="hidden md:block" /> The
                  Original <br className="hidden md:block" /> Oatly Milk
                </h1>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div
              className="relative bg-green-50 rounded-xl m-3 p-6 md:p-0 h-72 md:h-80 lg:h-96 flex items-center justify-start"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dqb5izi3a/image/upload/v1727514968/lqcjfedmgvacu2micwsh.webp')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay for background darkening effect */}
              <div className="absolute inset-0 bg-black/10 rounded-xl"></div>

              {/* Text Content */}
              <div className="relative z-10 w-full h-full flex flex-col justify-center items-start px-4 sm:px-6 md:px-10 lg:px-12 space-y-3">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  Get a pack of fish at a discount
                </h3>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
                  Every 3rd unit <span className="text-green-800">of -60</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg font-semibold">
                  Promotion runs from 01-10-2024 <span>to</span> 30-12-2024
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Side Image Section */}
      <div className=" flex flex-col lg:flex-row md:flex-row items-center lg:space-y-0 md:space-y-0  space-y-3  mt-6 lg:mt-0 lg:ml-6">
        {/* Card 1 */}
        <div
          className="relative rounded-xl p-4 md:p-6 w-72 h-[385px] text-center shadow-lg overflow-hidden group"
         
        >
          {/* Zoom effect for background */}
          <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dqb5izi3a/image/upload/v1727514938/s5w45k3fwwnwginoqeqw.webp')`,
      }}
    ></div>
          <div className="absolute inset-0 rounded-xl transition-opacity duration-300 ease-in-out"></div>

          <div className="relative z-10">
            <p className="text-gray-600 text-sm md:text-base font-semibold">
              SAVE UP TO 35% ON
            </p>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mt-2">
              Energy Drinks
            </h2>
            <button className="text-blue-500 underline mt-2 text-sm md:text-base lg:text-lg">
              Shop Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="relative rounded-xl p-4 lg:ml-4 md:ml-4 md:p-6 w-72  h-[385px] text-center shadow-lg overflow-hidden group"
          
        >
          {/* Zoom effect for background */}
 <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dqb5izi3a/image/upload/v1727514938/s5w45k3fwwnwginoqeqw.webp')`,
      }}
    ></div>
          <div className="absolute inset-0 rounded-xl transition-opacity duration-300 ease-in-out"></div>

          <div className="relative">
            <p className="text-gray-600 text-sm md:text-base font-semibold">
              SAVE UP TO 35% ON
            </p>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mt-2">
              Energy Drinks
            </h2>
            <button className="text-blue-500 underline mt-2 text-sm md:text-base lg:text-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
