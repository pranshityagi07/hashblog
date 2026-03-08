import React, { useEffect, useState } from "react";
import CommentTableItem from "../../component/admin/CommentTableItem";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Comment = () => {

  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");

  const { axios } = useAppContext();

  const fetchComments = async () => {

    try {

      const { data } = await axios.get("/api/admin/comments");

      data.success
        ? setComments(data.comments)
        : toast.error(data.message);

    } catch (error) {
      toast.error(error.message);
    }

  };

  useEffect(() => {
    fetchComments();
    
  }, []);


  return (
    <div className="flex-1 p-10 bg-gray-50 min-h-screen">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Comment 
        </h1>

        {/* Filters */}
        <div className="flex gap-3 mb-6">

          {["Approved", "Not Approved"].map((item) => (

            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-4 py-1.5 rounded-full text-sm transition
              ${
                filter === item
                  ? "bg-[#2183cf] text-white"
                  : "bg-white border text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item}

            </button>

          ))}

        </div>


        <div className="bg-white rounded-2xl border shadow overflow-hidden">

          <table className="w-full text-sm">

            <thead className="bg-gray-100 text-gray-600 text-xs uppercase">

              <tr>
                <th className="px-5 py-3 text-left">
                  Blog Title & Comment
                </th>
                <th className="px-5 py-3 max-sm:hidden text-left">
                  Date
                </th>
                <th className="px-5 py-3 text-left">
                  Actions
                </th>
              </tr>

            </thead>

            <tbody className="divide-y">

              {comments
                .filter((comment) =>
                  filter === "Approved"
                    ? comment.isApproved
                    : !comment.isApproved
                )
                .map((comment, index) => (
                  <CommentTableItem
                    key={comment._id}
                    comment={comment}
                    index={index + 1}
                    fetchComments={fetchComments}
                  />
                ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Comment;