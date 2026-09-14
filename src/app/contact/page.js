import Link from 'next/link';

const channels = [
  {
    href: 'https://www.linkedin.com/in/rustom-yadav/',
    label: 'LinkedIn',
    desc: 'Connect with me professionally.',
    icon: (
      <svg
        className="size-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: 'mailto:rustomyadav@outlook.com',
    label: 'Email',
    desc: 'Send me a message anytime.',
    icon: (
      <svg
        className="size-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    href: 'tel:+917007141429',
    label: 'Phone',
    desc: '+91 7007141429',
    icon: (
      <svg
        className="size-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    href: 'https://github.com/rustom-yadav',
    label: 'GitHub',
    desc: 'Browse my repositories and projects.',
    icon: (
      <svg
        className="size-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0f0f14]">
      <main className="mx-auto max-w-xl px-6 py-20">
        <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-[#e4e4e7]">
          Contact
        </h2>
        <p className="mb-8 text-sm text-slate-500 dark:text-[#a1a1aa]">
          Have a project in mind? Let&apos;s connect.
        </p>
        <div className="space-y-3">
          {channels.map((ch) => (
            <a
              key={ch.href}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-[#27272a] dark:bg-[#1a1a24] dark:hover:bg-[#22222e] dark:hover:shadow-[0_12px_40px_rgba(99,102,241,0.2)]"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#6366f1]/10 text-[#6366f1] transition group-hover:bg-[#6366f1] group-hover:text-white dark:bg-[rgba(34,211,238,0.15)] dark:text-[#22d3ee]">
                {ch.icon}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-slate-900 dark:text-[#e4e4e7]">
                  {ch.label}
                </p>
                <p className="text-sm text-slate-500 dark:text-[#a1a1aa]">
                  {ch.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500 dark:text-[#a1a1aa]">
          Want to see my work?{' '}
          <Link
            href="/projects"
            className="font-semibold text-[#6366f1] transition hover:text-[#22d3ee]"
          >
            View projects
          </Link>
        </p>
      </main>
    </div>
  );
}
