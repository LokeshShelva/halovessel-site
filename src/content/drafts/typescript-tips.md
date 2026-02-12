---
title: 'TypeScript Tips I Wish I Knew Earlier'
description: 'Practical TypeScript patterns that changed how I write code — from discriminated unions to const assertions and template literal types.'
pubDate: 'Feb 8 2026'
tags: ['typescript', 'web']
---

## Discriminated Unions

This pattern alone transforms how you handle state:

```typescript
type Result<T> =
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error }
  | { status: 'loading' };

function handle(result: Result<User>) {
  switch (result.status) {
    case 'success':
      // TypeScript knows result.data exists here
      console.log(result.data.name);
      break;
    case 'error':
      // TypeScript knows result.error exists here
      console.error(result.error.message);
      break;
  }
}
```

## Const Assertions

Stop using enums. Use `as const` instead:

```typescript
const DIRECTIONS = ['north', 'south', 'east', 'west'] as const;
type Direction = typeof DIRECTIONS[number]; // 'north' | 'south' | 'east' | 'west'
```

## The `satisfies` Operator

Validate a type without widening it:

```typescript
const config = {
  port: 3000,
  host: 'localhost',
} satisfies Record<string, string | number>;
// config.port is still `number`, not `string | number`
```

These patterns make TypeScript feel less like a type annotation layer and more like a design tool for your application architecture.
