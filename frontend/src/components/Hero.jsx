import profile from "../assets/images/profile.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section
  id="home"
  className="min-h-screen bg-slate-900 text-white flex items-center pt-24"
>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>
          <p className="text-blue-400 text-xl font-semibold mb-2">
            Hello, I'm
          </p>

          <h1 className="text-6xl md:text-7xl font-extrabold mb-4">
            Munazza Goya
          </h1>

          <h2 className="text-2xl text-gray-300 mb-6">
            AI Student | Full Stack Developer
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-8">
            Passionate about Artificial Intelligence, Machine Learning,
            and Full Stack Development. I enjoy building modern,
            scalable applications that solve real-world problems.
          </p>

          <div className="flex gap-4 mb-8">
            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Download Resume
            </a>

            <a
              href="mailto:munazzagoya2@gmail.com"
              className="border border-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 text-3xl">
            <a href="https://github.com/munazzagoya" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/munazzagoya" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="mailto:munazzagoya2@gmail.com">
  <FaEnvelope />
</a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full"></div>

            <img
              src={profile}
              alt="Profile"
              className="relative w-80 h-80 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;