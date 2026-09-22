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
      id="projects"
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
            My Work
          </p>

          <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            My{" "}
            <span
              className={`bg-clip-text text-transparent ${
                darkMode
                  ? "bg-gradient-to-r from-[#9AA88F] to-[#C1C9B9]"
                  : "bg-gradient-to-r from-[#6F8066] to-[#9AA88F]"
              }`}
            >
              Projects
            </span>
          </h1>

          <p
            className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
              darkMode ? "text-[#AEB5A8]" : "text-[#62675E]"
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
                  ? "border-[#30362D] bg-[#22261F] hover:border-[#9AA88F]/60"
                  : "border-[#D9DCD2] bg-white shadow-lg hover:border-[#7B8B73]"
              }`}
            >

              {/* PROJECT VISUAL */}
              <div
                className={`relative flex h-44 items-center justify-center overflow-hidden ${
                  darkMode
                    ? "bg-gradient-to-br from-[#7B8B73]/10 to-[#9AA88F]/20"
                    : "bg-gradient-to-br from-[#EEF0E9] to-[#E4E7DE]"
                }`}
              >
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-2xl border text-4xl font-bold transition duration-300 group-hover:scale-110 ${
                    darkMode
                      ? "border-[#9AA88F]/30 bg-[#171A16]/50 text-[#9AA88F]"
                      : "border-[#C8CDC0] bg-white/80 text-[#6F8066]"
                  }`}
                >
                  {"</>"}
                </div>

                {/* STATUS BADGE */}
                <span
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
                    project.status === "In Progress"
                      ? darkMode
                        ? "bg-[#9AA88F]/20 text-[#C1C9B9]"
                        : "bg-[#E4E7DE] text-[#596550]"
                      : darkMode
                      ? "bg-[#30362D] text-[#AEB5A8]"
                      : "bg-[#EEF0E9] text-[#62675E]"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* PROJECT CONTENT */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">

                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    darkMode ? "text-[#9AA88F]" : "text-[#7B8B73]"
                  }`}
                >
                  {project.type}
                </p>

                <h2 className="mt-3 text-xl font-bold sm:text-2xl">
                  {project.title}
                </h2>

                <p
                  className={`mt-4 flex-1 text-sm leading-7 ${
                    darkMode ? "text-[#AEB5A8]" : "text-[#62675E]"
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
                          ? "bg-[#30362D] text-[#C1C7BC]"
                          : "bg-[#EEF0E9] text-[#4F574A]"
                      }`}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* PROJECT BUTTONS */}
                <div className="mt-7 flex flex-wrap gap-3">

                  {project.status === "In Progress" ? (
                    <a
                      href="#home"
                      className={`rounded-full px-5 py-2.5 text-sm font-bold text-white transition duration-300 hover:scale-105 hover:shadow-lg ${
                        darkMode
                          ? "bg-[#7B8B73] hover:bg-[#8B9A82] hover:shadow-[#9AA88F]/20"
                          : "bg-[#7B8B73] hover:bg-[#6F8066] hover:shadow-[#7B8B73]/20"
                      }`}
                    >
                      View Portfolio
                    </a>
                  ) : (
                    <button
                      disabled
                      className={`cursor-not-allowed rounded-full px-5 py-2.5 text-sm font-semibold ${
                        darkMode
                          ? "bg-[#30362D] text-[#70786C]"
                          : "bg-[#EEF0E9] text-[#9AA094]"
                      }`}
                    >
                      Coming Soon
                    </button>
                  )}

                  <button
                    disabled
                    className={`rounded-full border px-5 py-2.5 text-sm font-semibold ${
                      darkMode
                        ? "border-[#3A4135] text-[#70786C]"
                        : "border-[#D9DCD2] text-[#9AA094]"
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
              ? "border-[#30362D] bg-[#22261F]"
              : "border-[#D9DCD2] bg-white shadow-lg"
          }`}
        >
          <div
            className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full text-2xl ${
              darkMode
                ? "bg-[#30362D] text-[#9AA88F]"
                : "bg-[#EEF0E9] text-[#6F8066]"
            }`}
          >
            🚀
          </div>

          <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
            More Projects Coming Soon
          </h2>

          <p
            className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
              darkMode ? "text-[#AEB5A8]" : "text-[#62675E]"
            }`}
          >
            I am currently improving my development skills and
            working towards building real-world projects. This
            section will be updated as I complete new projects.
          </p>

          <a
            href="#skills"
            className={`mt-7 inline-block rounded-full px-7 py-3 text-sm font-bold text-white transition duration-300 hover:scale-105 hover:shadow-lg sm:text-base ${
              darkMode
                ? "bg-[#7B8B73] hover:bg-[#8B9A82] hover:shadow-[#9AA88F]/20"
                : "bg-[#7B8B73] hover:bg-[#6F8066] hover:shadow-[#7B8B73]/20"
            }`}
          >
            Explore My Skills
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;