# Obys Agency Design Reference

This file captures the main color, typography, and effect values used in the current version of the project so it can be reused when rebuilding from scratch.

## 1. Color Palette

### Core brand colors
- Deep indigo: `#161094`
- Purple: `#4a2998`
- Magenta rose: `#b70c62`
- Bright pink: `#ec4899`
- Light pink: `#ff9acb`
- Violet: `#7c3aed`
- Cyan accent: `#38bdf8`
- Hover cyan: `#1490c5`

### Text / surface colors
- Primary text: `#f6f3ff`
- White: `#ffffff`
- Gold highlight: `#ffd166`
- Muted text: `rgba(246, 243, 255, 0.8)`
- Subtle text: `rgba(246, 243, 255, 0.55)`

### Overlay / glass colors
- Loader overlay: `rgba(0, 0, 0, 0.18)`
- Soft white glow: `rgba(255, 255, 255, 0.18)`
- Soft white glow 2: `rgba(255, 255, 255, 0.12)`
- White overlay lines: `rgba(255, 255, 255, 0.03)`

## 2. Typography

### Font families
- Body text: `Inter, sans-serif`
- Headings: `Poppins, sans-serif`
- Animation fallback styles: `plain light`, `silk serif`

### Heading style values
- Font weight: `800`
- Letter spacing: `-0.05em`
- Line height: `0.95` or `7vw`
- Font sizes used:
  - Hero headings: `7vw`
  - Page title: `clamp(3rem, 7vw, 6rem)`
  - Highlight title: `clamp(2.5rem, 4.5vw, 4rem)`

## 3. Main Background Gradients

### Main container
```css
background:
  radial-gradient(circle at top left, rgba(255, 255, 255, 0.18), transparent 20%),
  radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.12), transparent 18%),
  linear-gradient(135deg, #161094 0%, #4a2998 40%, #b70c62 100%);
```

### Page 1 background
```css
background:
  repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0 3px, transparent 3px 12px),
  linear-gradient(180deg, #ff9acb 0%, #ec4899 30%, #7c3aed 100%);
```

### Page 2 background
```css
background:
  repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0 3px, transparent 3px 12px),
  linear-gradient(180deg, #7c3aed 0%, #ec4899 30%, #ff9acb 100%);
```

## 4. Text Hover Style

```css
.hero h2:hover,
.hero h3:hover {
  -webkit-text-stroke: 2px #1490c5;
  color: transparent;
  transition: all 0.3s ease;
}
```

## 5. Loader Style

```css
#loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70vh;
  background-color: rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(10px);
}
```

## 6. Cursor Style

```css
#crsr {
  height: 3vw;
  width: 3vw;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
```

## 7. Useful CSS Variables (Copy-Paste Ready)

```css
:root {
  --bg-deep: #161094;
  --bg-purple: #4a2998;
  --bg-rose: #b70c62;
  --accent-pink: #ec4899;
  --accent-light-pink: #ff9acb;
  --accent-violet: #7c3aed;
  --accent-cyan: #38bdf8;
  --accent-cyan-hover: #1490c5;
  --text-light: #f6f3ff;
  --text-white: #ffffff;
  --text-gold: #ffd166;
  --overlay-dark: rgba(0, 0, 0, 0.18);
  --overlay-white-soft: rgba(255, 255, 255, 0.18);
}
```

## 8. Notes

- The website uses a bright neon-like gradient look with strong contrast.
- The hover treatment uses a transparent fill with an outline stroke, which creates the “outlined text” effect.
- The overall aesthetic is modern, glassy, and animated, with blurred overlays and layered gradients.
