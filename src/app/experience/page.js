import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function Experience() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a12]">
      <main className="mx-auto max-w-[1200px] px-6 py-20">
        <AnimateOnScroll>
          <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-[#e4e4e7]">
            Experience
          </h2>
          <p className="mb-14 text-sm text-slate-500 dark:text-[#a1a1aa]">
            Professional work experience and internships
          </p>
        </AnimateOnScroll>

        {/* Timeline container */}
        <div className="relative pl-8 sm:pl-10">
          {/* Timeline vertical line */}
          <div className="timeline-line" aria-hidden />

          {/* Experience Item 1 */}
          <AnimateOnScroll direction="left">
            <div className="relative pb-12">
              {/* Timeline dot */}
              <div className="timeline-dot absolute -left-8 sm:-left-10 top-1.5" style={{ left: '-24.5px' }} />

              <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-xl dark:border-[#27272a] dark:bg-[#1a1a24] dark:hover:border-[#6366f1]/20 dark:hover:shadow-[0_16px_50px_rgba(99,102,241,0.1)]">
                {/* Header */}
                <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-[#e4e4e7]">
                      Full Stack Developer Intern
                    </h4>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-base font-medium text-[#6366f1] dark:text-[#22d3ee]">
                        Site Guru Pvt. Ltd.
                      </span>
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500 dark:bg-[#27272a] dark:text-[#71717a]">
                        Remote
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="whitespace-nowrap text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      July 2026 – Present
                    </span>
                  </div>
                </div>

                {/* Impact metrics */}
                <div className="mb-5 flex flex-wrap gap-3">
                  {['Sole Engineer', 'Multi-Org SaaS', 'ERP Platform', 'Production'].map((metric) => (
                    <span
                      key={metric}
                      className="rounded-lg bg-gradient-to-r from-[#6366f1]/10 to-[#22d3ee]/10 px-3 py-1.5 text-xs font-semibold text-[#6366f1] dark:from-[#6366f1]/10 dark:to-[#22d3ee]/10 dark:text-[#22d3ee]"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {['Vue.js', 'Node.js', 'Express.js', 'MySQL'].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-[#27272a] dark:bg-[#27272a]/50 dark:text-[#a1a1aa]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <ul className="space-y-3 text-sm text-slate-600 dark:text-[#a1a1aa]">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#22d3ee]" />
                    <p>
                      Independently architected a multi-organization SaaS ERP
                      platform for the poultry industry — defined project scope,
                      designed system architecture, and implemented layered
                      authorization (role/permission-based access + org-level
                      module gating) as the sole engineer.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#22d3ee]" />
                    <p>
                      Optimized MySQL queries for multi-tenant data, introduced
                      frontend API caching, and delivered features across
                      multiple client projects with active code review
                      participation.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </AnimateOnScroll>

          {/* "More Coming Soon" indicator */}
          <AnimateOnScroll delay={200}>
            <div className="relative flex items-center gap-4 pl-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-slate-300 dark:border-[#27272a]" style={{ marginLeft: '-33px' }}>
                <svg className="h-4 w-4 text-slate-400 dark:text-[#52525b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </div>
              <p className="text-sm font-medium text-slate-400 dark:text-[#52525b]">
                More experiences coming soon...
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </main>
    </div>
  );
}
