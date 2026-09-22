import { useState } from "react";

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
      id="contact"
      className={`scroll-mt-24 min-h-screen px-6 py-24 transition-colors duration-300 ${
        darkMode
          ? "bg-[#171A16] text-[#F3F4EF]"
          : "bg-[#F7F7F3] text-[#1A1A18]"
      }`}
    >
      <div className="mx-auto max-w-6xl">

        {/* Page Heading */}
        <div className="mb-14 text-center">
          <p
            className={`mb-3 font-semibold uppercase tracking-[0.3em] ${
              darkMode ? "text-[#9AA88F]" : "text-[#7B8B73]"
            }`}
          >
            Get In Touch
          </p>

          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Contact{" "}
            <span
              className={`bg-clip-text text-transparent ${
                darkMode
                  ? "bg-gradient-to-r from-[#9AA88F] to-[#C1C9B9]"
                  : "bg-gradient-to-r from-[#6F8066] to-[#9AA88F]"
              }`}
            >
              Me
            </span>
          </h1>

          <p
            className={`mx-auto mt-5 max-w-2xl text-base leading-7 ${
              darkMode ? "text-[#AEB5A8]" : "text-[#62675E]"
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
                ? "border-[#30362D] bg-[#22261F]"
                : "border-[#D9DCD2] bg-white"
            }`}
          >
            <h2 className="mb-6 text-2xl font-bold">
              Let's{" "}
              <span
                className={
                  darkMode ? "text-[#9AA88F]" : "text-[#7B8B73]"
                }
              >
                Connect
              </span>
            </h2>

            <p
              className={`mb-8 leading-7 ${
                darkMode ? "text-[#AEB5A8]" : "text-[#62675E]"
              }`}
            >
              I am a final-year B.Tech Information Technology student
              interested in web development and modern technologies.
              You can reach me through the details below.
            </p>

            {/* Email */}
            <div className="mb-6 flex items-start gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${
                  darkMode
                    ? "bg-[#30362D] text-[#9AA88F]"
                    : "bg-[#EEF0E9] text-[#6F8066]"
                }`}
              >
                📧
              </div>

              <div>
                <h3 className="font-semibold">Email</h3>

                <a
                  href="mailto:hemachandranbalaji2105@gmail.com"
                  className={`break-all text-sm transition ${
                    darkMode
                      ? "text-[#9AA88F] hover:text-[#C1C9B9]"
                      : "text-[#6F8066] hover:text-[#7B8B73]"
                  }`}
                >
                  hemachandranbalaji2105@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="mb-6 flex items-start gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${
                  darkMode
                    ? "bg-[#30362D] text-[#9AA88F]"
                    : "bg-[#EEF0E9] text-[#6F8066]"
                }`}
              >
                📍
              </div>

              <div>
                <h3 className="font-semibold">Location</h3>

                <p
                  className={`text-sm ${
                    darkMode ? "text-[#AEB5A8]" : "text-[#62675E]"
                  }`}
                >
                  Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="mb-8 flex items-start gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${
                  darkMode
                    ? "bg-[#30362D] text-[#9AA88F]"
                    : "bg-[#EEF0E9] text-[#6F8066]"
                }`}
              >
                🎓
              </div>

              <div>
                <h3 className="font-semibold">Education</h3>

                <p
                  className={`text-sm ${
                    darkMode ? "text-[#AEB5A8]" : "text-[#62675E]"
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
                  href="https://github.com/Hemachandran-5032"
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                    darkMode
                      ? "border-[#9AA88F] text-[#9AA88F] hover:bg-[#9AA88F] hover:text-[#171A16]"
                      : "border-[#7B8B73] text-[#6F8066] hover:bg-[#7B8B73] hover:text-white"
                  }`}
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/hemachandran0248/"
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                    darkMode
                      ? "border-[#9AA88F] text-[#9AA88F] hover:bg-[#9AA88F] hover:text-[#171A16]"
                      : "border-[#7B8B73] text-[#6F8066] hover:bg-[#7B8B73] hover:text-white"
                  }`}
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
                ? "border-[#30362D] bg-[#22261F]"
                : "border-[#D9DCD2] bg-white"
            }`}
          >
            <h2 className="mb-6 text-2xl font-bold">
              Send a{" "}
              <span
                className={`bg-clip-text text-transparent ${
                  darkMode
                    ? "bg-gradient-to-r from-[#9AA88F] to-[#C1C9B9]"
                    : "bg-gradient-to-r from-[#6F8066] to-[#9AA88F]"
                }`}
              >
                Message
              </span>
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
                  className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                    darkMode
                      ? "border-[#3A4135] bg-[#171A16] text-[#F3F4EF] placeholder-[#70786C] focus:border-[#9AA88F]"
                      : "border-[#D9DCD2] bg-[#F7F7F3] text-[#1A1A18] placeholder-[#8A9184] focus:border-[#7B8B73]"
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
                  className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                    darkMode
                      ? "border-[#3A4135] bg-[#171A16] text-[#F3F4EF] placeholder-[#70786C] focus:border-[#9AA88F]"
                      : "border-[#D9DCD2] bg-[#F7F7F3] text-[#1A1A18] placeholder-[#8A9184] focus:border-[#7B8B73]"
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
                  className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                    darkMode
                      ? "border-[#3A4135] bg-[#171A16] text-[#F3F4EF] placeholder-[#70786C] focus:border-[#9AA88F]"
                      : "border-[#D9DCD2] bg-[#F7F7F3] text-[#1A1A18] placeholder-[#8A9184] focus:border-[#7B8B73]"
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
                  className={`w-full resize-none rounded-xl border px-4 py-3 outline-none transition ${
                    darkMode
                      ? "border-[#3A4135] bg-[#171A16] text-[#F3F4EF] placeholder-[#70786C] focus:border-[#9AA88F]"
                      : "border-[#D9DCD2] bg-[#F7F7F3] text-[#1A1A18] placeholder-[#8A9184] focus:border-[#7B8B73]"
                  }`}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full rounded-full px-6 py-3 font-bold text-white transition duration-300 ${
                  isSubmitting
                    ? "cursor-not-allowed bg-[#8A9184] opacity-60"
                    : darkMode
                    ? "bg-[#7B8B73] hover:scale-[1.02] hover:bg-[#8B9A82] hover:shadow-lg hover:shadow-[#9AA88F]/20"
                    : "bg-[#7B8B73] hover:scale-[1.02] hover:bg-[#6F8066] hover:shadow-lg hover:shadow-[#7B8B73]/20"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message 🚀"}
              </button>

            </form>

            <p
              className={`mt-4 text-center text-xs ${
                darkMode ? "text-[#858D80]" : "text-[#777C74]"
              }`}
            >
              Your message will be submitted securely through Formspree.
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <a
            href="#home"
            className={`inline-block rounded-full border px-6 py-3 font-semibold transition ${
              darkMode
                ? "border-[#9AA88F] text-[#9AA88F] hover:bg-[#9AA88F] hover:text-[#171A16]"
                : "border-[#7B8B73] text-[#6F8066] hover:bg-[#7B8B73] hover:text-white"
            }`}
          >
            ← Back to Home
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;