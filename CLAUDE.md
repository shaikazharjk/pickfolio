# Pickfolio — Project Context

This file gives Claude Code full context on this project. Read it before making changes.

## What this is

An Amazon Associates affiliate website. Domain: **pickfolio.co** (purchased, hosted on Netlify with custom domain attached). Static HTML/CSS site — no framework, no build step, no CMS. Deployed via GitHub → Netlify continuous deployment (push to `main` = auto-deploy).

## Brand

- **Name:** Pickfolio — chosen deliberately generic (not tied to "gaming" or "gear") so the brand can expand into other product categories later, not just tech/desk setups.
- **Visual identity:** dark, technical "spec sheet" aesthetic. Fonts: Chivo (display/headings), Chivo Mono (labels/eyebrows/data), Work Sans (body). Palette: background `#12181a`, surface `#161f21`, accent gold `#d9a441`, accent teal `#4fae94`, muted text `#8b9a96`. Logo is a folio/document-stack icon (not the earlier house/nest icon from a discarded brand name — do not reintroduce that).
- Full design tokens live in `styles.css` at the project root — reuse these variables for any new page rather than inventing new colors.

## Current niche and scope

Gaming / office / streaming desk setups. Content targets **parents-are-not-the-audience-here** — this is general consumer/gamer content, no compliance concerns around targeting minors (that risk was specifically evaluated and ruled out early in planning; a *kids' toys* niche was considered and rejected for this reason).

### The 7 priority product categories (already researched, already have guide pages)
1. Monitor arms
2. Gaming/office chairs
3. Mechanical keyboards
4. USB microphones
5. Webcams
6. LED/RGB strip lights
7. USB-C hubs / docking stations

Each has a live guide page in `/guides/` with budget/mid/premium picks. **Verify current pricing/availability of any named product model before publishing further changes** — the picks were researched at a point in time and may drift.

### Desks — 8th category, no guide yet
The chair guide was originally titled "Chairs & Desks" everywhere (nav, footer, homepage) despite covering only chairs (Matchspel, ThunderX3 Flex Pro, Embody) — no desk products. This was corrected: the guide/nav/footer label is now just "Chairs", and **Desks** was split out as its own category, shown on the homepage category grid as a "coming soon" card (no guide page or content exists for it yet). Write `/guides/desks.html` and wire it up the same way as the other 7 when desk product research is ready.

## Site structure

```
/index.html              homepage — hero, category grid, guide list, "gear I use" callout
/gear-i-use.html         PLACEHOLDER — needs real content once the user's actual desk setup is finalized
/styles.css              shared stylesheet, all design tokens
/guides/*.html           7 buying-guide articles, one per priority category
```

All internal links use **absolute root paths** (`/guides/x.html`, `/styles.css`) — this only renders correctly when served by an actual host (Netlify), not by opening files directly from disk.

## Amazon Associates status — IMPORTANT

- **Not yet approved.** Every product mention in every guide has a `<div class="affiliate-slot">Amazon link placeholder — add after Associates approval</div>` marker instead of a real link. Do not replace these until the user confirms they've been approved.
- Once approved: use Amazon SiteStripe to generate real affiliate links and replace each placeholder.
- **180-day rule:** once approved, the user has 180 days to generate 3 qualifying sales or the account closes. Track this once approval happens.
- The required FTC/Amazon affiliate disclosure is already in the site footer (`styles.css` `.disclosure` + the footer markup in `build.py`) — keep it on every page if the footer is ever changed or removed.
- Commission on this product category (computers/electronics) is a relatively low ~2.5-3%, so the content strategy leans on volume/consistency, not virality.

## Content still outstanding

- `/gear-i-use.html` is a placeholder — needs the user's real, current desk setup gear list.
- Site nav links to category pages (Chairs, Monitors, etc.) that don't exist yet as their own landing pages — currently they route straight to the single matching guide. Build these out once there's more than one guide per category.
- Desks has no guide page yet — see "Desks — 8th category" above.
- TikTok and YouTube handles are still bracketed placeholders (`[YOUR HANDLE]`) in the footer — replace once accounts are created.

## How the site was built

Guide pages are generated from Markdown source via `build.py` (uses Python's `markdown` library) — the original article drafts are plain `.md` files. If you have the original markdown sources, prefer editing those and re-running `build.py` over hand-editing the generated HTML, to keep content consistent and avoid drift between source and output. If `build.py` or the source `.md` files aren't present in this copy of the project, editing the generated HTML directly in `/guides/` is fine — just keep the same structure (nav/footer include, `.affiliate-slot` markers, heading hierarchy).

## Broader plan context

This site is one piece of a larger 12-week content rollout (site + YouTube + TikTok, ~15 hrs/week) that was planned separately. That full week-by-week plan and product shortlist live in a Claude artifact, not in this repo — ask the user if you need that context, they can share the link.

## Working conventions

- Keep the dark/gold/teal visual system consistent across any new page.
- New affiliate product mentions always get an `.affiliate-slot` placeholder unless the user confirms Associates approval is live.
- Don't invent pricing, specs, or availability for products — flag it as needing verification instead.
