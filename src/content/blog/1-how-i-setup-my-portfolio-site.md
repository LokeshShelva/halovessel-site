---
title: How I Set Up My Portfolio
description: This blog outlines the loop and hoops I had to go through to get this portfolio site up.
pubDate: 'Feb 15 2026'
---

I have been procrastinating building my portfolio and blog site for way too long. I kept telling myself I would start “soon.” Eventually, soon had to become now. 

I wanted to have a simple and clean design, with *dev* vibes, and I think I achieved that. I made this site my portfolio and blog so I can share my projects
and thoughts with the world. I hope to write about my learnings and projects here, and also share some of the things I have learned.

## How I built it

This was the easiest part of the whole process. I took heavy inspiration from [Merox's](https://merox.dev/) portfolio site. 
I used [Astro](https://astro.build/). This is my first time using it and I took pretty heavy help from Claude 4.6. Claude helped me with most of 
the styles and bootstrapping the project. I am pretty happy with how it turned out. 

## Making it go live

This is where the challenge was. I had some experience working with Azure and setting up private networks in it. But I had no experience
with setting up a public-facing website. I knew the basics and jumped into it blind, hoping I could Google my way through it. 

First, I bought a domain from [GoDaddy](https://www.godaddy.com/). It came with default nameservers and a few DNS records already set up. Next came the part of setting up the hosting. I briefly considered getting a VPS and hosting it myself. This would help me learn the most, but... I would have had to do a lot of work and I could easily mess it up. Besides that, I just needed a simple static hosting solution. There was not going to be any database or backend. It's a static site after all. So I went with [GitHub Pages](https://pages.github.com/). Simple, free, easy to set up and automate. I simply followed the instructions on GitHub Pages and set up a simple [GitHub Action](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow) to deploy the site on every push to master. Now came the real beast — setting up the DNS, verifying the domain, and getting the SSL certificate.

GitHub Pages had pretty comprehensive documentation on how I could set up the [custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages). I had to add a few A records and CNAME records to my DNS settings. The verification of the domain was pretty straightforward too. I had to add a TXT record provided by GitHub to my DNS settings, and then verify it from GitHub. All was going smoothly when I hit the first roadblock — getting the SSL certificate. I had imagined that I would get a free SSL certificate along with the domain from GoDaddy, which was not the case. I had to pay extra
for getting the certificate. Well, I was not ready to pay for it, so I had to find a free alternative. In comes [Cloudflare](https://www.cloudflare.com/). Every dev 
who has worked with web and hosting has heard of Cloudflare. I like Cloudflare for their CDN and generous free tier. After 10 minutes of Googling and reading the 
Cloudflare documentation, I was able to [move my domain](https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/) to Cloudflare. 
They made it super easy to move the domain and change the nameservers. Once it was done, I was able to get a free SSL certificate — it was automatically issued. 

After waiting for the DNS to propagate and the nameservers to update, I was able to see my site live. Uff, it was a long process but it was worth it. 
I am happy with how the site turned out and I am excited to share my projects and thoughts here.

## The Future

Well, I plan to write regularly here about my projects and learnings. I am trying to post at least once a week about something I learned or built. That is the goal at least.

Most of what I write will probably revolve around AI tools and projects, experiments, random thoughts and things I break and rebuild. I also want this space to document my 
journey of building in public — the wins, the mistakes, and everything in between.

I am adding all the references to the relevant documentation and resources I used in the process of building this site. I hope it helps someone who is trying to do the same thing.

- [Astro](https://astro.build/)
- [Merox's Portfolio](https://merox.dev/)
- [GoDaddy](https://www.godaddy.com/)
- [GitHub Pages](https://pages.github.com/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Cloudflare](https://www.cloudflare.com/)
- [Cloudflare Domain Transfer](https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/)
- [GitHub Pages Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)
- [Github Verifying Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)