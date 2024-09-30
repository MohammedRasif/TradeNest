import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Promotions = () => {
  const [counter, setCounter] = useState(59); // Assuming the countdown starts at 59 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 59));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lg:mx-36 md:mx-10 mx-2 lg:mb-0 md:mb-0 mb-2">
      <div className="mx-3 my-3">
        <h1 className="text-2xl">Promotions</h1>
        <button className="text-sm">
          <Link to="/">HOME</Link>
        </button>{" "}
        / <button className="text-sm">PROMOTIONS</button>
      </div>
      <div className=" grid lg:grid-cols-2 lg:gap-3  gap-2">
        <div
          className="relative bg-green-50 rounded-xl p-6 md:p-0 h-72 md:h-80 lg:h-72 flex items-center justify-start overflow-hidden"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dqb5izi3a/image/upload/v1727514963/m0iauoajapdez4jd6bpx.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for background darkening effect */}
          <div className="absolute inset-0 bg-black/10 rounded-xl"></div>

          {/* Text Content */}
          <div className="relative z-10 text-left p-4 sm:p-6 md:p-10 lg:p-12 ">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-2 sm:mb-4 pt-2 sm:pt-5">
              Get Discounts on Fresh <br className="hidden md:block" />
              Vegetables & Fruits
            </h2>

            <div className="grid grid-flow-col lg:gap-5 md:gap-5 gap-3  text-center auto-cols-max">
              <div className="hidden lg:inline-block md:inline-block">
                <div className="flex flex-col p-2 bg-white rounded-box text-black ">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 15 }}></span>
                  </span>
                  days
                </div>
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box text-black">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box text-black ">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box text-black">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": counter }}></span>
                </span>
                sec
              </div>
            </div>
            <button className="bg-green-600 text-white text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 rounded-full mt-4 sm:mt-6">
              Shop Now
            </button>
          </div>
        </div>
        <div
          className="relative bg-green-50 rounded-xl p-6 md:p-0 h-72 md:h-80 lg:h-72 flex items-center justify-start overflow-hidden"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dqb5izi3a/image/upload/v1727514968/lqcjfedmgvacu2micwsh.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for background darkening effect */}
          <div className="absolute inset-0 bg-black/10 rounded-xl"></div>

          {/* Text Content */}
          <div className="relative z-10 text-left p-4 sm:p-6 md:p-10 lg:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-2 sm:mb-4 pt-2 sm:pt-5">
              Get Discounts on Fresh <br className="hidden md:block" />
              Vegetables & Fruits
            </h2>

            <div className="grid grid-flow-col lg:gap-5 md:gap-5 gap-3  text-center auto-cols-max">
              <div className="hidden lg:inline-block md:inline-block">
                <div className="flex flex-col p-2 bg-white rounded-box text-black ">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 15 }}></span>
                  </span>
                  days
                </div>
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box text-black">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box text-black">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box text-black">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": counter }}></span>
                </span>
                sec
              </div>
            </div>
            <button className="bg-green-600 text-white text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 rounded-full mt-4 sm:mt-6">
              Shop Now
            </button>
          </div>
        </div>
        <div
          className="relative bg-green-50 rounded-xl p-6 md:p-0 h-72 md:h-80 lg:h-72 flex items-center justify-start overflow-hidden"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dqb5izi3a/image/upload/v1727514956/xycsvarlwbbksmciubwz.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for background darkening effect */}
          <div className="absolute inset-0 bg-black/10 rounded-xl"></div>

          {/* Text Content */}
          <div className="relative z-10 text-left p-4 sm:p-6 md:p-10 lg:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-2 sm:mb-4 pt-2 sm:pt-5">
              Get Discounts on Fresh <br className="hidden md:block" />
              Vegetables & Fruits
            </h2>

            <div className="grid grid-flow-col lg:gap-5 md:gap-5 gap-3  text-center auto-cols-max">
              <div className="hidden lg:inline-block md:inline-block">
                <div className="flex flex-col p-2 bg-white rounded-box text-black ">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 15 }}></span>
                  </span>
                  days
                </div>
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box text-black">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box text-black">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box text-black">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": counter }}></span>
                </span>
                sec
              </div>
            </div>
            <button className="bg-green-600 text-white text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 rounded-full mt-4 sm:mt-6">
              Shop Now
            </button>
          </div>
        </div>
        <div
          className="relative bg-green-50 rounded-xl p-6 md:p-0 h-72 md:h-80 lg:h-72 flex items-center justify-start overflow-hidden"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dqb5izi3a/image/upload/v1727514935/t0iid5vxvhjzpe0z2e40.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for background darkening effect */}
          <div className="absolute inset-0 bg-black/10 rounded-xl"></div>

          {/* Text Content */}
          <div className="relative z-10 text-left p-4 sm:p-6 md:p-10 lg:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-2 sm:mb-4 pt-2 sm:pt-5">
              Get Discounts on Fresh <br className="hidden md:block" />
              Vegetables & Fruits
            </h2>

            <div className="grid grid-flow-col lg:gap-5 md:gap-5 gap-3  text-center auto-cols-max">
              <div className="hidden lg:inline-block md:inline-block">
                <div className="flex flex-col p-2 bg-white rounded-box text-black ">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 15 }}></span>
                  </span>
                  days
                </div>
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box text-black">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box text-black">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box text-black">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": counter }}></span>
                </span>
                sec
              </div>
            </div>
            <button className="bg-green-600 text-white text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 rounded-full mt-4 sm:mt-6">
              Shop Now
            </button>
          </div>
        </div>
        <div
          className="relative bg-green-50 rounded-xl p-6 md:p-0 h-72 md:h-80 lg:h-72 flex items-center justify-start overflow-hidden"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dqb5izi3a/image/upload/v1727514851/nwkiegnxvetkfriu2q0z.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for background darkening effect */}
          <div className="absolute inset-0 bg-black/10 rounded-xl"></div>

          {/* Text Content */}
          <div className="relative z-10 text-left p-4 sm:p-6 md:p-10 lg:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-2 sm:mb-4 pt-2 sm:pt-5">
              Get Discounts on Fresh <br className="hidden md:block" />
              Vegetables & Fruits
            </h2>

            <div className="grid grid-flow-col lg:gap-5 md:gap-5 gap-3  text-center auto-cols-max">
              <div className="hidden lg:inline-block md:inline-block">
                <div className="flex flex-col p-2 bg-white rounded-box text-black ">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 15 }}></span>
                  </span>
                  days
                </div>
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box text-black">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box text-black">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box text-black">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": counter }}></span>
                </span>
                sec
              </div>
            </div>
            <button className="bg-green-600 text-white text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 rounded-full mt-4 sm:mt-6">
              Shop Now
            </button>
          </div>
        </div>
        <div
          className="relative bg-green-50 rounded-xl p-6 md:p-0 h-72 md:h-80 lg:h-72 flex items-center justify-start overflow-hidden"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dqb5izi3a/image/upload/v1727514832/jg6aoaaonasd7wfyqjvn.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for background darkening effect */}
          <div className="absolute inset-0 bg-black/10 rounded-xl"></div>

          {/* Text Content */}
          <div className="relative z-10 text-left p-4 sm:p-6 md:p-10 lg:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-2 sm:mb-4 pt-2 sm:pt-5">
              Get Discounts on Fresh <br className="hidden md:block" />
              Vegetables & Fruits
            </h2>

            <div className="grid grid-flow-col lg:gap-5 md:gap-5 gap-3  text-center auto-cols-max">
              <div className="hidden lg:inline-block md:inline-block">
                <div className="flex flex-col p-2 bg-white rounded-box text-black ">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 15 }}></span>
                  </span>
                  days
                </div>
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box text-black">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box text-black">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box text-black">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": counter }}></span>
                </span>
                sec
              </div>
            </div>
            <button className="bg-green-600 text-white text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 rounded-full mt-4 sm:mt-6">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
