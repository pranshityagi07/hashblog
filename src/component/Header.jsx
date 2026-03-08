import React, { useRef } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  const onClear = () => {
    setInput("");
    inputRef.current.value = "";
  };

  return (
    <section className="relative px-6 sm:px-12 xl:px-24">

      <div className="max-w-4xl mx-auto text-center mt-16 sm:mt-24">

        {/* Announcement Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full text-sm border border-blue-200 bg-blue-50 text-[#2183cf]">
          <i className="ri-sparkling-line"></i>
          <span>AI powered blog generation now available</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
          Share your ideas with the world
          <br />
          <span className="text-[#2183cf]">through powerful blogging</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Discover stories, thinking, and expertise from writers across the globe.
          Hashblog helps creators publish faster, reach more readers, and build
          a meaningful audience.
        </p>

        {/* Search */}
        <form
          onSubmit={onSubmitHandler}
          className="flex items-center max-w-xl mx-auto mt-10 bg-white border border-gray-200 rounded-full overflow-hidden shadow-md"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search articles, topics, or authors..."
            className="flex-1 px-6 py-3 text-sm outline-none"
          />

          <button
            type="submit"
            className="flex items-center gap-2 bg-[#2183cf] text-white px-6 py-3 hover:bg-[#1b6fae] transition"
          >
            <i className="ri-search-line"></i>
            Search
          </button>
        </form>

        {/* Clear */}
        {input && (
          <button
            onClick={onClear}
            className="mt-4 text-xs text-gray-500 border px-4 py-1 rounded-full hover:bg-gray-100"
          >
            Clear Search
          </button>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto text-center">
          <div>
            <h3 className="text-xl font-bold text-gray-800">12K+</h3>
            <p className="text-sm text-gray-500">Articles</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800">8K+</h3>
            <p className="text-sm text-gray-500">Writers</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800">120K+</h3>
            <p className="text-sm text-gray-500">Readers</p>
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <img
        src={assets.gradientBackground}
        className="absolute -top-40 left-0 w-full -z-10 opacity-70"
      />
    </section>
  );
};

export default Header;