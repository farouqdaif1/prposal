# 💍 Romantic Proposal Website

A beautiful, romantic marriage proposal website built with React, Vite, Tailwind CSS, Framer Motion, and canvas-confetti.

## Features

### Step 1 - Proposal Section
- ✨ Elegant and minimal design with soft romantic colors
- 💕 Floating hearts animation in the background
- 🎉 Confetti animation when "YES" is clicked
- 🎭 Interactive NO button that moves away on hover/touch
- 📱 Fully responsive for mobile devices
- 🎨 Smooth animations using Framer Motion

### Step 2 - Our Story Section
- 🖼️ Hero section with romantic background image
- 📅 Beautiful vertical timeline with milestones
- 📸 Responsive photo gallery with hover animations
- 🎵 Background music that starts after YES is clicked
- ✨ Smooth scroll transition between sections

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Adding Background Music

Place your favorite song in the `public` folder with one of these names:
- `song.mp3` (preferred)
- `romantic-music.mp3`
- `romantic-music.ogg`

The music will automatically start playing when "YES" is clicked.

### Adding Your Photos

1. **Hero Background Image**: Place your couple photo in `public/couple-photo.jpg`

2. **Photo Gallery**: Add your memory photos to `public/memories/` folder:
   - `memory-1.jpg`
   - `memory-2.jpg`
   - `memory-3.jpg`
   - `memory-4.jpg`
   - `memory-5.jpg`
   - `memory-6.jpg`

Then update the `galleryImages` array in `src/components/OurStory.jsx` with your actual image paths.

### Customizing Timeline

Edit the `timelineItems` array in `src/components/OurStory.jsx` to add your own milestones and descriptions.

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Canvas Confetti

## Project Structure

```
src/
├── components/
│   ├── Proposal.jsx    # Proposal section with YES/NO buttons
│   └── OurStory.jsx    # Our Story section with timeline and gallery
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## Made with ❤️ for Ahd
