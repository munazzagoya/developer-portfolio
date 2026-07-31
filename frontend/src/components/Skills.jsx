function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "Python",
    "Machine Learning",
    "Artificial Intelligence",
    "SQL",
    "Git",
    "GitHub",
  ];

  return (
    <section id="skills" className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 rounded-xl p-6 text-center hover:bg-blue-600 transition duration-300 shadow-lg"
            >
              <h3 className="text-lg font-semibold">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;