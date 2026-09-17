
const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive and user-friendly web interfaces.",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "React.js", level: 70 },
      { name: "Responsive Design", level: 85 },
    ],
  },
  {
    title: "Backend Development",
    description: "Learning server-side development and application logic.",
    skills: [
      { name: "Node.js", level: 65 },
      { name: "Express.js", level: 60 },
      { name: "REST API", level: 65 },
      { name: "MongoDB", level: 60 },
    ],
  },
  {
    title: "Programming & Tools",
    description: "Programming fundamentals and development tools.",
    skills: [
      { name: "Java", level: 70 },
      { name: "Python", level: 65 },
      { name: "Git & GitHub", level: 75 },
      { name: "VS Code", level: 90 },
    ],
  },
];

function Skills({ darkMode }) {
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
            My Technical Abilities
          </p>

          <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h1>

          <p
            className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Here are the technologies and tools I use to build
            responsive websites and modern applications.
          </p>
        </div>

        {/* SKILL CATEGORIES */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`rounded-2xl border p-6 transition duration-300 hover:-translate-y-2 sm:p-8 ${
                darkMode
                  ? "border-slate-800 bg-[#0b1430] hover:border-cyan-400/50"
                  : "border-slate-200 bg-white shadow-lg hover:border-cyan-400"
              }`}
            >

              {/* CATEGORY HEADER */}
              <div className="mb-7">
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold ${
                    darkMode
                      ? "bg-gradient-to-r from-cyan-400/20 to-purple-500/20 text-cyan-400"
                      : "bg-gradient-to-r from-cyan-100 to-purple-100 text-cyan-600"
                  }`}
                >
                  {category.title === "Frontend Development"
                    ? "⌘"
                    : category.title === "Backend Development"
                    ? "⚙"
                    : "◆"}
                </div>

                <h2 className="text-xl font-bold sm:text-2xl">
                  {category.title}
                </h2>

                <p
                  className={`mt-3 text-sm leading-6 ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {category.description}
                </p>
              </div>

              {/* SKILLS */}
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>

                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold sm:text-base">
                        {skill.name}
                      </span>

                      <span
                        className={`text-xs font-semibold sm:text-sm ${
                          darkMode
                            ? "text-cyan-400"
                            : "text-cyan-600"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    <div
                      className={`h-2.5 overflow-hidden rounded-full ${
                        darkMode ? "bg-slate-800" : "bg-slate-200"
                      }`}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* ADDITIONAL SKILLS */}
        <div
          className={`mt-10 rounded-2xl border p-6 sm:mt-12 sm:p-8 ${
            darkMode
              ? "border-slate-800 bg-[#0b1430]"
              : "border-slate-200 bg-white shadow-lg"
          }`}
        >
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
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
                className={`rounded-full px-4 py-2 text-xs font-medium sm:text-sm ${
                  darkMode
                    ? "bg-slate-800 text-slate-300"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* BOTTOM MESSAGE */}
        <div className="mt-10 text-center sm:mt-14">
          <p
            className={`text-sm leading-7 sm:text-base ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            I continuously improve my skills by working on projects,
            exploring new technologies, and learning from practical
            experience.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Skills;