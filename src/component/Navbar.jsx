import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { navigate, token } = useAppContext();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className="flex items-center justify-between px-6 sm:px-12 xl:px-24 py-4">

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img src={assets.logo} className="w-28 sm:w-32" />
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-[16px] text-gray-600 font-medium">
          <a onClick={() => navigate("/")} className="hover:text-[#2183cf] transition">
            Home
          </a>
          <a href='#explore' className="hover:text-[#2183cf] transition">
            Explore
          </a>
          <a className="hover:text-[#2183cf] transition">
            Categories
          </a>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate("/admin")}
          className="flex items-center gap-2 bg-[#2183cf] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#1b6fae] transition shadow-sm"
        >
          {token ? "Dashboard" : "Login"}
          <i className="ri-arrow-right-line text-lg"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;