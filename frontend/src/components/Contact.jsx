import { FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-10">
          Feel free to contact me through email for internships,
          collaborations, or any opportunities.
        </p>

        <a
          href="mailto:munazzagoya2@gmail.com"
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition"
        >
          <FaEnvelope />
          munazzagoya2@gmail.com
        </a>

      </div>
    </section>
  );
}

export default Contact;