export interface Project {
    name: string;
    description: string;
    url: string;
    tech: string;
    stars?: number;
    forks?: number;
}

export const projects: Project[] = [
    {
        "name": "halovessel-site",
        "description": "My personal porfolio and blog site made with Astro and ❤️",
        "url": "https://github.com/LokeshShelva/halovessel-site",
        "tech": "Astro",
        "stars": 0,
        "forks": 0
    }
];
