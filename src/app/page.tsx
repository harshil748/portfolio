import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import RevealOnScroll from "./components/RevealOnScroll";
import ContactForm from "./components/ContactForm";

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
              Hello, I'm <span className="block mt-2">Harshil Patel</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-700 dark:text-gray-300">
              {/* write anything here*/}
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
                  <Image
                    src="/images/IMG_5642.png"
                    alt="Harshil Patel"
                    width={240}
                    height={240}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="left" delay={400}>
              <div className="w-full md:w-full">
                <p className="text-lg leading-relaxed mb-6">
                  I’m a Computer Engineering student with a strong interest in
                  building practical, secure software solutions. Over the past
                  year, I’ve worked on several projects ranging from password
                  managers and note-taking apps to blockchain analysis tools,
                  using technologies like Python, JavaScript, Node.js, and
                  Electron. I enjoy working on both the frontend and backend,
                  and I’ve recently started diving into areas like cybersecurity
                  and machine learning. I’m now looking for a summer internship
                  where I can apply what I’ve learned, gain real-world
                  experience, and contribute to meaningful projects in a team
                  setting.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not coding, you can find me swimming or playing
                  basketball. I'm always eager to learn new technologies and
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
              "Python",
              "Java",
              "Machine Learning",
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
            {/* Project Cards */}
            <RevealOnScroll delay={0}>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg group card-hover">
                <Image
                  src="/images/pylock.png"
                  alt="PyLock"
                  width={512}
                  height={512}
                  className="w-full h-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">PyLock</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    A secure password manager built using Python and Tkinter
                    with encryption, email verification, and 2FA support.
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/harshil748/PyLockv2"
                      className="px-4 py-2 text-sm font-medium rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg group card-hover">
                <Image
                  src="/images/IMG_5C54.png"
                  alt="Car"
                  width={512}
                  height={512}
                  className="w-full h-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Line Following Robot
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    An autonomous robot designed to follow a path using infrared
                    sensors and microcontroller logic for real-time movement.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={600}>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg group card-hover">
                <Image
                  src="/images/portfoilo.png"
                  alt="Car"
                  width={512}
                  height={512}
                  className="w-full h-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    This personal portfolio site showcasing my projects, skills,
                    and contact information, built with Next.js and Tailwind
                    CSS.
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="px-4 py-2 text-sm font-medium rounded bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
                    >
                      View Project
                    </a>
                    <a
                      href="https://github.com/harshil748/portfolio"
                      className="px-4 py-2 text-sm font-medium rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://drive.google.com/drive/folders/18wgqHzPdNuto9zA3bfgSU7cn73zOxhfN?usp=sharing"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certificates Drive Link
            </a>
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
            <ContactForm />
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Harshil Patel. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/harshil748"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/harshil748/"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/Harshil748"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              X(Twitter)
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
