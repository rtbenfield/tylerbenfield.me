# Agent Rules — tylerbenfield.me

## Scope

- Maintain Tyler Benfield's personal website.

## Stack

- Use Astro with TypeScript for pages and components.
- Use Tailwind CSS (via `@astrojs/tailwind`) for all styling.
- Use pnpm exclusively for dependency management and running scripts.
- Keep the Cloudflare Workers adapter.

## Color palette

- Use the Tokyo Night Dark palette from https://wixdaq.github.io/Tokyo-Night-Website/palette.html.
- Define colors as CSS custom properties in `src/styles/global.css`.
- Reference colors only through these custom properties or Tailwind theme mappings. Never hardcode hex values in components, utility classes, or styles.
- Ship a single dark theme. Do not add a light mode toggle or `prefers-color-scheme: light` styles.

## Typography

- Use Inter as the primary typeface.

## Components

- Prefer plain `.astro` components.
- Add framework islands (`client:*`) only when a component requires client-side interactivity.
- Keep components small and single-purpose.

## Pages

- `src/pages/index.astro` is the bio page.
- `src/pages/events.astro` lists upcoming and past speaking events.

## Icons

- Use FontAwesome for icons. Keep the existing `FontAwesomeIcon.astro` wrapper.

## Static assets

- Place static assets in `public/`.
- Use only relative paths inside the project. Never embed absolute filesystem paths in code or config.

## Dependencies

- Minimize new dependencies.
- Do not add React, Vue, Svelte, or other UI frameworks unless required for a specific interactive feature and approved.

## Build and verification

- Run `pnpm build` before finishing every task. It must pass `astro check` with zero errors.
- Run `pnpm lint` before committing.
- Keep the site responsive down to 375 px.
