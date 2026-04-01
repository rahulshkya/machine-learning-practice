# Portfolio Landing Page

A modern, animated portfolio landing page built with React, Vite, Tailwind CSS, TypeScript, GSAP, Framer Motion, and HLS.js.

## Features

- ✨ **Loading Screen** - Animated counter with rotating words
- 🎥 **HLS Video Background** - Streaming video backgrounds with hls.js
- 🎨 **Hero Section** - Stunning hero with animated text and roles cycling
- 🖼️ **Bento Grid** - Featured projects in an elegant grid layout
- 📰 **Journal Section** - Recent articles and thoughts
- 🎭 **Parallax Gallery** - Scroll-driven parallax exploration section
- 📊 **Stats Section** - Key metrics showcase
- 📧 **Contact Footer** - Marquee animation and social links

## Tech Stack

- **React 18** - UI Framework
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **GSAP** - Advanced animations
- **Framer Motion** - React animations
- **HLS.js** - HLS video streaming
- **React Router DOM** - Navigation

## Installation

```bash
cd portfolio-landing
npm install
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── LoadingScreen.tsx    # Initial loading screen
│   ├── Navbar.tsx           # Navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── SelectedWorks.tsx    # Projects showcase
│   ├── Journal.tsx          # Blog entries
│   ├── Explorations.tsx     # Parallax gallery
│   ├── Stats.tsx            # Statistics
│   ├── Contact.tsx          # Footer & contact
│   └── VideoBg.tsx          # HLS video component
├── App.tsx                  # Main app
├── main.tsx                 # Entry point
└── index.css                # Global styles
```

## Design System

### Colors (HSL)
- **Background**: `0 0% 4%`
- **Surface**: `0 0% 8%`
- **Text**: `0 0% 96%`
- **Muted**: `0 0% 53%`
- **Stroke**: `0 0% 12%`
- **Accent Gradient**: `#89AACC → #4E85BF`

### Fonts
- **Body**: Inter (300–700)
- **Display**: Instrument Serif (italic)

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## License

MIT
