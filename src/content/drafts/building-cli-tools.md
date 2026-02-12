---
title: 'Building CLI Tools with Node.js'
description: 'How to build polished command-line tools with Node.js — argument parsing, interactive prompts, colored output, and publishing to npm.'
pubDate: 'Feb 5 2026'
tags: ['node', 'cli']
---

## Why Build CLI Tools?

CLI tools are the fastest way to automate repetitive tasks. And with Node.js, you can build them with the same language you use for everything else.

## The Stack

Here's what I reach for when building a CLI:

- **commander** — argument parsing and subcommands
- **inquirer** — interactive prompts
- **chalk** — colored terminal output
- **ora** — elegant spinners

## Project Structure

```
my-cli/
├── src/
│   ├── index.ts        # Entry point
│   ├── commands/       # Subcommand handlers
│   └── utils/          # Shared utilities
├── package.json
└── tsconfig.json
```

## Key Pattern: Command Registration

```typescript
import { Command } from 'commander';

const program = new Command();

program
  .name('my-tool')
  .description('A useful CLI tool')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize a new project')
  .option('-t, --template <name>', 'template to use', 'default')
  .action(async (options) => {
    // handle init logic
  });

program.parse();
```

## Publishing

Set `"bin"` in your `package.json`, compile TypeScript, and publish to npm. Users get your tool with a single `npx` command.

The beauty of CLI tools is their composability — small, focused tools that do one thing well and chain together through pipes and scripts.
