export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
    command?: string;
}

export const experiences: Experience[] = [
    {
        role: 'Software Engineer',
        company: 'ABB',
        period: '2023 - Present',
        description: 'Building scalable and industrial GenAI solutions',
        command: 'cd ~/career/abb && git log --oneline'
    },
    {
        role: 'Software Developer Intern',
        company: 'Neso Academy',
        period: '2022 - 2023',
        description: 'Frontend web development with Angular and React + Firebase',
        command: 'cd ~/career/neso-academy && cat README.md'
    },
];
