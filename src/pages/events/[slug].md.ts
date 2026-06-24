import { getCollection, getEntry } from "astro:content";
import type { APIRoute } from "astro";

export async function getStaticPaths() {
  const events = await getCollection("events");
  return events.map((event) => ({ params: { slug: event.id } }));
}

export const prerender = true;

export const GET: APIRoute = async ({ params }) => {
  const event = await getEntry("events", params.slug!);

  if (!event) {
    return new Response("Not found", { status: 404 });
  }

  const venue =
    "event" in event.data ? event.data.event.name : event.data.podcast.name;
  const venueHref =
    "event" in event.data ? event.data.event.href : event.data.podcast.href;

  const linkLines: string[] = [];
  if (event.data.youtubeId) {
    linkLines.push(
      `- [YouTube](https://www.youtube.com/watch?v=${event.data.youtubeId})`,
    );
  }
  if ("podcast" in event.data) {
    if (event.data.podcast.spotify) {
      linkLines.push(`- [Spotify](${event.data.podcast.spotify})`);
    }
    if (event.data.podcast.pocketCasts) {
      linkLines.push(`- [Pocket Casts](${event.data.podcast.pocketCasts})`);
    }
  }
  if (event.data.link) {
    linkLines.push(`- [${event.data.link.text}](${event.data.link.href})`);
  }

  const lines: string[] = [
    `# ${event.data.title}`,
    "",
    `**Date**: ${event.data.startDate}`,
    `**Venue**: [${venue}](${venueHref})`,
  ];

  if (linkLines.length > 0) {
    lines.push("**Links**:");
    lines.push(...linkLines);
  }

  lines.push("", "---", "", event.body ?? "");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
