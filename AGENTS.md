# Agent Guidelines for Personal Website

## Project Overview
Personal portfolio website for Cesar Hernandez built with modern web technologies. Recently migrated from Qwik to SolidJS for better developer experience and performance.

## Architecture & Tech Stack
- **Frontend Framework**: Astro 5.13.2 with SolidJS integration
- **Languages**: TypeScript (strict mode), JavaScript (ES modules) 
- **Styling**: Tailwind CSS 4.1.12 with custom design system
- **Content Management**: MDX blog with Zod schema validation
- **Deployment**: Netlify with server-side rendering
- **Performance**: GSAP animations, optimized CDN caching
- **Package Management**: npm with Bun lockfile support

## Build/Test Commands
- `npm run dev` - Start development server
- `npm run build` - Build with type checking (runs `astro check && astro build`)
- `npm run preview` - Preview built site
- `npm run astro` - Run Astro CLI commands
- **⚠️ No test scripts configured** - Testing infrastructure needed

## Code Style & Conventions
- **TypeScript**: Use interfaces for props (`interface Props { title: string; }`)
- **Import Organization**: External libs first, then internal modules
- **Component Structure**: Framework-specific folders (`components/solid/`)
- **Naming Conventions**:
  - Components: PascalCase (`BaseHead.astro`, `AnimatingDots.tsx`)
  - Files: kebab-case for pages, PascalCase for components
  - Constants: SCREAMING_SNAKE_CASE (`SITE_TITLE`)
- **Astro Components**: Use kebab-case for HTML attributes
- **JSX Components**: Use camelCase for props and class names
- **Code Formatting**: Prettier with Astro plugin configured

## Content & SEO
- Blog posts in `src/content/blog/` with frontmatter schema
- Site metadata in `src/consts.ts`
- SEO optimizations with proper meta tags and sitemap
- RSS feed generation for blog content

## Performance & Optimization
- **Caching Strategy**: 
  - Public cache: 5 minutes fresh
  - CDN: 1 week stale-while-revalidate
  - Durable cache to minimize serverless calls
- **Client-side Hydration**: Selective with `client:load` directive
- **Animations**: GSAP for smooth interactions
- **Bundle Optimization**: Astro's built-in optimization

## Deployment & Hosting
- **Platform**: Netlify with serverless functions
- **Build Process**: `astro check && astro build`
- **Site URL**: https://cesarovideo.com
- **CDN**: Netlify Edge with custom cache headers

## Git Workflow
- **Commit Format**: Conventional commits (`fix:`, `feat:`, `docs:`)
- **Branch Strategy**: Main branch for production
- **Recent Activity**: UI refinements, mobile optimization, SolidJS migration

## Domain Knowledge
- **Target Audience**: Potential employers, clients, tech community
- **Content Focus**: Professional portfolio, technical blog posts
- **Design Philosophy**: Clean, performant, mobile-first
- **Recent Migrations**: Qwik → SolidJS for better DX

## Common Tasks
- Blog post creation and management
- Component development (primarily SolidJS)
- Performance optimization
- SEO improvements
- Mobile responsiveness fixes
- Dark/light theme support

## Error Handling
- Follow framework conventions for error boundaries
- Use optional props with sensible defaults
- Graceful degradation for JavaScript-disabled users
- Proper TypeScript error handling patterns

## Testing Strategy (TODO)
- **Current State**: No testing infrastructure
- **Recommended**: Vitest for unit tests, Playwright for E2E
- **Priority Areas**: Component rendering, content parsing, SEO validation