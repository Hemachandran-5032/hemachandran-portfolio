import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGithub,
  FaServer,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
} from "react-icons/si";

function Skills({ darkMode }) {
  const skills = [
    {
      title: "HTML",
      description:
        "Building structured and semantic web pages using HTML.",
      icon: <FaHtml5 />,
    },

    {
      title: "CSS",
      description:
        "Creating responsive and visually appealing web designs using CSS.",
      icon: <FaCss3Alt />,
    },

    {
      title: "JavaScript",
      description:
        "Using JavaScript to create interactive and dynamic web applications.",
      icon: <FaJsSquare />,
    },

    {
      title: "React.js",
      description:
        "Building reusable and responsive user interfaces using React.js.",
      icon: <FaReact />,
    },

    {
      title: "Node.js",
      description:
        "Learning server-side development and building backend applications with Node.js.",
      icon: <FaNodeJs />,
    },

    {
      title: "Express.js",
      description:
        "Working with Express.js to create backend services and REST APIs.",
      icon: <SiExpress />,
    },

    {
      title: "MongoDB",
      description:
        "Working with NoSQL databases to store and manage application data.",
      icon: <SiMongodb />,
    },

    {
      title: "Java",
      description:
        "Developing programming fundamentals and solving problems using Java.",
      icon: <FaJava />,
    },

    {
      title: "Python",
      description:
        "Using Python for programming, problem solving, and exploring modern technologies.",
      icon: <FaPython />,
    },

    {
      title: "Git & GitHub",
      description:
        "Managing source code and collaborating on projects using Git and GitHub.",
      icon: <FaGithub />,
    },

    {
      title: "REST API",
      description:
        "Understanding API communication and connecting frontend applications with backend services.",
      icon: <FaServer />,
    },

    {
      title: "VS Code",
      description:
        "Using Visual Studio Code as my primary environment for development and project work.",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
          alt="VS Code"
          className="h-12 w-12 object-contain grayscale brightness-150 opacity-80"
        />
      ),
    },
  ];

  return (
    <section
      id="skills"
      className={`scroll-mt-24 min-h-screen px-4 py-16 transition-colors duration-300 sm:px-6 lg:px-10 ${
        darkMode
          ? "bg-[#171A16] text-[#F3F4EF]"
          : "bg-[#F7F7F3] text-[#1A1A18]"
      }`}
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">

          <p
            className={`mb-3 text-sm font-semibold uppercase tracking-[0.3em] ${
              darkMode
                ? "text-[#9AA88F]"
                : "text-[#7B8B73]"
            }`}
          >
            What I Know
          </p>

          <h2 className="text-4xl font-extrabold sm:text-5xl">
            My{" "}
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent ${
                darkMode
                  ? "from-[#9AA88F] to-[#C1C9B9]"
                  : "from-[#6F8066] to-[#9AA88F]"
              }`}
            >
              Skills
            </span>
          </h2>

          <p
            className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
              darkMode
                ? "text-[#AEB5A8]"
                : "text-[#62675E]"
            }`}
          >
            Technologies and tools I am learning and using
            to build modern applications.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="flex items-start gap-5"
            >

              {/* Icon Circle */}
              <div
                className={`flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border text-4xl transition duration-300 hover:scale-110 ${
                  darkMode
                    ? "border-[#3A4135] bg-[#1D211C] text-[#AAB59F] shadow-lg shadow-[#9AA88F]/10"
                    : "border-[#D9DCD2] bg-[#EEF0E9] text-[#7B8B73] shadow-lg"
                }`}
              >
                {skill.icon}
              </div>

              {/* Skill Information */}
              <div className="pt-1">

                <h3 className="text-xl font-bold">
                  {skill.title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-7 ${
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

      </div>
    </section>
  );
}

export default Skills;