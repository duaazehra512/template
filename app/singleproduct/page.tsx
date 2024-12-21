import React from "react";
import { FiShoppingCart } from "react-icons/fi";

export default function Home() {
  const demoImages = [
    "/card.png",
    "/chair3.png",
    "/chair4.png",
    "/chair2.png",
    "/chair.png",
  ];

  return (
    <div className="min-h-screen md:pl-56 md:pr-36 bg-gray-50 py-10 px-6">
      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src="/chair2.png"
            alt="Library Stool Chair"
            className="rounded-lg w-full max-w-sm object-cover"
          />
        </div>
        {/* Product Details */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold text-[rgb(35,43,83)]">Library Stool <br /> Chair</h1>
          <span className="p-4 w-52 bg-teal-600 rounded-full inline-block text-3xl font-semibold text-white">$20.00 USD</span>
          <p className="text-[#6C757D] text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing.
          </p>
          <button className="w-52 h-14 items-center gap-2 bg-teal-700 text-white font-bold py-1 px-3 rounded-lg hover:bg-teal-950 transition inline-flex">
  < FiShoppingCart  size={25} />
  <span>Add To Cart</span>
</button>

        </div>
      </div>

      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto mt-16">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#343A40]">Featured Products</h2>
          <a
            href="#"
            className="text-[#007BFF] hover:text-[#0056b3] font-semibold text-sm"
          >
            View all
          </a>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {demoImages.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition"
            >
              <img
                src={image}
                alt={`Demo Image ${index + 1}`}
                className="rounded-lg w-full h-36 object-cover mb-4"
              />
              <div className="flex justify-between items-center text-sm mb-2">
  <h3 className="text-[#343A40] font-semibold">Library Stool Chair</h3>
  <p className="text-black font-bold">$99</p>
</div>

             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
