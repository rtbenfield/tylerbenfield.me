import { defineMiddleware } from "astro:middleware";

const CANONICAL_HOST = "tylerbenfield.dev";

export const onRequest = defineMiddleware((context, next) => {
  const url = context.url;
  if (import.meta.env.PROD && url.host !== CANONICAL_HOST) {
    return context.redirect(`https://${CANONICAL_HOST}${url.pathname}${url.search}`, 301);
  }
  return next();
});
