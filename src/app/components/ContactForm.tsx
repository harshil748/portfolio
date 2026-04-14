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
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Email send failed:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-navy-700 border border-gold/20 p-6 rounded-xl">
      <form className="space-y-5" onSubmit={sendEmail}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm mb-2 text-ivory-muted font-[Space_Grotesk]"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-navy-800 text-ivory focus:outline-none focus:border-gold"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm mb-2 text-ivory-muted font-[Space_Grotesk]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-navy-800 text-ivory focus:outline-none focus:border-gold"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm mb-2 text-ivory-muted font-[Space_Grotesk]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-navy-800 text-ivory focus:outline-none focus:border-gold resize-none"
            placeholder="Tell me about your project, opportunity, or just say hello..."
          ></textarea>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
          <button
            type="submit"
            className="bg-emerald text-ivory px-6 py-3 font-[Space_Grotesk] font-medium hover:bg-emerald-light transition-all duration-200 hover:shadow-emerald-glow rounded-md"
          >
            Send Message
          </button>
          <p className="text-sm text-ivory-muted">
            Your information is secure and won&apos;t be shared
          </p>
        </div>
      </form>
    </div>
  );
}
