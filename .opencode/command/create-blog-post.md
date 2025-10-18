# Create Blog Post Command

Generate new blog posts with proper frontmatter, SEO optimization, and content structure.

## Usage
```bash
/create-blog-post "Post Title"
```

## What This Command Does

1. **File Creation**
   - Generate MDX file in `src/content/blog/`
   - Use kebab-case filename from title
   - Add proper file extension (`.md` or `.mdx`)

2. **Frontmatter Generation**
   - Create Zod-compliant frontmatter schema
   - Generate SEO-optimized title and description
   - Set publication date to current date
   - Add optional hero image placeholder

3. **Content Scaffolding**
   - Add content outline with markdown examples
   - Include code block examples if technical post
   - Add proper heading structure for accessibility
   - Include call-to-action sections

4. **SEO Optimization**
   - Generate meta description within character limits
   - Suggest relevant tags and categories
   - Optimize title for search engines
   - Add structured data considerations

## Generated Blog Post Structure

```markdown
---
title: "Your Blog Post Title"
description: "A compelling meta description under 160 characters that summarizes the post content."
pubDate: 2024-01-15
updatedDate: 2024-01-15
heroImage: "/images/blog/post-hero.jpg"
tags: ["web-development", "astro", "performance"]
---

# Your Blog Post Title

A compelling introduction that hooks the reader and provides context for what they'll learn.

## Key Sections

### Problem Statement
Describe the problem or challenge this post addresses.

### Solution Overview  
High-level approach to solving the problem.

### Implementation Details
Step-by-step breakdown with code examples:

\`\`\`typescript
// Example code with syntax highlighting
const example = "This shows proper code formatting";
\`\`\`

### Results and Benefits
Quantifiable outcomes and advantages.

## Conclusion

Summarize key takeaways and provide next steps or additional resources.

---

*Have questions or feedback? [Reach out on Twitter](https://twitter.com/cesarovideo) or [LinkedIn](https://linkedin.com/in/cesarovideo).*
```

## Content Guidelines

### Writing Style
- Clear, conversational tone
- Technical accuracy with accessibility
- Practical examples and use cases
- Actionable takeaways for readers

### Technical Posts
- Include working code examples
- Add proper syntax highlighting
- Explain complex concepts step-by-step
- Provide links to documentation and resources

### SEO Best Practices
- Title: 50-60 characters optimal
- Description: 140-160 characters
- Use relevant keywords naturally
- Include internal links to other posts

## Post Categories

### Technical Tutorials
- Step-by-step implementation guides
- Code examples and best practices
- Performance optimization techniques
- Framework and tool comparisons

### Industry Insights
- Trends and predictions
- Career advice and experiences
- Project case studies
- Tool reviews and recommendations

### Personal Experiences
- Learning journey stories
- Challenge and solution narratives
- Professional development insights
- Community involvement experiences

## Validation Checklist
- [ ] Frontmatter follows Zod schema
- [ ] SEO metadata optimized
- [ ] Proper markdown structure
- [ ] Code examples tested
- [ ] Internal/external links verified
- [ ] Spell check and grammar review