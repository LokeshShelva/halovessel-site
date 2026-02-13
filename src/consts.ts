// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Halovessel';
export const SITE_DESCRIPTION = 'Developer portfolio — projects, blog, and insights from my journey in tech.';
export const GITHUB_URL = 'https://github.com/LokeshShelva';

export interface SocialLink {
    label: string;
    url: string;
    icon: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
    {
        label: 'GitHub',
        url: 'https://github.com/LokeshShelva',
        icon: 'simple-icons:github',
    },
    {
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/lokesh-shelva-516155190',
        icon: 'simple-icons:linkedin',
    },
    {
        label: 'Mail',
        url: 'mailto:5shelva19@gmail.com',
        icon: 'lucide:mail',
    },
];
