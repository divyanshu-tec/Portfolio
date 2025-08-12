import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userinfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bolzgvpa", userinfo);
      alert("Message sent successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-gray-100 to-white"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          📬 Contact Me
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Have a question or want to work together? Drop me a message below!
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-lg rounded-xl p-8 space-y-6"
        >
          <input
            {...register("name", { required: true })}
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
          />
          {errors.name && <span>This field is required</span>}
          <input
            {...register("email", { required: true })}
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
          />
          {errors.email && (
            <span>
              This field is action = "https://getform.io/f/bolzgvpa " required
            </span>
          )}
          <textarea
            {...register("message", { required: true })}
            placeholder="Your Message"
            name="message"
            rows="5"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
          ></textarea>
          {errors.message && <span>This field is required</span>}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8 text-2xl">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-green-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Resume Button */}
        <div className="flex justify-center mt-6">
          <a
            href="/resume.pdf" // Place your resume file inside "public" folder
            download
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
