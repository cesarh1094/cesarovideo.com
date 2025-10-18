# Run Performance Audit Command

Comprehensive performance analysis of the Astro/SolidJS portfolio website using multiple tools and metrics.

## Usage
```bash
/run-performance-audit [url]
```

If no URL provided, audits the local development server or production site.

## What This Command Does

1. **Environment Setup**
   - Start development server if not running
   - Open browser automation tools
   - Configure performance monitoring

2. **Core Web Vitals Analysis**
   - **Largest Contentful Paint (LCP)**: Loading performance
   - **Cumulative Layout Shift (CLS)**: Visual stability  
   - **Interaction to Next Paint (INP)**: Responsiveness
   - **First Contentful Paint (FCP)**: Initial rendering

3. **Lighthouse Audit**
   - Performance score and metrics
   - Accessibility compliance
   - SEO optimization analysis
   - Best practices validation

4. **Bundle Analysis**
   - JavaScript bundle sizes
   - CSS bundle optimization
   - Asset loading efficiency
   - Code splitting effectiveness

5. **Network Performance**
   - Resource loading times
   - Caching effectiveness
   - CDN performance validation
   - Compression analysis

## Audit Targets

### Key Pages
- Homepage (`/`)
- Blog index (`/blog`)
- Individual blog posts
- About/portfolio pages
- 404 error page

### Device Scenarios
- Desktop (1920x1080)
- Mobile (375x667)
- Tablet (768x1024)
- Slow 3G simulation

## Performance Targets

### Loading Metrics
- **LCP**: < 2.5 seconds
- **FCP**: < 1.8 seconds  
- **Speed Index**: < 3.4 seconds
- **Time to Interactive**: < 5.2 seconds

### Stability Metrics
- **CLS**: < 0.1
- **Layout Shift Score**: Minimal

### Responsiveness
- **INP**: < 200ms
- **Total Blocking Time**: < 200ms

## Generated Reports

### Performance Summary
```markdown
# Performance Audit Report - [Date]

## Overall Scores
- Performance: 95/100
- Accessibility: 100/100  
- Best Practices: 96/100
- SEO: 100/100

## Core Web Vitals
- LCP: 1.2s ✅
- CLS: 0.05 ✅  
- INP: 145ms ✅

## Recommendations
1. Optimize image loading for hero section
2. Implement font preloading
3. Minimize JavaScript execution time
```

### Bundle Analysis
- JavaScript bundle sizes by route
- CSS optimization opportunities
- Third-party script impact
- Code splitting effectiveness

### Network Analysis
- Resource loading waterfall
- Caching header validation
- CDN performance metrics
- Compression effectiveness

## Optimization Recommendations

### Common Issues & Solutions

#### Large Bundle Sizes
- Implement dynamic imports
- Tree shake unused dependencies
- Optimize SolidJS component boundaries
- Use Astro's island architecture effectively

#### Poor LCP Scores
- Optimize hero image loading
- Implement critical CSS inlining
- Preload essential fonts
- Minimize render-blocking resources

#### High CLS Scores  
- Set explicit image dimensions
- Avoid late-loading content shifts
- Optimize font loading strategies
- Minimize dynamic content injection

## Automated Monitoring

### CI/CD Integration
- Performance budgets in build process
- Automated Lighthouse CI runs
- Bundle size monitoring
- Core Web Vitals tracking

### Alert Thresholds
- Performance score drops below 90
- Bundle size increases >10%
- Core Web Vitals exceed targets
- Build time increases significantly

## Usage Examples

```bash
# Audit production site
/run-performance-audit https://cesarovideo.com

# Audit specific page
/run-performance-audit https://cesarovideo.com/blog/first-post

# Audit local development
/run-performance-audit http://localhost:4321
```