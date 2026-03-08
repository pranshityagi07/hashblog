import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#158cc8] to-[#111d58] text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto ">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            About Us
          </div>
          <h1 className="text-4xl  flex md:text-5xl mx-auto font-extrabold leading-tight mb-4">
            Welcome to #Hashblog</h1>
          <p className="text-white/85 text-lg max-w-xl mx-auto leading-relaxed">
            A simple space to read, learn, and share ideas — built by a developer
            who is still learning, just like you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-14 text-gray-700 leading-relaxed">

        {/* What is Hashblog */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#0e7db5] rounded-full inline-block"></span>
            What is Hashblog?
          </h2>
          <p className="mb-4">
            Hashblog is a modern blogging platform where readers can explore articles
            on technology, programming, tutorials, and general topics written by our
            in-house team. Our goal is to provide clean, distraction-free reading
            experiences for curious minds.
          </p>
          <p>
            Whether you're here to learn something new, catch up on a tutorial, or
            just explore interesting content — Hashblog aims to be a reliable and
            enjoyable destination for all kinds of readers.
          </p>
        </section>

        {/* Our Mission */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#0e7db5] rounded-full inline-block"></span>
            Our Mission
          </h2>
          <p className="mb-4">
            At Hashblog, our mission is simple — make knowledge accessible. We believe
            that great content doesn't need to be hidden behind paywalls or buried under
            ads. Every article on Hashblog is free to read and open to everyone.
          </p>
          <p>
            We also believe in the power of community. Readers can leave comments on
            posts, start discussions, and engage with content in a meaningful way. We
            moderate comments to keep conversations respectful and constructive.
          </p>
        </section>

        {/* What We Cover */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#0e7db5] rounded-full inline-block"></span>
            What We Cover
          </h2>
          <p className="mb-4">
            Our content spans a wide range of topics, with a focus on technology and
            software development. Here's a glimpse of what you'll find on Hashblog:
          </p>
          <ul className="list-none space-y-2 pl-0">
            {[
              "Web Development — React, Node.js, full-stack tutorials",
              "Programming Tips — Clean code practices, debugging, tools",
              "Technology News — Industry updates and trends",
              "Project Walkthroughs — Real-world build guides",
              "Career Advice — Tips for developers and tech learners",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-[#0e7db5]/10 text-[#0e7db5] text-xs flex items-center justify-center font-bold shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* About the Developer */}
        <section className="bg-gradient-to-br from-[#f0f9ff] to-[#e0f4fb] border border-[#b3e0f0] rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About the Developer
          </h2>
          <p className="mb-4">
            Hashblog was built by <strong>Pranshi Tyagi</strong>, a passionate developer who
            is currently learning full-stack web development using the MERN stack
            (MongoDB, Express.js, React, Node.js).
          </p>
          <p className="mb-4">
            This project is part of a hands-on learning journey — building real
            projects to understand real concepts. From setting up a backend API to
            designing responsive frontends, Hashblog represents months of learning,
            debugging, and growing as a developer.
          </p>
          <p className="text-sm text-gray-500 italic">
            "The best way to learn is to build something real."
          </p>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#0e7db5] rounded-full inline-block"></span>
            Built With
          </h2>
          <p className="mb-5">
            Hashblog is built using modern web technologies as part of a full-stack
            learning project:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: "MongoDB", desc: "Database" },
              { name: "Express.js", desc: "Backend" },
              { name: "React", desc: "Frontend" },
              { name: "Node.js", desc: "Runtime" },
            ].map((tech) => (
              <div key={tech.name} className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm">
                <p className="font-bold text-gray-800 text-sm">{tech.name}</p>
                <p className="text-xs text-gray-400 mt-1">{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center border-t pt-10">
          <p className="text-gray-500 mb-3">Have questions or feedback?</p>
          <a
            href="/contact"
            className="inline-block bg-[#0e7db5] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#0c6a9a] transition"
          >
            Contact Us
          </a>
        </section>

      </div>

      {/* Learning Disclaimer */}
      <div className="bg-gray-50 border-t py-6 px-6 text-center">
        <p className="text-xs text-gray-400 max-w-2xl mx-auto">
          ⚠️ <strong>Disclaimer:</strong> Hashblog is a student learning project built for
          educational purposes only. It is not a commercial product. Content, data, and
          features may be incomplete or change at any time.
        </p>
      </div>

    </div>
  );
};

export default About;