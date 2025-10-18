# Create Component Command

Generate new Astro or SolidJS components following project conventions and best practices.

## Usage
```bash
/create-component "ComponentName [astro|solid] [description]"
```

## Examples
```bash
/create-component "BlogCard astro A card component for displaying blog post previews"
/create-component "SearchBox solid Interactive search with real-time filtering"
/create-component "Newsletter astro Email subscription form for blog"
```

## What This Command Does

1. **Component Analysis**
   - Determine if component should be Astro or SolidJS based on interactivity needs
   - Analyze existing similar components for patterns
   - Identify required props and TypeScript interfaces

2. **File Generation**
   - Create component file in appropriate directory (`components/` or `components/solid/`)
   - Follow naming conventions (PascalCase for components)
   - Generate proper file extension (`.astro` or `.tsx`)

3. **Code Scaffolding**
   - Generate TypeScript interfaces for props
   - Create accessible, semantic HTML structure
   - Add Tailwind CSS classes following design system
   - Include proper imports and exports

4. **Integration Setup**
   - Update relevant parent components if needed
   - Add to index exports if creating a library component
   - Generate usage examples and documentation

## Component Decision Matrix

### Use Astro Components For:
- Static content and layout
- SEO-critical content
- Server-rendered content
- Non-interactive UI elements

### Use SolidJS Components For:
- Interactive user interfaces
- State management needs
- Event handling requirements
- Client-side reactivity

## Generated Component Structure

### Astro Component Template
```astro
---
interface Props {
  title: string;
  optional?: boolean;
}

const { title, optional = false } = Astro.props;
---

<div class="component-wrapper">
  <h2 class="text-lg font-semibold">{title}</h2>
  {optional && <p class="text-gray-600">Optional content</p>}
</div>
```

### SolidJS Component Template
```tsx
import { Component } from 'solid-js';

interface ComponentProps {
  title: string;
  onClick?: () => void;
}

const ComponentName: Component<ComponentProps> = (props) => {
  return (
    <div class="component-wrapper">
      <h2 class="text-lg font-semibold">{props.title}</h2>
      <button onClick={props.onClick} class="btn-primary">
        Click me
      </button>
    </div>
  );
};

export default ComponentName;
```

## Validation Steps
- [ ] TypeScript compilation passes
- [ ] Component follows naming conventions
- [ ] Proper accessibility attributes included
- [ ] Responsive design considerations
- [ ] Design system consistency