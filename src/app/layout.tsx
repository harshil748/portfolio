import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased relative">
        <div className="cursor-glow" id="cursor-glow" />
        <ThemeProvider>{children}</ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const setupPortfolioEffects = () => {
                const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                const glow = document.getElementById('cursor-glow');

                if (prefersReducedMotion) {
                  if (glow) glow.style.display = 'none';
                } else {
                  document.addEventListener('mousemove', (e) => {
                    if (glow) {
                      glow.style.left = e.clientX + 'px';
                      glow.style.top = e.clientY + 'px';
                    }
                  });
                }

                const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('section-visible');
                      entry.target.classList.remove('section-hidden');
                    }
                  });
                }, { threshold: 0.1 });

                document.querySelectorAll('.observe-section').forEach(el => {
                  el.classList.add('section-hidden');
                  observer.observe(el);
                });
              };

              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', setupPortfolioEffects);
              } else {
                setupPortfolioEffects();
              }
            `,
          }}
        />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
