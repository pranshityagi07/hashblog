import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/blog/${_id}`)}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#2183cf] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >

      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src={image}
          className="aspect-video w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70"></div>

        {/* Category */}
        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-white/90 text-[#2183cf] backdrop-blur">
          {category}
        </span>

      </div>

      {/* Content */}
      <div className="p-5 flex flex-col">

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#2183cf] transition mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-sm text-gray-600 leading-relaxed line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: description.slice(0, 120),
          }}
        />

        {/* Footer */}
        <div className="flex items-center justify-between mt-6">

          <div className="flex items-center gap-1 text-sm font-medium text-[#2183cf]">

            Read Article

            <i className="ri-arrow-right-line transition group-hover:translate-x-1"></i>

          </div>

        </div>

      </div>
    </article>
  );
};

export default BlogCard;