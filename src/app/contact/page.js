import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const channels = [
  {
    href: 'https://www.linkedin.com/in/rustom-yadav/',
    label: 'LinkedIn',
    desc: 'Connect with me professionally.',
    color: 'group-hover:text-[#0077b5] dark:group-hover:text-[#0077b5]',
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
    color: 'group-hover:text-[#6366f1] dark:group-hover:text-[#22d3ee]',
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
    color: 'group-hover:text-emerald-500 dark:group-hover:text-emerald-400',
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
    color: 'group-hover:text-slate-900 dark:group-hover:text-white',
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
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#0a0a12] overflow-hidden">
      {/* Ambient orbs */}
      <div className="ambient-orb ambient-orb-1" aria-hidden />
      <div className="ambient-orb ambient-orb-2" aria-hidden />

      <main className="relative mx-auto max-w-2xl px-6 py-20">
        <AnimateOnScroll>
          <h2 className="mb-2 text-3xl font-bold">
            <span className="gradient-text-animated">
              Let&apos;s Build Something Together
            </span>
          </h2>
          <p className="mb-10 text-sm text-slate-500 dark:text-[#a1a1aa]">
            Have a project in mind or just want to say hello? I&apos;d love to
            hear from you.
          </p>
        </AnimateOnScroll>

        {/* Contact form (visual) - Commented out for future implementation (e.g., EmailJS, Formspree) */}
        {/* 
        <AnimateOnScroll delay={100}>
          <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 dark:border-[#27272a] dark:bg-[#1a1a24]">
            <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-[#e4e4e7]">
              Send a Message
            </h3>
            <form
              action={`mailto:rustomyadav@outlook.com`}
              method="GET"
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-[#a1a1aa]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 dark:border-[#27272a] dark:bg-[#0f0f14] dark:text-[#e4e4e7] dark:focus:border-[#22d3ee] dark:focus:ring-[#22d3ee]/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-[#a1a1aa]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 dark:border-[#27272a] dark:bg-[#0f0f14] dark:text-[#e4e4e7] dark:focus:border-[#22d3ee] dark:focus:ring-[#22d3ee]/20"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-[#a1a1aa]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 dark:border-[#27272a] dark:bg-[#0f0f14] dark:text-[#e4e4e7] dark:focus:border-[#22d3ee] dark:focus:ring-[#22d3ee]/20"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#22d3ee] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25 sm:w-auto"
              >
                Send Message
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </form>
          </div>
        </AnimateOnScroll>
        */}

        {/* Contact channels */}
        <AnimateOnScroll delay={200}>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-[#52525b]">
            Or reach out directly
          </h3>
          <div className="space-y-3">
            {channels.map((ch, i) => (
              <AnimateOnScroll key={ch.href} delay={250 + i * 80}>
                <a
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-[#27272a] dark:bg-[#1a1a24] dark:hover:bg-[#22222e] dark:hover:shadow-[0_12px_40px_rgba(99,102,241,0.08)]"
                >
                  <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition-all duration-300 group-hover:scale-110 dark:bg-[#27272a] dark:text-[#a1a1aa] ${ch.color}`}>
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
                  <svg
                    className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-[#6366f1] dark:text-[#3f3f46] dark:group-hover:text-[#22d3ee]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={500}>
          <p className="mt-10 text-center text-sm text-slate-500 dark:text-[#a1a1aa]">
            Want to see my work?{' '}
            <Link
              href="/projects"
              className="font-semibold text-[#6366f1] transition hover:text-[#22d3ee]"
            >
              View projects →
            </Link>
          </p>
        </AnimateOnScroll>
      </main>
    </div>
  );
}
