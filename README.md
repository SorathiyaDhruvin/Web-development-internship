# Itzfizz Digital - Web Development Internship Assignment

## Overview

This project is a premium agency-style landing page built as part of the Itzfizz Digital web development internship assignment. It features high-performance scroll-driven animations and a modern, sleek aesthetic suitable for a top-tier digital agency. The main highlight is a scroll-controlled hero section where a central visual element seamlessly transforms as the user scrolls, creating an immersive experience.

## Technologies Used

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Library**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: TypeScript
- **Animations**: [GSAP](https://gsap.com/) & [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Animation Implementation Details

The animations in this project are powered by GSAP and ScrollTrigger to ensure smooth, high-performance interactions. 

### Initial Load
On page load, we use a GSAP timeline to sequence the entrance animations:
1. The headline characters fade in and move upwards with a staggered effect.
2. The main visual element scales up and fades in, slightly overlapping the headline animation.
3. The statistics at the bottom fade and translate upwards sequentially.

### Scroll-Driven Visual
The main abstract visual is pinned within a sticky container and manipulated purely via transform properties (`translate`, `scale`, `rotation`) and `opacity` to maintain 60FPS performance without causing layout recalculations.
- **Desktop**: The visual translates downwards, scales up significantly, rotates, and fades slightly to transition cleanly into the next section.
- **Mobile**: The animation is simplified (less extreme scaling and translation) using `gsap.matchMedia()` to ensure smooth performance on mobile devices.
- Scrubbing is set to `1` (or `true`) so the animation progress is directly tied to the scrollbar.

## Running Locally

1. **Clone the repository** (if applicable) and navigate to the project directory:
   ```bash
   cd itzfizz-assignment
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **View the application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment Instructions (GitHub Pages Preferred)

This project has been pre-configured for static export to work seamlessly with GitHub Pages.

1. **Initialize Git & Push**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/itzfizz-assignment.git
   git push -u origin main
   ```

2. **GitHub Actions Deployment**:
   - Go to your repository on GitHub.
   - Click on **Settings** > **Pages**.
   - Under **Build and deployment**, select **GitHub Actions** as the source.
   - Next.js has an official pre-made GitHub Actions template. If prompted, select the **Next.js** template and commit the `.yml` workflow file.
   - GitHub Actions will now automatically build and deploy your static site on every push!

*Note: The `next.config.ts` has already been configured with `output: 'export'` and `images: { unoptimized: true }` which is required for GitHub Pages.*
