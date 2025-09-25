import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import RevealOnScroll from "./components/RevealOnScroll";
import ContactForm from "./components/ContactForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className='min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300'>
			<Navbar />
			<ThemeToggle />

			{/* Hero Section */}
			<section className='relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900'>
				{/* Background decoration */}
				<div className='absolute inset-0 overflow-hidden'>
					<div className='absolute top-1/4 left-1/4 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse'></div>
					<div
						className='absolute top-1/3 right-1/4 w-64 h-64 bg-amber-100 dark:bg-amber-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse'
						style={{ animationDelay: "2s" }}></div>
				</div>

				<RevealOnScroll>
					<div className='relative max-w-4xl mx-auto text-center'>
						<div className='mb-6'>
							<span className='inline-block px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-sm font-medium mb-4'>
								Available for Internship Opportunities
							</span>
						</div>
						<h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight'>
							<span className='block text-slate-900 dark:text-slate-100'>
								Hello, I'm
							</span>
							<span className='block accent-gradient mt-2'>Harshil Patel</span>
						</h1>
						<p className='text-xl sm:text-2xl mb-10 text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed'>
							Computer Engineering student passionate about building secure,
							practical software solutions. Experienced in full-stack
							development, cybersecurity, and emerging technologies.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<a href='#projects' className='btn-primary'>
								View My Work
							</a>
							<a href='#contact' className='btn-secondary'>
								Get In Touch
							</a>
						</div>
					</div>
				</RevealOnScroll>
			</section>

			{/* About Section */}
			<section
				id='about'
				className='py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900'>
				<div className='max-w-6xl mx-auto'>
					<RevealOnScroll>
						<div className='text-center mb-16'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4 heading-gradient'>
								About Me
							</h2>
							<div className='w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full'></div>
						</div>
					</RevealOnScroll>
					<div className='grid md:grid-cols-2 gap-12 items-center'>
						<RevealOnScroll direction='right' delay={200}>
							<div className='flex justify-center'>
								<div className='relative'>
									<div className='w-72 h-72 rounded-2xl overflow-hidden shadow-xl'>
										<Image
											src='/images/IMG_5642.png'
											alt='Harshil Patel'
											width={288}
											height={288}
											className='w-full h-full object-cover'
										/>
									</div>
									<div className='absolute inset-0 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-transparent'></div>
								</div>
							</div>
						</RevealOnScroll>
						<RevealOnScroll direction='left' delay={400}>
							<div className='space-y-6'>
								<p className='text-lg leading-relaxed text-slate-600 dark:text-slate-400'>
									I'm a Computer Engineering student with a strong passion for
									building practical, secure software solutions. Over the past
									year, I've developed several projects ranging from password
									managers and note-taking apps to blockchain analysis tools,
									leveraging technologies like Python, JavaScript, Node.js, and
									Electron.
								</p>
								<p className='text-lg leading-relaxed text-slate-600 dark:text-slate-400'>
									I enjoy working across the full stack and have recently
									expanded into cybersecurity and machine learning. Currently
									seeking a summer internship to apply my skills, gain
									real-world experience, and contribute to meaningful projects
									in a collaborative team environment.
								</p>
								<p className='text-lg leading-relaxed text-slate-600 dark:text-slate-400'>
									When I'm not coding, you can find me swimming or playing
									basketball. I'm always eager to learn new technologies and
									continuously improve my skills to build better digital
									solutions.
								</p>
							</div>
						</RevealOnScroll>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section
				id='skills'
				className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800'>
				<div className='max-w-6xl mx-auto'>
					<RevealOnScroll>
						<div className='text-center mb-16'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4 heading-gradient'>
								Skills & Technologies
							</h2>
							<p className='text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto'>
								A diverse toolkit built through hands-on projects and continuous
								learning
							</p>
						</div>
					</RevealOnScroll>

					<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
						{/* Skill Items */}
						{[
							{ name: "JavaScript", category: "Frontend" },
							{ name: "TypeScript", category: "Frontend" },
							{ name: "React", category: "Frontend" },
							{ name: "Next.js", category: "Frontend" },
							{ name: "Node.js", category: "Backend" },
							{ name: "Tailwind CSS", category: "Styling" },
							{ name: "HTML", category: "Frontend" },
							{ name: "CSS", category: "Styling" },
							{ name: "Python", category: "Backend" },
							{ name: "Java", category: "Backend" },
							{ name: "Machine Learning", category: "AI/ML" },
							{ name: "Cybersecurity", category: "Security" },
						].map((skill, index) => (
							<RevealOnScroll key={skill.name} delay={50 * index}>
								<div className='card-professional p-4 text-center group'>
									<div className='w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200'>
										<div className='w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg'></div>
									</div>
									<h3 className='font-semibold text-sm text-slate-900 dark:text-slate-100 mb-1'>
										{skill.name}
									</h3>
									<p className='text-xs text-slate-500 dark:text-slate-400'>
										{skill.category}
									</p>
								</div>
							</RevealOnScroll>
						))}
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section
				id='projects'
				className='py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900'>
				<div className='max-w-6xl mx-auto'>
					<RevealOnScroll>
						<div className='text-center mb-16'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4 heading-gradient'>
								Featured Projects
							</h2>
							<p className='text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto'>
								A selection of my work showcasing different aspects of software
								development
							</p>
						</div>
					</RevealOnScroll>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
						{/* Project Cards */}
						<RevealOnScroll delay={0}>
							<div className='card-professional overflow-hidden group'>
								<div className='relative overflow-hidden'>
									<Image
										src='/images/pylock.png'
										alt='PyLock'
										width={400}
										height={240}
										className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500'
									/>
									<div className='absolute top-4 left-4'>
										<span className='px-3 py-1 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 text-xs font-medium rounded-full'>
											Security
										</span>
									</div>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-bold mb-3 text-slate-900 dark:text-slate-100'>
										PyLock
									</h3>
									<p className='text-slate-600 dark:text-slate-400 mb-4 leading-relaxed'>
										A secure password manager built using Python and Tkinter
										with encryption, email verification, and 2FA support for
										enhanced security.
									</p>
									<div className='flex gap-3'>
										<a
											href='https://github.com/harshil748/PyLockv2'
											className='inline-flex items-center px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200'
											target='_blank'
											rel='noopener noreferrer'>
											<svg
												className='w-4 h-4 mr-2'
												fill='currentColor'
												viewBox='0 0 20 20'>
												<path
													fillRule='evenodd'
													d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
													clipRule='evenodd'
												/>
											</svg>
											GitHub
										</a>
									</div>
								</div>
							</div>
						</RevealOnScroll>

						<RevealOnScroll delay={200}>
							<div className='card-professional overflow-hidden group'>
								<div className='relative overflow-hidden'>
									<Image
										src='/images/IMG_5C54.png'
										alt='Line Following Robot'
										width={400}
										height={240}
										className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500'
									/>
									<div className='absolute top-4 left-4'>
										<span className='px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full'>
											Hardware
										</span>
									</div>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-bold mb-3 text-slate-900 dark:text-slate-100'>
										Line Following Robot
									</h3>
									<p className='text-slate-600 dark:text-slate-400 mb-4 leading-relaxed'>
										An autonomous robot designed to follow a predefined path
										using infrared sensors and microcontroller logic for precise
										real-time movement control.
									</p>
								</div>
							</div>
						</RevealOnScroll>

						<RevealOnScroll delay={400}>
							<div className='card-professional overflow-hidden group'>
								<div className='relative overflow-hidden'>
									<Image
										src='/images/portfoilo.png'
										alt='Portfolio Website'
										width={400}
										height={240}
										className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500'
									/>
									<div className='absolute top-4 left-4'>
										<span className='px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 text-xs font-medium rounded-full'>
											Web Dev
										</span>
									</div>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-bold mb-3 text-slate-900 dark:text-slate-100'>
										Portfolio Website
									</h3>
									<p className='text-slate-600 dark:text-slate-400 mb-4 leading-relaxed'>
										A responsive personal portfolio showcasing projects, skills,
										and experience, built with Next.js, Tailwind CSS, and modern
										web technologies.
									</p>
									<div className='flex gap-3'>
										<a href='#' className='btn-primary text-sm px-4 py-2'>
											Live Demo
										</a>
										<a
											href='https://github.com/harshil748/portfolio'
											className='inline-flex items-center px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200'
											target='_blank'
											rel='noopener noreferrer'>
											<svg
												className='w-4 h-4 mr-2'
												fill='currentColor'
												viewBox='0 0 20 20'>
												<path
													fillRule='evenodd'
													d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
													clipRule='evenodd'
												/>
											</svg>
											GitHub
										</a>
									</div>
								</div>
							</div>
						</RevealOnScroll>
					</div>

					<div className='text-center'>
						<a
							href='https://drive.google.com/drive/folders/18wgqHzPdNuto9zA3bfgSU7cn73zOxhfN?usp=sharing'
							className='inline-flex items-center px-6 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200 border border-slate-300 dark:border-slate-600 rounded-lg hover:border-amber-300 dark:hover:border-amber-600'
							target='_blank'
							rel='noopener noreferrer'>
							<svg
								className='w-5 h-5 mr-2'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
								/>
							</svg>
							View Certificates & Achievements
						</a>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id='contact'
				className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800'>
				<div className='max-w-4xl mx-auto'>
					<RevealOnScroll>
						<div className='text-center mb-16'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4 heading-gradient'>
								Get In Touch
							</h2>
							<p className='text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto'>
								Ready to collaborate? I'd love to hear about your next project
								or internship opportunity
							</p>
						</div>
					</RevealOnScroll>

					<div className='grid md:grid-cols-2 gap-12 items-start'>
						<RevealOnScroll delay={200}>
							<div className='space-y-8'>
								<div className='flex items-start space-x-4'>
									<div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 rounded-xl flex items-center justify-center'>
										<svg
											className='w-6 h-6 text-amber-600 dark:text-amber-400'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
											/>
										</svg>
									</div>
									<div>
										<h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2'>
											Email
										</h3>
										<p className='text-slate-600 dark:text-slate-400'>
											Quick response guaranteed
										</p>
									</div>
								</div>

								<div className='flex items-start space-x-4'>
									<div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl flex items-center justify-center'>
										<svg
											className='w-6 h-6 text-blue-600 dark:text-blue-400'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
											/>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
											/>
										</svg>
									</div>
									<div>
										<h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2'>
											Location
										</h3>
										<p className='text-slate-600 dark:text-slate-400'>
											Open to remote & hybrid work
										</p>
									</div>
								</div>

								<div className='flex items-start space-x-4'>
									<div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-xl flex items-center justify-center'>
										<svg
											className='w-6 h-6 text-green-600 dark:text-green-400'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
											/>
										</svg>
									</div>
									<div>
										<h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2'>
											Response Time
										</h3>
										<p className='text-slate-600 dark:text-slate-400'>
											Usually within 24 hours
										</p>
									</div>
								</div>
							</div>
						</RevealOnScroll>

						<RevealOnScroll delay={400}>
							<ContactForm />
						</RevealOnScroll>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className='py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700'>
				<div className='max-w-6xl mx-auto'>
					<div className='flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0'>
						<div className='flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4'>
							<p className='text-slate-600 dark:text-slate-400'>
								&copy; {new Date().getFullYear()} Harshil Patel. All rights
								reserved.
							</p>
							<span className='hidden sm:block text-slate-300 dark:text-slate-600'>
								•
							</span>
							<p className='text-slate-500 dark:text-slate-500 text-sm'>
								Built with Next.js & Tailwind CSS
							</p>
						</div>
						<div className='flex space-x-6'>
							<a
								href='https://github.com/harshil748'
								className='text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300'
								target='_blank'
								rel='noopener noreferrer'>
								<span className='sr-only'>GitHub</span>
								<svg
									className='w-5 h-5'
									fill='currentColor'
									viewBox='0 0 20 20'>
									<path
										fillRule='evenodd'
										d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
										clipRule='evenodd'
									/>
								</svg>
							</a>
							<a
								href='https://www.linkedin.com/in/harshil748/'
								className='text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300'
								target='_blank'
								rel='noopener noreferrer'>
								<span className='sr-only'>LinkedIn</span>
								<svg
									className='w-5 h-5'
									fill='currentColor'
									viewBox='0 0 20 20'>
									<path
										fillRule='evenodd'
										d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
										clipRule='evenodd'
									/>
								</svg>
							</a>
							<a
								href='https://x.com/Harshil748'
								className='text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300'
								target='_blank'
								rel='noopener noreferrer'>
								<span className='sr-only'>X (Twitter)</span>
								<svg
									className='w-5 h-5'
									fill='currentColor'
									viewBox='0 0 20 20'>
									<path d='M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z' />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
