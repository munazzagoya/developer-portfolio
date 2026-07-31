function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-extrabold text-blue-500 hover:text-blue-400 transition duration-300"
        >
          MG
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">

          <a
            href="#home"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Contact
          </a>

          <a
            href="/resume.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-medium transition duration-300"
          >
            Resume
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;