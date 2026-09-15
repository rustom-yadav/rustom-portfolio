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
  { href: '/achievments', label: 'Achievments' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setMenuOpen(false), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-[#27272a] dark:bg-[#0f0f14]/95"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="shrink-0 text-lg font-bold text-slate-900 transition hover:text-[#6366f1] dark:text-[#e4e4e7] sm:text-xl"
          onClick={() => setMenuOpen(false)}
        >
          Rustom Yadav
        </Link>
        <div className="flex shrink-0 items-center gap-3 lg:gap-6">
          <ul className="hidden items-center gap-6 lg:flex" role="list">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative py-1 text-sm font-medium transition ${
                      isActive
                        ? 'text-slate-900 dark:text-[#e4e4e7]'
                        : 'text-slate-500 hover:text-slate-900 dark:text-[#a1a1aa] dark:hover:text-[#e4e4e7]'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#6366f1] to-[#22d3ee] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                      aria-hidden
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:border-[#6366f1]/50 hover:bg-[#6366f1]/10 hover:text-[#6366f1] dark:border-[#27272a] dark:text-[#a1a1aa] dark:hover:text-[#e4e4e7]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="rounded-lg border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 dark:border-[#27272a] dark:text-[#a1a1aa] dark:hover:bg-[#27272a] lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white dark:border-[#27272a] dark:bg-[#0f0f14] lg:hidden">
          <ul
            className="mx-auto max-w-[1200px] space-y-0 px-4 py-3 sm:px-6"
            role="list"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-lg py-3 text-sm font-medium transition ${
                      isActive
                        ? 'text-[#6366f1] dark:text-[#22d3ee]'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-[#a1a1aa] dark:hover:bg-[#27272a] dark:hover:text-[#e4e4e7]'
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
