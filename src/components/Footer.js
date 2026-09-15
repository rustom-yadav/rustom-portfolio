const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/rustom-yadav/',
    label: 'LinkedIn',
    icon: (
      <svg
        aria-hidden
        className="size-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: 'mailto:rustomyadav@outlook.com',
    label: 'Email',
    icon: (
      <svg
        aria-hidden
        className="size-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
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
    href: 'https://github.com/rustom-yadav',
    label: 'GitHub',
    icon: (
      <svg
        aria-hidden
        className="size-4"
        fill="currentColor"
        viewBox="0 0 24 24"
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden border-t border-slate-200 bg-slate-50 py-12 text-center dark:border-transparent dark:bg-gradient-to-b dark:from-[#0a0a12] dark:to-[#0a1020]"
      role="contentinfo"
    >
      {/* Animated gradient top line */}
      <div
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/40 to-transparent animate-gradient-shift"
        style={{ backgroundSize: '200% 100%' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 size-72 rounded-full bg-[#6366f1]/5 blur-3xl dark:bg-[#1d4ed8]/8"
        aria-hidden
      />
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-6 flex flex-wrap justify-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-[#6366f1]/50 hover:bg-[#6366f1]/10 hover:text-[#6366f1] hover:shadow-lg dark:border-[#1e293b] dark:text-[#93c5fd] dark:hover:text-white dark:hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)]"
            >
              <span className="transition-transform duration-300 group-hover:scale-110">
                {link.icon}
              </span>
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-sm text-slate-400 dark:text-[#52525b]">
          © {currentYear} Rustom Yadav. Built with Next.js & ❤️
        </p>
      </div>
    </footer>
  );
}
