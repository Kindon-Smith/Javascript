# Javascript 🚀

Hey there! 👋 This is my playground for exploring modern JavaScript development. I'm building this project to maintain skills with the latest frameworks and tools that developers are actually using in 2025.

## What I'm Working With

I chose this tech stack because it represents what's hot in the JavaScript world right now:

- ⚡️ **Vite** - Because who has time for slow builds? This thing is lightning fast!
- ⚛️ **React 18** - Still the most popular framework, and I want to master its latest features
- 🔷 **TypeScript** - Making JavaScript less scary with actual type safety
- 🎨 **Modern Dev Tools** - ESLint, hot reloading, and all the good stuff for a smooth dev experience

## The Plan

I'm planning to build a **Personal Dashboard** with widgets for weather, todos, news, and more. It'll be a great way to practice:
- Component composition and state management
- API integration and data fetching  
- Responsive design and user experience
- Local storage and data persistence

## Quick Start

Want to run this locally? Here's how:

```bash
npm install          # Get all the dependencies
npm run dev         # Fire up the dev server
```

Then open [http://localhost:5174](http://localhost:5174) and you should see the magic! ✨

## Available Commands

- `npm run dev` - Start the development server (with hot reload!)
- `npm run build` - Create a production build
- `npm run preview` - Preview the production build locally
- `npm run lint` - Check for code quality issues

## What I'm Learning

As I build this dashboard, I'm focusing on:

- **Modern React Patterns** - Hooks, context, and component composition
- **TypeScript Best Practices** - Making the most of static typing
- **API Integration** - Working with real-world data sources
- **State Management** - When to use local vs global state
- **Responsive Design** - Making it work great on all devices
- **Performance** - Keeping things fast and smooth

## Current Progress

🚧 **Just getting started!** Right now this is a fresh Vite + React + TypeScript setup. 

**Coming soon:**
- [ ] Grid layout system for widgets
- [ ] Weather widget with real API data
- [ ] Todo list with local storage
- [ ] News feed integration
- [ ] Theme switching (light/dark mode)
- [ ] Mobile-responsive design

## Why This Stack?

I picked **Vite** because it's incredibly fast and has become the go-to build tool for modern React projects. The development experience is just so much better than older bundlers.

**TypeScript** might seem like overkill for a personal project, but I'm treating this as practice for real-world development where type safety is crucial.

## Connect With Me

Feel free to check out the code, open issues, or just say hi! I'm always open to feedback and suggestions as I learn.

---

*Last updated: September 2025*
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
