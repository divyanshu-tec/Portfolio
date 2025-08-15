import React, { useState } from "react";
import { FaGraduationCap, FaUniversity, FaSchool, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function About() {
  const [activeEducation, setActiveEducation] = useState(0);

  const educationData = [
    {
      id: 0,
      degree: "Bachelor of Technology (B.Tech) in Computer Science",
      institution: "Dr A.P.J Abdul Kalam Technical University",
      duration: "2021 - 2025",
      description: "Focused on web development and software engineering.",
      icon: FaUniversity,
      color: "from-red-500 to-red-700"
    },
    {
      id: 1,
      degree: "Higher Secondary (Class XII)",
      institution: "R.K Mission School",
      duration: "2019 - 2021",
      description: "Completed with PCM (Physics, Chemistry, Mathematics).",
      icon: FaSchool,
      color: "from-green-500 to-green-700"
    },
    {
      id: 2,
      degree: "Secondary School (Class X)",
      institution: "Gyan Kunj Academy",
      duration: "2018 - 2019",
      description: "Built a strong academic foundation with an interest in computer science.",
      icon: FaGraduationCap,
      color: "from-yellow-500 to-yellow-700"
    }
  ];

  return (
    <section
      id="about"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>

      {/* Intro Card */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-12 hover:shadow-xl transition-all duration-300">
        <p className="text-lg text-gray-700 leading-relaxed">
          Hello, my name is{" "}
          <span className="text-yellow-400 font-semibold">Divyanshu</span>. I'm
          a passionate <span className="font-semibold">Web Developer</span> who
          loves building modern, responsive, and user-friendly websites. I work
          with the <span className="text-yellow-400">MERN stack</span>, turning
          ideas into reality through efficient code and creative problem-solving.
          Always eager to learn new technologies and improve.
        </p>
      </div>

      {/* Enhanced Education Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white shadow-2xl rounded-2xl p-8 mb-12 border border-gray-100">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">Education Journey</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Education Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {educationData.map((edu, index) => (
            <button
              key={edu.id}
              onClick={() => setActiveEducation(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                activeEducation === index
                  ? `bg-gradient-to-r ${edu.color} text-white shadow-lg`
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <edu.icon className="text-lg" />
              <span className="font-medium">{edu.degree.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Education Display */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className={`transition-all duration-500 ${
                activeEducation === index ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              <div className="flex items-start space-x-6">
                <div className={`p-4 rounded-full bg-gradient-to-r ${edu.color} text-white shadow-lg`}>
                  <edu.icon className="text-3xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">
                    {edu.degree}
                  </h4>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <FaUniversity className="text-red-500" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaCalendarAlt className="text-green-500" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaMapMarkerAlt className="text-yellow-500" />
                      <span>{edu.description}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Progress Indicator */}
              <div className="mt-6">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Progress</span>
                  <span>{Math.round(((index + 1) / educationData.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${edu.color} transition-all duration-1000`}
                    style={{ width: `${((index + 1) / educationData.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-all duration-300">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Skills</h3>
        <p className="text-gray-700 leading-relaxed">
          Proficient in{" "}
          <span className="text-green-400 font-semibold">HTML5</span>,{" "}
          <span className="text-green-400 font-semibold">CSS3</span>, and{" "}
          <span className="text-green-400 font-semibold">JavaScript (ES6+)</span>{" "}
          for building solid web foundations. Experienced with frontend
          frameworks like <span className="text-green-400 font-semibold">React.js</span>{" "}
          and backend technologies such as{" "}
          <span className="text-green-400 font-semibold">Node.js</span> with{" "}
          <span className="text-green-400 font-semibold">Express.js</span>. Skilled
          in databases like <span className="text-green-400 font-semibold">MongoDB</span>{" "}
          and styling frameworks like{" "}
          <span className="text-green-400 font-semibold">Tailwind CSS</span>. Also
          familiar with <span className="text-green-400 font-semibold">Python</span>{" "}
          for scripting and backend automation, and use{" "}
          <span className="text-green-400 font-semibold">Git & GitHub</span> for
          version control. I follow responsive web design principles to ensure
          great user experience on all devices.
        </p>
      </div>
    </section>
  );
}

export default About;
