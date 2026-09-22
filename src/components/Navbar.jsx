import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur-lg ${
        darkMode
          ? "border-[#30362D] bg-[#171A16]/90 text-[#F3F4EF]"
          : "border-[#D9DCD2] bg-[#F7F7F3]/90 text-[#1A1A18]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between py-5">

          {/* LOGO */}
          <a
            href="#home"
            onClick={closeMenu}
            className="shrink-0 whitespace-nowrap text-xl font-bold sm:text-2xl"
          >
            <span
              className={
                darkMode ? "text-[#9AA88F]" : "text-[#7B8B73]"
              }
            >
              Hemachandran B R
            </span>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-6 md:flex">

            <a
              href="#home"
              className={`transition ${
                darkMode
                  ? "hover:text-[#9AA88F]"
                  : "hover:text-[#7B8B73]"
              }`}
            >
              Home
            </a>

            <a
              href="#about"
              className={`transition ${
                darkMode
                  ? "hover:text-[#9AA88F]"
                  : "hover:text-[#7B8B73]"
              }`}
            >
              About
            </a>

            <a
              href="#skills"
              className={`transition ${
                darkMode
                  ? "hover:text-[#9AA88F]"
                  : "hover:text-[#7B8B73]"
              }`}
            >
              Skills
            </a>

            <a
              href="#certificates"
              className={`transition ${
                darkMode
                  ? "hover:text-[#9AA88F]"
                  : "hover:text-[#7B8B73]"
              }`}
            >
              Certificates
            </a>

            <a
              href="#projects"
              className={`transition ${
                darkMode
                  ? "hover:text-[#9AA88F]"
                  : "hover:text-[#7B8B73]"
              }`}
            >
              Projects
            </a>

            <a
              href="#contact"
              className={`transition ${
                darkMode
                  ? "hover:text-[#9AA88F]"
                  : "hover:text-[#7B8B73]"
              }`}
            >
              Contact
            </a>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* THEME BUTTON */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`rounded-full border px-4 py-2 text-lg transition ${
                darkMode
                  ? "border-[#3A4135] bg-[#22261F] hover:border-[#9AA88F]"
                  : "border-[#D9DCD2] bg-[#EEF0E9] hover:border-[#7B8B73]"
              }`}
              aria-label="Toggle light and dark theme"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`rounded-lg border px-3 py-2 text-xl md:hidden ${
                darkMode
                  ? "border-[#3A4135] bg-[#22261F]"
                  : "border-[#D9DCD2] bg-[#EEF0E9]"
              }`}
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div
            className={`space-y-2 border-t py-4 md:hidden ${
              darkMode
                ? "border-[#30362D]"
                : "border-[#D9DCD2]"
            }`}
          >

            <a
              href="#home"
              onClick={closeMenu}
              className={`block rounded-lg px-4 py-3 transition ${
                darkMode
                  ? "hover:bg-[#9AA88F] hover:text-[#171A16]"
                  : "hover:bg-[#7B8B73] hover:text-white"
              }`}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className={`block rounded-lg px-4 py-3 transition ${
                darkMode
                  ? "hover:bg-[#9AA88F] hover:text-[#171A16]"
                  : "hover:bg-[#7B8B73] hover:text-white"
              }`}
            >
              About
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className={`block rounded-lg px-4 py-3 transition ${
                darkMode
                  ? "hover:bg-[#9AA88F] hover:text-[#171A16]"
                  : "hover:bg-[#7B8B73] hover:text-white"
              }`}
            >
              Skills
            </a>

            <a
              href="#certificates"
              onClick={closeMenu}
              className={`block rounded-lg px-4 py-3 transition ${
                darkMode
                  ? "hover:bg-[#9AA88F] hover:text-[#171A16]"
                  : "hover:bg-[#7B8B73] hover:text-white"
              }`}
            >
              Certificates
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className={`block rounded-lg px-4 py-3 transition ${
                darkMode
                  ? "hover:bg-[#9AA88F] hover:text-[#171A16]"
                  : "hover:bg-[#7B8B73] hover:text-white"
              }`}
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className={`block rounded-lg px-4 py-3 transition ${
                darkMode
                  ? "hover:bg-[#9AA88F] hover:text-[#171A16]"
                  : "hover:bg-[#7B8B73] hover:text-white"
              }`}
            >
              Contact
            </a>

          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;