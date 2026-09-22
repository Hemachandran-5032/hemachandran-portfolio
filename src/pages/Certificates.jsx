const certificates = [
  {
    title: "Cloud Engineering",
    organization: "Google - Ingage",
    date: "26/07/2026",
    file: "/certificates/cloud-engineering.pdf",
  },
  {
    title: "UI and UX Design",
    organization: "GUVI",
    date: "18/11/2025",
    file: "/certificates/ui-ux-design.pdf",
  },
  {
    title: "Cloud AI in 90 Minutes Productivity Course",
    organization: "GUVI",
    date: "27/08/2026",
    file: "/certificates/cloud-ai.pdf",
  },
  {
    title: "Internship Certificate",
    organization: "Internship",
    date: "Add your internship details",
    file: "/certificates/internship-certificate.pdf",
  },
];

function Certificates({ darkMode }) {
  return (
    <section
      id="certificates"
      className={`scroll-mt-24 min-h-screen px-4 py-14 transition-colors duration-300 sm:px-6 sm:py-20 lg:px-10 ${
        darkMode
          ? "bg-[#171A16] text-[#F3F4EF]"
          : "bg-[#F7F7F3] text-[#1A1A18]"
      }`}
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="mb-14 text-center">
          <p
            className={`mb-3 text-xs font-semibold uppercase tracking-[0.25em] sm:text-sm ${
              darkMode ? "text-[#9AA88F]" : "text-[#7B8B73]"
            }`}
          >
            My Achievements
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
              Certificates
            </span>
          </h1>

          <p
            className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
              darkMode ? "text-[#AEB5A8]" : "text-[#62675E]"
            }`}
          >
            Certificates and achievements I have earned through
            courses, training, and practical learning.
          </p>
        </div>

        {/* CERTIFICATE CARDS */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className={`group rounded-2xl border p-6 transition duration-300 hover:-translate-y-2 sm:p-8 ${
                darkMode
                  ? "border-[#30362D] bg-[#22261F] hover:border-[#9AA88F]/60"
                  : "border-[#D9DCD2] bg-white shadow-lg hover:border-[#7B8B73]"
              }`}
            >

              {/* ICON */}
              <div
                className={`mb-5 flex h-16 w-16 items-center justify-center rounded-full text-2xl ${
                  darkMode
                    ? "bg-[#30362D] text-[#9AA88F]"
                    : "bg-[#EEF0E9] text-[#6F8066]"
                }`}
              >
                🏆
              </div>

              {/* TITLE */}
              <h2 className="text-xl font-bold sm:text-2xl">
                {certificate.title}
              </h2>

              {/* ORGANIZATION */}
              <p
                className={`mt-3 text-sm font-semibold ${
                  darkMode ? "text-[#9AA88F]" : "text-[#7B8B73]"
                }`}
              >
                {certificate.organization}
              </p>

              {/* DATE */}
              <p
                className={`mt-2 text-sm ${
                  darkMode ? "text-[#AEB5A8]" : "text-[#62675E]"
                }`}
              >
                Issued: {certificate.date}
              </p>

              {/* VIEW CERTIFICATE BUTTON */}
              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-block rounded-full px-6 py-2.5 text-sm font-bold text-white transition duration-300 hover:scale-105 hover:shadow-lg ${
                  darkMode
                    ? "bg-[#7B8B73] hover:bg-[#8B9A82] hover:shadow-[#9AA88F]/20"
                    : "bg-[#7B8B73] hover:bg-[#6F8066] hover:shadow-[#7B8B73]/20"
                }`}
              >
                View Certificate ↗
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificates;