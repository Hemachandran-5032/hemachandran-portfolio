
import { Link } from "react-router-dom";

function About({ darkMode }) {
  return (
    <section
      className={`min-h-screen px-4 py-12 transition-colors duration-300 sm:px-6 sm:py-16 lg:px-10 ${
        darkMode
          ? "bg-[#050b20] text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-7xl">

        {/* PAGE HEADER */}
        <div className="mb-12 text-center sm:mb-16">
          <p
            className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm sm:tracking-[0.3em] ${
              darkMode ? "text-cyan-400" : "text-cyan-600"
            }`}
          >
            Get To Know Me
          </p>

          <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <p
            className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
              darkMode ? "text-slate-400" : "text-slate-600"
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
                ? "border-slate-800 bg-[#0b1430]"
                : "border-slate-200 bg-white shadow-lg"
            }`}
          >
            <h2 className="text-2xl font-bold sm:text-3xl">
              Who I Am
            </h2>

            <div
              className={`mt-5 space-y-4 text-sm leading-7 sm:text-base ${
                darkMode ? "text-slate-300" : "text-slate-600"
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
                ? "border-slate-800 bg-[#0b1430]"
                : "border-slate-200 bg-white shadow-lg"
            }`}
          >
            <h2 className="text-2xl font-bold sm:text-3xl">
              Education
            </h2>

            <div className="relative mt-8 space-y-8 border-l-2 border-cyan-400 pl-6">

              {/* B.TECH */}
              <div className="relative">
                <span
                  className={`absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 ${
                    darkMode
                      ? "border-cyan-400 bg-[#0b1430]"
                      : "border-cyan-500 bg-white"
                  }`}
                ></span>

                <p className="text-sm font-semibold text-cyan-400">
                  Current
                </p>

                <h3 className="mt-2 text-lg font-bold sm:text-xl">
                  B.Tech Information Technology
                </h3>

                <p
                  className={`mt-2 text-sm leading-7 sm:text-base ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Anna University Engineering College,
                  Villupuram
                </p>

                <p
                  className={`mt-2 text-sm ${
                    darkMode ? "text-slate-500" : "text-slate-500"
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
                      ? "border-purple-400 bg-[#0b1430]"
                      : "border-purple-500 bg-white"
                  }`}
                ></span>

                <p className="text-sm font-semibold text-purple-400">
                  2023
                </p>

                <h3 className="mt-2 text-lg font-bold sm:text-xl">
                  Higher Secondary (12th Standard)
                </h3>

                <p
                  className={`mt-2 text-sm leading-7 sm:text-base ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Sri Ramana Maharishi Matriculation
                  Higher Secondary School
                </p>

                <p
                  className={`mt-2 text-sm ${
                    darkMode ? "text-slate-500" : "text-slate-500"
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
                ? "border-slate-800 bg-[#0b1430]"
                : "border-slate-200 bg-white shadow-lg"
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
                      ? "bg-slate-800 text-slate-300"
                      : "bg-slate-100 text-slate-700"
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
                ? "border-slate-800 bg-[#0b1430]"
                : "border-slate-200 bg-white shadow-lg"
            }`}
          >
            <h2 className="text-2xl font-bold sm:text-3xl">
              My Career Goal
            </h2>

            <p
              className={`mt-5 text-sm leading-7 sm:text-base ${
                darkMode ? "text-slate-300" : "text-slate-600"
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
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Interested in working together?
          </p>

          <Link
            to="/contact"
            className="inline-block rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-7 py-3 text-sm font-bold text-white transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30 sm:text-base"
          >
            Let's Connect
          </Link>
        </div>

      </div>
    </section>
  );
}

export default About;