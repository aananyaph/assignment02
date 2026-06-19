import React from 'react';

interface Outcome {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const outcomes: Outcome[] = [
  {
    number: '01',
    title: 'AI Fundamentals',
    description: 'Understand how artificial intelligence works, from machine learning basics to real-world applications that shape our daily lives.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Robot Design & Building',
    description: 'Learn to design, assemble, and program robots using simulation tools — turning creative ideas into moving, thinking machines.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Python Programming',
    description: 'Write your first Python scripts! Learn variables, loops, functions, and logic — the language powering modern AI and data science.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Sensor Programming',
    description: 'Program sensors to detect light, distance, and motion. Build robots that can navigate obstacles and respond to their environment.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Team Collaboration',
    description: 'Work in teams to solve challenges, build projects together, and develop communication and leadership skills.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Project Showcase',
    description: 'Present your final AI-powered robot project to peers, parents, and mentors — and earn a certificate of completion!',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

const LearningOutcomes: React.FC = () => {
  return (
    <section id="outcomes" className="relative py-32 md:py-44 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent" />
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-accent-500/8 rounded-full blur-[130px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-500/10 text-accent-400 text-sm font-semibold tracking-wider uppercase mb-4">
            What You'll Learn
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white mb-4">
            Learning <span className="gradient-text">Outcomes</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            By the end of this workshop, your child will have built real projects and gained skills that matter.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, i) => (
            <div
              key={outcome.number}
              id={`outcome-${outcome.number}`}
              className="group relative rounded-2xl p-7 glass hover:bg-surface-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-900/20 gradient-border flex flex-col items-center text-center"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Number Watermark */}
              <span className="absolute top-4 right-6 text-6xl font-black font-heading text-white/[0.03] select-none group-hover:text-white/[0.06] transition-colors duration-300">
                {outcome.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center text-primary-300 mb-5 group-hover:scale-110 group-hover:text-accent-400 transition-all duration-300">
                {outcome.icon}
              </div>

              {/* Text */}
              <h3 className="text-lg font-bold font-heading text-white mb-2 group-hover:text-primary-200 transition-colors">
                {outcome.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomes;
