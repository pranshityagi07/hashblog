import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission — no real backend call
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0e7db5] to-[#1ab3c4] text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-white/80 text-base max-w-xl mx-auto">
            Have a question, suggestion, or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="space-y-8">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Let's talk</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Whether you have feedback about a blog post, a technical question, or just want
              to connect — feel free to reach out using the form or via the details below.
            </p>
          </div>

          {/* Mock Contact Details */}
          <div className="space-y-5">

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#0e7db5]/10 text-[#0e7db5] flex items-center justify-center shrink-0">
                <i className="ri-map-pin-line text-lg"></i>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Location</p>
                <p className="text-sm text-gray-500">New Delhi, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#0e7db5]/10 text-[#0e7db5] flex items-center justify-center shrink-0">
                <i className="ri-mail-line text-lg"></i>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Email</p>
                <p className="text-sm text-gray-500">hello@hashblog.dev</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#0e7db5]/10 text-[#0e7db5] flex items-center justify-center shrink-0">
                <i className="ri-time-line text-lg"></i>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Response Time</p>
                <p className="text-sm text-gray-500">Usually within 1–2 business days</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#0e7db5]/10 text-[#0e7db5] flex items-center justify-center shrink-0">
                <i className="ri-github-line text-lg"></i>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">GitHub</p>
                <p className="text-sm text-gray-500">github.com/hashblog-dev</p>
              </div>
            </div>

          </div>

          {/* FAQ Note */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-700">
            <strong>Quick tip:</strong> Before reaching out, check if your question is already
            answered in our blog posts or About page. It might save you some time!
          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8">

          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-500 flex items-center justify-center text-3xl">
                <i className="ri-checkbox-circle-line"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Message Sent!</h3>
              <p className="text-sm text-gray-500 max-w-xs">
                Thanks for reaching out. This is a demo form — no real message was sent,
                but in a real app it would be! We'll be in touch soon.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                className="mt-2 text-sm text-[#0e7db5] underline underline-offset-2 hover:text-[#0c6a9a] transition"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              <h3 className="text-lg font-bold text-gray-800 mb-1">Send a Message</h3>

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0e7db5]/30 focus:border-[#0e7db5] transition"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g. rahul@email.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0e7db5]/30 focus:border-[#0e7db5] transition"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="e.g. Question about a blog post"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0e7db5]/30 focus:border-[#0e7db5] transition"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0e7db5]/30 focus:border-[#0e7db5] transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0e7db5] hover:bg-[#0c6a9a] text-white font-semibold py-2.5 rounded-lg text-sm transition"
              >
                Send Message
              </button>

              <p className="text-xs text-gray-400 text-center">
                This form is for demo purposes only. No data is actually sent.
              </p>

            </form>
          )}

        </div>

      </div>

      {/* Disclaimer */}
      <div className="bg-gray-50 border-t py-6 px-6 text-center">
        <p className="text-xs text-gray-400 max-w-2xl mx-auto">
          ⚠️ <strong>Disclaimer:</strong> Hashblog is a student learning project built for educational
          purposes only. The contact form on this page is a demo and does not send real messages.
          This is not a commercial product.
        </p>
      </div>

    </div>
  );
};

export default Contact;