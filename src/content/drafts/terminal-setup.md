---
title: 'My Terminal Setup in 2026'
description: 'A deep dive into my terminal configuration — from shell to prompt to keybindings. How I built a productive development environment piece by piece.'
pubDate: 'Feb 10 2026'
tags: ['terminal', 'tools']
---

## The Shell

I've been using **zsh** with a minimal configuration for years now. No framework, no oh-my-zsh — just a hand-rolled `.zshrc` that I understand line by line.

```bash
# ~/.zshrc — the essentials
export EDITOR="nvim"
export PATH="$HOME/.local/bin:$PATH"

# History
HISTSIZE=50000
SAVEHIST=50000
setopt SHARE_HISTORY
setopt HIST_IGNORE_DUPS
```

## The Prompt

I use **Starship** for my prompt. It's fast, cross-shell, and infinitely configurable. The key is keeping it minimal — I only show information that's immediately useful.

## The Multiplexer

**tmux** is non-negotiable. I keep a few persistent sessions:

- `dev` — active project work
- `notes` — quick scratchpad and docs
- `sys` — monitoring and system tasks

## Key Tools

| Tool | Purpose |
|------|---------|
| `fzf` | Fuzzy finding everything |
| `ripgrep` | Fast code search |
| `bat` | Better `cat` with syntax highlighting |
| `eza` | Modern `ls` replacement |
| `delta` | Beautiful git diffs |

The philosophy is simple: understand your tools deeply, configure them intentionally, and resist the urge to chase every new shiny thing.
