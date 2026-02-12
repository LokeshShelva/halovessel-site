export interface Project {
    name: string;
    description: string;
    url: string;
    tech: string;
    stars?: number;
    forks?: number;
}

export const projects: Project[] = [
    // {
    //     name: 'halovessel-site',
    //     description:
    //         'Personal portfolio and blog built with Astro. Static site deployed to GitHub Pages with dark theme, blog, and project showcase.',
    //     url: 'https://github.com/halovessel/halovessel-site',
    //     tech: 'Astro',
    //     stars: 0,
    //     forks: 0,
    // },
    // {
    //     name: 'project-alpha',
    //     description:
    //         'A sample project placeholder. Replace this with your real projects — add the name, description, tech stack, and GitHub URL.',
    //     url: 'https://github.com/halovessel',
    //     tech: 'TypeScript',
    //     stars: 12,
    //     forks: 3,
    // },
    // {
    //     name: 'dotfiles',
    //     description:
    //         'Personal dotfiles and development environment configuration. Terminal, editor, and shell setup for a productive workflow.',
    //     url: 'https://github.com/halovessel',
    //     tech: 'Shell',
    //     stars: 5,
    //     forks: 1,
    // },
];
