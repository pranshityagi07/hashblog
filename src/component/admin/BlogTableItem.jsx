import React from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);
  const { axios } = useAppContext();

  const deleteBlog = async () => {
    const confirm = window.confirm("Are you sure you want to delete this blog?");
    if (!confirm) return;
    try {
      const { data } = await axios.delete(`/api/blog/delete/${blog._id}`);
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const togglePublish = async () => {
    try {
      const { data } = await axios.put(`/api/blog/toggle-publish/${blog._id}`);
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <tr className="hover:bg-gray-50 transition-colors">

      {/* Index */}
      <td className="px-4 py-3 text-center text-xs font-bold text-gray-400 w-10">
        {index}
      </td>

      {/* Title */}
      <td className="px-4 py-3">
        <p className="text-sm font-medium text-gray-800 line-clamp-1">{title}</p>
      </td>

      {/* Date - hidden on mobile */}
      <td className="px-4 py-3 text-center text-xs text-gray-500 max-sm:hidden whitespace-nowrap">
        {BlogDate.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </td>

      {/* Status - hidden on mobile */}
      <td className="px-4 py-3 text-center max-sm:hidden">
        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full
          ${blog.isPublished
            ? "bg-green-50 text-green-600"
            : "bg-orange-50 text-orange-500"
          }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${blog.isPublished ? "bg-green-500" : "bg-orange-400"}`}></span>
          {blog.isPublished ? "Published" : "Draft"}
        </span>
      </td>

      {/* Actions */}
      <td className="px-4 py-3">
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={togglePublish}
            className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition
              ${blog.isPublished
                ? "border-orange-200 text-orange-500 hover:bg-orange-50"
                : "border-green-200 text-green-600 hover:bg-green-50"
              }`}
          >
            {blog.isPublished ? "Unpublish" : "Publish"}
          </button>

          <button
            onClick={deleteBlog}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-red-400 hover:bg-red-50 hover:text-red-500 transition"
          >
            <i className="ri-delete-bin-5-line text-base"></i>
          </button>
        </div>
      </td>

    </tr>
  );
};

export default BlogTableItem;