function Home({ darkMode }) {
  return (
    <main
      id="home"
      className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
        darkMode
          ? "bg-[#171A16] text-[#F3F4EF]"
          : "bg-[#F7F7F3] text-[#1A1A18]"
      }`}
    >
      {/* HERO SECTION */}
      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="min-w-0 text-center lg:text-left">

            {/* INTRODUCTION */}
            <p
              className={`mb-4 text-sm font-semibold uppercase tracking-[0.3em] sm:text-base ${
                darkMode ? "text-[#9AA88F]" : "text-[#7B8B73]"
              }`}
            >
              Welcome to my portfolio
            </p>

            {/* NAME */}
            <h1 className="overflow-visible text-4xl font-extrabold leading-[1.15] sm:text-5xl lg:text-5xl xl:text-6xl">

              <span
                className={`block ${
                  darkMode ? "text-[#F3F4EF]" : "text-[#1A1A18]"
                }`}
              >
                Hi, I'm
              </span>

              {/* FULL NAME */}
              <span
                className={`mt-3 inline-block whitespace-nowrap bg-clip-text pb-2 pr-4 text-transparent ${
                  darkMode
                    ? "bg-gradient-to-r from-[#9AA88F] to-[#C1C9B9]"
                    : "bg-gradient-to-r from-[#6F8066] to-[#9AA88F]"
                }`}
              >
                Hemachandran B R
              </span>

            </h1>

            {/* ROLE */}
            <h2
              className={`mt-5 text-2xl font-bold sm:text-3xl ${
                darkMode ? "text-[#D8DDD3]" : "text-[#454A42]"
              }`}
            >
              Full Stack Developer
            </h2>

            {/* DESCRIPTION */}
            <p
              className={`mx-auto mt-6 max-w-xl text-base leading-8 sm:text-lg lg:mx-0 ${
                darkMode ? "text-[#AEB5A8]" : "text-[#62675E]"
              }`}
            >
              I am a passionate Information Technology student interested in
              web development and modern technologies. I enjoy creating
              responsive, user-friendly websites and learning new skills.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">

              {/* VIEW PROJECTS */}
              <a
                href="#projects"
                className={`rounded-full px-7 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:shadow-lg ${
                  darkMode
                    ? "bg-[#7B8B73] hover:bg-[#8B9A82] hover:shadow-[#9AA88F]/20"
                    : "bg-[#7B8B73] hover:bg-[#6F8066] hover:shadow-[#7B8B73]/20"
                }`}
              >
                View My Work
              </a>

              {/* CONTACT */}
              <a
                href="#contact"
                className={`rounded-full border px-7 py-3 font-bold transition duration-300 hover:scale-105 ${
                  darkMode
                    ? "border-[#9AA88F] text-[#9AA88F] hover:bg-[#9AA88F] hover:text-[#171A16]"
                    : "border-[#7B8B73] text-[#6F8066] hover:bg-[#7B8B73] hover:text-white"
                }`}
              >
                Get In Touch
              </a>

              {/* DOWNLOAD RESUME */}
              <a
                href="/resume.pdf"
                download="Hemachandran-BR-Resume.pdf"
                className={`rounded-full border px-7 py-3 font-bold transition duration-300 hover:scale-105 ${
                  darkMode
                    ? "border-[#AEB5A8] text-[#AEB5A8] hover:bg-[#AEB5A8] hover:text-[#171A16]"
                    : "border-[#8A9184] text-[#62675E] hover:bg-[#8A9184] hover:text-white"
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
                className={`font-semibold transition ${
                  darkMode
                    ? "text-[#AEB5A8] hover:text-[#9AA88F]"
                    : "text-[#62675E] hover:text-[#7B8B73]"
                }`}
              >
                GitHub ↗
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className={`font-semibold transition ${
                  darkMode
                    ? "text-[#AEB5A8] hover:text-[#9AA88F]"
                    : "text-[#62675E] hover:text-[#7B8B73]"
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
              <div
                className={`absolute -inset-5 rounded-full blur-3xl ${
                  darkMode
                    ? "bg-[#7B8B73] opacity-20"
                    : "bg-[#9AA88F] opacity-25"
                }`}
              ></div>

              {/* PROFILE IMAGE */}
              <img
                src="/hemu.jpeg"
                alt="Hemachandran B R"
                className={`relative h-72 w-72 rounded-full border-4 object-contain shadow-2xl sm:h-96 sm:w-96 ${
                  darkMode
                    ? "border-[#9AA88F] bg-[#3A4135] shadow-[#9AA88F]/10"
                    : "border-[#7B8B73] bg-[#E8E9E2] shadow-[#7B8B73]/10"
                }`}
              />

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Home;