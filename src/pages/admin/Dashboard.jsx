import React, { useEffect, useState } from "react";
import BlogTableItem from "../../component/admin/BlogTableItem";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const { axios } = useAppContext();

  const fetchDashboard = async () => {
    try {
      const { data } = await axios.get("/api/admin/dashboard");

      data.success
        ? setDashboardData(data.dashBoardData)
        : toast.error(data.message);
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div className="flex-1 p-8 md:p-12 bg-gray-50 min-h-screen">
      {/* Title */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">
          Overview of your Hashblog platform
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blogs */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md transition flex items-center gap-5">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2183cf]/10 text-[#2183cf] text-xl">
            <i className="ri-article-line"></i>
          </div>

          <div>
            <p className="text-2xl font-bold text-gray-800">
              {dashboardData.blogs}
            </p>
            <p className="text-gray-500 text-sm">Total Blogs</p>
          </div>
        </div>

        {/* Comments */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md transition flex items-center gap-5">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-xl">
            <i className="ri-chat-3-line"></i>
          </div>

          <div>
            <p className="text-2xl font-bold text-gray-800">
              {dashboardData.comments}
            </p>
            <p className="text-gray-500 text-sm">Comments</p>
          </div>
        </div>

        {/* Drafts */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md transition flex items-center gap-5">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 text-xl">
            <i className="ri-file-edit-line"></i>
          </div>

          <div>
            <p className="text-2xl font-bold text-gray-800">
              {dashboardData.drafts}
            </p>
            <p className="text-gray-500 text-sm">Draft Blogs</p>
          </div>
        </div>
      </div>

      {/* Latest Blogs */}
      <div className="mt-12">
        <div className="flex items-center gap-3 mb-5">
          <i className="ri-time-line text-[#2183cf] text-xl"></i>

          <h2 className="text-lg font-semibold text-gray-800">Latest Blogs</h2>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm overflow-x-auto">
  <table className="w-full text-sm">  {/* ✅ added w-full */}
    <thead className="bg-gray-100 text-gray-600 text-xs uppercase">
      <tr>
        <th className="px-4 py-3 text-center w-10">#</th>
        <th className="px-4 py-3 text-left">Blog Title</th>
        <th className="px-4 py-3 text-center max-sm:hidden">Date</th>
        <th className="px-4 py-3 text-center max-sm:hidden">Status</th>
        <th className="px-4 py-3 text-center">Actions</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100">
      {dashboardData.recentBlogs.map((blog, index) => (
        <BlogTableItem
          key={blog._id}
          blog={blog}
          fetchBlogs={fetchDashboard}
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

export default Dashboard;
