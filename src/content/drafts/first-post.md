---
title: 'Getting Started with Astro'
description: 'A quick look at why Astro is a great choice for building fast, content-driven websites — and how this site was built with it.'
pubDate: 'Feb 12 2026'
tags: ['astro', 'web', 'tutorial']
---

## Why Astro?

Astro is a modern static site generator that ships **zero JavaScript by default**. It's designed for content-rich websites like blogs, portfolios, and documentation sites.

Unlike traditional SPAs, Astro renders everything to static HTML at build time. This means your site loads incredibly fast — no JavaScript bundle to parse, no hydration waterfall.

## Key Features

Here's what makes Astro stand out:

- **Island Architecture** — Interactive components hydrate independently, so you only ship JS where you need it.
- **Content Collections** — Type-safe Markdown/MDX content with schema validation via Zod.
- **Framework Agnostic** — Use React, Vue, Svelte, or just plain HTML. Mix and match in the same project.
- **Built-in Optimizations** — Image optimization, CSS scoping, and automatic sitemap generation out of the box.

## Building This Site

This site uses a minimal Astro setup:

```bash
# Project structure
src/
├── components/    # Reusable UI components
├── content/blog/  # Markdown blog posts
├── data/          # Static data (projects)
├── layouts/       # Page layouts
├── pages/         # File-based routing
└── styles/        # Global CSS
```

The entire site is statically generated and deployed to **GitHub Pages** via a simple GitHub Actions workflow. No server, no database, no runtime — just fast, static HTML.

## What's Next?

This is just the beginning. Future posts will cover development experiments, project deep-dives, and things I'm learning along the way.

Stay tuned. ✨
