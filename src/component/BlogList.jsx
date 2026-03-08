import React, { useState } from "react";
import { blogCategories } from "../assets/assets";
import { motion } from "motion/react";
import BlogCard from "./BlogCard";
import { useAppContext } from "../context/AppContext";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const { blogs, input } = useAppContext();

  const filteredBlogs = () => {
    if (input === "") return blogs;

    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(input.toLowerCase()) ||
        blog.category.toLowerCase().includes(input.toLowerCase())
    );
  };

  const visibleBlogs = filteredBlogs().filter((blog) =>
    menu === "All" ? true : blog.category === menu
  );

  return (
    <section  className="px-6 sm:px-12 xl:px-24 mb-28">

      {/* Section Header */}
      <div id='explore' className="text-center my-10">

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Explore articles on <span className="text-[#2183cf]">Hashblog</span>
        </h2>

        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
          Discover insightful articles written by developers, designers,
          entrepreneurs, and creators from around the world.
        </p>

      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-14">

        {blogCategories.map((item) => (
          <motion.button
            whileTap={{ scale: 0.95 }}
            key={item}
            onClick={() => setMenu(item)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border
            ${
              menu === item
                ? "bg-[#2183cf] text-white border-[#2183cf] shadow-md"
                : "bg-white text-gray-600 border-gray-200 hover:border-[#2183cf] hover:text-[#2183cf]"
            }`}
          >
            {item}
          </motion.button>
        ))}

      </div>

      {/* Blog Grid */}
      {visibleBlogs.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {visibleBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-16 text-gray-500">
          No blogs found for your search.
        </div>
      )}

    </section>
  );
};

export default BlogList;