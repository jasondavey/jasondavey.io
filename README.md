# jasondavey.io - Personal Website

## Project Overview

**GitHub Repository**: [jasondavey.io](https://github.com/jasondavey/jasondavey.io)

### Purpose

This personal website serves as a comprehensive digital portfolio that showcases my professional journey across various industries, highlighting significant projects and the diverse technologies I've worked with throughout my career. It's designed to provide visitors with insights into my technical expertise, creative problem-solving abilities, and professional evolution over time. The site combines elegant design with interactive elements to create an engaging and informative experience that reflects both my technical skills and personal brand.

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

This project leverages a comprehensive set of modern web technologies to create a responsive, accessible, and feature-rich personal website:

### Core Technologies

- **Vite** (`vite`, `@vitejs/plugin-react-swc`) - Blazing fast frontend build tool that significantly improves development experience with near-instant hot module replacement
- **React** (`react`, `react-dom`) - A JavaScript library for building component-based user interfaces
- **TypeScript** (`typescript`) - Adds static typing to JavaScript to improve developer experience and code quality
- **Tailwind CSS** (`tailwindcss`) - Utility-first CSS framework for rapid UI development with minimal custom CSS

### UI Framework and Components

- **shadcn/ui** - A collection of accessible, customizable UI components built with Radix UI and styled with Tailwind CSS
- **Radix UI** (multiple `@radix-ui/*` packages) - Provides low-level, unstyled, and accessible components:
  - Primitive UI components like dialogs, dropdown menus, tooltips, etc.
  - Accessible by default, following WAI-ARIA patterns
  - Extremely customizable building blocks for the UI
- **Lucide React** (`lucide-react`) - Beautiful, consistent icon set with over 500 icons
- **Embla Carousel** (`embla-carousel-react`) - Extensible carousel/slider library with great mobile support
- **Sonner** (`sonner`) - Modern, customizable toast notifications
- **next-themes** (`next-themes`) - Handles theme switching and persistence for dark/light modes

### Styling and Animation

- **Tailwind CSS Plugins**:
  - `tailwindcss-animate` - Adds animation utilities to Tailwind
  - `@tailwindcss/typography` - Adds typographic styles for markdown content
  - `tailwind-merge` - Intelligently merges Tailwind CSS classes without style conflicts
- **Class Variance Authority** (`class-variance-authority`) - For creating type-safe component variants with Tailwind
- **clsx** (`clsx`) - Utility for constructing className strings conditionally

### Forms and Validation

- **React Hook Form** (`react-hook-form`) - Performant, flexible form validation with minimal re-renders
- **Zod** (`zod`) - TypeScript-first schema validation with static type inference
- **@hookform/resolvers** - Connects React Hook Form with Zod for form validation

### Routing and Data Management

- **React Router** (`react-router-dom`) - Client-side routing library for React applications
- **TanStack Query** (`@tanstack/react-query`) - Data fetching, caching, and state management for async data

### Date Handling

- **date-fns** (`date-fns`) - Modern JavaScript date utility library
- **React Day Picker** (`react-day-picker`) - Flexible date picker component

### Communication and User Interaction

- **EmailJS** (`emailjs-com`) - Allows sending emails directly from client-side JavaScript

### Analytics and Performance

- **Google Analytics** - Comprehensive user behavior tracking and website analytics
- **Vercel Speed Insights** (`@vercel/speed-insights`) - Performance monitoring and analytics
- **React Website Carbon Badge** (`react-websitecarbon-badge`) - Displays the carbon footprint of the website

### Data Visualization

- **Recharts** (`recharts`) - Composable charting library built on React components

### Development Tools

- **AI Assistance**:
  - **Windsurf** - Advanced AI coding assistant platform
  - **Claude AI** - AI assistant for code generation and problem-solving
  - **ChatGPT** - AI language model for development guidance and code optimization
- **Version Control** - GitHub for source code management
- **ESLint** (`eslint`, related plugins) - Code linting for identifying and fixing problematic patterns
- **Autoprefixer** (`autoprefixer`) - Automatically adds vendor prefixes to CSS
- **PostCSS** (`postcss`) - Tool for transforming CSS with JavaScript plugins

## Build Process

The project utilizes Vite's optimized build system with several customized build scripts:

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

## Deployment

The site is deployed on [Vercel](https://vercel.com), a modern cloud platform for static sites and serverless functions:

- **Continuous Deployment**: Automatically builds and deploys when changes are pushed to GitHub
- **Preview Deployments**: Creates preview deployments for pull requests
- **Edge Network**: Global CDN for fast content delivery
- **Integrated Analytics**: Performance monitoring via Vercel Speed Insights

The deployment workflow is simple:

1. Push changes to the GitHub repository
2. Vercel automatically detects the changes and triggers a new build
3. The site is built and deployed to the global edge network

## Domain Configuration

The site is accessible at [jasondavey.io](https://jasondavey.io) through custom domain configuration.

### DNS Setup

- **Domain Registrar**: AWS (Amazon Web Services)
- **DNS Management**: AWS Route53
- **Configuration**: DNS records point to Vercel's edge network

AWS Route53 provides reliable and scalable DNS services for the domain, while Vercel handles the actual hosting and content delivery.

## Communication Channels

To maintain privacy while still providing professional contact methods, this website uses the following services:

### Email Forwarding

- **Service**: ImproveMX
- **Configuration**: Custom email addresses using the jasondavey.io domain (e.g., `contact@jasondavey.io`)
- **Functionality**: All emails sent to these addresses are automatically forwarded to a personal email account
- **Benefits**: Provides a professional email presence without exposing personal email addresses

### Anonymous Phone Number

- **Service**: Google Voice
- **Configuration**: A dedicated phone number that routes to personal devices
- **Functionality**: Calls and texts to the Google Voice number forward to personal devices
- **Benefits**: Allows sharing a contact number publicly without exposing personal phone numbers

This setup creates a professional communication system while maintaining separation between public-facing contact information and personal accounts.
