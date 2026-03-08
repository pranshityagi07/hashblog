import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Moment from "moment";
import toast from "react-hot-toast";
import Footer from "../component/Footer";

const Blog = () => {
  const { id } = useParams();
  const { axios } = useAppContext();

  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // fetch blog

  const fetchBlog = async () => {
    try {
      const { data } = await axios.get(`/api/blog/${id}`);

      if (data.success) {
        setData(data.blog);
        setComments(data.comments || []);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // fetch comments
  const fetchComments = async () => {
  try {
    const { data } = await axios.get(`/api/blog/comments/${id}`);
    if (data.success) setComments(data.comments);
  } catch (error) {
    toast.error(error.message);
  }
};

  // add comment

  const addComment = async (e) => {
    e.preventDefault(); 
    setIsSubmitting(true);
    try {
      const { data } = await axios.post("/api/blog/add-comment", {
        blogId: id,
        name,
        content,
      });

      if (data.success) {
        toast.success(data.message);
        setName("");
        setContent("");
        fetchComments();
      }
    } catch (error) {
      toast.error(error.message);
    }finally{
      setIsSubmitting(false);
    }
  };

  // scroll progress bar

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPosition = window.scrollY;

      const progress = (scrollPosition / totalHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if(id){
      fetchBlog();
      fetchComments();
    }
    
  }, [id]);

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Loading blog...
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Scroll Progress Bar */}

      <div
        className="fixed top-0 left-0 h-1 bg-[#2183cf] z-50 transition-all"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog Header */}

        <div className="text-center mt-14">
          <p className="text-sm text-[#2183cf] font-medium">
            {Moment(data.createdAt).format("MMMM Do YYYY")}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
            {data.title}
          </h1>

          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            {data.subTitle}
          </p>
        </div>

        {/* Author Section */}

        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">
            <i className="ri-user-line text-lg"></i>
          </div>

          <div>
            <p className="font-medium text-gray-800">HashBlog Author</p>

            <p className="text-xs text-gray-500">Tech Writer</p>
          </div>
        </div>

        {/* Blog Image */}

        <div className="mt-10">
          <img
            src={data.image}
            alt=""
            className="rounded-xl w-full max-h-[500px] object-cover shadow"
          />
        </div>

        {/* Blog Content */}

        <div
          className="max-w-3xl mx-auto mt-10 text-gray-700 leading-relaxed text-[17px]"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

        {/* Share Section */}

        <div className="max-w-3xl mx-auto mt-14 border-t pt-8">
          <p className="font-semibold mb-4">Share this article</p>

          <div className="flex gap-4 text-xl">
            <button className="w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-[#2183cf] hover:text-white transition">
              <i className="ri-facebook-fill"></i>
            </button>

            <button className="w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-[#2183cf] hover:text-white transition">
              <i className="ri-twitter-x-line"></i>
            </button>

            <button className="w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-[#2183cf] hover:text-white transition">
              <i className="ri-linkedin-fill"></i>
            </button>

            <button className="w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-[#2183cf] hover:text-white transition">
              <i className="ri-link"></i>
            </button>
          </div>
        </div>

        {/* Comments */}

        <div className="max-w-3xl mx-auto mt-16">
          <h3 className="text-xl font-semibold mb-6">
            Comments ({comments?.length || 0})
          </h3>

          <div className="space-y-5">
            {comments?.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 bg-gray-50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200">
                    <i className="ri-user-line text-sm"></i>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {item.name}
                    </p>

                    <p className="text-xs text-gray-500">
                      {Moment(item.createdAt).fromNow()}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comment Form */}

        <form
          onSubmit={addComment}
          className="max-w-3xl mx-auto mt-12 mb-20 space-y-4"
        >
          <h3 className="text-lg font-semibold">Leave a comment</h3>

          <input
            type="text"
            placeholder="Your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2183cf]/40 outline-none"
          />

          <textarea
            placeholder="Write your comment..."
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 h-32 focus:ring-2 focus:ring-[#2183cf]/40 outline-none"
          ></textarea>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-[#2183cf] text-white rounded-lg hover:shadow-md transition"
          >
            {
              isSubmitting? (
                <span>Submitting...</span>
                
              ) : (
                <span>Submit Comment</span>
              )
            }
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
