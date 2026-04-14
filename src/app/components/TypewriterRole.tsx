"use client";
import { useEffect, useState } from "react";

const roles = [
  "CS/CE Student",
  "AI/ML Engineer Intern",
  "Blockchain Developer",
  "Hackathon Builder",
  "Voice AI Builder",
];

export default function TypewriterRole() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const delay = deleting ? 50 : displayed.length === current.length ? 1500 : 100;

    const timeout = setTimeout(() => {
      if (!deleting && displayed.length < current.length) {
        setDisplayed(current.slice(0, displayed.length + 1));
      } else if (!deleting && displayed.length === current.length) {
        setDeleting(true);
      } else if (deleting && displayed.length > 0) {
        setDisplayed(displayed.slice(0, -1));
      } else {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <p className="text-xl md:text-2xl text-ivory-muted font-[Space_Grotesk]">
      <span className="text-emerald">{displayed}</span>
      <span className="animate-pulse text-gold ml-0.5">|</span>
    </p>
  );
}
