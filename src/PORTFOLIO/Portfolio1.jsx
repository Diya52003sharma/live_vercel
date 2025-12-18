import React from "react";

export default function Portfolio() {
  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 bg-black shadow-lg z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-white">Diya Sharma</h1>
          <div className="space-x-6 text-lg">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center text-center px-6 pt-28 bg-gray-100"
      >
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900">
            Hi, I'm Diya Sharma
          </h2>
          <p className="text-xl mt-4 text-gray-600">Frontend Developer</p>

          <a
            href="resume_DIYA SHARMA_for frontend developer (1).pdf"
            download
            className="inline-block mt-6 px-6 py-3 bg-black text-white font-semibold rounded-xl shadow hover:bg-gray-800 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-gray-50">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">
          Skills
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "TypeScript",
            "Git",
            "GitHub",
            "Bootstrap",
          ].map((skill) => (
            <div
              key={skill}
              className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm text-center text-lg font-semibold hover:shadow-md transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-white">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
          Projects
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-md transition">
            <h3 className="text-2xl font-bold text-gray-900">
              AI Mock Interview Platform
            </h3>
            <p className="mt-3 text-gray-700">
              AI-based platform that takes interviews, gives feedback,
              provides suggestions, and stores user responses.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                className="text-black underline hover:text-gray-700"
                href="https://ai-interview-lwxx.onrender.com/"
              >
                Live
              </a>
              <a className="text-black underline hover:text-gray-700" href="#">
                Code
              </a>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-md transition">
            <h3 className="text-2xl font-bold text-gray-900">
              Engineering Hub Website
            </h3>
            <p className="mt-3 text-gray-700">
              Website for students with notes, videos, and resources organized
              semester-wise.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                className="text-black underline hover:text-gray-700"
                href="https://engghub.onrender.com/"
              >
                Live
              </a>
              <a className="text-black underline hover:text-gray-700" href="#">
                Code
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">
          Contact Me
        </h2>

        <div className="max-w-xl mx-auto p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-xl border border-gray-300 bg-gray-100 text-gray-900"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-xl border border-gray-300 bg-gray-100 text-gray-900"
            />
            <textarea
              placeholder="Message"
              className="p-3 rounded-xl border border-gray-300 bg-gray-100 text-gray-900"
              rows="4"
            ></textarea>
            <button className="bg-black text-white p-3 rounded-xl shadow hover:bg-gray-800 transition font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-600 bg-white border-t border-gray-300 mt-10">
        2025 • Diya Sharma | Frontend Developer
      </footer>
    </div>
  );
}
