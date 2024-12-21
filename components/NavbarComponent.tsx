"use client"

import React, { useState } from "react";
import {  FaBars } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosHelpCircleOutline } from "react-icons/io";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border-b-2 border bg-gray-200">
      {/* Section 1: Top Bar */}
      <div className="md:px-56 hidden text-gray-200 md:flex justify-between items-center px-4 py-2 bg-[#272343]">
        <div className="text-sm">✓ Free Shipping On All Orders Over $50</div>
        <div className="flex items-center space-x-6 text-sm">
          <div>Eng</div>
          <a href="/faqs" className="hover:text-teal-600">FAQs</a>
          <div className="flex items-center space-x-1">
            <IoIosHelpCircleOutline size={16} />
            <a href="/contact" className="hover:text-teal-600">Need Help</a>
          </div>
        </div>
      </div>

      {/* Section 2: Logo and Cart */}
      <div className="bg-gray-100 md:px-56 shadow-md border-b border-gray-200 px-4 py-3">
        <div className="container mx-auto flex justify-between items-cente">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="logo" />
            <span className="text-xl font-bold text-gray-700">Comforty</span>
          </div>
          {/* Cart */}
          <div className="relative hidden md:flex items-center bg-white ">
            
<a href="/cart" className="flex items-center space-x-2">
  <FiShoppingCart size={25} className="text-gra" />
  <span className="text-gray-700 font-medium">Cart</span>
  <span className="bg-teal-600 text-white text-xs rounded-full px-2 py-0.5">
    2
  </span>
</a>



          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <FaBars size={20} onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer text-gray-700" />
           

              
          </div>
        </div>
      </div>

      {/* Section 3: Menu and Contact */}
      <div className="hidden md:px-56 md:flex bg-white px-4 py-5">
        <div className="container mx-auto flex justify-between items-center">
          {/* Links */}
          <div className="flex space-x-6  text-gray-900 ">
            <a href="/" className="hover:text-teal-600">Home</a>
            <a href="/products" className="hover:text-teal-600">Shop</a>
            <a href="/singleproduct" className="hover:text-teal-600">Product</a>
            <a href="/contact " className="hover:text-teal-600">Pages</a>
            <a href="/about" className="hover:text-teal-600">About</a>
            
            
          </div>

          {/* Contact */}
          <div className="text-gray-700">Contact: (808) 555-0111</div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-3 space-y-2 text-gray-700">
          <a href="/" className="hover:text-teal-600">Home</a>
          <a href="/products" className="hover:text-teal-600">Shop</a>
          <a href="/singleproducts" className="hover:text-teal-600">Product</a>
          <a href="/contact" className="hover:text-teal-600">Pages</a>
          <a href="/about" className="hover:text-teal-600">About</a>
          <a href="/cart" className="hover:text-teal-600">Cart</a>
          <a href="/faqs" className="hover:text-teal-600">FAQ</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
