import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const VeganMeatDetails = () => {
    const foots = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const foot = foots.find(foot => foot.id === idInt);

    // Placeholder for ratings
    const ratings = [
        { name: 'John', date: '2024-09-25', 'rating-number': 4, 'rating-text': 'Great product!' },
        { name: 'Jane', date: '2024-09-28', 'rating-number': 5, 'rating-text': 'Excellent quality!' }
    ];

    // State to track quantity
    const [quantity, setQuantity] = useState(1);

    // Function to increase quantity
    const handleIncrease = () => {
        setQuantity(prev => prev + 1);
    };

    // Function to decrease quantity (but prevent going below 1)
    const handleDecrease = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };

    // Calculate total price and discount price based on quantity
    const totalPrice = foot?.price * quantity;
    const totalDiscountPrice = foot?.discountPrice * quantity;

    return (
        <div className="bg-slate-100">
            <hr />
            <div className="flex flex-col lg:flex-row lg:m-10 md:m-5 m-2 lg:ml-52">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                    <img src={foot?.image} className="h-auto lg:h-[700px] w-full object-cover" alt="" />
                </div>

                {/* Product Details Section */}
                <div className="w-full lg:w-1/2 lg:mr-52 lg:ml-20">
                    <div className="flex items-center space-x-2 text-sm md:text-base">
                        <Link to="/">
                            <button className="text-neutral-500">Home</button>
                        </Link>
                        <p>/</p>
                        <button className="text-neutral-500">Vegan Meat</button>
                        <p>/</p>
                        <button className="text-neutral-500">{foot?.title?.type}</button>
                        <p className="hidden lg:inline-block md:inline-block">/</p>
                        <button className="text-neutral-500  hidden lg:inline-block md:inline-block">{foot?.name}</button>
                    </div>
                    <h1 className="text-3xl md:text-4xl py-2">{foot?.name}</h1>

                    <div className="flex items-center text-lg md:text-2xl space-x-2">
                        <s className="flex text-slate-400 items-center">
                            <FaBangladeshiTakaSign className="pb-2" />
                            <h3>{totalPrice}</h3>
                        </s>
                        <div className="flex items-center">
                            <FaBangladeshiTakaSign className="pb-2" />
                            <h3>{totalDiscountPrice}</h3>
                        </div>
                    </div>

                    {/* Quantity and Add to Cart Section */}
                    <div className="flex items-center">
                        <div className="flex items-center space-x-2 border-2 text-lg border-gray-400 my-6 md:my-10">
                            <button onClick={handleDecrease} className="px-1">-</button>
                            <h1>{quantity}</h1>
                            <button onClick={handleIncrease} className="px-1">+</button>
                        </div>
                        <button className="w-full bg-green-500 mx-2 text-white py-2">Add To Cart</button>
                    </div>

                    {/* Add to Wishlist Section */}
                    <div className="flex items-center text-xl">
                        <button className="font-bold text-2xl pb-1"><CiHeart /></button>
                        <h4>Add to wishlist</h4>
                    </div>

                    {/* Product Nutritional Information */}
                    <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4 text-sm md:text-base mt-6">
                        <div>
                            <h6 className="font-bold">Calories</h6>
                            <p className="text-slate-500">{foot?.calories} kcal</p>
                        </div>
                        <div>
                            <h6 className="font-bold">Proteins</h6>
                            <p className="text-slate-500">{foot?.proteins} g</p>
                        </div>
                        <div>
                            <h6 className="font-bold">Fats</h6>
                            <p className="text-slate-500">0.00 g</p>
                        </div>
                        <div>
                            <h6 className="font-bold">Carbohydrates</h6>
                            <p className="text-slate-500">{foot?.carbohydrates} g</p>
                        </div>
                    </div>

                    {/* General Info Section */}
                    <div className="mt-10 text-slate-500 space-y-2 text-sm md:text-base">
                        <h4 className="font-bold text-black">General info</h4>
                        <div className="flex justify-between pt-5">
                            <p>Brand</p>
                            <p>{foot?.brand}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Shelf life</p>
                            <p>{foot?.shelfLife}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Storage temperature</p>
                            <p>{foot?.temperature}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Country</p>
                            <p>{foot?.country}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Genus-species</p>
                            <p>{foot?.grenousSpecies}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Method</p>
                            <p>{foot?.method}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add a Review Section */}
            <div className="my-5 w-full px-4 md:px-8">
                <h1 className="text-3xl font-semibold">Add a review</h1>
                <p className="my-7">Your email address will not be published. Required fields are marked *</p>

                {/* Review Text Area */}
                <div className="mt-4">
                    <p className="text-2xl">Your review *</p>
                    <textarea
                        rows="7"
                        className="my-1  bg-white border border-gray-500 rounded-md w-full"
                        placeholder="Enter your review"
                    ></textarea>
                </div>

                {/* Name Input */}
                <div className="mt-4">
                    <p>Name *</p>
                    <input
                        type="text"
                        className="my-1 py-2 bg-white border border-gray-500 rounded-md w-full"
                        placeholder="Enter your name"
                    />
                </div>

                {/* Email Input */}
                <div className="mt-4">
                    <p>Email *</p>
                    <input
                        type="email"
                        className="my-1 py-2 bg-white border border-gray-500 rounded-md w-full"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Submit Button */}
                <button className="text-white bg-green-500 w-full md:w-auto px-5 py-2 mt-6">Submit</button>
            </div>
        </div>
    );
};

export default VeganMeatDetails;
