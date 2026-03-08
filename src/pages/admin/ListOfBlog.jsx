import React, { useEffect, useState } from "react";
import BlogTableItem from "../../component/admin/BlogTableItem";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const ListOfBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const { axios } = useAppContext();

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/admin/blogs");

      if (data.success) {
        setBlogs(data.blogs);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 min-h-screen bg-gray-50 p-4 sm:p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            All Blogs
          </h1>

          <p className="text-sm text-gray-500">Manage blog posts</p>
        </div>

        {/* Table Container */}

        <div className="bg-white border rounded-xl shadow-sm overflow-x-auto">
          <table className="w-full text-sm min-w-[600px]">
            <thead className="bg-gray-100 text-gray-600 text-xs uppercase">
              <tr>
                <th className="px-4 py-3">#</th>

                <th className="px-4 py-3 text-left">Title</th>

                <th className="px-4 py-3 hidden sm:table-cell">Date</th>

                <th className="px-4 py-3 hidden md:table-cell">Status</th>

                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {blogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchBlogs}
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListOfBlog;
