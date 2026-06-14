interface EventDate {
  startDate: string;
  endDate: string;
  location: string;
}

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

export function formatEventDate(event: EventDate): string {
  const start = parseISO(event.startDate);
  const end = parseISO(event.endDate);
  return `${formatDateRange(start, end)} in ${event.location}`;
}

export function formatEventMonthYear(event: EventDate): string {
  const date = parseISO(event.startDate);
  return shortMonthFormatter.format(date) + " " + yearFormatter.format(date);
}
