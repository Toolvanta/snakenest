import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CATEGORIES, TOOL_ITEMS } from '../../config/registry';
import { buildCategoryMetadata, buildCategoryJsonLd } from '../../lib/seo';
import { Link2, FileText, Hash, ArrowRight, Sparkles, Check, Cpu } from 'lucide-react';
import { CORE_VERSION } from '@project/core';

export const metadata: Metadata = buildCategoryMetadata(CATEGORIES.tools);

const ICON_MAP = {
  'slug-generator': Link2,
  'text-analyzer': FileText,
  'hash-generator': Hash
};

export default function ToolsHubPage() {
  const category = CATEGORIES.tools;
  const jsonLd = buildCategoryJsonLd(category, TOOL_ITEMS);

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
            { name: 'Developer Tools', url: '/tools' }
          ]}
        />

        {/* Hero Section */}
        <header className="text-center space-y-3 pt-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
            <Cpu className="h-3.5 w-3.5" />
            <span>@project/core v{CORE_VERSION} Engine</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Developer Utilities & Tools
          </h1>
          <p className="text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed text-slate-600 dark:text-slate-400">
            Free, fast, 100% private in-browser utilities powered by the pure TypeScript core algorithms library. Zero network tracking, zero backend latency, and instant execution.
          </p>
        </header>

        {/* Tool Cards Grid */}
        <section aria-label="Available Developer Utilities" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TOOL_ITEMS.map((tool) => {
            const Icon = ICON_MAP[tool.slug as keyof typeof ICON_MAP] || Sparkles;

            return (
              <article
                key={tool.id}
                className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 p-6 backdrop-blur-xl flex flex-col justify-between space-y-6 shadow-sm dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)] group hover:border-blue-500/50 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 border border-blue-500/20 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                      Offline Ready
                    </span>
                  </div>

                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                      <Link href={tool.canonicalPath}>
                        {tool.name}
                      </Link>
                    </h2>
                    <p className="text-xs mt-2 leading-relaxed text-slate-600 dark:text-slate-400">
                      {tool.description}
                    </p>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {tool.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={tool.canonicalPath}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white hover:bg-blue-600 dark:hover:bg-blue-600 px-4 py-2.5 text-xs font-bold tracking-wide transition-all active:scale-95 cursor-pointer shadow-sm"
                >
                  <span>Launch Tool</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </section>

        {/* Monorepo Architecture Overview */}
        <section aria-label="Engine Architecture" className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Cpu className="h-5 w-5 text-blue-500" />
            <span>Shared Monorepo Architecture</span>
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            These tools consume pure TypeScript business logic directly from the shared <code className="font-mono text-emerald-500">@project/core</code> package. The identical algorithms run across the Next.js web application, Chrome Extension popup, and automated Vitest regression suites with zero code duplication.
          </p>
        </section>
      </main>
    </>
  );
}
