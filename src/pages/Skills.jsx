const skills = [
  {
    title: "HTML",
    description:
      "Building structured and semantic web pages using modern HTML elements.",
    icon: "</>",
    color: "green",
  },
  {
    title: "CSS",
    description:
      "Creating responsive layouts, styling interfaces, and improving user experience.",
    icon: "🎨",
    color: "green",
  },
  {
    title: "JavaScript",
    description:
      "Using JavaScript to create interactive and dynamic web applications.",
    icon: "JS",
    color: "green",
  },
  {
    title: "React.js",
    description:
      "Building reusable and responsive user interfaces using React.js.",
    icon: "⚛",
    color: "green",
  },
  {
    title: "Node.js",
    description:
      "Learning server-side development and building backend applications with Node.js.",
    icon: "JS",
    color: "green",
  },
  {
    title: "Express.js",
    description:
      "Working with Express.js to create backend services and REST APIs.",
    icon: "EX",
    color: "green",
  },
  {
    title: "MongoDB",
    description:
      "Working with NoSQL databases to store and manage application data.",
    icon: "DB",
    color: "green",
  },
  {
    title: "Java",
    description:
      "Developing programming fundamentals and solving problems using Java.",
    icon: "☕",
    color: "green",
  },
  {
    title: "Python",
    description:
      "Using Python for programming, problem solving, and exploring modern technologies.",
    icon: "PY",
    color: "green",
  },
  {
    title: "Git & GitHub",
    description:
      "Managing source code and collaborating on projects using Git and GitHub.",
    icon: "GH",
    color: "green",
  },
  {
    title: "REST API",
    description:
      "Understanding API communication and connecting frontend applications with backend services.",
    icon: "API",
    color: "green",
  },
  {
    title: "VS Code",
    description:
      "Using Visual Studio Code as my primary environment for development and project work.",
    icon: "VS",
    color: "green",
  },
];

function Skills({ darkMode }) {
  return (
    <section
      id="skills"
      className={`scroll-mt-24 min-h-screen px-4 py-14 transition-colors duration-300 sm:px-6 sm:py-20 lg:px-10 ${
        darkMode
          ? "bg-[#171A16] text-[#F3F4EF]"
          : "bg-[#F7F7F3] text-[#1A1A18]"
      }`}
    >
      <div className="mx-auto max-w-6xl">

        {/* PAGE HEADER */}
        <div className="mb-14 text-center sm:mb-16">
          <p
            className={`mb-3 text-xs font-semibold uppercase tracking-[0.25em] sm:text-sm ${
              darkMode ? "text-[#9AA88F]" : "text-[#7B8B73]"
            }`}
          >
            My Technical Abilities
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
              Skills
            </span>
          </h1>

          <p
            className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
              darkMode ? "text-[#AEB5A8]" : "text-[#62675E]"
            }`}
          >
            Technologies and tools I use to build responsive websites
            and modern applications.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:gap-x-20 lg:gap-y-14">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group flex items-start gap-5"
            >

              {/* ICON */}
              <div
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full border text-lg font-bold shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 ${
                  darkMode
                    ? "border-[#4A5444] bg-[#22261F] text-[#9AA88F] shadow-[#9AA88F]/10"
                    : "border-[#D9DCD2] bg-white text-[#6F8066] shadow-[#7B8B73]/10"
                }`}
              >
                {skill.icon}
              </div>

              {/* SKILL CONTENT */}
              <div className="flex-1">
                <h2 className="text-lg font-bold sm:text-xl">
                  {skill.title}
                </h2>

                <p
                  className={`mt-2 text-sm leading-6 ${
                    darkMode
                      ? "text-[#AEB5A8]"
                      : "text-[#62675E]"
                  }`}
                >
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ADDITIONAL SKILLS */}
        <div className="mt-16 text-center sm:mt-20">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Additional Skills
          </h2>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              "Problem Solving",
              "Teamwork",
              "Communication",
              "Logical Thinking",
              "Time Management",
              "Continuous Learning",
            ].map((skill) => (
              <span
                key={skill}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition hover:-translate-y-1 sm:text-sm ${
                  darkMode
                    ? "border-[#3A4135] bg-[#22261F] text-[#C1C7BC] hover:border-[#9AA88F] hover:text-[#9AA88F]"
                    : "border-[#D9DCD2] bg-white text-[#4F574A] shadow-sm hover:border-[#7B8B73] hover:text-[#6F8066]"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* BOTTOM MESSAGE */}
        <div className="mt-12 text-center sm:mt-16">
          <p
            className={`text-sm leading-7 sm:text-base ${
              darkMode ? "text-[#AEB5A8]" : "text-[#62675E]"
            }`}
          >
            I continuously improve my skills by working on projects,
            exploring new technologies, and gaining practical experience.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Skills;