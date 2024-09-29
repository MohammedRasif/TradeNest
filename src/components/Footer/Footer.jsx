import React from "react";
import { GoChevronRight } from "react-icons/go";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
// Add imports for your images (img1, img2, img3)
import img1 from "./google play button.png";
import img2 from "./images.png";
import img3 from "./debit card1.png";
import img4 from "./debit card2.png";
import img5 from "./debit card3.png";


const Footer = () => {
    return (
        <div className="bg-green-500 py-2">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10  lg:mx-20 my-10">
                <div>
                    <div className="font-semibold items-center flex">
                        <h1 className="text-2xl">Broadway Store</h1>
                        <button className="p-1 ml-3 text-white rounded-full bg-green-600">
                            <GoChevronRight />
                        </button>
                    </div>
                    <h1>1268 Broadway, San Francisco, CA 94109</h1>
                </div>

                <div>
                    <div className="font-semibold items-center flex">
                        <h1 className="text-2xl">Broadway Store</h1>
                        <button className="p-1 ml-3 text-white rounded-full bg-green-600">
                            <GoChevronRight />
                        </button>
                    </div>
                    <h1>1268 Broadway, San Francisco, CA 94109</h1>
                </div>

                <div>
                    <div className="font-semibold items-center flex">
                        <h1 className="text-2xl">Broadway Store</h1>
                        <button className="p-1 ml-3 text-white rounded-full bg-green-600">
                            <GoChevronRight />
                        </button>
                    </div>
                    <h1>1268 Broadway, San Francisco, CA 94109</h1>
                </div>

                <div>
                    <div className="font-semibold items-center flex">
                        <h1 className="text-2xl">Broadway Store</h1>
                        <button className="p-1 ml-3 text-white rounded-full bg-green-600">
                            <GoChevronRight />
                        </button>
                    </div>
                    <h1>1268 Broadway, San Francisco, CA 94109</h1>
                </div>
            </div>

            <hr />

            <footer className="footer  text-[17px] text-base-content  lg:px-20 py-10   md:pl-2 ">
                <aside className="lg:pl-0 md:pl-0 pl-2">
                    <h1 className="text-3xl font-semibold">Trade<span className="text-green-800">Nest</span></h1>
                    <img src="https://res.cloudinary.com/dqb5izi3a/image/upload/v1727444853/ntlxfntthlwu1oevmpgm.png" className="h-32" alt="" />

                    <p>
                        Condimentum adipiscing vel neque dis nam <br /> parturient orci at scelerisque.
                    </p>
                    <div>
                        <h1 className="text-2xl font-semibold">Subscribe us</h1>
                        <div className="mt-2 space-x-3">
                            <button className="text-[19px] p-2 rounded-full bg-blue-800 text-white"><FaFacebookF /></button>
                            <button className="text-[19px] p-2 rounded-full bg-black text-white"><FaTwitter /></button>
                            <button className="text-[19px] p-2 rounded-full bg-blue-600 text-white"><FaLinkedinIn /></button>
                            <button className="text-[19px] p-2 rounded-full bg-blue-500 text-white"><FaTelegramPlane /></button>
                        </div>
                    </div>
                </aside>

                <div >
                    <h6 className="text-2xl font-semibold">Categories</h6>
                    <a className="link link-hover">Smartphones</a>
                    <a className="link link-hover">Laptops</a>
                    <a className="link link-hover">Hardware</a>
                    <a className="link link-hover">Cameras</a>
                    <a className="link link-hover">Headphones</a>
                    <a className="link link-hover">Bathroom</a>
                </div>

                <div>
                    <h6 className="text-2xl font-semibold">Useful Links</h6>
                    <a className="link link-hover">Promotions</a>
                    <a className="link link-hover">Stores</a>
                    <a className="link link-hover">Our contacts</a>
                    <a className="link link-hover">Delivery & Return</a>
                    <a className="link link-hover">Outlet</a>
                </div>

                <div>
                    <h6 className="text-2xl font-semibold">Useful Links</h6>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Our contacts</a>
                    <a className="link link-hover">Promotions</a>
                    <a className="link link-hover">Stores</a>
                    <a className="link link-hover">Delivery & Return</a>
                </div>

                <div>
                    <h6 className="text-2xl font-semibold">Download App on Mobile:</h6>
                    <h1>15% discount on your first purchase</h1>
                    <div className="flex md:flex-col lg:flex-row ">
                        <img src={img1} className="h-40" alt="App Store" />
                        <img src={img2} className="h-40 md:-mt-20 lg:mt-0" alt="Google Play" />
                    </div>
                </div>
            </footer>

            <hr />

            <div className="p-10 flex lg:flex-row flex-col items-center justify-between">
                <div className="text-center mb-2">
                    <h1 className="text-[12px]">TARED NEST © 2024 CREATED BY XTEMOS STUDIO. PREMIUM E-COMMERCE SOLUTIONS.</h1>
                </div>
                <div className="flex">
                    <img src={img3} className="h-10" alt="Logo" />
                    <img src={img4} className="h-10" alt="Logo" />
                    <img src={img5} className="h-10" alt="Logo" />
                    <img src={img4} className="h-10" alt="Logo" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
