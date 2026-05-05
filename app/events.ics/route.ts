import { events } from "../lib/events";

export const dynamic = "force-static";

/**
 * Format a YYYY-MM-DD + HH:MM into an ICS DATE-TIME with TZID=America/Chicago.
 * ICS DATE-TIME format: YYYYMMDDTHHMMSS (no separators, no offset when paired
 * with TZID).
 */
function toIcsDateTime(date: string, time?: string): string {
  const [y, m, d] = date.split("-");
  const [hh, mm] = (time ?? "00:00").split(":");
  return `${y}${m}${d}T${hh}${mm}00`;
}

function escape(text: string): string {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function fold(line: string): string {
  // RFC 5545 line folding: lines >75 octets must be folded.
  if (line.length <= 75) return line;
  const parts: string[] = [];
  let i = 0;
  while (i < line.length) {
    parts.push((i === 0 ? "" : " ") + line.slice(i, i + 73));
    i += 73;
  }
  return parts.join("\r\n");
}

export function GET() {
  const now = new Date();
  const dtStamp =
    now.getUTCFullYear().toString() +
    String(now.getUTCMonth() + 1).padStart(2, "0") +
    String(now.getUTCDate()).padStart(2, "0") +
    "T" +
    String(now.getUTCHours()).padStart(2, "0") +
    String(now.getUTCMinutes()).padStart(2, "0") +
    String(now.getUTCSeconds()).padStart(2, "0") +
    "Z";

  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//WaconiaGuide//Events//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:Waconia Events",
    "X-WR-CALDESC:Annual and recurring events in Waconia\\, Minnesota.",
    "X-WR-TIMEZONE:America/Chicago",
  ];

  for (const e of events) {
    const startDt = toIcsDateTime(e.dateSort, e.startTime);
    const endDt = toIcsDateTime(e.endDateSort ?? e.dateSort, e.endTime);
    const url = `https://waconiaminnesota.org/events/${e.slug}`;

    lines.push("BEGIN:VEVENT");
    lines.push(fold(`UID:${e.slug}@waconiaminnesota.org`));
    lines.push(`DTSTAMP:${dtStamp}`);
    lines.push(`DTSTART;TZID=America/Chicago:${startDt}`);
    lines.push(`DTEND;TZID=America/Chicago:${endDt}`);
    lines.push(fold(`SUMMARY:${escape(e.title)}`));
    lines.push(fold(`DESCRIPTION:${escape(e.description)} — ${url}`));
    lines.push(fold(`LOCATION:${escape(e.address)}`));
    lines.push(fold(`URL:${url}`));

    if (e.recurrencePattern === "weekly" && e.recurrenceByDay) {
      const dayCode = {
        Monday: "MO",
        Tuesday: "TU",
        Wednesday: "WE",
        Thursday: "TH",
        Friday: "FR",
        Saturday: "SA",
        Sunday: "SU",
      }[e.recurrenceByDay];
      const until = e.endDateSort
        ? `;UNTIL=${toIcsDateTime(e.endDateSort, "23:59")}`
        : "";
      lines.push(`RRULE:FREQ=WEEKLY;BYDAY=${dayCode}${until}`);
    } else if (e.recurrencePattern === "annual") {
      lines.push("RRULE:FREQ=YEARLY");
    }

    if (e.free) {
      lines.push("CATEGORIES:Free");
    }

    lines.push("STATUS:CONFIRMED");
    lines.push("END:VEVENT");
  }

  lines.push("END:VCALENDAR");

  const body = lines.join("\r\n") + "\r\n";

  return new Response(body, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'inline; filename="waconia-events.ics"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
