import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { certifications, contributions } from '@/data/achievements';

export const metadata = {
  title: 'Achievements | Rustom Yadav',
  description:
    'Certifications, open source contributions, and milestones achieved by Rustom Yadav as a software engineer.',
};

export default function Achievements() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a12]">
      <main className="mx-auto max-w-[1200px] px-6 py-20">
        {/* Page Header */}
        <AnimateOnScroll>
          <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-[#e4e4e7]">
            Achievements
          </h2>
          <p className="mb-14 text-sm text-slate-500 dark:text-[#a1a1aa]">
            Certifications earned and open source contributions merged
          </p>
        </AnimateOnScroll>

        {/* ───── Certifications Section ───── */}
        <AnimateOnScroll delay={100}>
          <section className="mb-16">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] text-lg shadow-lg shadow-amber-500/20">
                📜
              </span>
              <h3 className="text-xl font-semibold text-[#d97706] dark:text-[#fbbf24]">
                Certifications
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-[#fbbf24]/30 via-[#fbbf24]/10 to-transparent" />
              <span className="rounded-full bg-[#fbbf24]/10 px-2.5 py-0.5 text-xs font-semibold text-[#d97706] dark:text-[#fbbf24]">
                {certifications.length}
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert, i) => (
                <AnimateOnScroll key={cert.id} delay={i * 100}>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col justify-between gap-4 rounded-2xl border border-[#fbbf24]/15 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-[#fbbf24]/10 dark:bg-[#1a1a24] dark:hover:bg-[#22222e] dark:hover:shadow-[0_8px_30px_rgba(251,191,36,0.08)]"
                  >
                    {/* Subtle gradient accent line at top */}
                    <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-[#fbbf24]/0 via-[#fbbf24]/40 to-[#fbbf24]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <svg className="h-4 w-4 text-[#fbbf24]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-xs font-semibold text-[#fbbf24]/70">Verified</span>
                      </div>
                      <h4 className="mb-2 text-base font-semibold leading-snug text-slate-800 transition-colors group-hover:text-[#d97706] dark:text-[#e4e4e7] dark:group-hover:text-[#fbbf24]">
                        {cert.title}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-[#27272a] dark:bg-[#27272a]/50 dark:text-[#a1a1aa]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#fbbf24]" />
                        {cert.issuer}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 self-end text-xs font-medium text-slate-400 transition-colors group-hover:text-[#d97706] dark:text-[#52525b] dark:group-hover:text-[#fbbf24]">
                      View Certificate
                      <svg
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </span>
                  </a>
                </AnimateOnScroll>
              ))}
            </div>
          </section>
        </AnimateOnScroll>

        {/* ───── Open Source Contributions Section ───── */}
        <AnimateOnScroll delay={200}>
          <section>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#34d399] to-[#10b981] text-lg shadow-lg shadow-emerald-500/20">
                🤝
              </span>
              <h3 className="text-xl font-semibold text-[#059669] dark:text-[#34d399]">
                Open Source Contributions
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-[#34d399]/30 via-[#34d399]/10 to-transparent" />
              <span className="rounded-full bg-[#34d399]/10 px-2.5 py-0.5 text-xs font-semibold text-[#059669] dark:text-[#34d399]">
                {contributions.length} Merged PRs
              </span>
            </div>

            <div className="space-y-3">
              {contributions.map((pr, i) => (
                <AnimateOnScroll key={pr.id} delay={i * 80}>
                  <a
                    href={pr.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 rounded-2xl border border-[#34d399]/15 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-[#34d399]/10 dark:bg-[#1a1a24] dark:hover:bg-[#22222e] dark:hover:shadow-[0_8px_30px_rgba(52,211,153,0.08)]"
                  >
                    {/* Merged icon */}
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#34d399]/10 dark:bg-[#34d399]/5">
                      <svg
                        className="h-4 w-4 text-[#059669] dark:text-[#34d399]"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.45 1.9a2.25 2.25 0 10-1.95.218v5.256a2.25 2.25 0 101.5 0V7.123A5.735 5.735 0 009.25 9h1.378a2.251 2.251 0 100-1.5H9.25a4.25 4.25 0 01-3.8-2.346zM12.75 9a.75.75 0 100-1.5.75.75 0 000 1.5zm-8.5 4.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                      </svg>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="mb-1.5 text-sm font-semibold leading-snug text-slate-800 transition-colors group-hover:text-[#059669] dark:text-[#e4e4e7] dark:group-hover:text-[#34d399]">
                        {pr.title}
                      </p>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-[#71717a]">
                          <svg
                            className="h-3.5 w-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                            />
                          </svg>
                          {pr.repo}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-[#34d399]/10 px-2 py-0.5 text-[11px] font-semibold text-[#059669] dark:bg-[#34d399]/5 dark:text-[#34d399]">
                          #{pr.prNumber}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-2 py-0.5 text-[11px] font-semibold text-purple-600 dark:bg-purple-400/5 dark:text-purple-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400" />
                          Merged
                        </span>
                      </div>
                    </div>

                    {/* External link indicator */}
                    <svg
                      className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:text-[#059669] group-hover:translate-x-0.5 dark:text-[#3f3f46] dark:group-hover:text-[#34d399]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </AnimateOnScroll>
              ))}
            </div>
          </section>
        </AnimateOnScroll>

        {/* Bottom CTA */}
        <AnimateOnScroll delay={300}>
          <div className="mt-16 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#22d3ee] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              View Projects
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#6366f1] hover:text-[#6366f1] dark:border-[#27272a] dark:bg-[#1a1a24] dark:text-[#e4e4e7] dark:hover:border-[#6366f1]/50 dark:hover:text-[#22d3ee]"
            >
              Get in Touch
            </Link>
          </div>
        </AnimateOnScroll>
      </main>
    </div>
  );
}
