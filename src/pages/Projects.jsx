
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website designed to showcase my skills, education, and future development projects.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS"],
    status: "In Progress",
    type: "Web Development",
  },
  {
    id: 2,
    title: "Student Management System",
    description:
      "A planned web application for managing student information, academic details, and basic student records.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "Coming Soon",
    type: "Web Application",
  },
  {
    id: 3,
    title: "Full Stack Web Application",
    description:
      "A planned full-stack project to develop practical experience with frontend, backend, databases, and REST APIs.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    status: "Coming Soon",
    type: "Full Stack Development",
  },
];

function Projects({ darkMode }) {
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
            My Work
          </p>

          <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p
            className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Explore my learning journey, project ideas, and
            applications that I plan to build as I develop my
            technical skills.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.id}
              className={`group flex flex-col overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-2 ${
                darkMode
                  ? "border-slate-800 bg-[#0b1430] hover:border-cyan-400/60"
                  : "border-slate-200 bg-white shadow-lg hover:border-cyan-400"
              }`}
            >

              {/* PROJECT VISUAL */}
              <div
                className={`relative flex h-44 items-center justify-center overflow-hidden ${
                  darkMode
                    ? "bg-gradient-to-br from-cyan-400/10 to-purple-500/20"
                    : "bg-gradient-to-br from-cyan-100 to-purple-100"
                }`}
              >
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-2xl border text-4xl font-bold transition duration-300 group-hover:scale-110 ${
                    darkMode
                      ? "border-cyan-400/30 bg-slate-900/50 text-cyan-400"
                      : "border-cyan-300 bg-white/70 text-cyan-600"
                  }`}
                >
                  {"</>"}
                </div>

                {/* STATUS BADGE */}
                <span
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
                    project.status === "In Progress"
                      ? darkMode
                        ? "bg-cyan-400/20 text-cyan-300"
                        : "bg-cyan-100 text-cyan-700"
                      : darkMode
                      ? "bg-purple-400/20 text-purple-300"
                      : "bg-purple-100 text-purple-700"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* PROJECT CONTENT */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">

                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    darkMode ? "text-cyan-400" : "text-cyan-600"
                  }`}
                >
                  {project.type}
                </p>

                <h2 className="mt-3 text-xl font-bold sm:text-2xl">
                  {project.title}
                </h2>

                <p
                  className={`mt-4 flex-1 text-sm leading-7 ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* TECHNOLOGY TAGS */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                        darkMode
                          ? "bg-slate-800 text-slate-300"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* PROJECT BUTTONS */}
                <div className="mt-7 flex flex-wrap gap-3">

                  {project.status === "In Progress" ? (
                    <Link
                      to="/"
                      className="rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-5 py-2.5 text-sm font-bold text-white transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
                    >
                      View Portfolio
                    </Link>
                  ) : (
                    <button
                      disabled
                      className={`cursor-not-allowed rounded-full px-5 py-2.5 text-sm font-semibold ${
                        darkMode
                          ? "bg-slate-800 text-slate-500"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      Coming Soon
                    </button>
                  )}

                  <button
                    disabled
                    className={`rounded-full border px-5 py-2.5 text-sm font-semibold ${
                      darkMode
                        ? "border-slate-700 text-slate-500"
                        : "border-slate-200 text-slate-400"
                    }`}
                  >
                    GitHub
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* PROJECT JOURNEY SECTION */}
        <div
          className={`mt-10 rounded-2xl border p-6 text-center sm:mt-14 sm:p-10 ${
            darkMode
              ? "border-slate-800 bg-[#0b1430]"
              : "border-slate-200 bg-white shadow-lg"
          }`}
        >
          <div
            className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full text-2xl ${
              darkMode
                ? "bg-cyan-400/10 text-cyan-400"
                : "bg-cyan-100 text-cyan-600"
            }`}
          >
            🚀
          </div>

          <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
            More Projects Coming Soon
          </h2>

          <p
            className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            I am currently improving my development skills and
            working towards building real-world projects. This
            section will be updated as I complete new projects.
          </p>

          <Link
            to="/skills"
            className="mt-7 inline-block rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-7 py-3 text-sm font-bold text-white transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30 sm:text-base"
          >
            Explore My Skills
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Projects;