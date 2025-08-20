# Agent Guidelines for Personal Website

## Build/Test Commands
- `npm run dev` - Start development server
- `npm run build` - Build with type checking (runs `astro check && astro build`)
- `npm run preview` - Preview built site
- No test scripts configured

## Framework & Architecture
- Astro with MDX, Qwik, and SolidJS integrations
- TypeScript with strict mode enabled (`astro/tsconfigs/strict`)
- Tailwind CSS for styling
- Blog content in `src/content/blog/`

## Code Style
- Use TypeScript interfaces for props (e.g., `interface Props { title: string; }`)
- Import organization: external libs first, then internal modules
- Components in framework-specific folders: `components/qwik/`, `components/solid/`
- Astro components use kebab-case for HTML attributes
- JSX components use camelCase for props and class names

## Naming Conventions
- Components: PascalCase (e.g., `BaseHead.astro`, `AnimatingDots.tsx`)
- Files: kebab-case for pages, PascalCase for components
- Constants: SCREAMING_SNAKE_CASE (e.g., `SITE_TITLE`)
- Use descriptive names for props and variables

## Error Handling
- No specific patterns observed - follow framework conventions
- Use optional props with default values where appropriate