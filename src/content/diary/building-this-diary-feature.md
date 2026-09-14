---
title: Building this diary feature
date: 2026-09-10
excerpt: How the diary section works — Markdown files committed to the repo, no backend, no login screen.
tags: [meta, site]
---

I wanted a place on this site to write short notes about technical work — the kind of thing that doesn't fit neatly into a portfolio project writeup. The constraint was simple: I'm the only one who should ever be able to publish an entry, and I didn't want to build (or maintain) a login screen and a database for it.

## How it works

Each entry is a Markdown file in `src/content/diary/`, with a small frontmatter block for the title, date, and excerpt. At build time, Vite's `import.meta.glob` pulls every file in as raw text, a tiny parser splits out the frontmatter, and the result is validated against a schema before it's rendered.

Because the entries live in the git repository, "admin access" falls out for free: publishing a new diary entry means writing a Markdown file and pushing it to `main`. There's no runtime auth to maintain, and no new attack surface for site visitors — the content is static by the time anyone reads it.

The listing page, the entry page, and the "latest entry" card on the home page all read from the same small registry module, so adding a new post is the only thing I ever have to do by hand.
