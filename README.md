# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio template includes dark mode support, animations, and a clean design to showcase your skills and projects.

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Dark Mode Support**: Toggle between light, dark, and system preference modes
- **Modern Animations**: Smooth scroll animations using Intersection Observer
- **Fully Customizable**: Easy to personalize with your own content and styling
- **TypeScript Support**: Type-safe development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **SEO Friendly**: Built with best practices for search engine optimization

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization Guide

### Personal Information

To customize the portfolio with your information:

1. **Name and Role**: Update the hero section in `src/app/page.tsx` with your name and role
2. **About Me**: Replace the placeholder text in the About section with your own background and interests
3. **Skills**: Add or remove skills in the Skills section array
4. **Projects**: Replace the project placeholders with your own projects, including images, descriptions, and links
5. **Contact Information**: Update the contact form if desired
6. **Social Links**: Add your social media links in the footer section

### Styling

The portfolio uses Tailwind CSS for styling:

- **Colors**: Change the color scheme by modifying gradient and color classes
- **Fonts**: Update the font in `src/app/layout.tsx` if you want to use a different font
- **Animations**: Adjust animation settings in the `RevealOnScroll` component
- **Layout**: Modify the layout structure in the page.tsx file to match your design preferences

### Adding More Sections

To add more sections to your portfolio:

1. Create a new section in `src/app/page.tsx` following the existing pattern
2. Wrap your content with the `RevealOnScroll` component for animations
3. Add a link to the new section in the `Navbar.tsx` component

## Deployment

This portfolio website can be easily deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/your-portfolio-repo)

You can also deploy to other platforms like Netlify, GitHub Pages, or any other hosting service that supports Next.js.

## Learn More

To learn more about the technologies used in this template:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React](https://reactjs.org/docs/getting-started.html)

## License

This project is open source and available under the MIT License.
