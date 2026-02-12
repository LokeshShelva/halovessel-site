---
title: 'Designing for Dark Mode'
description: 'Lessons learned from implementing dark-first design systems — color theory, contrast ratios, and why dark mode is more than just inverting colors.'
pubDate: 'Feb 2 2026'
tags: ['design', 'css']
---

## Dark Mode Is Not Inverted Light Mode

The biggest mistake in dark mode design is treating it as a simple color inversion. True dark mode requires rethinking your entire color hierarchy.

## The Layering System

In dark mode, elevation is communicated through lighter backgrounds rather than shadows:

```css
:root {
  --bg-base:    #0a0e14;  /* Lowest layer */
  --bg-surface: #0d1117;  /* Cards, panels */
  --bg-raised:  #111620;  /* Hover states, modals */
}
```

Each layer is subtly lighter, creating depth without the need for box shadows.

## Contrast and Readability

Body text should sit around **4.5:1** contrast ratio against the background. But don't go full white — slightly warm or cool off-whites are easier on the eyes:

- ❌ `#ffffff` — too harsh
- ✅ `#e6e1cf` — warm off-white
- ✅ `#c9d1d9` — cool off-white

## Accent Colors in Dark Mode

Saturated colors that look great on white backgrounds can feel overwhelming on dark ones. Desaturate and lighten your accents:

- Light mode accent: `#7c3aed`
- Dark mode accent: `#c7a0ff`

## The Single-Accent Approach

Using a single accent color creates a cohesive, premium feel. Let your accent do the heavy lifting while everything else stays neutral. This is the approach used on this very site.
