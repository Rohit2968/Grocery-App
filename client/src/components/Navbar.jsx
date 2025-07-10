import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

// Navbar from "prebuiltui.com"
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const { user, setUser, navigate } = useContext(AppContext);
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <Link to={"/"}>
        <h1 className="text-2xl font-bold text-orange-600">FreshCart</h1>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        {/* Home */}
        <Link to="/" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Home
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Home
          </span>
        </Link>

        {/* All Products */}
        <Link to="/products" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            All Products
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            All Products
          </span>
        </Link>

        {/* Search Box */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.836 10.615 15 14.695"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              clipRule="evenodd"
              d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Cart Icon */}
        <div className="relative cursor-pointer">
          <img src={assets.cart_icon} alt="" className="w-6 h-6" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">
            3
          </button>
        </div>

        {user ? (
          <>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="profile"
                className="w-10 rounded-full cursor-pointer"
              />
              <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow-md rounded-md border border-gray-200 py-2 w-32 z-40 text-sm">
                <li
                  onClick={() => {
                    navigate("/my-orders");
                  }}
                  className="p-1.5 hover:bg-gray-100 cursor-pointer"
                >
                  My Orders
                </li>
                <li
                  onClick={() => setUser(null)}
                  className="p-1.5 hover:bg-gray-100 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            </div>
          </>
        ) : (
          <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="sm:hidden"
      >
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        {/* Home */}
        <Link to="/" className="relative overflow-hidden h-6 group block">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Home
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Home
          </span>
        </Link>

        {/* All Products */}
        <Link
          to="/products"
          className="relative overflow-hidden h-6 group block"
        >
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            All Products
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            All Products
          </span>
        </Link>

        {/* Mobile Login Button */}
        {user ? (
          <>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="profile"
                className="w-10 rounded-full cursor-pointer"
              />
              <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow-md rounded-md border border-gray-200 py-2 w-32 z-40 text-sm">
                <li
                  onClick={() => {
                    navigate("/my-orders");
                  }}
                  className="p-1.5 hover:bg-gray-100 cursor-pointer"
                >
                  My Orders
                </li>
                <li
                  onClick={() => setUser(null)}
                  className="p-1.5 hover:bg-gray-100 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            </div>
          </>
        ) : (
          <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
