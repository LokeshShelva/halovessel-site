# Experience Data

This file contains your work experience/history displayed on the About page in a terminal command history style.

## Structure

Each experience entry has the following fields:

\`\`\`typescript
{
    role: string;           // Your job title
    company: string;        // Company/organization name
    period: string;         // Time period (e.g., "2024 - Present")
    description: string;    // Brief description of your role/achievements
    command?: string;       // Optional: Custom terminal command to display
}
\`\`\`

## Example

\`\`\`typescript
export const experiences: Experience[] = [
    {
        role: 'Senior Software Engineer',
        company: 'Tech Company',
        period: '2024 - Present',
        description: 'Building scalable web applications and leading development teams.',
        command: 'cd ~/career/tech-company && git log --oneline'
    },
    {
        role: 'Software Developer',
        company: 'Startup Inc',
        period: '2022 - 2024',
        description: 'Full-stack development with modern web technologies.',
        command: 'cd ~/career/startup-inc && cat README.md'
    }
];
\`\`\`

## Customizing

1. **Edit the experiences array** in `src/data/experience.ts`
2. **Add your actual work history** - replace the sample data
3. **Customize commands** - make them fun and relevant to each role
   - Examples: `npm run build`, `docker compose up`, `git commit -m "shipped it"`
4. **Order matters** - list most recent first (top to bottom)

## Display

The experience section appears on the About page below your bio and social links, styled like terminal command history with:
- Line numbers (001, 002, etc.)
- Custom terminal commands
- Role, company, and period information
- Hover effects with purple accent

## Tips

- Keep descriptions concise (1-2 sentences)
- Use terminal commands that reflect the role (e.g., `cargo build` for Rust work)
- Period format can be flexible: "2024 - Present", "Jan 2024 - Current", etc.
- If you don't specify a `command`, it will auto-generate one based on company name
