'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      className="relative isolate w-full max-w-full bg-gradient-to-br from-[#eef2ff] via-[#e0e7ff] to-[#c7d2fe] px-4 py-24 dark:from-[#0f0f14] dark:via-[#1a1a2e] dark:to-[#16213e] sm:px-6 sm:py-32"
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto max-w-5xl flex flex-col items-center gap-10 text-center md:flex-row md:items-center md:text-left md:gap-16">
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="ring-4 ring-[#6366f1]/20 ring-offset-4 ring-offset-[#eef2ff] dark:ring-[#22d3ee]/30 dark:ring-offset-[#0f0f14] size-40 overflow-hidden rounded-full sm:size-48 md:size-56">
              {!imgError ? (
                <Image
                  src="/rustom-yadav.png"
                  alt="rustom's profile picture "
                  width={224}
                  height={224}
                  className="h-full w-full object-cover"
                  onError={() => setImgError(true)}
                  priority
                />
              ) : (
                <span
                  className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#6366f1] to-[#22d3ee] text-4xl font-bold text-white sm:text-5xl"
                  aria-hidden
                >
                  RY
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h1
            id="hero-heading"
            className="mb-3 bg-gradient-to-r from-[#6366f1] to-[#22d3ee] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl"
          >
            Hi, I&apos;m Rustom Yadav
          </h1>
          <p className="mb-6 text-lg font-bold text-slate-700 dark:text-[#e4e4e7] sm:text-xl">
            Software Engineer <span className="text-slate-400 dark:text-[#a1a1aa]">|</span> Full Stack Developer Intern at Site Guru <span className="text-slate-400 dark:text-[#a1a1aa]">|</span>  AI &amp; DevOps
          </p>
          <div className="mb-8 max-w-xl text-base leading-relaxed text-slate-600 dark:text-[#a1a1aa]">
            <p>
              Full Stack Software Engineer with 1+ year of hands-on experience building and deploying end-to-end web applications using JavaScript, TypeScript, and Python. Delivered 3+ production-grade projects with technologies including Next.js, Node.js, FastAPI, Docker, and CI/CD pipelines. Proven ability to integrate AI/LLM solutions into real-world products. Open Source contributor to freeCodeCamp.
            </p>
          </div>
          <p className="mb-8 text-sm font-medium text-slate-500 dark:text-[#a1a1aa]">
            Explore my projects and see how I build robust systems from the ground up.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#22d3ee] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30"
            >
              View Projects
            </Link>
            <a
              href="https://www.linkedin.com/in/rustom-yadav/"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-transparent bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(37,99,235,0.55)] dark:from-blue-500 dark:to-cyan-400 dark:shadow-[0_0_20px_rgba(59,130,246,0.4)] dark:hover:shadow-[0_0_28px_rgba(34,211,238,0.5)]"
            >
              View Linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
