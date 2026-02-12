// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://halovessel.github.io',
	base: '/halovessel-site',
	integrations: [mdx(), sitemap(), icon()],
});
