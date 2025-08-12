import React from "react";

function About() {
  return (
    <section
      id="about"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>

      {/* Intro Card */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          Hello, my name is{" "}
          <span className="text-yellow-400 font-semibold">Divyanshu</span>. I’m
          a passionate <span className="font-semibold">Web Developer</span> who
          loves building modern, responsive, and user-friendly websites. I work
          with the <span className="text-yellow-400">MERN stack</span>, turning
          ideas into reality through efficient code and creative problem-solving.
          Always eager to learn new technologies and improve.
        </p>
      </div>

      {/* Education Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Education</h3>
        <ul className="space-y-6 text-gray-700">
          <li>
            <h4 className="text-green-600 font-semibold text-lg">
              Bachelor of Technology (B.Tech) in Computer Science
            </h4>
            <p>
              Dr A.P.J Abdul Kalam Technical University (2021 - 2025) — Focused
              on web development and software engineering.
            </p>
          </li>
          <li>
            <h4 className="text-green-600 font-semibold text-lg">
              Higher Secondary (Class XII)
            </h4>
            <p>
              R.K Mission School (2019 - 2021) — Completed with PCM (Physics,
              Chemistry, Mathematics).
            </p>
          </li>
          <li>
            <h4 className="text-green-600 font-semibold text-lg">
              Secondary School (Class X)
            </h4>
            <p>
              Gyan Kunj Academy (2018 - 2019) — Built a strong academic
              foundation with an interest in computer science.
            </p>
          </li>
        </ul>
      </div>

      {/* Skills Section */}
      <div className="bg-white shadow-lg rounded-lg p-8">
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
