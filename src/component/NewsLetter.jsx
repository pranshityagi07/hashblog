import React from "react";

const NewsLetter = () => {
  return (
    <section className="px-6 sm:px-12 xl:px-24 my-28">

      <div className="max-w-3xl mx-auto text-center p-10 sm:p-14">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Never Miss a Blog on{" "}
          <span className="text-[#2183cf]">Hashblog</span>
        </h2>

        <p className="text-gray-500 mt-4 mb-10 max-w-xl mx-auto">
          Join thousands of readers who receive the latest articles,
          insights, and developer stories directly in their inbox.
        </p>

        <form className="flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto">

          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="w-full flex-1 px-5 py-3 rounded-full border border-gray-300 focus:border-[#2183cf] focus:ring-2 focus:ring-[#2183cf]/20 outline-none transition"
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#2183cf] text-white font-medium hover:shadow-lg hover:shadow-[#2183cf]/30 transition-all duration-300 hover:-translate-y-[2px]"
          >
            <i className="ri-mail-send-line"></i>
            Subscribe
          </button>

        </form>

      </div>

    </section>
  );
};

export default NewsLetter;