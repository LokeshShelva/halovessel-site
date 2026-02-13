export interface Project {
    name: string;
    description: string;
    url: string;
    tech: string;
    stars?: number;
    forks?: number;
    tags?: string[];
}

export const projects: Project[] = [
    {
        "name": "halovessel-site",
        "description": "My personal porfolio and blog site made with Astro and ❤️",
        "url": "https://github.com/LokeshShelva/halovessel-site",
        "tech": "Astro",
        "stars": 1,
        "forks": 0,
        "tags": [
            "blog",
            "portfolio"
        ]
    },
    {
        "name": "qwik-ask",
        "description": "QwikAsk is a tiny, lightning-fast popup for your desktop for random one off chats",
        "url": "https://github.com/LokeshShelva/qwik-ask",
        "tech": "Tauri",
        "stars": 3,
        "forks": 0,
        "tags": []
    }
];
