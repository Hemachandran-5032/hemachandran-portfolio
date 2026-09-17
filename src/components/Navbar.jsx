
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur-lg ${
        darkMode
          ? "border-slate-800 bg-[#050b20]/90 text-white"
          : "border-slate-200 bg-white/90 text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* TOP NAVBAR */}
        <div className="flex items-center justify-between py-5">

          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-xl font-bold sm:text-2xl"
          >
            <span className="text-cyan-400">
              Hemachandran B R
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-6 md:flex">
            <Link
              to="/"
              className="transition hover:text-cyan-400"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="transition hover:text-cyan-400"
            >
              About
            </Link>

            <Link
              to="/skills"
              className="transition hover:text-cyan-400"
            >
              Skills
            </Link>

            <Link
              to="/projects"
              className="transition hover:text-cyan-400"
            >
              Projects
            </Link>

            <Link
              to="/contact"
              className="transition hover:text-cyan-400"
            >
              Contact
            </Link>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex items-center gap-3">

            {/* THEME TOGGLE */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`rounded-full border px-4 py-2 text-lg transition ${
                darkMode
                  ? "border-slate-700 bg-slate-800 hover:border-cyan-400"
                  : "border-slate-300 bg-slate-100 hover:border-cyan-400"
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
                  ? "border-slate-700 bg-slate-800"
                  : "border-slate-300 bg-slate-100"
              }`}
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>

          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <div
            className={`space-y-2 border-t py-4 md:hidden ${
              darkMode
                ? "border-slate-800"
                : "border-slate-200"
            }`}
          >
            <Link
              to="/"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 transition hover:bg-cyan-400 hover:text-slate-900"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 transition hover:bg-cyan-400 hover:text-slate-900"
            >
              About
            </Link>

            <Link
              to="/skills"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 transition hover:bg-cyan-400 hover:text-slate-900"
            >
              Skills
            </Link>

            <Link
              to="/projects"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 transition hover:bg-cyan-400 hover:text-slate-900"
            >
              Projects
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 transition hover:bg-cyan-400 hover:text-slate-900"
            >
              Contact
            </Link>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;