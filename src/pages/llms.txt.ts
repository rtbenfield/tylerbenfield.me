import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const events = await getCollection("events");

  const sortedEvents = [...events].sort(
    (a, b) =>
      new Date(b.data.startDate).getTime() -
      new Date(a.data.startDate).getTime(),
  );

  const lines: string[] = [
    "# Tyler Benfield",
    "",
    "> Software engineer focused on making databases and data-driven applications more approachable through education and tooling. Over 10 years of experience in consulting, startups, and large organizations. Staff Software Engineer at Prisma.",
    "",
    "## Pages",
    "",
    "- [Home](https://tylerbenfield.dev/): Bio and overview",
    "- [Talks & Podcasts](https://tylerbenfield.dev/events): Conference talks and podcast appearances",
    "- [Links](https://tylerbenfield.dev/links): External links and social profiles",
    "- [Agent Experience](https://tylerbenfield.dev/agent-experience): AI coding agent skills and philosophy",
    "",
    "## Talks & Podcasts",
    "",
  ];

  for (const event of sortedEvents) {
    const url = `https://tylerbenfield.dev/events/${event.id}`;
    const venue =
      "event" in event.data
        ? event.data.event.name
        : event.data.podcast.name;
    lines.push(
      `- [${event.data.title}](${url}) — ${venue} (${event.data.startDate})`,
    );
  }

  lines.push(
    "",
    "## Raw Content",
    "",
    "Markdown source for each talk or podcast is available at `/events/{slug}.md`.",
  );

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
