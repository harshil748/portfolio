"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 py-4 ${
				isScrolled
					? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-700/50"
					: "bg-transparent"
			}`}>
			<div className='max-w-6xl mx-auto flex justify-between items-center'>
				<Link
					href='/'
					className='text-2xl font-bold text-slate-900 dark:text-slate-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200'>
					Harshil Patel
				</Link>

				{/* Desktop Menu */}
				<div className='hidden md:flex space-x-8'>
					{["About", "Skills", "Projects", "Contact"].map((item) => (
						<Link
							key={item}
							href={`#${item.toLowerCase()}`}
							className='relative text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200 font-medium group'>
							{item}
							<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-200'></span>
						</Link>
					))}
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={toggleMobileMenu}
					className='md:hidden flex items-center p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200'
					aria-label='Toggle menu'>
					<svg
						className='w-6 h-6 text-slate-700 dark:text-slate-300'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'>
						{isMobileMenuOpen ? (
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M6 18L18 6M6 6l12 12'></path>
						) : (
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16M4 18h16'></path>
						)}
					</svg>
				</button>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className='md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300'>
					<div className='flex flex-col space-y-1 py-4 px-6'>
						{["About", "Skills", "Projects", "Contact"].map((item) => (
							<Link
								key={item}
								href={`#${item.toLowerCase()}`}
								className='text-slate-700 dark:text-slate-300 py-3 px-3 rounded-lg hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 font-medium'
								onClick={() => setIsMobileMenuOpen(false)}>
								{item}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}
