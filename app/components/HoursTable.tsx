"use client";

interface HoursRow {
  day: string;
  hours: string;
}

interface HoursTableProps {
  hours: HoursRow[];
  title?: string;
}

const DAY_MAP: Record<string, number> = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

export default function HoursTable({ hours, title = "Hours" }: HoursTableProps) {
  const today = new Date().getDay();

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 bg-lake text-white">
        <h3 className="font-bold text-lg flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {title}
        </h3>
      </div>
      <div className="divide-y divide-gray-50">
        {hours.map((row) => {
          const isToday = DAY_MAP[row.day] === today;
          return (
            <div
              key={row.day}
              className={`flex items-center justify-between px-6 py-3 ${
                isToday ? "bg-amber-50 font-semibold" : ""
              }`}
            >
              <span className="text-body text-sm flex items-center gap-2">
                {isToday && (
                  <span className="w-2 h-2 bg-amber rounded-full" />
                )}
                {row.day}
              </span>
              <span className={`text-sm ${row.hours === "Closed" ? "text-red-500" : "text-muted"}`}>
                {row.hours}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
