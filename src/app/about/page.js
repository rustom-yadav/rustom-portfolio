import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f14]">
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-[#e4e4e7]">
          About Me
        </h2>

        <div className="space-y-5 text-base leading-[1.8] text-slate-600 dark:text-[#a1a1aa]">
          <p>
            Hello! I&apos;m{' '}
            <strong className="text-slate-900 dark:text-[#e4e4e7]">
              Rustom
            </strong>
            , a Full-Stack Software Engineer with a passion for building impactful, user-facing products at scale. 
            With over a year of hands-on experience, I specialize in designing resilient system architectures, 
            shipping end-to-end web applications, and integrating intelligent AI/LLM solutions into real-world products.
          </p>
          <p>
            Working across{' '}
            <strong className="font-medium text-slate-800 dark:text-[#e4e4e7]">
              JavaScript, TypeScript, and Python
            </strong>
            , I build scalable architectures from the ground up using technologies like Next.js, Node.js, and FastAPI. 
            I back my development with solid DevOps practices—utilizing{' '}
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
            My engineering capability is reflected in projects like my fully local{' '}
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
            </strong>. 
            Committed to engineering excellence, I also dedicate time to the open-source community, making active 
            contributions to major repositories like{' '}
            <strong className="font-medium text-slate-800 dark:text-[#e4e4e7]">
              freeCodeCamp
            </strong>.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#22d3ee] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(99,102,241,0.25)]"
          >
            View Experience
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-[#6366f1] hover:text-[#6366f1] dark:border-[#27272a] dark:bg-[#1a1a24] dark:text-[#e4e4e7]"
          >
            View Projects
          </Link>
        </div>
      </main>
    </div>
  );
}
