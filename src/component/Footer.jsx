import React from "react";
import { assets, footer_data } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 sm:px-12 xl:px-24 bg-gray-50 border-t border-gray-200">
      <div className="flex flex-col lg:flex-row justify-between gap-14 py-16">
        {/* Brand Section */}
        <div className="max-w-md">
          <img src={assets.logo} alt="Hashblog logo" className="w-36" />

          <p className="text-gray-500 mt-6 leading-relaxed">
            Hashblog is a modern blogging platform where creators share
            knowledge, ideas, and experiences. Discover inspiring stories and
            connect with a community passionate about learning.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-7 text-xl">
            <a className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#2183cf] hover:text-white transition">
              <i className="ri-twitter-x-line"></i>
            </a>

            <a className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#2183cf] hover:text-white transition">
              <i className="ri-linkedin-box-line"></i>
            </a>

            <a className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#2183cf] hover:text-white transition">
              <i className="ri-facebook-circle-line"></i>
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 w-full lg:w-[50%]">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>

              <ul className="space-y-2 text-sm text-gray-500">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={section.urls[i]}
                      className="hover:text-[#2183cf] transition"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © {currentYear} Hashblog — Built for creators & developers.
      </div>
    </footer>
  );
};

export default Footer;
