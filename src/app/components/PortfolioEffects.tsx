"use client";

import { useEffect } from "react";

export default function PortfolioEffects() {
	useEffect(() => {
		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		const glow = document.getElementById("cursor-glow");

		let rafId = 0;
		let latestX = 0;
		let latestY = 0;

		const renderGlow = () => {
			if (glow) {
				glow.style.left = `${latestX}px`;
				glow.style.top = `${latestY}px`;
			}
			rafId = 0;
		};

		const handleMouseMove = (event: MouseEvent) => {
			latestX = event.clientX;
			latestY = event.clientY;
			if (!rafId) {
				rafId = window.requestAnimationFrame(renderGlow);
			}
		};

		if (prefersReducedMotion) {
			if (glow) {
				glow.style.display = "none";
			}
		} else {
			if (glow) {
				glow.style.display = "block";
			}
			document.addEventListener("mousemove", handleMouseMove, {
				passive: true,
			});
		}

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			if (rafId) {
				window.cancelAnimationFrame(rafId);
			}
		};
	}, []);

	return null;
}
