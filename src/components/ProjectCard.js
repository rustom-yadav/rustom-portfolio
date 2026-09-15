import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

function GithubIcon({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
  image,
  imageAlt,
  highlights,
  featured,
}) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-[#27272a] dark:bg-[#1a1a24] dark:hover:border-[#6366f1]/20 dark:hover:shadow-[0_16px_50px_rgba(99,102,241,0.12)]">
      {/* Gradient top accent on hover */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#6366f1] via-[#22d3ee] to-[#a855f7] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />

      {/* Featured badge */}
      {featured && (
        <div className="absolute top-3 right-3 z-20 rounded-full bg-gradient-to-r from-[#6366f1] to-[#22d3ee] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
          Featured
        </div>
      )}

      {/* Image with hover zoom */}
      {image && (
        <div className="img-zoom relative h-44 w-full shrink-0 bg-slate-100 dark:bg-[#27272a]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-[#e4e4e7] group-hover:text-[#6366f1] dark:group-hover:text-[#22d3ee] transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#a1a1aa]">
          {description}
        </p>

        {/* Highlights */}
        {highlights && highlights.length > 0 && (
          <ul className="mt-4 space-y-2">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-slate-500 dark:text-[#71717a]">
                <CheckIcon />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-[#6366f1]/8 px-2.5 py-1 text-xs font-medium text-[#6366f1] dark:bg-[rgba(34,211,238,0.1)] dark:text-[#22d3ee]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-5 flex gap-3 border-t border-slate-100 pt-4 dark:border-[#27272a]">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3.5 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-[#6366f1]/50 hover:bg-[#6366f1]/10 hover:text-[#6366f1] dark:border-[#27272a] dark:text-[#a1a1aa] dark:hover:border-[#22d3ee]/30 dark:hover:text-[#22d3ee]"
            >
              <GithubIcon />
              Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#22d3ee] px-3.5 py-2 text-sm font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
