import React from 'react';

interface DetailCard {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent: string;
}

const details: DetailCard[] = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    label: 'Age Group',
    value: '8 – 14 Years',
    accent: 'from-violet-500/20 to-purple-600/20',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Duration',
    value: '4 Weeks',
    accent: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Mode',
    value: 'Online (Live)',
    accent: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Fee',
    value: '₹2,999',
    accent: 'from-amber-500/20 to-orange-500/20',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Start Date',
    value: '15 July 2026',
    accent: 'from-rose-500/20 to-pink-500/20',
  },
];

const WorkshopDetails: React.FC = () => {
  return (
    <section id="details" className="relative py-32 md:py-44 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-700/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-300 text-sm font-semibold tracking-wider uppercase mb-4">
            Workshop Info
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white mb-4">
            Workshop <span className="gradient-text">Details</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to know about the AI & Robotics Summer Workshop at a glance.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {details.map((d, i) => (
            <div
              key={d.label}
              id={`detail-card-${d.label.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative rounded-2xl p-6 glass hover:bg-surface-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-900/20 gradient-border flex flex-col items-center text-center"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${d.accent} flex items-center justify-center text-primary-300 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {d.icon}
              </div>

              {/* Text */}
              <p className="text-sm text-gray-400 mb-1 font-medium">{d.label}</p>
              <p className="text-xl font-bold font-heading text-white">{d.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopDetails;
