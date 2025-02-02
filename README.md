![core-ui](https://github.com/user-attachments/assets/e6a2973c-e0ce-413b-9162-e726a3dd9639)
---
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[core-ui](https://github.com/praesenceai/core-ui) is the core component library used at praesence for its website and desktop applications. This maintainable, consistend design system provides
reusable React components built with Tailwind CSS, ensuring visual coherence and development efficiency across all praesence products.

## Table of Contents
- [Philosophy](#philosophy)
- [Installation](#installation)
- [Usage](#usage)
- [Component Development](#component-development)
- [Contributing](#contributing)
- [Local Development](#local-development)
- [Versioning](#versioning)
- [License](#license)
- [FAQ](#faq)

## Philosophy

Our component library follows these core principles:

- **Consistency**: Unified design language across all products
- **Reusability**: DRY components with clear interfaces
- **Maintainability**: Easy to use and refactor
- **Accessibility**: WCAG 2.1 compliant by default
- **Performance**: Optimised bundle size and rendering

## Installation

Add praesence UI to your project:

## Usage
1. Import components in your React application:
```jsx
import { Button, Input } from '@praesenceai/ui';
```

2. Wrap your application with ThemeProvider:
```jsx
import { ThemeProvider } from '@praesenceai/ui';

function App() {
  return (
    <ThemeProvider>
      <YourApplication />
    </ThemeProvider>
  )
}
```

3. Use components with native HTML attributes:
```jsx
<Button
  variant="primary"
  className="px-8 py-3"
  onClick={handleClick}
>
  Submit Form
</Button>
```

## Component Development
### Component Structure 
```plaintext
src/
  components/
    Button/
      Button.jsx      # Component logic
      Button.css      # Component-specific styles
      index.js        # Component-specific styles
      tests/          # Component tests
  theme/
    colors.js         # Design tokens
    spacing.js
```

### Creating New Components
1. Create a folder in `src/components`
2. Follow existing compoonent patterns
3. Add PropTypes validation
4. Include base Tailwind classes
5. Write test files using Jest
6. Export from library root

### Example Component Props
```jsx
Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
```

## Contributing
We welcome contributions following these guidelines:
1. Branch naming: `feature/[component-name]` or `fix/[issue-name]`
2. Update component documentation in `docs/components`
3. Write tests for new functionality
4. Maintain existing prop types
5. Follow Tailwind class ordering convention
6. Request review from core UI team
  
### Before submitting PR
```bash
npm run test
npm run lint
npm run build
```

## Local Development
1. Clone repository
```bash
git clone http://github.com/praesenceai/ui-core.git
cd ui-core
```

2. Install dependencies:
`npm install`

3. Start development watcher:
`npm run dev`

4. Test in local application:
```bash
npm link
# In your application:
npm link @praesenceai/ui
```

## Versioning
We follow Semantic Versioning:
* Patch: `1.0.x` - Bug fixes and minor updates
* Minor: `1.x.0` - New components (non-breaking)
* Major: `x.0.0` - Design system overhauls

## License
Distributed under the MIT License. See LICENSE for more information.

## FAQ
### How to override styles?
Add Tailwind classes via `className` prop or extend theme in `tailwind.config.js`

### Browser support?
Latest 2 versions of modern browsers (Chrome, Firefox, Safari, Edge)

### Handling component state?
Components are stateless by default - manage state in parent components

### Adding custom variants?
Extend theme configuration in your application's Tailwind config

### Reporting issues?
Create GitHub issue with component name and reproduction steps
---
praesence Team · [Documentation]() · [GithHub Repository](https://github.com/praesenceai/ui-core)