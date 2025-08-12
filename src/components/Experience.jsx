import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", logo: "/html.png" },
  { name: "CSS", logo: "/css.jpg" },
  { name: "JavaScript", logo: "/javascript.png" },
  { name: "React", logo: "/reactjs.png" },
  { name: "Node.js", logo: "/node.png" },
  { name: "Tailwind CSS", logo: "/tailwind_CSS_Logo.svg.png" },
  { name: "Python", logo: "/python.webp" },
  { name: "MySQL", logo: "/sql.png" },
];

const Experience = () => {
  return (
    <section className="py-16 bg-gray-100" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          💼 Experience
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-4" />
              <p className="text-gray-700 font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
