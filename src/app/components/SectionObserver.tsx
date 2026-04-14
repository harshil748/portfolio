"use client";

import { useEffect } from "react";

export default function SectionObserver() {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("section-visible");
						entry.target.classList.remove("section-hidden");
					}
				});
			},
			{ threshold: 0.1 },
		);

		document
			.querySelectorAll<HTMLElement>(".observe-section")
			.forEach((element) => {
				element.classList.add("section-hidden");
				observer.observe(element);
			});

		return () => {
			observer.disconnect();
		};
	}, []);

	return null;
}
