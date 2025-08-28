# Overview

This is a modern portfolio website for Ujwal Sharma, an AI innovator and app developer with a unique background combining technology and finance. The application is built as a full-stack React application with Express.js backend, featuring a professional portfolio showcasing skills in AI/ML, app development, finance, and automation. The site includes sections for hero introduction, about information, skills display, featured projects, blog articles, and contact functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Components**: Shadcn/ui component library built on top of Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **Theme System**: Custom theme provider supporting dark/light modes with CSS variables

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for server bundling
- **Storage**: In-memory storage implementation with interface for future database integration
- **Session Management**: Prepared for PostgreSQL sessions using connect-pg-simple

## Component Organization
- **Layout**: Single-page application with sectioned components (Hero, About, Skills, Projects, Blog, Contact)
- **UI Components**: Comprehensive component library in `/components/ui/` following Shadcn patterns
- **Feature Components**: Section-specific components in `/components/` (navbar, footer, individual sections)
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Development Setup
- **Monorepo Structure**: Shared schema and types between client and server
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **Code Quality**: TypeScript strict mode with comprehensive type checking

## Styling and Design System
- **CSS Framework**: Tailwind CSS with custom configuration
- **Design Tokens**: CSS custom properties for consistent theming
- **Typography**: Inter font family for general text, JetBrains Mono for code
- **Color Scheme**: Neutral base with primary blue, accent yellow, and semantic colors
- **Components**: Consistent design system with hover effects, animations, and responsive layouts

# External Dependencies

## UI and Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives for complex components
- **tailwindcss**: Utility-first CSS framework for styling
- **class-variance-authority**: Type-safe variant API for component styling
- **clsx & tailwind-merge**: Utility functions for conditional and merged class names
- **lucide-react**: Modern icon library for consistent iconography

## Data and State Management
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight client-side routing
- **react-hook-form & @hookform/resolvers**: Form handling and validation

## Database and Backend
- **drizzle-orm & drizzle-kit**: Type-safe ORM for database operations
- **@neondatabase/serverless**: Serverless PostgreSQL driver (prepared for future use)
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## Development and Build Tools
- **vite**: Fast build tool and development server
- **@vitejs/plugin-react**: React plugin for Vite
- **typescript**: Type safety and enhanced development experience
- **esbuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution for development

## Additional Libraries
- **date-fns**: Date manipulation and formatting utilities
- **embla-carousel-react**: Carousel/slider component functionality
- **cmdk**: Command palette and search functionality
- **zod**: Schema validation for type safety