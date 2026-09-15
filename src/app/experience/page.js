import Link from 'next/link';

export default function Experience() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f14]">
      <main className="mx-auto max-w-[1200px] px-6 py-20">
        <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-[#e4e4e7]">
          Experience
        </h2>
        <p className="mb-14 text-sm text-slate-500 dark:text-[#a1a1aa]">
          Professional work experience and internships
        </p>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-[#27272a] dark:bg-[#1a1a24]">
          <div className="mb-4 flex flex-col justify-between sm:flex-row sm:items-center">
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-[#e4e4e7]">
                Full Stack Developer Intern
              </h4>
              <div className="mt-1 text-base font-medium text-[#6366f1] dark:text-[#22d3ee]">
                Site Guru Pvt. Ltd. — Remote
              </div>
            </div>
            <div className="mt-2 text-sm font-semibold text-slate-500 dark:text-[#a1a1aa] sm:mt-0">
              July 2026 – Present
            </div>
          </div>
          <div className="mb-4 flex flex-wrap gap-2">
            {['Vue.js', 'Node.js', 'Express.js', 'MySQL'].map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-[#27272a] dark:text-[#a1a1aa]"
              >
                {tech}
              </span>
            ))}
          </div>
          <ul className="space-y-3 text-base text-slate-600 dark:text-[#a1a1aa]">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366f1] dark:bg-[#22d3ee]"></span>
              <p>
                Independently architected a multi-organization SaaS ERP platform for the poultry industry — defined project scope, designed system architecture, and implemented layered authorization (role/permission-based access + org-level module gating) as the sole engineer.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366f1] dark:bg-[#22d3ee]"></span>
              <p>
                Optimized MySQL queries for multi-tenant data, introduced frontend API caching, and delivered features across multiple client projects with active code review participation.
              </p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
