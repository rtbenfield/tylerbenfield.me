import { defineMiddleware } from "astro:middleware";

const CANONICAL_HOST = "tylerbenfield.dev";
const REDIRECT_HOSTS = ["tylerbenfield.me", "www.tylerbenfield.me"];

export const onRequest = defineMiddleware((context, next) => {
  const url = context.url;
  if (import.meta.env.PROD && REDIRECT_HOSTS.includes(url.host)) {
    return context.redirect(`https://${CANONICAL_HOST}${url.pathname}${url.search}`, 301);
  }
  return next();
});
