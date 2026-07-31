import projects from "../data/projectsData";

function Projects() {
  return (
    <section className="bg-slate-800 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">

          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition duration-300"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-5 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;