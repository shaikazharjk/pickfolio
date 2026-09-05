# Pickfolio — Project Context

This file gives Claude Code full context on this project. Read it before making changes.

## What this is

An Amazon Associates affiliate website. Domain: **pickfolio.co** (purchased, hosted on Netlify with custom domain attached). Static HTML/CSS site — no framework, no build step, no CMS. Deployed via GitHub → Netlify continuous deployment (push to `main` = auto-deploy).

## Brand

- **Name:** Pickfolio — chosen deliberately generic (not tied to "gaming" or "gear") so the brand can expand into other product categories later, not just tech/desk setups.
- **Visual identity:** dark purple/black glass aesthetic (rebranded from an earlier gold/teal "spec sheet" look). Fonts: Chivo (display/headings), Chivo Mono (labels/eyebrows/data), Work Sans (body). Palette: background `#0d0a17` with a soft purple/indigo radial glow, glass surfaces `rgba(255,255,255,.045)` with `backdrop-filter: blur()` and a `rgba(255,255,255,.09)` hairline border, accent lavender `#c9a6f7`, accent pink `#e6a5c9`, muted text `#a99cc4`. Colors are intentionally toned/desaturated (not saturated neon purple) so body text stays readable on the dark ground. Logo is a folio/document-stack icon (not the earlier house/nest icon from a discarded brand name — do not reintroduce that).
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
/index.html              homepage — hero, category grid, guide list
/styles.css              shared stylesheet, all design tokens
/guides/*.html           7 buying-guide articles, one per priority category
```

All internal links use **absolute root paths** (`/guides/x.html`, `/styles.css`) — this only renders correctly when served by an actual host (Netlify), not by opening files directly from disk.

## Amazon Associates status — IMPORTANT

- **Approved.** Store ID `pickfolio-20`. Approved 2026-09-05; tax info (W-8BEN, foreign-person status) validated at 0% withholding; payout method is a Wise USD virtual account (routes to a Malaysian bank).
- **180-day rule: clock is running from 2026-09-05.** Need 3 qualifying sales by ~2027-03-04 or the account closes.
- All `<div class="affiliate-slot">` placeholders across all 7 guides have been replaced with real links in the format `https://www.amazon.com/dp/{ASIN}?tag=pickfolio-20`, rendered via the `.buy-btn` CSS class in `styles.css`. Links use `target="_blank" rel="noopener sponsored nofollow"`.
- **Product swaps made during linking** (original picks weren't actually sold on Amazon or were fabricated/OOS — verify before assuming any pick is final):
  - Chairs guide: all 3 original picks (IKEA Matchspel, ThunderX3 Flex Pro, Logitech G x Herman Miller Embody) aren't sold on Amazon. Replaced with BestOffice Ergonomic Gaming Chair (budget), Razer Enki X (mid), Herman Miller Aeron Size B Graphite (premium — same brand, not the gaming-styled Embody variant).
  - Keyboards guide: Havit KB487L and Keychron C2 Pro are real but permanently out of stock. Replaced with Redragon K556 (budget) and RK Royal Kludge RK100 (mid). Royal Kludge R65 pick unchanged.
  - Webcams guide: "Elgato Facecam Neo" doesn't exist as a real product (likely confused with Key Light Neo). Replaced with Logitech Brio 101 (budget). Emeet Pixy and Yololiv Yolocam S3 picks unchanged.
  - Monitor arms, microphones, lighting, and USB-C hubs guides: all original picks confirmed real and in stock, no swaps needed.
- New product photos for swapped picks were sourced from each product's official Amazon listing image and saved to `/images/<category>/`.
- The required FTC/Amazon affiliate disclosure is already in the site footer (`styles.css` `.disclosure` + the footer markup in `build.py`) — keep it on every page if the footer is ever changed or removed.
- Commission on this product category (computers/electronics) is a relatively low ~2.5-3%, so the content strategy leans on volume/consistency, not virality.

## Content still outstanding

- Site nav links to category pages (Chairs, Monitors, etc.) that don't exist yet as their own landing pages — currently they route straight to the single matching guide. Build these out once there's more than one guide per category.
- Desks has no guide page yet — see "Desks — 8th category" above.

## How the site was built

Guide pages are generated from Markdown source via `build.py` (uses Python's `markdown` library) — the original article drafts are plain `.md` files. If you have the original markdown sources, prefer editing those and re-running `build.py` over hand-editing the generated HTML, to keep content consistent and avoid drift between source and output. If `build.py` or the source `.md` files aren't present in this copy of the project, editing the generated HTML directly in `/guides/` is fine — just keep the same structure (nav/footer include, `.affiliate-slot` markers, heading hierarchy).

## Broader plan context

This site is one piece of a larger 12-week content rollout (site + YouTube + TikTok, ~15 hrs/week) that was planned separately. That full week-by-week plan and product shortlist live in a Claude artifact, not in this repo — ask the user if you need that context, they can share the link.

## Working conventions

- Keep the dark/gold/teal visual system consistent across any new page.
- New affiliate product mentions always get an `.affiliate-slot` placeholder unless the user confirms Associates approval is live.
- Don't invent pricing, specs, or availability for products — flag it as needing verification instead.
- No personal "gear I use" / "my setup" content on this site — the user explicitly does not want to show their own setup. The former `/gear-i-use.html` page and every "See my setup" CTA, nav link, and homepage callout have been removed. Don't reintroduce this concept.
