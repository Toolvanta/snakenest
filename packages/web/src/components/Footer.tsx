import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Chrome } from 'lucide-react';
import { GAME_MODES, DEV_TOOLS } from '../config/registry';

interface FooterProps {
  theme?: 'dark' | 'light';
  onNavigateHome?: () => void;
  onNavigatePrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ theme = 'dark', onNavigateHome, onNavigatePrivacy }) => {
  const isDark = theme === 'dark';

  const pillBtnClass = `inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-150 active:scale-95 shadow-sm ${
    isDark
      ? 'border-white/10 bg-slate-900/80 text-slate-300 hover:border-white/20 hover:text-white hover:bg-slate-800'
      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50'
  }`;

  const extensionPillClass = `inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all duration-150 active:scale-95 shadow-sm ${
    isDark
      ? 'border-indigo-500/30 bg-indigo-950/40 text-indigo-300 hover:border-indigo-500/50 hover:bg-indigo-900/50'
      : 'border-indigo-200 bg-indigo-50/80 text-indigo-600 hover:border-indigo-300 hover:bg-indigo-100/80'
  }`;

  const linkClass = `text-xs transition-colors hover:underline ${
    isDark ? 'text-slate-400 hover:text-emerald-400' : 'text-slate-600 hover:text-emerald-600'
  }`;

  const headerClass = `text-xs font-heading font-bold uppercase tracking-wider ${
    isDark ? 'text-white' : 'text-slate-900'
  }`;

  return (
    <footer className={`w-full border-t py-12 mt-16 transition-colors duration-200 ${
      isDark ? 'border-white/10 bg-[#090e17]/80 text-slate-400' : 'border-slate-200 bg-slate-50 text-slate-600 shadow-sm'
    }`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 pb-10 border-b border-white/5 dark:border-white/10">
          {/* Column 1: Brand & Summary */}
          <div className="space-y-3">
            <Link
              href="/"
              onClick={onNavigateHome}
              className="flex items-center gap-2.5 cursor-pointer select-none group"
            >
              {/* Favicon Vector Logo */}
              <div className="relative flex h-7 w-7 items-center justify-center rounded-xl overflow-hidden border border-emerald-500/30 bg-[#090d16] shadow-sm">
                <svg
                  viewBox="0 0 64 64"
                  className="h-full w-full p-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="footerSnakeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4ade80" />
                      <stop offset="100%" stopColor="#16a34a" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M14 42 Q 14 50 22 50 Q 30 50 30 42 L 30 22 Q 30 14 38 14 Q 46 14 46 22 L 46 30"
                    fill="none"
                    stroke="url(#footerSnakeGrad)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="20" cy="20" r="7" fill="#ef4444" />
                  <path
                    d="M20 13 Q 22 10 24 12"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <span className={`font-heading text-base font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Snake<span className="text-emerald-500">Nest</span>
              </span>
            </Link>

            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              High-performance, 100% private in-browser arcade games and web developer utilities. Zero server trackers.
            </p>

            <div className={`text-xs pt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              Crafted by <strong className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Shoaib M. Arif</strong>
            </div>
          </div>

          {/* Column 2: Game Modes */}
          <div className="space-y-3">
            <h3 className={headerClass}>
              <Link href="/modes" className="hover:underline">Arcade Modes</Link>
            </h3>
            <ul className="space-y-2">
              {GAME_MODES.map((mode) => (
                <li key={mode.slug}>
                  <Link href={`/modes/${mode.slug}`} className={linkClass}>
                    {mode.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Developer Tools */}
          <div className="space-y-3">
            <h3 className={headerClass}>
              <Link href="/tools" className="hover:underline">Developer Tools</Link>
            </h3>
            <ul className="space-y-2">
              {DEV_TOOLS.map((tool) => (
                <li key={tool.slug}>
                  <Link href={`/tools/${tool.slug}`} className={linkClass}>
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Platform & Community */}
          <div className="space-y-3">
            <h3 className={headerClass}>Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  onClick={onNavigatePrivacy}
                  className={linkClass}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                >
                  XML Sitemap
                </a>
              </li>
            </ul>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://chromewebstore.google.com/detail/snakenest-%E2%80%93-classic-retro/kccmemenobofeaoedlojngldeehjbjgg"
                target="_blank"
                rel="noopener noreferrer"
                className={extensionPillClass}
                title="Get SnakeNest on Chrome Web Store"
              >
                <Chrome className="h-3.5 w-3.5 text-indigo-500" />
                <span>Chrome Extension</span>
              </a>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://github.com/shoaibmarif"
                  target="_blank"
                  rel="noreferrer"
                  className={pillBtnClass}
                  aria-label="Shoaib M. Arif GitHub Profile"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/shoaibmarif/"
                  target="_blank"
                  rel="noreferrer"
                  className={pillBtnClass}
                  aria-label="Shoaib M. Arif LinkedIn Profile"
                >
                  <Linkedin className="h-3.5 w-3.5 text-blue-500" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Standards */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className={isDark ? 'text-slate-500' : 'text-slate-400'}>
            &copy; {new Date().getFullYear()} SnakeNest. MIT Licensed open-source web platform.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span>WCAG 2.2 AA Compliant</span>
            <span>•</span>
            <span>100% Client-Side</span>
            <span>•</span>
            <span>Core Web Vitals Optimized</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
