# OpenCode Adoption Guide
*Streamlined AI-Powered Development for Astro/SolidJS Portfolio*

## 🚀 Quick Start

### Installation
```bash
# Install OpenCode CLI
npm install -g @opencode/cli

# Verify installation  
opencode --version

# Initialize in project (already configured)
cd personal-website && opencode
```

### First Steps
1. **Chat with Base AI**: Start with general development questions
2. **Use @ Mentions**: Access specialized agents with `@code-reviewer` or `@component-architect`
3. **Run Commands**: Execute workflows with `/fix-issue` or `/create-blog-post`
4. **Switch Tabs**: Use multiple conversations for different contexts

## 🤖 Agent Catalog

### Core Development Agents

#### @code-reviewer
**Purpose**: Code quality, security, and best practices analysis
**Best For**: 
- Pre-commit code reviews
- Security audits
- Performance bottleneck identification
- TypeScript optimization

**Example Usage**:
```
@code-reviewer Please review the new ThemeToggle component for performance issues
@code-reviewer Audit the homepage for accessibility compliance
```

#### @explainer  
**Purpose**: Code archaeology and technical documentation
**Best For**:
- Understanding complex component interactions
- Documenting architectural decisions
- Creating onboarding materials
- Analyzing migration patterns (Qwik → SolidJS)

**Example Usage**:
```
@explainer Document the island architecture implementation
@explainer Explain why we migrated from Qwik to SolidJS
```

#### @component-architect
**Purpose**: SolidJS and Astro component design specialist
**Best For**:
- Designing reusable component patterns
- Optimizing hydration strategies
- Creating design system components
- TypeScript interface design

**Example Usage**:
```
@component-architect Design a reusable Card component system
@component-architect Optimize the header component for performance
```

### Specialized Workflow Agents

#### @changelog-documenter
**Purpose**: Release management and version documentation
**Best For**:
- Generating changelogs from commits
- Planning release cycles
- Creating migration guides
- Version management strategy

**Example Usage**:
```
@changelog-documenter Create changelog for version 1.2.0
@changelog-documenter Plan release strategy for major UI update
```

#### @github-release-automator
**Purpose**: GitHub automation and deployment coordination
**Best For**:
- Automating release workflows
- Managing pull requests
- Coordinating Netlify deployments
- GitHub Actions optimization

**Example Usage**:
```
@github-release-automator Create release workflow for v2.0
@github-release-automator Set up automated PR creation
```

#### @performance-optimizer
**Purpose**: Web performance and Core Web Vitals specialist
**Best For**:
- Lighthouse audits and optimization
- Bundle size analysis
- Core Web Vitals improvements
- Caching strategy optimization

**Example Usage**:
```
@performance-optimizer Audit homepage performance
@performance-optimizer Optimize bundle size for mobile users
```

## 📋 Command Workflows

### `/fix-issue "description"`
Analyze and resolve specific problems
```bash
/fix-issue "Mobile navigation menu not working on touch devices"
/fix-issue "TypeScript errors in blog post components"
```

### `/create-component "ComponentName type description"`
Generate new components following project conventions
```bash
/create-component "BlogCard astro Card for displaying blog post previews"
/create-component "SearchBox solid Interactive search with filtering"
```

### `/create-blog-post "Title"`
Create new blog posts with proper structure and SEO
```bash
/create-blog-post "Building High-Performance Web Components with SolidJS"
```

### `/run-performance-audit [url]`
Comprehensive performance analysis
```bash
/run-performance-audit https://cesarovideo.com
/run-performance-audit  # Audits local dev server
```

## 🔄 Development Workflows

### Feature Development
1. **Planning**: `@component-architect` - Design component architecture
2. **Implementation**: Base chat - Build features with AI assistance
3. **Review**: `@code-reviewer` - Quality and security audit
4. **Documentation**: `@explainer` - Generate component docs
5. **Release**: `@github-release-automator` - Automate deployment

### Bug Fixing  
1. **Analysis**: `/fix-issue "bug description"`
2. **Testing**: `@performance-optimizer` - Performance impact assessment
3. **Review**: `@code-reviewer` - Ensure fix quality
4. **Release**: `@changelog-documenter` - Document fix in changelog

### Content Creation
1. **Creation**: `/create-blog-post "Post Title"`
2. **Review**: `@code-reviewer` - SEO and accessibility audit
3. **Performance**: `@performance-optimizer` - Page speed validation

## ⚙️ Configuration Management

### Team Integration
```json
// .opencode/opencode.json (team-level)
{
  "instructions": ["AGENTS.md", "docs/contributing.md"],
  "model": "anthropic:claude-3-5-sonnet-20241022",
  "agents": { /* shared agent configurations */ }
}
```

### Personal Overrides
```json
// ~/.opencode/config.json (personal preferences)  
{
  "model": "openai:gpt-4-turbo",
  "defaultAgent": "component-architect"
}
```

## 🎯 Best Practices

### Effective Agent Usage
- **Be Specific**: "Review the ThemeToggle component" vs "Review my code"
- **Provide Context**: Include relevant file paths and error messages
- **Chain Agents**: Use multiple agents for complex workflows
- **Iterate**: Refine requests based on agent feedback

### Tab Management
- **Context Separation**: One tab per feature/issue
- **Agent Specialization**: Dedicate tabs to specific agents
- **Documentation**: Keep one tab for explanation requests
- **Testing**: Separate tab for performance and testing workflows

### Command Optimization
- **Batch Operations**: Use commands for repetitive tasks
- **Template Consistency**: Commands ensure consistent output
- **Quality Gates**: Commands include validation steps
- **Documentation**: Commands generate proper documentation

## 🔧 Troubleshooting

### Common Issues

#### Agent Not Responding
```bash
# Verify configuration
opencode config validate

# Check agent file exists
ls .opencode/agent/code-reviewer.md
```

#### Command Errors
```bash
# List available commands
opencode commands list

# Validate command syntax
opencode commands validate fix-issue
```

#### Performance Issues
```bash
# Check model configuration
opencode config show

# Switch to lighter model for quick tasks
opencode config set model "anthropic:claude-3-haiku"
```

## 📈 Success Metrics

### Development Velocity
- **Feature Delivery**: 40% faster development cycles
- **Code Quality**: Consistent patterns across all components  
- **Bug Resolution**: Faster issue identification and fixing
- **Documentation**: Automated generation reduces manual effort

### Code Quality Improvements
- **TypeScript Coverage**: 100% strict mode compliance
- **Performance**: Lighthouse scores >95 across all pages
- **Accessibility**: WCAG 2.1 AA compliance
- **Security**: Regular automated security audits

### Team Benefits
- **Knowledge Sharing**: Centralized architectural decisions
- **Onboarding**: New contributors get up to speed faster
- **Consistency**: Unified coding patterns and conventions
- **Automation**: Reduced manual repetitive tasks

---

*Start with simple @agent mentions and /commands, then gradually adopt more complex workflows as you become comfortable with the system.*