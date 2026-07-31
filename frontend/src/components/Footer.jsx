import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold text-white mb-3">
          Munazza Goya
        </h2>

        <p className="mb-6">
          Artificial Intelligence Student | Full Stack Developer
        </p>

        <div className="flex justify-center gap-6 text-3xl mb-8">

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:your@email.com"
            className="hover:text-blue-400"
          >
            <FaEnvelope />
          </a>

        </div>

        <hr className="border-slate-700 mb-6" />

        <p>
          © 2026 Munazza Goya. Built with React, Tailwind CSS & Node.js.
        </p>

      </div>
    </footer>
  );
}

export default Footer;