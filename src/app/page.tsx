import Image from "next/image";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import ContactForm from "./components/ContactForm";
import TypewriterRole from "./components/TypewriterRole";

const resumeUrl =
	"https://drive.google.com/file/d/17QllzqdUPYcOW6eBBECypZ9nPFWkdV6N/view?usp=sharing";

const certificatesUrl =
	"https://drive.google.com/drive/folders/18wgqHzPdNuto9zA3bfgSU7cn73zOxhfN?usp=sharing";

const projects = [
	{
		name: "VoiceAPI",
		category: "Backend API",
		image: "/images/voice-message.png",
		description:
			"A fully local multi-lingual Text-to-Speech system supporting 11 Indian languages with 22 voice variants and real-time voice cloning.  ",
		github: "https://github.com/harshil748/VoiceAPI",
		live: "",
		caseStudy: {
			challenge:
				"Serving fully-local, multi-lingual neural TTS (11 Indian languages, 21 voices) with optional voice cloning while keeping inference fast and the API predictable—despite large model sizes, cold-start costs, and mixed model backends.",
			approach:
				"Built a FastAPI backend around a unified TTS engine that routes requests to the right ML model type: SYSPIN VITS JIT voices loaded via torch.jit.load, Coqui TTS checkpoints (.pth) for Bhojpuri via TTS.utils.synthesizer.Synthesizer, Facebook MMS Gujarati via transformers VitsModel, and XTTS v2 voice cloning via TTS.api.TTS. Implemented offline-first model management using huggingface-hub snapshots (download once → cache under models/), plus controllable prosody (speed/pitch/energy) with style presets and audio processing via librosa/soundfile. Exposed clear REST contracts (/synthesize, /clone, /synthesize/stream, /voices, /health) with multipart upload support (python-multipart) and runtime observability headers (duration/sample-rate/inference-time). Added security controls (CORS policy, rate limiting, auth guards/secrets hygiene) and hardened file/audio handling with size/type constraints. Kept the codebase maintainable via modular route/service separation and reusable middleware.",
			outcome:
				"Delivered an integration-ready VoiceAPI that runs without cloud keys after initial setup, supports both standard synthesis and real-time voice cloning, and provides consistent endpoints + offline model caching for reliable demos and production-style integrations (including a Next.js UI for testing and demonstration).",
			stack: [
				"Python",
				"FastAPI",
				"PyTorch (torch/torchaudio)",
				"Coqui TTS (XTTS v2 + Synthesizer)",
				"Transformers (Facebook MMS VitsModel)",
				"huggingface-hub",
				"librosa",
				"Next.js",
			],
		},
	},
	{
		name: "Sentinel-Shield",
		category: "Cybersecurity",
		image: "/images/stock-market.png",
		description:
			"Sentinel Shield is a real-time AI surveillance platform designed to detect and prevent market manipulation schemes. Built for the Securities Market Hackathon, it protects retail investors from pump-and-dump scams through advanced multi-modal intelligence fusion.",
		github: "https://github.com/harshil748/Sentinel-Shield",
		live: "",
		caseStudy: {
			challenge:
				"Detecting pump-and-dump / market manipulation signals in near real-time by correlating noisy inputs (price/volume behavior + social chatter + entity credibility), while keeping alerting explainable enough for regulators and usable for retail-investor protection.",
			approach:
				"Implemented a FastAPI backend that runs an AI detection pipeline combining (1) market anomaly detection with Enhanced EWMA + statistical spike checks and an Isolation Forest model (scikit-learn) over engineered indicators, (2) social intelligence analysis for sentiment/manipulation keyword patterns + entity extraction, and (3) a regulatory trust-scoring layer that verifies entities and assigns risk levels. Persisted and queried alert history via PostgreSQL/SQLAlchemy, and exposed investigation-ready endpoints like /fetch_live_alert, /social_analysis, /threat_score, /alerts, and /verify_entity. Shipped a React + Vite + Tailwind dashboard with interactive market visualizations (LightweightCharts) to monitor threat level, confidence, and drill into evidence.",
			outcome:
				"Delivered a hackathon-ready, end-to-end surveillance platform that produces live manipulation alerts with confidence + severity tiers, supports historical investigations and exports, and demonstrates multi-signal fusion using practical ML (Isolation Forest + anomaly scoring) backed by a modern dashboard.",
			stack: [
				"Python",
				"FastAPI",
				"Pandas",
				"NumPy",
				"scikit-learn (Isolation Forest)",
				"PostgreSQL",
				"SQLAlchemy",
				"JavaScript",
				"React (Vite)",
				"TailwindCSS",
				"LightweightCharts",
				"Docker Compose",
			],
		},
	},
	{
		name: "PyLock",
		category: "Security",
		image: "/images/pylock.png",
		description:
			"PyLock is a secure password manager application built using Python and Tkinter. It allows users to store and manage their passwords securely, with features such as password encryption, email verification, and password reset using a special sentence. ",
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
		image: "/images/robot.png",
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
		live: "https://harshilpatel.me/",
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
	"Cybersecurity (Network & Cloud)": [
		"Network Security",
		"Cloud Security Fundamentals",
		"Threat Modeling",
		"Vulnerability Assessment",
		"SIEM Basics",
		"OWASP Practices",
	],
	"Systems (Linux & Containers)": [
		"Linux Administration",
		"Shell Scripting",
		"Docker",
		"Container Hardening",
		"System Monitoring",
		"Git & CI Workflows",
	],
	"Software Development (web, iOS & Mobile)": [
		"Next.js",
		"React",
		"TypeScript",
		"Node.js",
		"REST APIs",
		"Swift/iOS Basics",
	],
	"Machine Learning": [
		"Python",
		"NumPy",
		"Pandas",
		"scikit-learn",
		"Feature Engineering",
		"Model Evaluation",
		"Data Preprocessing",
		"Supervised Learning",
	],
};

export default function Home() {
	return (
		<div className='min-h-screen bg-navy-950 text-ivory relative z-10'>
			<Navbar />
			<ThemeToggle />

			<section className='min-h-screen flex items-center justify-center px-6 grid-bg relative'>
				<div className='absolute inset-0 z-0'></div>
				<div className='relative z-10 max-w-4xl mx-auto text-center pt-20'>
					<span className='font-mono text-emerald text-sm tracking-widest uppercase'>
						Hello, I&apos;m
					</span>
					<h1 className='text-5xl md:text-7xl font-bold text-platinum font-[Space_Grotesk] mt-2 mb-4'>
						Harshil Patel
					</h1>
					<div className='mb-8'>
						<TypewriterRole />
					</div>
					<p className='text-ivory-muted max-w-3xl mx-auto text-lg leading-relaxed mb-10'>
						Computer Engineering student passionate about building secure,
						practical software solutions. Experienced in full-stack development,
						cybersecurity, and emerging technologies.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<a
							href={resumeUrl}
							className='border border-gold text-gold hover:bg-gold hover:text-navy-900 px-6 py-3 font-[Space_Grotesk] font-medium transition-all duration-200 hover:shadow-gold-glow'
							target='_blank'
							rel='noopener noreferrer'>
							View Resume
						</a>
						<a
							href={certificatesUrl}
							className='bg-emerald text-ivory px-6 py-3 font-[Space_Grotesk] font-medium hover:bg-emerald-light transition-all duration-200 hover:shadow-emerald-glow'
							target='_blank'
							rel='noopener noreferrer'>
							View Certificates
						</a>
					</div>
				</div>
			</section>

			<section id='about' className='observe-section bg-navy-900 py-24 px-6'>
				<div className='max-w-6xl mx-auto'>
					<h2 className='text-3xl font-bold text-platinum font-[Space_Grotesk] section-title mb-8'>
						About Me
					</h2>
					<div className='grid md:grid-cols-2 gap-12 items-center'>
						<div className='flex justify-center'>
							<div className='w-72 h-72 rounded-2xl overflow-hidden border border-gold/20'>
								<Image
									src='/images/IMG_5642.png'
									alt='Harshil Patel'
									width={288}
									height={288}
									className='w-full h-full object-cover'
								/>
							</div>
						</div>
						<div className='space-y-6 text-ivory-muted leading-relaxed text-lg'>
							<p>
								I&apos;m a B.Tech Computer Engineering student at CHARUSAT
								University, studying within the DEPSTAR institute. My work is
								centered on secure, practical engineering, combining software
								craftsmanship with a cybersecurity-first mindset.
							</p>
							<p>
								I enjoy working across the full stack and have expanded into
								cybersecurity and machine learning through applied projects,
								from secure credential tools to backend systems and automation.
								I focus on building solutions that are robust, maintainable, and
								production-aware.
							</p>
							<p>
								I am currently seeking internship opportunities where I can
								contribute to meaningful engineering work, deepen real-world
								security and systems experience, and keep advancing as a
								developer.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id='skills' className='observe-section bg-navy-800 py-24 px-6'>
				<div className='max-w-6xl mx-auto'>
					<h2 className='text-3xl font-bold text-platinum font-[Space_Grotesk] section-title mb-8'>
						Skills &amp; Technologies
					</h2>
					<p className='text-ivory-muted mb-10 max-w-2xl'>
						A diverse toolkit built through hands-on projects and continuous
						learning
					</p>
					<div className='grid md:grid-cols-3 gap-8'>
						{Object.entries(skillsByCategory).map(([category, skills]) => (
							<div key={category}>
								<p className='text-xs font-mono text-emerald tracking-widest uppercase mb-3'>
									{category}
								</p>
								<div className='flex flex-wrap gap-2'>
									{skills.map((skill) => (
										<span
											key={skill}
											className='font-mono text-sm px-3 py-1.5 border border-gold/20 text-ivory-muted bg-navy-700 hover:border-gold hover:text-gold hover:shadow-gold-glow transition-all duration-200 cursor-default'>
											{skill}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id='projects' className='observe-section bg-navy-900 py-24 px-6'>
				<div className='max-w-6xl mx-auto'>
					<h2 className='text-3xl font-bold text-platinum font-[Space_Grotesk] section-title mb-8'>
						Featured Projects
					</h2>
					<p className='text-ivory-muted mb-10 max-w-2xl'>
						A selection of my work showcasing different aspects of software
						development
					</p>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{projects.map((project) => (
							<article
								key={project.name}
								className='bg-navy-700 border border-gold/10 p-6 hover:border-gold/40 hover:shadow-card-lift hover:-translate-y-1 transition-all duration-300 rounded-xl'>
								<div className='relative overflow-hidden rounded-md mb-4 h-44 bg-navy-800/80 border border-gold/10'>
									<Image
										src={project.image}
										alt={project.name}
										width={400}
										height={240}
										className='w-full h-full object-contain object-center p-2'
									/>
								</div>
								<p className='text-xs font-mono text-emerald tracking-widest uppercase mb-2'>
									{project.category}
								</p>
								<h3 className='text-platinum font-[Space_Grotesk] font-semibold text-lg'>
									{project.name}
								</h3>
								<p className='text-ivory-muted text-sm leading-relaxed mt-2'>
									{project.description}
								</p>

								<details className='mt-4 border border-gold/20 bg-navy-800/70 rounded-lg p-3'>
									<summary className='cursor-pointer font-mono text-xs tracking-widest uppercase text-gold/90 hover:text-gold'>
										Case Study
									</summary>
									<div className='mt-3 space-y-3 text-sm text-ivory-muted'>
										<div>
											<p className='font-mono text-[11px] uppercase tracking-widest text-emerald mb-1'>
												Challenge
											</p>
											<p className='leading-relaxed'>
												{project.caseStudy.challenge}
											</p>
										</div>
										<div>
											<p className='font-mono text-[11px] uppercase tracking-widest text-emerald mb-1'>
												Approach
											</p>
											<p className='leading-relaxed'>
												{project.caseStudy.approach}
											</p>
										</div>
										<div>
											<p className='font-mono text-[11px] uppercase tracking-widest text-emerald mb-1'>
												Outcome
											</p>
											<p className='leading-relaxed'>
												{project.caseStudy.outcome}
											</p>
										</div>
									</div>
								</details>

								<div className='mt-5 flex flex-wrap gap-2'>
									{project.caseStudy.stack.map((tech) => (
										<span
											key={`${project.name}-${tech}`}
											className='font-mono text-sm px-3 py-1.5 border border-gold/20 text-ivory-muted bg-navy-800'>
											{tech}
										</span>
									))}
								</div>

								<div className='mt-5 flex gap-4'>
									{project.github && (
										<a
											href={project.github}
											className='text-gold hover:text-gold-light text-sm font-mono'
											target='_blank'
											rel='noopener noreferrer'>
											GitHub
										</a>
									)}
									{project.live && (
										<a
											href={project.live}
											className='text-gold hover:text-gold-light text-sm font-mono'
											target='_blank'
											rel='noopener noreferrer'>
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
				id='certifications'
				className='observe-section bg-navy-800 py-24 px-6'>
				<div className='max-w-6xl mx-auto text-center'>
					<h2 className='text-3xl font-bold text-platinum font-[Space_Grotesk] section-title mb-8 inline-block text-left'>
						Certifications
					</h2>
					<p className='text-ivory-muted max-w-2xl mx-auto mb-8'>
						View certificates and achievements alongside my latest resume.
					</p>
					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<a
							href={resumeUrl}
							className='border border-gold text-gold hover:bg-gold hover:text-navy-900 px-6 py-3 font-[Space_Grotesk] font-medium transition-all duration-200 hover:shadow-gold-glow'
							target='_blank'
							rel='noopener noreferrer'>
							Open Resume
						</a>
						<a
							href={certificatesUrl}
							className='border border-gold/40 text-ivory-muted hover:border-gold hover:text-gold px-6 py-3 font-[Space_Grotesk] font-medium transition-all duration-200'
							target='_blank'
							rel='noopener noreferrer'>
							View Certificates &amp; Achievements
						</a>
					</div>
				</div>
			</section>

			<section id='contact' className='observe-section bg-navy-900 py-24 px-6'>
				<div className='max-w-4xl mx-auto text-center'>
					<h2 className='text-3xl font-bold text-platinum font-[Space_Grotesk] section-title mb-8 inline-block text-left'>
						Get In Touch
					</h2>
					<p className='text-ivory-muted mb-8'>
						Ready to collaborate? I&apos;d love to hear about your next project
						or internship opportunity.
					</p>

					<div className='flex justify-center gap-4 mb-6'>
						<a
							href='https://github.com/harshil748'
							className='border border-gold/30 text-ivory-muted hover:border-gold hover:text-gold p-3 transition-all duration-200 hover:shadow-gold-glow'
							target='_blank'
							rel='noopener noreferrer'>
							<span className='sr-only'>GitHub</span>
							<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
								<path
									fillRule='evenodd'
									d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
									clipRule='evenodd'
								/>
							</svg>
						</a>
						<a
							href='https://www.linkedin.com/in/harshil748/'
							className='border border-gold/30 text-ivory-muted hover:border-gold hover:text-gold p-3 transition-all duration-200 hover:shadow-gold-glow'
							target='_blank'
							rel='noopener noreferrer'>
							<span className='sr-only'>LinkedIn</span>
							<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
								<path
									fillRule='evenodd'
									d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
									clipRule='evenodd'
								/>
							</svg>
						</a>
						<a
							href='https://x.com/Harshil748'
							className='border border-gold/30 text-ivory-muted hover:border-gold hover:text-gold p-3 transition-all duration-200 hover:shadow-gold-glow'
							target='_blank'
							rel='noopener noreferrer'>
							<span className='sr-only'>X (Twitter)</span>
							<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
								<path d='M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z' />
							</svg>
						</a>
					</div>

					<p className='font-mono text-emerald text-sm mt-4 mb-10'>
						pharshil748@gmail.com
					</p>

					<ContactForm />
				</div>
			</section>

			<footer className='py-10 px-6 bg-navy-950 border-t border-gold/10'>
				<div className='max-w-6xl mx-auto text-center text-ivory-muted text-sm'>
					&copy; {new Date().getFullYear()} Harshil Patel. All rights reserved.
				</div>
			</footer>
		</div>
	);
}
