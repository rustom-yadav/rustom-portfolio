'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/achievments', label: 'Achievements' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setMenuOpen(false), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  // Scroll detection for shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-slate-200/80 bg-white/80 shadow-lg shadow-slate-200/20 backdrop-blur-xl dark:border-[#27272a]/60 dark:bg-[#0a0a12]/80 dark:shadow-black/20'
          : 'border-slate-200 bg-white/90 backdrop-blur dark:border-[#27272a] dark:bg-[#0a0a12]/95'
      }`}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="shrink-0 text-lg font-bold tracking-tight text-slate-900 transition hover:text-[#6366f1] dark:text-[#e4e4e7] sm:text-xl"
          onClick={() => setMenuOpen(false)}
        >
          <span className="bg-gradient-to-r from-[#6366f1] to-[#22d3ee] bg-clip-text text-transparent">
            R
          </span>
          ustom Yadav
        </Link>
        <div className="flex shrink-0 items-center gap-3 lg:gap-4">
          <ul className="hidden items-center gap-1 lg:flex" role="list">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-[#6366f1]/10 text-[#6366f1] dark:bg-[#22d3ee]/10 dark:text-[#22d3ee]'
                        : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-[#a1a1aa] dark:hover:bg-[#1a1a24] dark:hover:text-[#e4e4e7]'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-xl border border-slate-200 p-2.5 text-slate-500 transition-all duration-200 hover:border-[#6366f1]/50 hover:bg-[#6366f1]/10 hover:text-[#6366f1] dark:border-[#27272a] dark:text-[#a1a1aa] dark:hover:border-[#22d3ee]/30 dark:hover:bg-[#22d3ee]/10 dark:hover:text-[#22d3ee]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-100 dark:border-[#27272a] dark:text-[#a1a1aa] dark:hover:bg-[#27272a] lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="animate-slide-down border-t border-slate-200 bg-white dark:border-[#27272a] dark:bg-[#0a0a12] lg:hidden">
          <ul
            className="mx-auto max-w-[1200px] space-y-1 px-4 py-3 sm:px-6"
            role="list"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-[#6366f1]/10 text-[#6366f1] dark:bg-[#22d3ee]/10 dark:text-[#22d3ee]'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-[#a1a1aa] dark:hover:bg-[#1a1a24] dark:hover:text-[#e4e4e7]'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
