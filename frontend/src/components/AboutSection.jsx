function AboutSection() {
  return (
    <section id="about" className="bg-slate-800 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Who am I?
            </h3>

            <p className="text-gray-300 leading-8">
              I'm an Artificial Intelligence student passionate about
              Full Stack Development, Machine Learning, and solving
              real-world problems through technology.
            </p>

            <p className="text-gray-300 leading-8 mt-6">
              I enjoy learning new technologies, building responsive
              web applications, and continuously improving my skills
              through practical projects.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-900 rounded-xl p-6 text-center">
              <h3 className="text-3xl font-bold text-blue-400">
                10+
              </h3>
              <p className="mt-2">Projects</p>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 text-center">
              <h3 className="text-3xl font-bold text-blue-400">
                15+
              </h3>
              <p className="mt-2">Technologies</p>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 text-center">
              <h3 className="text-3xl font-bold text-blue-400">
                AI
              </h3>
              <p className="mt-2">Specialization</p>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 text-center">
              <h3 className="text-3xl font-bold text-blue-400">
                2026
              </h3>
              <p className="mt-2">Portfolio</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;