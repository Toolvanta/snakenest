import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CATEGORIES, GAME_MODE_ITEMS } from '../../config/registry';
import { buildCategoryMetadata, buildCategoryJsonLd } from '../../lib/seo';
import { ShieldAlert, Infinity, Timer, Boxes, ArrowRight, Sparkles, Check, X } from 'lucide-react';

export const metadata: Metadata = buildCategoryMetadata(CATEGORIES.modes);

const ICON_MAP = {
  classic: ShieldAlert,
  endless: Infinity,
  'time-challenge': Timer,
  obstacles: Boxes
};

export default function ModesHubPage() {
  const category = CATEGORIES.modes;
  const jsonLd = buildCategoryJsonLd(category, GAME_MODE_ITEMS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 sm:space-y-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: 'Game Modes', url: '/modes' }
          ]}
        />

        {/* Hero Section */}
        <header className="text-center space-y-3 pt-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>4 Distinct Battle Arenas</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Snake Game Modes
          </h1>
          <p className="text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed text-slate-600 dark:text-slate-400">
            Explore 4 unique game modes built for retro enthusiasts and speedrunners alike. Whether you love classic wall collisions, infinite border wrapping, high-pressure countdowns, or tactical mazes, there is a mode for you.
          </p>
        </header>

        {/* Game Mode Cards Grid */}
        <section aria-label="Available Game Modes" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GAME_MODE_ITEMS.map((mode) => {
            const Icon = ICON_MAP[mode.id as keyof typeof ICON_MAP] || ShieldAlert;

            return (
              <article
                key={mode.id}
                className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between space-y-6 shadow-sm dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)] group hover:border-emerald-500/50 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                      {mode.shortDesc}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                      <Link href={mode.canonicalPath}>
                        {mode.name}
                      </Link>
                    </h2>
                    <p className="text-xs sm:text-sm mt-2 leading-relaxed text-slate-600 dark:text-slate-400">
                      {mode.description}
                    </p>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    {mode.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={mode.canonicalPath}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white hover:bg-emerald-600 dark:hover:bg-emerald-600 px-5 py-3 text-xs sm:text-sm font-bold tracking-wide transition-all active:scale-95 cursor-pointer shadow-sm"
                >
                  <span>Play {mode.name}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </section>

        {/* Comparison Matrix Table */}
        <section aria-label="Game Modes Feature Comparison" className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl space-y-6">
          <header className="space-y-1">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Game Modes Comparison Matrix
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Detailed breakdown of arena physics, hazards, timers, and scoring multipliers across all modes.
            </p>
          </header>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-semibold uppercase">
                <tr>
                  <th scope="col" className="py-3 px-4">Feature</th>
                  <th scope="col" className="py-3 px-4">Classic</th>
                  <th scope="col" className="py-3 px-4">Endless</th>
                  <th scope="col" className="py-3 px-4">Time Challenge</th>
                  <th scope="col" className="py-3 px-4">Obstacles</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-slate-700 dark:text-slate-300 font-medium">
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Wall Collisions</td>
                  <td className="py-3 px-4 text-rose-500 flex items-center gap-1"><Check className="h-3.5 w-3.5" /> Fatal</td>
                  <td className="py-3 px-4 text-emerald-500 flex items-center gap-1"><X className="h-3.5 w-3.5" /> Wrap-around</td>
                  <td className="py-3 px-4 text-rose-500 flex items-center gap-1"><Check className="h-3.5 w-3.5" /> Fatal</td>
                  <td className="py-3 px-4 text-rose-500 flex items-center gap-1"><Check className="h-3.5 w-3.5" /> Fatal</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Body Self-Collision</td>
                  <td className="py-3 px-4 text-rose-500">Fatal</td>
                  <td className="py-3 px-4 text-rose-500">Fatal</td>
                  <td className="py-3 px-4 text-rose-500">Fatal</td>
                  <td className="py-3 px-4 text-rose-500">Fatal</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Countdown Timer</td>
                  <td className="py-3 px-4 text-slate-400">None</td>
                  <td className="py-3 px-4 text-slate-400">None</td>
                  <td className="py-3 px-4 text-emerald-500 font-bold">60s (+3s per food)</td>
                  <td className="py-3 px-4 text-slate-400">None</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Static Obstacles</td>
                  <td className="py-3 px-4 text-slate-400">None</td>
                  <td className="py-3 px-4 text-slate-400">None</td>
                  <td className="py-3 px-4 text-slate-400">None</td>
                  <td className="py-3 px-4 text-amber-500 font-bold">4 Symmetrical Mazes</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Difficulty Multipliers</td>
                  <td className="py-3 px-4">1.0× to 2.0×</td>
                  <td className="py-3 px-4">1.0× to 2.0×</td>
                  <td className="py-3 px-4">1.0× to 2.0×</td>
                  <td className="py-3 px-4">1.0× to 2.0×</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
