"use client";

import { useEffect, useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}

export default function RevealOnScroll({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: RevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const getTransformValue = () => {
    switch (direction) {
      case "up":
        return "translateY(50px)";
      case "down":
        return "translateY(-50px)";
      case "left":
        return "translateX(50px)";
      case "right":
        return "translateX(-50px)";
      default:
        return "translateY(50px)";
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              section.style.opacity = "1";
              section.style.transform = "translateY(0) translateX(0)";
            }, delay);
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [delay]);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 opacity-0 ${className}`}
      style={{ transform: getTransformValue() }}
    >
      {children}
    </div>
  );
}
