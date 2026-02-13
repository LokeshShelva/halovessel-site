# halovessel-site

Personal portfolio and blog built with Astro. A minimal, terminal-inspired design featuring blog posts, project showcases, and work experience.

🔗 **Live Site**: The live site is [here](https://halovessel.com/)

## Commands

All commands are run from the root of the project:

| Command            | Action                                            |
| :----------------- | :------------------------------------------------ |
| `yarn install`     | Install dependencies                              |
| `yarn dev`         | Start local dev server at `localhost:4321`        |
| `yarn build`       | Build production site to `./dist/`                |
| `yarn preview`     | Preview build locally                             |
| `yarn fetch-repos` | Fetch latest GitHub repo data and update projects |

## GitHub Actions

The site automatically deploys to GitHub Pages on push to `master`. The workflow:
1. Fetches latest repository data from GitHub
2. Builds the Astro site
3. Deploys to GitHub Pages

Documentation-only changes (`.md` files) don't trigger deployments.

## Customization

### Adding Blog Posts
Create `.md` or `.mdx` files in `src/content/blog/`:

```markdown
---
title: 'Your Post Title'
description: 'Brief description'
pubDate: 2026-02-13
tags: ['tag1', 'tag2']
---

Your content here...
```

### Adding Projects
Edit `repos.config.json` to add GitHub repositories:

```json
{
  "repos": [
    {
      "url": "https://github.com/username/repo",
      "tech": "TypeScript"
    }
  ]
}
```

Then run `yarn fetch-repos` to update the data.

### Adding Work Experience
Edit `src/data/experience.ts`:

```typescript
export const experiences: Experience[] = [
  {
    role: 'Your Role',
    company: 'Company Name',
    period: '2024 - Present',
    description: 'What you did...',
    command: 'git commit -m "awesome work"'
  }
];
```

##  Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: CSS with custom properties
- **Icons**: [Astro Icon](https://github.com/natemoo-re/astro-icon) with Lucide
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## Credits

- Highly inspired from [Meorx Portfolio](https://merox.dev/)
- Built with [Astro](https://astro.build/)
- Icons from [Lucide](https://lucide.dev/)

---

**Made with ❤️ by Lokesh Shelva (@halovessel)**
