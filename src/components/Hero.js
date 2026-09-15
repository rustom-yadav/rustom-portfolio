'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const stats = [
  { value: '1+', label: 'Year Experience' },
  { value: '3+', label: 'Production Apps' },
  { value: '4+', label: 'Open Source PRs' },
];

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'AI & DevOps Enthusiast',
];

function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const current = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < current.length) {
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setDeleting(true), 1800);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((c) => c - 1);
          } else {
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % roles.length);
          }
        }
      },
      deleting ? 40 : 80,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex, mounted]);

  if (!mounted)
    return (
      <span className="text-slate-700 dark:text-[#e4e4e7]">{roles[0]}</span>
    );

  return (
    <span className="text-slate-700 dark:text-[#e4e4e7]">
      {roles[roleIndex].slice(0, charIndex)}
      <span className="inline-block w-[2px] h-[1.1em] align-middle bg-[#6366f1] dark:bg-[#22d3ee] animate-status-pulse ml-0.5" />
    </span>
  );
}

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      className="relative isolate w-full max-w-full overflow-hidden bg-gradient-to-br from-[#eef2ff] via-[#e0e7ff] to-[#c7d2fe] px-4 py-24 dark:from-[#0a0a12] dark:via-[#111128] dark:to-[#0f1b2e] sm:px-6 sm:py-32"
      aria-labelledby="hero-heading"
    >
      {/* Ambient floating orbs */}
      <div className="ambient-orb ambient-orb-1" aria-hidden />
      <div className="ambient-orb ambient-orb-2" aria-hidden />
      <div className="ambient-orb ambient-orb-3" aria-hidden />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl flex flex-col items-center gap-10 text-center md:flex-row md:items-center md:text-left md:gap-16">
        {/* Profile Image */}
        <div className="flex-shrink-0 animate-fade-in-up">
          <div className="profile-ring rounded-full">
            <div className="relative z-10 size-40 overflow-hidden rounded-full sm:size-48 md:size-56">
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
          {/* Available badge */}
          <div className="animate-fade-in-down mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for Opportunities
          </div>

          {/* Name */}
          <h1
            id="hero-heading"
            className="animate-fade-in-up mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
          >
            <span className="text-slate-900 dark:text-white">Hi, I&apos;m </span>
            <span className="gradient-text-animated">Rustom Yadav</span>
          </h1>

          {/* Typewriter subtitle */}
          <p className="animate-fade-in-up delay-200 mb-5 text-lg font-bold sm:text-xl">
            <TypewriterRole />
            <span className="text-slate-400 dark:text-[#a1a1aa] mx-2">|</span>
            <span className="text-sm font-medium text-[#6366f1] dark:text-[#22d3ee]">
              Intern at Site Guru
            </span>
          </p>

          {/* Bio */}
          <div className="animate-fade-in-up delay-300 mb-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-[#a1a1aa]">
            <p>
              Full Stack Software Engineer with 1+ year of hands-on experience
              building and deploying end-to-end web applications using
              JavaScript, TypeScript, and Python. Delivered 3+
              production-grade projects with technologies including Next.js,
              Node.js, FastAPI, Docker, and CI/CD pipelines. Proven ability to
              integrate AI/LLM solutions into real-world products. Open Source
              contributor to freeCodeCamp.
            </p>
          </div>

          {/* Stats bar */}
          <div className="animate-fade-in-up delay-400 mb-8 flex flex-wrap justify-center gap-6 md:justify-start">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-2xl font-extrabold bg-gradient-to-r from-[#6366f1] to-[#22d3ee] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-slate-500 dark:text-[#71717a]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up delay-500 flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#22d3ee] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/30"
            >
              View Projects
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="https://www.linkedin.com/in/rustom-yadav/"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#6366f1] hover:text-[#6366f1] hover:shadow-lg dark:border-[#27272a] dark:bg-[#1a1a24] dark:text-[#e4e4e7] dark:hover:border-[#6366f1]/50 dark:hover:text-[#22d3ee]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
