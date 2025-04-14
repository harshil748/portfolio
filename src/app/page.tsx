import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import RevealOnScroll from "./components/RevealOnScroll";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <ThemeToggle />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Hello, I'm <span className="block mt-2">Your Name</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-700 dark:text-gray-300">
              Full Stack Developer passionate about creating beautiful,
              functional, and user-centered digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="px-8 py-3 text-base font-medium rounded-lg shadow-md bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 text-base font-medium rounded-lg shadow-md bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
      >
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
              About Me
            </h2>
          </RevealOnScroll>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <RevealOnScroll direction="right" delay={200}>
              <div className="w-full md:w-full flex justify-center">
                <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
                  <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <span className="text-lg">Your Photo</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="left" delay={400}>
              <div className="w-full md:w-full">
                <p className="text-lg leading-relaxed mb-6">
                  I'm a passionate web developer with expertise in modern
                  front-end and back-end technologies. My journey in tech
                  started [your background]. I love solving complex problems and
                  creating intuitive, responsive websites.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not coding, you can find me [your hobbies or
                  interests]. I'm always eager to learn new technologies and
                  improve my skills to build better digital solutions.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800"
      >
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
              Skills & Technologies
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {/* Skill Items - Replace with your actual skills */}
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Tailwind CSS",
              "HTML",
              "CSS",
            ].map((skill, index) => (
              <RevealOnScroll key={skill} delay={100 * index}>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md text-center transform hover:scale-105 transition-transform duration-300">
                  <p className="font-medium">{skill}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
              My Projects
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards - Replace with your actual projects */}
            {[1, 2, 3].map((project, index) => (
              <RevealOnScroll key={project} delay={300 * index}>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg group card-hover">
                  <div className="h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">
                      Project Image
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Project {project}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      A brief description of this amazing project and the
                      technologies used to build it.
                    </p>
                    <div className="flex gap-2">
                      <a
                        href="#"
                        className="px-4 py-2 text-sm font-medium rounded bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
                      >
                        View Project
                      </a>
                      <a
                        href="#"
                        className="px-4 py-2 text-sm font-medium rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800"
      >
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
              Get In Touch
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-700"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-700"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-700"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 text-base font-medium rounded-lg shadow-md bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {/* Social Icons - Replace with your actual social links */}
            {["GitHub", "LinkedIn", "Twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
