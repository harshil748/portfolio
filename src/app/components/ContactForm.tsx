"use client";

import emailjs from "emailjs-com";
import React from "react";

export default function ContactForm() {
	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_y96bt5p",
				"template_pebhb17",
				e.currentTarget,
				"adO9mYpbv6tJsp41o"
			)
			.then(
				(result) => {
					console.log(result.text);
					alert("Message sent successfully!");
				},
				(error) => {
					console.log(error.text);
					alert("Failed to send message. Please try again.");
				}
			);
	};

	return (
		<div className='card-professional p-8'>
			<form className='space-y-6' onSubmit={sendEmail}>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
					<div>
						<label
							htmlFor='name'
							className='block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300'>
							Full Name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							required
							className='input-professional'
							placeholder='Your full name'
						/>
					</div>
					<div>
						<label
							htmlFor='email'
							className='block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300'>
							Email Address
						</label>
						<input
							type='email'
							id='email'
							name='email'
							required
							className='input-professional'
							placeholder='your.email@example.com'
						/>
					</div>
				</div>
				<div>
					<label
						htmlFor='message'
						className='block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300'>
						Message
					</label>
					<textarea
						id='message'
						name='message'
						rows={6}
						required
						className='input-professional resize-none'
						placeholder='Tell me about your project, opportunity, or just say hello...'></textarea>
				</div>
				<div className='flex flex-col sm:flex-row gap-4 pt-2'>
					<button
						type='submit'
						className='btn-primary flex items-center justify-center'>
						<svg
							className='w-5 h-5 mr-2'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
							/>
						</svg>
						Send Message
					</button>
					<p className='text-sm text-slate-500 dark:text-slate-400 flex items-center'>
						<svg
							className='w-4 h-4 mr-2'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
							/>
						</svg>
						Your information is secure and won't be shared
					</p>
				</div>
			</form>
		</div>
	);
}
