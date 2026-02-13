#!/usr/bin/env node

import { readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

async function fetchRepoData(owner, repo) {
	const url = `https://api.github.com/repos/${owner}/${repo}`;
	const headers = {
		'Accept': 'application/vnd.github.v3+json',
		'User-Agent': 'halovessel-site'
	};

	// Add GitHub token if available (for higher rate limits)
	if (process.env.GITHUB_TOKEN) {
		headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
	}

	try {
		const response = await fetch(url, { headers });
		
		if (!response.ok) {
			console.warn(`Failed to fetch ${owner}/${repo}: ${response.status}`);
			return null;
		}

		const data = await response.json();
		return {
			name: data.name,
			description: data.description || 'No description available',
			url: data.html_url,
			stars: data.stargazers_count,
			forks: data.forks_count,
			language: data.language,
			topics: data.topics || []
		};
	} catch (error) {
		console.warn(`Error fetching ${owner}/${repo}:`, error.message);
		return null;
	}
}

function parseGitHubUrl(url) {
	const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
	if (!match) return null;
	return { owner: match[1], repo: match[2] };
}

async function main() {
	console.log('🔍 Fetching GitHub repository data...\n');

	// Read repos config
	const configPath = join(ROOT, 'repos.config.json');
	const configContent = await readFile(configPath, 'utf-8');
	const config = JSON.parse(configContent);

	// Fetch all repos
	const projects = [];
	for (const repoConfig of config.repos) {
		const parsed = parseGitHubUrl(repoConfig.url);
		if (!parsed) {
			console.warn(`Invalid GitHub URL: ${repoConfig.url}`);
			continue;
		}

		console.log(`Fetching ${parsed.owner}/${parsed.repo}...`);
		const repoData = await fetchRepoData(parsed.owner, parsed.repo);
		
		if (repoData) {
			projects.push({
				name: repoData.name,
				description: repoData.description,
				url: repoData.url,
				tech: repoConfig.tech || repoData.language || 'Unknown',
				stars: repoData.stars,
				forks: repoData.forks,
				tags: repoData.topics
			});
			console.log(`✓ ${repoData.name} - ⭐ ${repoData.stars} 🔀 ${repoData.forks} 🏷️  ${repoData.topics.length} tags\n`);
		}
	}

	// Generate TypeScript content
	const tsContent = `export interface Project {
    name: string;
    description: string;
    url: string;
    tech: string;
    stars?: number;
    forks?: number;
    tags?: string[];
}

export const projects: Project[] = ${JSON.stringify(projects, null, 4)};
`;

	// Write to projects.ts
	const projectsPath = join(ROOT, 'src', 'data', 'projects.ts');
	await writeFile(projectsPath, tsContent, 'utf-8');

	console.log(`✅ Successfully updated projects.ts with ${projects.length} project(s)`);
}

main().catch(error => {
	console.error('❌ Error:', error);
	process.exit(1);
});
