function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`scroll-mt-24 min-h-screen px-4 py-12 transition-colors duration-300 sm:px-6 sm:py-16 lg:px-10 ${
        darkMode
          ? "bg-[#171A16] text-[#F3F4EF]"
          : "bg-[#F7F7F3] text-[#1A1A18]"
      }`}
    >
      <div className="mx-auto max-w-7xl">

        {/* PAGE HEADER */}
        <div className="mb-12 text-center sm:mb-16">
          <p
            className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm sm:tracking-[0.3em] ${
              darkMode ? "text-[#9AA88F]" : "text-[#7B8B73]"
            }`}
          >
            Get To Know Me
          </p>

          <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            About{" "}
            <span
              className={`bg-clip-text text-transparent ${
                darkMode
                  ? "bg-gradient-to-r from-[#9AA88F] to-[#C1C9B9]"
                  : "bg-gradient-to-r from-[#6F8066] to-[#9AA88F]"
              }`}
            >
              Me
            </span>
          </h1>

          <p
            className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
              darkMode ? "text-[#AEB5A8]" : "text-[#62675E]"
            }`}
          >
            Discover my journey, interests, and passion for technology.
          </p>
        </div>

        {/* ABOUT CONTENT */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">

          {/* ABOUT ME CARD */}
          <div
            className={`rounded-2xl border p-6 sm:p-8 ${
              darkMode
                ? "border-[#30362D] bg-[#22261F]"
                : "border-[#D9DCD2] bg-white shadow-lg"
            }`}
          >
            <h2 className="text-2xl font-bold sm:text-3xl">
              Who I Am
            </h2>

            <div
              className={`mt-5 space-y-4 text-sm leading-7 sm:text-base ${
                darkMode ? "text-[#C1C7BC]" : "text-[#62675E]"
              }`}
            >
              <p>
                Hello! I'm Hemachandran B R, a passionate Information
                Technology student with an interest in web development
                and modern technologies.
              </p>

              <p>
                I enjoy building responsive and user-friendly websites
                using frontend and backend technologies. I am always
                interested in learning new concepts and improving my
                technical skills.
              </p>

              <p>
                My goal is to become a skilled software developer and
                contribute to meaningful projects while continuing to
                grow professionally.
              </p>
            </div>
          </div>

          {/* EDUCATION CARD */}
          <div
            className={`rounded-2xl border p-6 sm:p-8 ${
              darkMode
                ? "border-[#30362D] bg-[#22261F]"
                : "border-[#D9DCD2] bg-white shadow-lg"
            }`}
          >
            <h2 className="text-2xl font-bold sm:text-3xl">
              Education
            </h2>

            <div className="relative mt-8 space-y-8 border-l-2 border-[#7B8B73] pl-6">

              {/* B.TECH */}
              <div className="relative">
                <span
                  className={`absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 ${
                    darkMode
                      ? "border-[#9AA88F] bg-[#22261F]"
                      : "border-[#7B8B73] bg-white"
                  }`}
                ></span>

                <p
                  className={`text-sm font-semibold ${
                    darkMode ? "text-[#9AA88F]" : "text-[#7B8B73]"
                  }`}
                >
                  Current
                </p>

                <h3 className="mt-2 text-lg font-bold sm:text-xl">
                  B.Tech Information Technology
                </h3>

                <p
                  className={`mt-2 text-sm leading-7 sm:text-base ${
                    darkMode ? "text-[#AEB5A8]" : "text-[#62675E]"
                  }`}
                >
                  Anna University Engineering College,
                  Villupuram
                </p>

                <p
                  className={`mt-2 text-sm ${
                    darkMode ? "text-[#858D80]" : "text-[#777C74]"
                  }`}
                >
                  Undergraduate Student
                </p>
              </div>

              {/* 12TH STANDARD */}
              <div className="relative">
                <span
                  className={`absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 ${
                    darkMode
                      ? "border-[#9AA88F] bg-[#22261F]"
                      : "border-[#7B8B73] bg-white"
                  }`}
                ></span>

                <p
                  className={`text-sm font-semibold ${
                    darkMode ? "text-[#9AA88F]" : "text-[#7B8B73]"
                  }`}
                >
                  2023
                </p>

                <h3 className="mt-2 text-lg font-bold sm:text-xl">
                  Higher Secondary (12th Standard)
                </h3>

                <p
                  className={`mt-2 text-sm leading-7 sm:text-base ${
                    darkMode ? "text-[#AEB5A8]" : "text-[#62675E]"
                  }`}
                >
                  Sri Ramana Maharishi Matriculation
                  Higher Secondary School
                </p>

                <p
                  className={`mt-2 text-sm ${
                    darkMode ? "text-[#858D80]" : "text-[#777C74]"
                  }`}
                >
                  Completed in 2023
                </p>
              </div>

            </div>
          </div>

          {/* TECHNICAL INTERESTS */}
          <div
            className={`rounded-2xl border p-6 sm:p-8 ${
              darkMode
                ? "border-[#30362D] bg-[#22261F]"
                : "border-[#D9DCD2] bg-white shadow-lg"
            }`}
          >
            <h2 className="text-2xl font-bold sm:text-3xl">
              Technical Interests
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {[
                "Web Development",
                "React.js",
                "JavaScript",
                "Frontend Development",
                "Backend Development",
                "Responsive Design",
              ].map((interest) => (
                <span
                  key={interest}
                  className={`rounded-full px-4 py-2 text-xs font-medium sm:text-sm ${
                    darkMode
                      ? "bg-[#30362D] text-[#C1C7BC]"
                      : "bg-[#EEF0E9] text-[#4F574A]"
                  }`}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* CAREER GOAL */}
          <div
            className={`rounded-2xl border p-6 sm:p-8 ${
              darkMode
                ? "border-[#30362D] bg-[#22261F]"
                : "border-[#D9DCD2] bg-white shadow-lg"
            }`}
          >
            <h2 className="text-2xl font-bold sm:text-3xl">
              My Career Goal
            </h2>

            <p
              className={`mt-5 text-sm leading-7 sm:text-base ${
                darkMode ? "text-[#C1C7BC]" : "text-[#62675E]"
              }`}
            >
              I want to start my career in the software industry,
              develop practical experience, work with a collaborative
              team, and build reliable applications that solve
              real-world problems.
            </p>
          </div>

        </div>

        {/* CALL TO ACTION */}
        <div className="mt-10 text-center sm:mt-14">
          <p
            className={`mb-5 text-sm sm:text-base ${
              darkMode ? "text-[#AEB5A8]" : "text-[#62675E]"
            }`}
          >
            Interested in working together?
          </p>

          <a
            href="#contact"
            className={`inline-block rounded-full px-7 py-3 text-sm font-bold text-white transition duration-300 hover:scale-105 hover:shadow-lg sm:text-base ${
              darkMode
                ? "bg-[#7B8B73] hover:bg-[#8B9A82] hover:shadow-[#9AA88F]/20"
                : "bg-[#7B8B73] hover:bg-[#6F8066] hover:shadow-[#7B8B73]/20"
            }`}
          >
            Let's Connect
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;