import Link from "next/link";

interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
  address?: string;
  hours?: string;
  href?: string;
  tag?: string;
  tagColor?: string;
}

export default function InfoCard({
  icon,
  title,
  description,
  address,
  hours,
  href,
  tag,
  tagColor = "bg-lake-50 text-lake",
}: InfoCardProps) {
  const content = (
    <div className="bg-white rounded-xl border border-gray-100 p-6 card-hover h-full flex flex-col">
      <div className="flex items-start gap-4">
        <span className="text-3xl flex-shrink-0">{icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="font-bold text-lg text-body">{title}</h3>
            {tag && (
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${tagColor}`}>
                {tag}
              </span>
            )}
          </div>
          <p className="text-muted text-sm leading-relaxed mb-3">{description}</p>
          {address && (
            <p className="text-sm text-muted flex items-center gap-1.5">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {address}
            </p>
          )}
          {hours && (
            <p className="text-sm text-muted flex items-center gap-1.5 mt-1">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {hours}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
