import Image from "next/image";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import ContactForm from "./components/ContactForm";
import TypewriterRole from "./components/TypewriterRole";

const resumeUrl =
  "https://drive.google.com/file/d/17QllzqdUPYcOW6eBBECypZ9nPFWkdV6N/view?usp=sharing";

const projects = [
  {
    name: "VoiceAPI",
    category: "Backend API",
    image: "/images/portfolio.png",
    description:
      "A voice-focused API platform for processing audio requests with secure endpoints and predictable performance for app integrations.",
    github: "https://github.com/harshil748/VoiceAPI",
    live: "",
    caseStudy: {
      challenge:
        "Designing reliable voice-processing endpoints that stay responsive under variable request volumes.",
      approach:
        "Structured API routes, validation layers, and clear request/response contracts with focused error handling.",
      outcome:
        "Delivered an integration-ready voice backend foundation with improved reliability and maintainability.",
      stack: ["Node.js", "API Design", "JavaScript", "Security Controls"],
    },
  },
  {
    name: "Sentinel-Shield",
    category: "Cybersecurity",
    image: "/images/pylock.png",
    description:
      "A security-oriented project focused on threat-aware workflows and defensive controls for safer application behavior.",
    github: "https://github.com/harshil748/Sentinel-Shield",
    live: "",
    caseStudy: {
      challenge:
        "Combining practical security checks with usability so core workflows remain straightforward.",
      approach:
        "Applied layered checks, defensive defaults, and monitoring-friendly patterns across key user flows.",
      outcome:
        "Strengthened security posture while keeping the experience clear for users and maintainers.",
      stack: ["Python", "Security Engineering", "Risk Controls", "Automation"],
    },
  },
  {
    name: "PyLock",
    category: "Security",
    image: "/images/pylock.png",
    description:
      "A secure password manager built using Python and Tkinter with encryption, email verification, and 2FA support.",
    github: "https://github.com/harshil748/PyLockv2",
    live: "",
    caseStudy: {
      challenge:
        "Building a local-first credential manager with strong protection and accessible user flows.",
      approach:
        "Implemented encrypted storage, multi-step verification, and structured credential management screens.",
      outcome:
        "Created a practical secure credential workflow with stronger trust and account safety.",
      stack: ["Python", "Tkinter", "Encryption", "2FA"],
    },
  },
  {
    name: "Line Following Robot",
    category: "Hardware",
    image: "/images/IMG_5C54.png",
    description:
      "An autonomous robot designed to follow predefined paths using IR sensors and microcontroller-based control logic.",
    github: "",
    live: "",
    caseStudy: {
      challenge:
        "Maintaining stable line tracking in changing surface and lighting conditions.",
      approach:
        "Calibrated sensor readings and tuned movement logic for consistent real-time correction.",
      outcome:
        "Achieved smoother autonomous path-following performance during iterative hardware tests.",
      stack: [
        "Embedded Systems",
        "IR Sensors",
        "Microcontroller Logic",
        "Control Tuning",
      ],
    },
  },
  {
    name: "Portfolio Website",
    category: "Web Dev",
    image: "/images/portfolio.png",
    description:
      "A responsive personal portfolio showcasing projects, skills, and experience with modern frontend tooling.",
    github: "https://github.com/harshil748/portfolio",
    live: "",
    caseStudy: {
      challenge:
        "Presenting technical depth and personal brand in a clean, fast, and recruiter-friendly experience.",
      approach:
        "Used section-first content design, responsive UI, theme support, and smooth interaction patterns.",
      outcome:
        "Produced a polished portfolio experience that highlights technical skills and project outcomes.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    },
  },
];

const skillsByCategory = {
  Languages: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS"],
  Frameworks: ["React", "Next.js", "Node.js", "Tailwind CSS"],
  Specialties: ["Machine Learning", "Cybersecurity"],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-navy-950 text-ivory relative z-10">
      <Navbar />
      <ThemeToggle />

      <section className="min-h-screen flex items-center justify-center px-6 grid-bg relative">
        <div className="absolute inset-0 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center pt-20">
          <span className="font-mono text-emerald text-sm tracking-widest uppercase">
            Hello, I&apos;m
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-platinum font-[Space_Grotesk] mt-2 mb-4">
            Harshil Patel
          </h1>
          <div className="mb-8">
            <TypewriterRole />
          </div>
          <p className="text-ivory-muted max-w-3xl mx-auto text-lg leading-relaxed mb-10">
            Computer Engineering student passionate about building secure,
            practical software solutions. Experienced in full-stack development,
            cybersecurity, and emerging technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={resumeUrl}
              className="border border-gold text-gold hover:bg-gold hover:text-navy-900 px-6 py-3 font-[Space_Grotesk] font-medium transition-all duration-200 hover:shadow-gold-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="bg-emerald text-ivory px-6 py-3 font-[Space_Grotesk] font-medium hover:bg-emerald-light transition-all duration-200 hover:shadow-emerald-glow"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="observe-section bg-navy-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-platinum font-[Space_Grotesk] section-title mb-8">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-72 h-72 rounded-2xl overflow-hidden border border-gold/20">
                <Image
                  src="/images/IMG_5642.png"
                  alt="Harshil Patel"
                  width={288}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 text-ivory-muted leading-relaxed text-lg">
              <p>
                I&apos;m a Computer Engineering student with a strong passion for
                building practical, secure software solutions. Over the past
                year, I&apos;ve developed several projects ranging from password
                managers and note-taking apps to blockchain analysis tools,
                leveraging technologies like Python, JavaScript, Node.js, and
                Electron.
              </p>
              <p>
                I enjoy working across the full stack and have recently expanded
                into cybersecurity and machine learning. Currently seeking a
                summer internship to apply my skills, gain real-world
                experience, and contribute to meaningful projects in a
                collaborative team environment.
              </p>
              <p>
                When I&apos;m not coding, you can find me swimming or playing
                basketball. I&apos;m always eager to learn new technologies and
                continuously improve my skills to build better digital
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="observe-section bg-navy-800 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-platinum font-[Space_Grotesk] section-title mb-8">
            Skills &amp; Technologies
          </h2>
          <p className="text-ivory-muted mb-10 max-w-2xl">
            A diverse toolkit built through hands-on projects and continuous
            learning
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <div key={category}>
                <p className="text-xs font-mono text-emerald tracking-widest uppercase mb-3">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-sm px-3 py-1.5 border border-gold/20 text-ivory-muted bg-navy-700 hover:border-gold hover:text-gold hover:shadow-gold-glow transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="observe-section bg-navy-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-platinum font-[Space_Grotesk] section-title mb-8">
            Featured Projects
          </h2>
          <p className="text-ivory-muted mb-10 max-w-2xl">
            A selection of my work showcasing different aspects of software
            development
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.name}
                className="bg-navy-700 border border-gold/10 p-6 hover:border-gold/40 hover:shadow-card-lift hover:-translate-y-1 transition-all duration-300 rounded-xl"
              >
                <div className="relative overflow-hidden rounded-md mb-4">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={240}
                    className="w-full h-44 object-cover"
                  />
                </div>
                <p className="text-xs font-mono text-emerald tracking-widest uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="text-platinum font-[Space_Grotesk] font-semibold text-lg">
                  {project.name}
                </h3>
                <p className="text-ivory-muted text-sm leading-relaxed mt-2">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.caseStudy.stack.map((tech) => (
                    <span
                      key={`${project.name}-${tech}`}
                      className="font-mono text-sm px-3 py-1.5 border border-gold/20 text-ivory-muted bg-navy-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-gold hover:text-gold-light text-sm font-mono"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="text-gold hover:text-gold-light text-sm font-mono"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="certifications"
        className="observe-section bg-navy-800 py-24 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-platinum font-[Space_Grotesk] section-title mb-8 inline-block text-left">
            Certifications
          </h2>
          <p className="text-ivory-muted max-w-2xl mx-auto mb-8">
            View certificates and achievements alongside my latest resume.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={resumeUrl}
              className="border border-gold text-gold hover:bg-gold hover:text-navy-900 px-6 py-3 font-[Space_Grotesk] font-medium transition-all duration-200 hover:shadow-gold-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Resume (New Tab)
            </a>
            <a
              href={resumeUrl}
              className="border border-gold/40 text-ivory-muted hover:border-gold hover:text-gold px-6 py-3 font-[Space_Grotesk] font-medium transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificates &amp; Achievements
            </a>
          </div>
          <p className="mt-4 text-sm text-ivory-muted">
            To download: use your browser&apos;s download option after opening the
            resume in a new tab.
          </p>
        </div>
      </section>

      <section id="contact" className="observe-section bg-navy-900 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-platinum font-[Space_Grotesk] section-title mb-8 inline-block text-left">
            Get In Touch
          </h2>
          <p className="text-ivory-muted mb-8">
            Ready to collaborate? I&apos;d love to hear about your next project or
            internship opportunity.
          </p>

          <div className="flex justify-center gap-4 mb-6">
            <a
              href="https://github.com/harshil748"
              className="border border-gold/30 text-ivory-muted hover:border-gold hover:text-gold p-3 transition-all duration-200 hover:shadow-gold-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/harshil748/"
              className="border border-gold/30 text-ivory-muted hover:border-gold hover:text-gold p-3 transition-all duration-200 hover:shadow-gold-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://x.com/Harshil748"
              className="border border-gold/30 text-ivory-muted hover:border-gold hover:text-gold p-3 transition-all duration-200 hover:shadow-gold-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">X (Twitter)</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
              </svg>
            </a>
          </div>

          <p className="font-mono text-emerald text-sm mt-4 mb-10">
            harshilpatel748@gmail.com
          </p>

          <ContactForm />
        </div>
      </section>

      <footer className="py-10 px-6 bg-navy-950 border-t border-gold/10">
        <div className="max-w-6xl mx-auto text-center text-ivory-muted text-sm">
          &copy; {new Date().getFullYear()} Harshil Patel. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
