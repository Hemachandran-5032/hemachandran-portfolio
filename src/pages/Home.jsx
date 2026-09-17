
import { Link } from "react-router-dom";

function Home({ darkMode }) {
  return (
    <main
      className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
        darkMode
          ? "bg-[#050b20] text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* HERO SECTION */}
      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="min-w-0 text-center lg:text-left">

            {/* INTRODUCTION */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-base">
              Welcome to my portfolio
            </p>

            {/* NAME */}
            <h1 className="overflow-visible text-4xl font-extrabold leading-[1.15] sm:text-5xl lg:text-5xl xl:text-6xl">

              <span
                className={`block ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Hi, I'm
              </span>

              {/* FULL NAME */}
              <span className="mt-3 inline-block whitespace-nowrap bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text pb-2 pr-4 text-transparent">
                Hemachandran B R
              </span>

            </h1>

            {/* ROLE */}
            <h2
              className={`mt-5 text-2xl font-bold sm:text-3xl ${
                darkMode ? "text-slate-200" : "text-slate-700"
              }`}
            >
              Full Stack Developer
            </h2>

            {/* DESCRIPTION */}
            <p
              className={`mx-auto mt-6 max-w-xl text-base leading-8 sm:text-lg lg:mx-0 ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              I am a passionate Information Technology student interested in
              web development and modern technologies. I enjoy creating
              responsive, user-friendly websites and learning new skills.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">

              {/* VIEW PROJECTS */}
              <Link
                to="/projects"
                className="rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-7 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30"
              >
                View My Work
              </Link>

              {/* CONTACT */}
              <Link
                to="/contact"
                className={`rounded-full border px-7 py-3 font-bold transition duration-300 hover:scale-105 ${
                  darkMode
                    ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#050b20]"
                    : "border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white"
                }`}
              >
                Get In Touch
              </Link>

              {/* DOWNLOAD RESUME */}
              <a
                href="/resume.pdf"
                download="Hemachandran-BR-Resume.pdf"
                className={`rounded-full border px-7 py-3 font-bold transition duration-300 hover:scale-105 ${
                  darkMode
                    ? "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                    : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                }`}
              >
                Download Resume
              </a>

            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-8 flex justify-center gap-6 lg:justify-start">

              {/* GITHUB */}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className={`font-semibold transition hover:text-cyan-400 ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                GitHub ↗
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className={`font-semibold transition hover:text-cyan-400 ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                LinkedIn ↗
              </a>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">

              {/* GLOW EFFECT */}
              <div className="absolute -inset-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-30 blur-3xl"></div>

              {/* PROFILE IMAGE */}
              <img
                src="/hemu.jpeg"
                alt="Hemachandran B R"
                className="relative h-72 w-72 rounded-full border-4 border-cyan-400 bg-[#5b8fd5] object-contain shadow-2xl shadow-cyan-400/20 sm:h-96 sm:w-96"
              />

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Home;