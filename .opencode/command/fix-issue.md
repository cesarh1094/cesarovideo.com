# Fix Issue Command

Analyze and fix a specific issue in the Astro/SolidJS portfolio website.

## Usage
```bash
/fix-issue "Issue description or GitHub issue URL"
```

## What This Command Does

1. **Issue Analysis**
   - Parse issue description or fetch from GitHub
   - Identify affected components and systems
   - Determine issue category (bug, performance, accessibility, etc.)

2. **Investigation Process**
   - Search codebase for related patterns
   - Analyze recent commits that might have introduced the issue
   - Check for similar issues in git history

3. **Solution Implementation**
   - Create targeted fix following project conventions
   - Test solution across relevant components
   - Ensure no regression in related functionality

4. **Validation**
   - Run `npm run build` to ensure build passes
   - Verify fix doesn't break existing functionality
   - Test responsive behavior if UI-related

## Common Issue Categories

### Build Issues
- TypeScript errors (`astro check`)
- Import/export problems
- Configuration issues

### Component Issues
- SolidJS reactivity problems
- Astro hydration issues
- Styling and layout bugs

### Performance Issues
- Slow page loads
- Large bundle sizes
- Poor Core Web Vitals

### Content Issues
- MDX parsing errors
- Blog post formatting
- SEO metadata problems

## Example Fixes

### TypeScript Error
```bash
/fix-issue "Property 'title' does not exist on type 'Props'"
```

### Mobile Layout Issue
```bash
/fix-issue "Header navigation overlaps content on mobile devices"
```

### Performance Problem
```bash
/fix-issue "Large Cumulative Layout Shift on homepage"
```

## Post-Fix Checklist
- [ ] Build passes (`npm run build`)
- [ ] No TypeScript errors
- [ ] Mobile responsiveness verified
- [ ] Accessibility maintained
- [ ] Performance impact assessed