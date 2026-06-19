import type { CollectionEntry } from "astro:content";

type EventData = CollectionEntry<"events">["data"];

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  timeZone: "UTC",
});
const shortMonthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  timeZone: "UTC",
});
const dayFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  timeZone: "UTC",
});
const yearFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  timeZone: "UTC",
});

function parseISO(date: string): Date {
  return new Date(`${date}T00:00:00Z`);
}

function formatDateRange(start: Date, end: Date): string {
  const sameYear = yearFormatter.format(start) === yearFormatter.format(end);
  const sameMonth = sameYear && monthFormatter.format(start) === monthFormatter.format(end);
  const sameDay = start.getTime() === end.getTime();

  if (sameDay) {
    return `${monthFormatter.format(start)} ${dayFormatter.format(start)}, ${yearFormatter.format(start)}`;
  }
  if (sameMonth) {
    return `${monthFormatter.format(start)} ${dayFormatter.format(start)}–${dayFormatter.format(end)}, ${yearFormatter.format(start)}`;
  }
  if (sameYear) {
    return `${shortMonthFormatter.format(start)} ${dayFormatter.format(start)} – ${shortMonthFormatter.format(end)} ${dayFormatter.format(end)}, ${yearFormatter.format(start)}`;
  }
  return `${shortMonthFormatter.format(start)} ${dayFormatter.format(start)}, ${yearFormatter.format(start)} – ${shortMonthFormatter.format(end)} ${dayFormatter.format(end)}, ${yearFormatter.format(end)}`;
}

export function formatEventDate(event: EventData): string {
  const start = parseISO(event.startDate);
  const end = parseISO(event.endDate);
  const dateRange = formatDateRange(start, end);
  const location = "event" in event ? event.event.location : undefined;
  return location ? `${dateRange} in ${location}` : dateRange;
}

export function formatEventMonthYear(event: EventData): string {
  const date = parseISO(event.startDate);
  return shortMonthFormatter.format(date) + " " + yearFormatter.format(date);
}
