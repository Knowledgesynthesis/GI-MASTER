# GI Master

Interactive educational platform for mastering gastrointestinal emergencies and chronic disease management.

## Overview

GI Master is a comprehensive, mobile-first educational application designed for medical students, residents, and healthcare professionals. The app provides interactive learning modules, clinical tools, and assessments covering major GI topics.

## Features

### Learning Modules
- **Upper GI Bleed**: Variceal vs non-variceal differentiation, risk stratification
- **Lower GI Bleed**: Hematochezia differential diagnosis and imaging pathways
- **Pancreatitis**: Acute and chronic, severity scoring, complications
- **H. pylori & PUD**: Testing interpretation and management
- **IBD**: UC vs Crohn differentiation and pattern recognition
- **Hepatic Failure**: LFT pattern analysis and acute liver failure
- **Gallstone Disease**: RUQ pain triage from biliary colic to cholangitis

### Interactive Tools
- Variceal bleeding classifier
- Pancreatitis severity calculator
- LFT pattern analyzer
- H. pylori test interpreter
- IBD differentiator
- Lower GI bleed pathway explorer
- RUQ pain diagnostic tool

### Additional Features
- Assessment center with MCQ questions
- Comprehensive GI glossary
- Dark/light mode support
- Mobile-first responsive design
- Offline capability (PWA)

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Build Tool**: Vite
- **PWA**: vite-plugin-pwa

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── src/
│   ├── components/        # Reusable UI components
│   │   └── ui/           # Base UI components (Button, Card, etc.)
│   ├── pages/            # Page components
│   │   └── modules/      # Module-specific pages
│   ├── stores/           # Zustand state stores
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
└── dist/                 # Production build
```

## Educational Disclaimer

**IMPORTANT**: This application is for educational purposes only. It is not intended for clinical decision-making or patient care.

- All clinical scenarios use synthetic data
- No specific medication dosing is provided
- Content is conceptual and guideline-informed
- Always consult current clinical guidelines for patient care
- No user data or progress tracking

## Development

### Key Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Adding New Modules

1. Create new page component in `src/pages/modules/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Layout.tsx`
4. Add module card in `src/pages/HomePage.tsx`

## License

Educational use only. Not for clinical decision-making.

## Version

1.0.0
