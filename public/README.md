# jasondavey.io - A Digital Portfolio

## Project Overview

**GitHub Repository**: [jasondavey.io](https://github.com/jasondavey/jasondavey.io)

### Purpose

This personal website serves as a comprehensive digital portfolio that showcases my professional journey across various industries, highlighting significant projects and the diverse technologies I've worked with throughout my career. It's designed to provide visitors with insights into my technical expertise, creative problem-solving abilities, and professional evolution over time. The site combines elegant design with interactive elements to create an engaging and informative experience that reflects both my technical skills and personal brand.

### Objectives

The technology choices for this project were guided by several key objectives:

- **Performance-First Architecture**: Using Vite and modern build tools to create a lightning-fast user experience with optimized assets and minimal load times

- **Type Safety & Code Quality**: Leveraging TypeScript and ESLint to ensure robust, maintainable code with fewer runtime errors

- **Accessibility & Inclusivity**: Following WAI-ARIA and WCAG guidelines throughout, both in the primary Material UI component layer and the handful of Radix-based dialogs

- **Responsive & Adaptive Design**: A layout that adapts cleanly across phone, tablet, and desktop viewports

- **Developer Experience**: Selecting tools that enhance productivity through immediate feedback loops, strong type checking, and intuitive APIs

- **Sustainable Web Practices**: Monitoring and optimizing for carbon efficiency using tools like the Website Carbon Badge

## Project Tools

This website is built and maintained using modern tools and workflows:

## How to Edit This Code

There are several ways to work with this codebase:

**Use your preferred IDE**

Work locally using your preferred development environment:

```sh
# Step 1: Clone the repository
git clone https://github.com/jasondavey/jasondavey.io.git

# Step 2: Navigate to the project directory
cd jasondavey.io

# Step 3: Install the necessary dependencies
npm install

# Step 4: Start the development server
npm run dev
```

**Edit directly on GitHub**

- Navigate to the desired file in the repository
- Click the "Edit" button (pencil icon) at the top right of the file view
- Make your changes and commit them directly

**Use GitHub Codespaces**

- Navigate to the main page of the repository
- Click on the "Code" button (green button) near the top right
- Select the "Codespaces" tab
- Click on "New codespace" to launch a new development environment
- Edit files directly within the Codespace and commit/push your changes

## Technology Stack and Dependencies

### Core Technologies

- **Vite** (`vite`, `@vitejs/plugin-react-swc`) - Build tool and dev server with near-instant hot module replacement
- **React** (`react`, `react-dom`) - Component-based UI library
- **TypeScript** (`typescript`) - Static typing across the codebase
- **React Router** (`react-router-dom`) - Client-side routing (a single-page site plus a catch-all not-found route)

### UI and Styling

- **Material UI** (`@mui/material`, `@mui/icons-material`, `@mui/lab`) with **Emotion** (`@emotion/react`, `@emotion/styled`) - The primary component and styling system used across virtually every section of the site (layout, typography, buttons, dialogs, theming)
- **Framer Motion** (`framer-motion`) - Scroll-linked and viewport-triggered animation used throughout every section (fades, parallax, staggered reveals)
- **Custom theme system** - A hand-built `ThemeProvider` drives MUI's light/dark palette and keeps Tailwind's class-based dark mode in sync, so both styling systems switch together
- **shadcn/ui + Radix UI** (`@radix-ui/*`) - Used for a handful of specific dialogs (resume/patent viewer, location picker, external-link confirmation, carbon-footprint info, and this documentation modal), styled with Tailwind CSS
- **Tailwind CSS** (`tailwindcss`, `tailwindcss-animate`, `tailwind-merge`) - Utility CSS backing the Radix-based components above

### Forms and Communication

- **EmailJS** (`@emailjs/browser`) - Sends the contact form directly from the client, no backend required
- Contact form validation is hand-rolled (see `useContactForm.ts`), not a schema library

### Analytics and Performance

- **Google Analytics** - Site usage tracking
- **Vercel Speed Insights** (`@vercel/speed-insights`) - Real-user performance monitoring
- **Website Carbon Badge** - Displays an estimate of the site's carbon footprint

### Development Tools

- **ESLint** and **Prettier** - Linting and formatting, enforced in CI
- **Vitest** + **React Testing Library** - Component-level unit tests (see `src/**/*.test.tsx`)
- **Playwright** - End-to-end tests, run against a real Vercel preview deployment in CI
- **Cypress** - A second, older end-to-end suite that also runs in CI against the Vercel preview

> Note: a few packages remain in `package.json` from the project's original scaffold but aren't wired into the app (e.g. `@tanstack/react-query`, `zod`, `react-hook-form`, `recharts`, `react-day-picker`, `embla-carousel-react`, `next-themes`). They're candidates for removal rather than part of the active architecture.

## Testing

### Unit Tests

- **Vitest** (`npm run test:unit` / `test:unit:run`) - Component-level tests using React Testing Library, run in CI as part of static checks

### End-to-End Tests

Both suites run in CI against the live Vercel preview deployment for every push:

- **Playwright** (`npm run test:e2e`, `test:e2e:ui`, `test:e2e:headed`, `test:e2e:debug`) - Primary e2e suite; failures are posted as a summary comment on the triggering commit or PR
- **Cypress** (`npm run test:local`, `test`) - Second e2e suite, results recorded to Cypress Cloud

## Build Process

### Build Commands

- **Standard Build**: `npm run build`

  - Creates a production-ready, optimized build using Vite
  - Minifies code, optimizes assets, and generates static files

- **Development Build**: `npm run build:dev`

  - Builds the application in development mode with source maps
  - Useful for debugging production-like builds locally

- **Vercel Build**: `npm run vercel-build`
  - Custom build process for Vercel deployment
  - Generates build timestamp information before the main build
  - Creates a `build-info.ts` file with the exact build time

### Build Artifacts

After building, the project generates:

- Static HTML, CSS, and JavaScript files in the `dist` directory
- Assets with content hashing for cache optimization
- Build information file with timestamp for version tracking

## CI/CD Pipeline & Deployment

The repository uses a single `main` branch — there is no separate development branch; all work happens on short-lived feature branches merged into `main`.

### Pipeline (`.github/workflows/jasondavey.io.yml`)

On every push to `main` (or manual trigger):

1. **Static checks** - lint, TypeScript type-check, Vitest unit tests, and a production build all run first and must pass
2. **Playwright** and **Cypress** then run in parallel against the corresponding Vercel preview deployment for that push
3. If both e2e suites pass, a deploy hook fires to promote the build to production

Playwright failures are automatically posted as a summary comment on the commit (or its PR) so failures are visible without opening the Actions tab.

### Production Deployment

The site is deployed on [Vercel](https://vercel.com):

- **Continuous Deployment**: Production deploy is triggered by the CI pipeline above once tests pass
- **Preview Deployments**: Every push gets its own preview URL, which is what the e2e suites test against
- **Edge Network**: Global CDN for fast content delivery
- **Integrated Analytics**: Performance monitoring via Vercel Speed Insights

## Domain Configuration

The site is accessible at [jasondavey.io](https://jasondavey.io) through custom domain configuration.

### DNS Setup

- **Domain Registrar**: AWS (Amazon Web Services)
- **DNS Management**: AWS Route53
- **Configuration**: DNS records point to Vercel's edge network

## Communication Channels

Contact details shown on the site (email and phone) are configured via environment variables (`VITE_EMAIL_ADDRESS_HELLO`, `VITE_PHONE_NUMBER`) rather than hardcoded, so they can be updated without a code change. They currently point directly to personal contact info rather than through a forwarding/anonymization service.
