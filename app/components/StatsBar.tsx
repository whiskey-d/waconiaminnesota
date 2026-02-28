interface Stat {
  icon: string;
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6">
      <div className={`grid grid-cols-2 md:grid-cols-${stats.length} gap-6`}>
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <span className="text-3xl block mb-2">{stat.icon}</span>
            <p className="text-2xl font-extrabold text-lake tracking-tight">{stat.value}</p>
            <p className="text-sm text-muted mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
