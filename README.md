# tylerbenfield.dev

Source for [tylerbenfield.dev](https://tylerbenfield.dev), Tyler Benfield's personal site.

Built with Astro and Tailwind CSS. Talks and podcast appearances live in `src/content/events/` as Markdown.

## Develop

```sh
bun install
bun run dev
```

## Build and lint

```sh
bun run build
bun run lint
bun run fmt
```

## Deploy

Pushes to `main` deploy to Prisma Compute through `.github/workflows/deploy.yml`.
