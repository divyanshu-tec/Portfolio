import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built using React and Tailwind CSS to showcase my skills and projects.",
    tech: ["React", "Tailwind", "JavaScript"],
    link: "https://divport.netlify.app/"
  },
  {
    title: "E-Commerce App",
    description:
      "Full-stack MERN application with product listing, cart, and payment integration.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "#"
  },
  {
    title: "Proservhomess",
    description:
      "Reliable solutions for smarter and comfortable living.",
    tech: ["React.js", "TailwindCSS", "Email.js", "Javascript"],
    link: "https://proservhomes.com/"
  }
];

const Projects = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-white text-black" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🚀 My Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-2xl p-6 border-[1px] hover:scale-105 hover:shadow-green-500/50 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-black mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-black text-xs px-2 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline font-medium"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
