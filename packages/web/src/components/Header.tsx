import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Volume2, VolumeX, Moon, Sun, Settings, Chrome, Menu, X, Gamepad2, Wrench, BookOpen, ShieldAlert, Infinity, Timer, Boxes } from 'lucide-react';
import type { GameSettings } from '@project/core';

interface HeaderProps {
  settings: GameSettings;
  onToggleSound: () => void;
  onToggleTheme: () => void;
  onOpenSettings: () => void;
  onNavigateHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  settings,
  onToggleSound,
  onToggleTheme,
  onOpenSettings,
  onNavigateHome
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDark = settings.theme === 'dark';

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <header className={`sticky top-0 z-40 w-full border-b backdrop-blur-xl transition-colors duration-200 ${
      isDark
        ? 'border-white/10 bg-[#090e17]/85 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
        : 'border-slate-200/90 bg-white/90 shadow-[0_4px_20px_rgba(15,23,42,0.03)]'
    }`}>
      <div className="mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between px-3 sm:px-6 lg:px-8">
        {/* Left: Branding & Logo */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/"
            onClick={onNavigateHome}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl"
            aria-label="SnakeNest Home"
          >
            <div className="relative flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl overflow-hidden border border-emerald-500/30 bg-[#090d16] shadow-[0_0_15px_-2px_rgba(16,185,129,0.4)]">
              <svg
                viewBox="0 0 64 64"
                className="h-full w-full p-1"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="headerSnakeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4ade80" />
                    <stop offset="100%" stopColor="#16a34a" />
                  </linearGradient>
                </defs>
                <path
                  d="M14 42 Q 14 50 22 50 Q 30 50 30 42 L 30 22 Q 30 14 38 14 Q 46 14 46 22 L 46 30"
                  fill="none"
                  stroke="url(#headerSnakeGrad)"
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
              <div className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
            </div>

            <div>
              <span className={`font-heading font-black tracking-tight text-sm sm:text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Snake<span className="text-emerald-500">Nest</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 text-xs font-semibold">
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-lg transition-colors hover:text-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Play Arena
            </Link>
            <Link
              href="/modes"
              className={`px-3 py-1.5 rounded-lg transition-colors hover:text-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Game Modes
            </Link>
            <Link
              href="/tools"
              className={`px-3 py-1.5 rounded-lg transition-colors hover:text-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Developer Tools
            </Link>
            <Link
              href="/#how-to-play"
              className={`px-3 py-1.5 rounded-lg transition-colors hover:text-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Game Guide
            </Link>
          </nav>
        </div>

        {/* Right: Action Controls (Chrome Extension, Sound, Theme, Settings, Mobile Menu) */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Chrome Extension Pill */}
          <a
            href="https://chromewebstore.google.com/detail/snakenest-%E2%80%93-classic-retro/kccmemenobofeaoedlojngldeehjbjgg"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 rounded-xl border px-2 sm:px-3 py-1.5 text-xs font-semibold transition-all active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 ${
              isDark
                ? 'border-emerald-500/30 bg-emerald-950/40 text-emerald-400 hover:border-emerald-500/60 hover:bg-emerald-900/50 shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]'
                : 'border-emerald-200 bg-emerald-50 text-emerald-700 hover:border-emerald-300 hover:bg-emerald-100 shadow-sm'
            }`}
            title="Install SnakeNest Chrome Extension"
            aria-label="Install SnakeNest Chrome Extension"
          >
            <Chrome className="h-4 w-4 text-emerald-500 shrink-0" />
            <span className="hidden lg:inline">Extension</span>
          </a>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border transition-all active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 ${
              isDark
                ? 'border-white/10 bg-slate-900/80 text-slate-300 hover:border-white/20 hover:text-white hover:bg-slate-800'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50 shadow-sm'
            }`}
            title={settings.soundEnabled ? 'Mute Audio' : 'Unmute Audio'}
            aria-label={settings.soundEnabled ? 'Mute Audio' : 'Unmute Audio'}
          >
            {settings.soundEnabled ? (
              <Volume2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-500" />
            ) : (
              <VolumeX className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-400" />
            )}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border transition-all active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-500 ${
              isDark
                ? 'border-white/10 bg-slate-900/80 text-slate-300 hover:border-white/20 hover:text-white hover:bg-slate-800'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50 shadow-sm'
            }`}
            title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
            aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
          >
            {isDark ? (
              <Sun className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-400" />
            ) : (
              <Moon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600" />
            )}
          </button>

          {/* Settings Modal Button */}
          <button
            onClick={onOpenSettings}
            className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border transition-all active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 ${
              isDark
                ? 'border-white/10 bg-slate-900/80 text-slate-300 hover:border-white/20 hover:text-white hover:bg-slate-800'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50 shadow-sm'
            }`}
            title="Open Game Settings"
            aria-label="Open Game Settings"
          >
            <Settings className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border transition-all active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 ${
              isDark
                ? 'border-white/10 bg-slate-900/80 text-slate-300 hover:text-white'
                : 'border-slate-200 bg-white text-slate-700 hover:text-slate-900 shadow-sm'
            }`}
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Modal Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 top-14 z-50 bg-slate-950/70 backdrop-blur-md md:hidden flex flex-col justify-start p-4 animate-in fade-in duration-150"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className={`w-full max-w-sm mx-auto rounded-3xl border p-5 space-y-4 shadow-2xl ${
              isDark ? 'border-slate-800 bg-slate-900 text-slate-100' : 'border-slate-200 bg-white text-slate-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b pb-3 border-slate-200 dark:border-slate-800">
              <span className="font-heading font-bold text-sm">Navigation Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
                aria-label="Close Menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-col space-y-1.5 text-xs font-semibold">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Gamepad2 className="h-4 w-4 text-emerald-500" />
                <span>Play Snake Arena</span>
              </Link>

              <div className="pt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2.5">
                Game Modes
              </div>
              <div className="grid grid-cols-2 gap-1.5 pl-2">
                <Link
                  href="/modes/classic"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-1.5 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-[11px]"
                >
                  <ShieldAlert className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Classic</span>
                </Link>
                <Link
                  href="/modes/endless"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-1.5 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-[11px]"
                >
                  <Infinity className="h-3.5 w-3.5 text-blue-500" />
                  <span>Endless</span>
                </Link>
                <Link
                  href="/modes/time-challenge"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-1.5 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-[11px]"
                >
                  <Timer className="h-3.5 w-3.5 text-rose-500" />
                  <span>Time Run</span>
                </Link>
                <Link
                  href="/modes/obstacles"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-1.5 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-[11px]"
                >
                  <Boxes className="h-3.5 w-3.5 text-amber-500" />
                  <span>Obstacles</span>
                </Link>
              </div>

              <div className="pt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2.5">
                Developer Utilities
              </div>
              <div className="flex flex-col space-y-1 pl-2">
                <Link
                  href="/tools/slug-generator"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-[11px]"
                >
                  <Wrench className="h-3.5 w-3.5 text-blue-400" />
                  <span>Slug Generator</span>
                </Link>
                <Link
                  href="/tools/text-analyzer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-[11px]"
                >
                  <Wrench className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Text Analyzer & Word Counter</span>
                </Link>
                <Link
                  href="/tools/hash-generator"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-[11px]"
                >
                  <Wrench className="h-3.5 w-3.5 text-indigo-400" />
                  <span>FNV-1a 32-Bit Hash Generator</span>
                </Link>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                <Link
                  href="/#how-to-play"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <BookOpen className="h-4 w-4 text-amber-500" />
                  <span>Game Guide & FAQ</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
