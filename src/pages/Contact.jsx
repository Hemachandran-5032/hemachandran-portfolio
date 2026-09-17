
import { useState } from "react";
import { Link } from "react-router-dom";

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formspree.io/f/xwlpkypk",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Message sent successfully! 🚀");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={`min-h-screen px-6 py-24 transition-colors duration-300 ${
        darkMode
          ? "bg-[#050b20] text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        {/* Page Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get In Touch
          </p>

          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Contact <span className="text-cyan-400">Me</span>
          </h1>

          <p
            className={`mx-auto mt-5 max-w-2xl text-base leading-7 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Have a question, project idea, or opportunity? Feel free to
            contact me. I would love to hear from you.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Information */}
          <div
            className={`rounded-3xl border p-8 shadow-xl ${
              darkMode
                ? "border-white/10 bg-white/5"
                : "border-slate-200 bg-white"
            }`}
          >
            <h2 className="mb-6 text-2xl font-bold">
              Let's <span className="text-cyan-400">Connect</span>
            </h2>

            <p
              className={`mb-8 leading-7 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I am a final-year B.Tech Information Technology student
              interested in web development and modern technologies.
              You can reach me through the details below.
            </p>

            {/* Email */}
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                📧
              </div>

              <div>
                <h3 className="font-semibold">Email</h3>

                <a
                  href="mailto:hemachandranbalaji2105@gmail.com"
                  className="break-all text-sm text-cyan-400 transition hover:text-purple-400"
                >
                  hemachandranbalaji2105@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-400/10 text-xl">
                📍
              </div>

              <div>
                <h3 className="font-semibold">Location</h3>

                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="mb-8 flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                🎓
              </div>

              <div>
                <h3 className="font-semibold">Education</h3>

                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  B.Tech Information Technology
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="mb-4 font-semibold">Follow Me</h3>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-cyan-400 px-5 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-purple-400 px-5 py-2 text-sm font-semibold text-purple-400 transition hover:bg-purple-400 hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`rounded-3xl border p-8 shadow-xl ${
              darkMode
                ? "border-white/10 bg-white/5"
                : "border-slate-200 bg-white"
            }`}
          >
            <h2 className="mb-6 text-2xl font-bold">
              Send a <span className="text-purple-400">Message</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:border-cyan-400 ${
                    darkMode
                      ? "border-white/10 bg-[#0b1535] text-white placeholder-gray-400"
                      : "border-slate-200 bg-slate-50 text-slate-900 placeholder-gray-500"
                  }`}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:border-cyan-400 ${
                    darkMode
                      ? "border-white/10 bg-[#0b1535] text-white placeholder-gray-400"
                      : "border-slate-200 bg-slate-50 text-slate-900 placeholder-gray-500"
                  }`}
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:border-cyan-400 ${
                    darkMode
                      ? "border-white/10 bg-[#0b1535] text-white placeholder-gray-400"
                      : "border-slate-200 bg-slate-50 text-slate-900 placeholder-gray-500"
                  }`}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  required
                  className={`w-full resize-none rounded-xl border px-4 py-3 outline-none transition focus:border-cyan-400 ${
                    darkMode
                      ? "border-white/10 bg-[#0b1535] text-white placeholder-gray-400"
                      : "border-slate-200 bg-slate-50 text-slate-900 placeholder-gray-500"
                  }`}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 px-6 py-3 font-bold text-white transition duration-300 ${
                  isSubmitting
                    ? "cursor-not-allowed opacity-60"
                    : "hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-400/20"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message 🚀"}
              </button>
            </form>

            <p
              className={`mt-4 text-center text-xs ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Your message will be submitted securely through Formspree.
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-block rounded-full border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;