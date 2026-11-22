import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { TOOL_ITEMS, getItemBySlug, getRelatedItems } from '../../../config/registry';
import { buildItemMetadata, buildItemJsonLd } from '../../../lib/seo';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { ToolClientRunner } from './ToolClientRunner';
import { Check, ChevronRight, HelpCircle, BookOpen, Sparkles, ArrowRight, Cpu } from 'lucide-react';

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return TOOL_ITEMS.map((item) => ({
    slug: item.slug
  }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getItemBySlug(slug);
  if (!item || item.category !== 'tools') {
    return {};
  }
  return buildItemMetadata(item);
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const item = getItemBySlug(slug);

  if (!item || item.category !== 'tools') {
    notFound();
  }

  const jsonLd = buildItemJsonLd(item);
  const relatedItems = getRelatedItems(item);

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
            { name: 'Developer Tools', url: '/tools' },
            { name: item.name, url: item.canonicalPath }
          ]}
        />

        {/* SEO Main Heading */}
        <header className="text-center space-y-2 pt-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
            <Cpu className="h-3.5 w-3.5" />
            <span>@project/core Pure Utility</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            {item.name}
          </h1>
          <p className="text-xs sm:text-sm max-w-xl mx-auto leading-relaxed text-slate-600 dark:text-slate-400">
            {item.description}
          </p>
        </header>

        {/* Interactive Tool Runner */}
        <section aria-label="Interactive Tool">
          <ToolClientRunner toolSlug={item.slug} />
        </section>

        {/* In-depth Tool Description & Mechanics */}
        <article className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 p-6 sm:p-10 backdrop-blur-xl space-y-8 shadow-sm">
          <header className="space-y-2 border-b border-slate-100 dark:border-slate-800 pb-5">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-500" />
              <span>How {item.name} Works</span>
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {item.longDescription}
            </p>
          </header>

          {/* Key Features Grid */}
          <section className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Core Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {item.features.map((feat, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-3.5 flex items-center gap-3 text-slate-700 dark:text-slate-300"
                >
                  <Check className="h-4 w-4 text-blue-500 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Step-by-Step Instructions */}
          <section className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Step-by-Step Guide
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              {item.howToSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-4 space-y-1.5"
                >
                  <div className="font-bold text-blue-600 dark:text-blue-400 text-xs">
                    {step.step}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                    {step.instruction}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Tool-Specific FAQ Accordion */}
          {item.faqs && item.faqs.length > 0 && (
            <section className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-500" />
                <span>Frequently Asked Questions</span>
              </h3>
              <div className="space-y-3">
                {item.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950/50 p-4 space-y-1.5"
                  >
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-200">
                      {faq.question}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Internal Linking: Related Tools & Arcade */}
          <section className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Related Utilities & Games
              </h3>
              <Link
                href="/tools"
                className="text-xs text-blue-500 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>All Tools</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {relatedItems.map((rel) => (
                <Link
                  key={rel.id}
                  href={rel.canonicalPath}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950/60 p-4 hover:border-blue-500 transition-colors group flex flex-col justify-between space-y-3"
                >
                  <div>
                    <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                      {rel.name}
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      {rel.shortDesc}
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-blue-500 flex items-center gap-1">
                    <span>Open Utility</span>
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}

              {/* Link back to game arcade */}
              <Link
                href="/modes"
                className="rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950/60 p-4 hover:border-emerald-500 transition-colors group flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    Snake Game Modes
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    Take a break and challenge your reaction time in 4 classic arcade arenas.
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-emerald-500 flex items-center gap-1">
                  <span>Play Snake</span>
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
