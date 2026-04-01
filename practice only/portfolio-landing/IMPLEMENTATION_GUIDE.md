# Portfolio Landing Page - Complete Build Guide

## 🚀 Project Status: **READY TO RUN**

Your portfolio landing page is fully built and running at **http://localhost:5173**

## 📦 What Was Built

A stunning, fully-functional portfolio landing page with **pure React + TypeScript**, featuring:

### ✨ Key Features Implemented

1. **Loading Screen** (`LoadingScreen.tsx`)
   - Animated counter (0-100) over 2.7 seconds
   - Rotating words: "Design", "Create", "Inspire"
   - Progress bar with accent gradient
   - Smooth entrance animations for all elements

2. **Navbar** (`Navbar.tsx`)
   - Fixed, floating navigation pill
   - Logo with rotating ring effect
   - Navigation links: Home, Work, Resume
   - Interactive "Say hi" button with gradient border
   - Scroll-triggered elevation effect

3. **Hero Section** (`Hero.tsx`)
   - Full-viewport video background (HLS streaming via hls.js)
   - Main heading: "Michael Smith" with name-reveal animation
   - Dynamic role showcase (cycling: Creative, Fullstack, Founder, Scholar)
   - Two CTA buttons: "See Works" and "Reach out..."
   - Scroll indicator with subtle animation

4. **Selected Works** (`SelectedWorks.tsx`)
   - Bento grid layout (alternating 7/5 column spans)
   - 4 featured projects with hover effects
   - Scale animation on hover
   - Hover overlay with "View" button
   - Gradient border on CTA button

5. **Journal** (`Journal.tsx`)
   - 4 blog entry cards as horizontal pills
   - Read time and publication date
   - Emoji thumbnails
   - Smooth hover animation

6. **Explorations** (`Explorations.tsx`)
   - Parallax gallery with scroll trigger
   - 6 items split into 2 columns
   - Animated reveal on scroll
   - Ready for lightbox implementation

7. **Stats** (`Stats.tsx`)
   - 3-column statistics showcase
   - Numbers: 20+ Years, 95+ Projects, 200% Satisfied Clients
   - Scale animation on view

8. **Contact Footer** (`Contact.tsx`)
   - HLS video background (flipped, heavy overlay)
   - GSAP marquee animation: "BUILDING THE FUTURE •"
   - Email CTA button
   - Social links: Twitter, LinkedIn, Dribbble, GitHub
   - Green pulsing "Available" indicator

### 🎨 Design System Implemented

**CSS Custom Properties (HSL)**
```css
--bg: 0 0% 4%;           /* Near-black background */
--surface: 0 0% 8%;      /* Surface color */
--text: 0 0% 96%;        /* Off-white text */
--muted: 0 0% 53%;       /* Muted gray */
--stroke: 0 0% 12%;      /* Border color */
--accent: 0 0% 96%;      /* Accent */
```

**Accent Gradient**
```
linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)
```

**Fonts**
- Body: Inter (300–700 weights)
- Display: Instrument Serif (italic emphasis)

### 🎬 Animations Included

- **Fade-in/Up**: Landing elements animate from opacity/y offsets
- **Scroll-Triggered**: Sections animate when scrolled into view
- **Hover Effects**: Cards lift, buttons scale, gradients shift
- **Marquee**: Endless scrolling text banner
- **Progress Bar**: Animated loading progress
- **Rotating Elements**: Logo ring, cycling words
- **Parallax**: Scroll-driven layer movements (GSAP ScrollTrigger ready)

### 🛠️ Technologies Stack

- ✅ React 18.2.0 - UI Framework
- ✅ TypeScript - Type safety
- ✅ Vite 5 - Lightning-fast build tool
- ✅ Tailwind CSS 3 - Utility-first styling
- ✅ GSAP 3 - Advanced animations & scroll triggers
- ✅ Framer Motion 10 - React animation library
- ✅ HLS.js 1.4 - Video streaming
- ✅ React Router 6 - Navigation (ready to use)

---

## 📂 Project Structure

```
portfolio-landing/
├── src/
│   ├── components/
│   │   ├── LoadingScreen.tsx    # Initial loader (2.7s counter)
│   │   ├── Navbar.tsx           # Fixed navigation
│   │   ├── Hero.tsx             # Hero section with video bg
│   │   ├── SelectedWorks.tsx    # Bento grid projects
│   │   ├── Journal.tsx          # Blog entries
│   │   ├── Explorations.tsx     # Parallax gallery
│   │   ├── Stats.tsx            # Key metrics
│   │   ├── Contact.tsx          # Footer with marquee
│   │   └── VideoBg.tsx          # HLS video handler
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # React DOM entry
│   ├── index.css                # Global styles + keyframes
│   └── vite-env.d.ts            # TypeScript definitions
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── package.json
```

---

## 🚀 Quick Commands

### Development
```bash
cd portfolio-landing
npm run dev
```
Opens at http://localhost:5173

### Build for Production
```bash
npm run build
```
Outputs to `dist/` folder

### Preview Production Build
```bash
npm run preview
```

---

## 🎯 Key Implementation Details

### Loading Screen
- Uses requestAnimationFrame for smooth counter animation
- 2700ms total duration
- AnimatePresence for modes transitions
- 400ms delay before content appears

### HLS Video Streaming
- Uses hls.js for adaptive bitrate streaming
- Fallback to native HLS support (Safari)
- Autoplay, muted, loop, playsInline for optimal UX
- Dark overlays: light (20%) and heavy (60%)

### GSAP Animations
- Scroll-triggered parallax (ready for Explorations section)
- Marquee animation in footer (infinite loop)
- Timeline-based entrance effects in Hero

### Framer Motion
- Role cycling with AnimatePresence (smooth mode transitions)
- Scroll-triggered animations with whileInView
- Smooth page transitions
- Button hover states

### Tailwind Extensions
Custom Tailwind colors map to CSS variables:
```ts
colors: {
  bg: "hsl(var(--bg))",
  surface: "hsl(var(--surface))",
  "text-primary": "hsl(var(--text))",
  muted: "hsl(var(--muted))",
  stroke: "hsl(var(--stroke))",
}
```

---

## 🎨 Customization Guide

### Change Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --bg: 0 0% 4%;        /* HSL without hsl() */
  /* ... */
}
```

### Modify Content
- Hero heading: [Hero.tsx](src/components/Hero.tsx) line ~75
- Projects: [SelectedWorks.tsx](src/components/SelectedWorks.tsx) line ~10
- Journal entries: [Journal.tsx](src/components/Journal.tsx) line ~8
- Contact email: [Contact.tsx](src/components/Contact.tsx) line ~52

### Add More Animations
- Use GSAP.registerPlugin() and ScrollTrigger for scroll effects
- Use Framer Motion's whileInView for scroll-triggered animations
- Custom keyframes in `tailwind.config.ts`

---

## ⚡ Performance Notes

- HLS video streams from Mux (professional CDN)
- Vite handles code splitting automatically
- GSAP ScrollTrigger is performance-optimized
- Framer Motion uses GPU-accelerated transforms
- CSS variables reduce repaints

---

## 🔄 Next Steps

1. **Replace Content**: Update text, emails, social links
2. **Add LightBox**: For project images in Explorations section
3. **Connect Pages**: Use React Router for multi-page navigation
4. **Add CMS**: Connect Sanity.io or similar for Journal entries
5. **Analytics**: Add Vercel Analytics or Google Analytics
6. **Deploy**: Deploy to Vercel, Netlify, or your preferred platform

---

## 📱 Responsive Design

All sections are fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Components adapt:
- Navigation hides categories on mobile
- Grid adjusts column counts
- Text scales appropriately

---

## 🌐 Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📄 License

This project is open source and ready to customize for your portfolio!

---

## 💡 Tips

1. **HLS Streaming**: Mux URL is public for demo. Replace with your own video CDN.
2. **Google Fonts**: Already imported in index.html
3. **Tailwind CSS**: Use `@apply` in CSS for custom components
4. **GSAP**: Requires gsap package (already installed)
5. **Performance**: All animations use transforms (fastest CSS properties)

Enjoy your stunning portfolio! 🎉
