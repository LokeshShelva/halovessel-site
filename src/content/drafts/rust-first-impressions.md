---
title: 'First Impressions of Rust'
description: 'Coming from TypeScript and Go, here are my honest first impressions of Rust — the ownership model, the tooling, and why the learning curve is worth it.'
pubDate: 'Jan 28 2026'
tags: ['rust', 'learning']
---

## Why Rust?

After years of TypeScript and a growing interest in Go, I wanted to understand what all the Rust hype was about. The promise: systems-level performance with memory safety, no garbage collector, and a type system that catches bugs at compile time.

## The Ownership Model

This is the thing everyone talks about, and for good reason. Coming from GC'd languages, the idea that every value has exactly one owner took some getting used to:

```rust
let s1 = String::from("hello");
let s2 = s1; // s1 is now invalid — ownership moved to s2
// println!("{}", s1); // This won't compile!
```

It's strict, but once it clicks, you start to see memory bugs in other languages that you never noticed before.

## The Tooling

**Cargo** is the best package manager and build system I've ever used. Period. `cargo new`, `cargo build`, `cargo test`, `cargo doc` — everything just works.

## Pattern Matching

Coming from TypeScript's discriminated unions, Rust's `match` feels like a natural evolution:

```rust
enum Shape {
    Circle(f64),
    Rectangle(f64, f64),
}

fn area(shape: &Shape) -> f64 {
    match shape {
        Shape::Circle(r) => std::f64::consts::PI * r * r,
        Shape::Rectangle(w, h) => w * h,
    }
}
```

## The Verdict

The learning curve is real, but the compiler is an excellent teacher. Every error message is a lesson in writing better code. I'm hooked.
