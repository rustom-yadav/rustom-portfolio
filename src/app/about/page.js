import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const strengths = [
  {
    icon: '🏗️',
    title: 'System Architecture',
    description:
      'Design scalable, maintainable systems with clean separation of concerns, RESTful APIs, and containerized deployments.',
    accent: 'from-[#6366f1] to-[#818cf8]',
    borderColor: 'hover:border-[#6366f1]/30 dark:hover:border-[#6366f1]/20',
  },
  {
    icon: '🤖',
    title: 'AI/LLM Integration',
    description:
      'Build intelligent products with RAG pipelines, embeddings, LangChain, and local LLM inference — privacy-first approach.',
    accent: 'from-[#fb923c] to-[#fbbf24]',
    borderColor: 'hover:border-[#fb923c]/30 dark:hover:border-[#fb923c]/20',
  },
  {
    icon: '🚀',
    title: 'Full Stack Delivery',
    description:
      'Ship end-to-end products with Docker, CI/CD pipelines, payment integrations, and cloud deployments.',
    accent: 'from-[#22d3ee] to-[#34d399]',
    borderColor: 'hover:border-[#22d3ee]/30 dark:hover:border-[#22d3ee]/20',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a12]">
      <main className="mx-auto max-w-4xl px-6 py-20">
        <AnimateOnScroll>
          <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-[#e4e4e7]">
            About Me
          </h2>
        </AnimateOnScroll>

        {/* Bio text */}
        <AnimateOnScroll delay={100}>
          <div className="mt-6 space-y-5 text-base leading-[1.8] text-slate-600 dark:text-[#a1a1aa]">
            <p>
              Hello! I&apos;m{' '}
              <strong className="text-slate-900 dark:text-[#e4e4e7]">
                Rustom
              </strong>
              , a Full-Stack Software Engineer with a passion for building
              impactful, user-facing products at scale. With over a year of
              hands-on experience, I specialize in designing resilient system
              architectures, shipping end-to-end web applications, and
              integrating intelligent AI/LLM solutions into real-world products.
            </p>
            <p>
              Working across{' '}
              <strong className="font-medium text-slate-800 dark:text-[#e4e4e7]">
                JavaScript, TypeScript, and Python
              </strong>
              , I build scalable architectures from the ground up using
              technologies like Next.js, Node.js, and FastAPI. I back my
              development with solid DevOps practices—utilizing{' '}
              <strong className="font-medium text-slate-800 dark:text-[#e4e4e7]">
                Docker
              </strong>{' '}
              for containerization, and configuring{' '}
              <strong className="font-medium text-slate-800 dark:text-[#e4e4e7]">
                CI/CD pipelines
              </strong>{' '}
              via GitHub Actions to ensure automated, predictable deployments.
            </p>
            <p>
              My engineering capability is reflected in projects like my fully
              local{' '}
              <strong className="font-medium text-slate-800 dark:text-[#e4e4e7]">
                Privacy-First Chatbot
              </strong>
              ,{' '}
              <strong className="font-medium text-slate-800 dark:text-[#e4e4e7]">
                Mentovara
              </strong>{' '}
              (a production-scale EdTech platform), and a dedicated{' '}
              <strong className="font-medium text-slate-800 dark:text-[#e4e4e7]">
                Video Streaming API
              </strong>
              . Committed to engineering excellence, I also dedicate time to the
              open-source community, making active contributions to major
              repositories like{' '}
              <strong className="font-medium text-slate-800 dark:text-[#e4e4e7]">
                freeCodeCamp
              </strong>
              .
            </p>
          </div>
        </AnimateOnScroll>

        {/* Strength cards grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {strengths.map((s, i) => (
            <AnimateOnScroll key={s.title} delay={200 + i * 100}>
              <div
                className={`group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-[#27272a] dark:bg-[#1a1a24] ${s.borderColor}`}
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} text-xl shadow-lg`}
                  style={{ color: 'white', fontSize: '1.3rem' }}
                >
                  {s.icon}
                </div>
                <h3 className="mb-2 text-base font-bold text-slate-900 dark:text-[#e4e4e7]">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-[#71717a]">
                  {s.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll delay={500}>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/experience"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#22d3ee] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              View Experience
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#6366f1] hover:text-[#6366f1] dark:border-[#27272a] dark:bg-[#1a1a24] dark:text-[#e4e4e7] dark:hover:border-[#6366f1]/50 dark:hover:text-[#22d3ee]"
            >
              View Projects
            </Link>
          </div>
        </AnimateOnScroll>
      </main>
    </div>
  );
}
