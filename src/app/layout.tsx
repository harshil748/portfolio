import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import PortfolioEffects from "./components/PortfolioEffects";
import SectionObserver from "./components/SectionObserver";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
	title: "Harshil Patel | CS/CE Student & AI/ML Engineer",
	description:
		"Portfolio of Harshil Patel — CS/CE student, AI/ML engineer, blockchain developer, and hackathon builder based in India.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className='antialiased relative'>
				<div
					className='cursor-glow'
					id='cursor-glow'
					aria-hidden='true'
					style={{ display: "none" }}
				/>
				<ThemeProvider>{children}</ThemeProvider>
				<SectionObserver />
				<PortfolioEffects />
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
