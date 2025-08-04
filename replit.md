# Overview

Nirvaha is a mental wellness platform built as a full-stack web application with separate Doctor and HR dashboards. The platform provides comprehensive patient management, appointment scheduling, wellness tracking, and analytics capabilities for healthcare providers and human resources teams. Built with React, TypeScript, Express.js, and PostgreSQL using Drizzle ORM, it features a modern UI with shadcn/ui components and Tailwind CSS for healthcare-focused design.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development tooling
- **Routing**: Wouter for lightweight client-side routing with role-based navigation
- **UI Framework**: shadcn/ui component library with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with healthcare-focused design system featuring therapeutic colors and wellness-oriented theming
- **State Management**: React Context for role management (Doctor/HR), TanStack Query for server state
- **Mobile Responsiveness**: Custom mobile sidebar implementation with responsive breakpoints

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution, Vite middleware for development HMR
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage class)
- **API Structure**: RESTful API design with /api prefix, centralized error handling middleware
- **Build Process**: esbuild for production bundling with platform-specific configurations

## Data Storage Solutions
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Database**: PostgreSQL via Neon Database serverless connection
- **Schema Management**: Shared schema definitions with Zod validation integration
- **Migrations**: Drizzle Kit for database schema migrations and management
- **Session Storage**: PostgreSQL-backed session storage using connect-pg-simple

## Authentication and Authorization
- **Role-Based Access**: Context-based role management supporting Doctor and HR user types
- **Route Protection**: Role-specific dashboard access with navigation restrictions
- **Session Management**: Express session handling with PostgreSQL storage backend

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database hosting with connection pooling
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL operations and schema management

## UI and Styling
- **shadcn/ui**: Comprehensive component library built on Radix UI primitives
- **Radix UI**: Headless UI components for accessibility and keyboard navigation
- **Tailwind CSS**: Utility-first CSS framework with custom healthcare design tokens
- **Lucide React**: Icon library for consistent iconography across the platform

## Development Tools
- **Vite**: Frontend build tool with React plugin and development server
- **TypeScript**: Static type checking for both frontend and backend code
- **esbuild**: JavaScript bundler for production builds with optimized output

## Frontend Libraries
- **TanStack Query**: Server state management for API data fetching and caching
- **Wouter**: Lightweight routing library for single-page application navigation
- **React Hook Form**: Form handling with validation and user input management
- **date-fns**: Date manipulation and formatting utilities for appointment scheduling

## Development Environment
- **Replit Integration**: Custom Vite plugins for Replit development environment support
- **Runtime Error Handling**: Development-time error overlay for debugging assistance