'use client';

import React, { useState } from 'react';
import { slugify, analyzeText, fastHash } from '@project/core';
import { Copy, Check, FileText, Hash, Clock, Sparkles } from 'lucide-react';

interface ToolClientRunnerProps {
  toolSlug: string;
}

export const ToolClientRunner: React.FC<ToolClientRunnerProps> = ({ toolSlug }) => {
  // State for slug generator
  const [slugInput, setSlugInput] = useState('Snake Game Online: Free Retro Arcade Arena');
  const [copiedSlug, setCopiedSlug] = useState(false);

  // State for text analyzer
  const [textInput, setTextInput] = useState(
    'Snake Game Online is an accessible, modern retro arcade web application built with React 19, Next.js, and HTML5 Canvas. Navigate the arena, consume glowing fruit, and shatter high-score records across 4 unique battle modes.'
  );

  // State for hash generator
  const [hashInput, setHashInput] = useState('snakenest-v1-cache-key');
  const [copiedHash, setCopiedHash] = useState(false);

  const handleCopy = (text: string, setCopied: (v: boolean) => void) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // 1. SLUG GENERATOR
  if (toolSlug === 'slug-generator') {
    const slug = slugify(slugInput);

    return (
      <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-sm">
        <div>
          <label htmlFor="slug-input" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Enter Input Title or String
          </label>
          <input
            id="slug-input"
            type="text"
            value={slugInput}
            onChange={(e) => setSlugInput(e.target.value)}
            placeholder="Type or paste any text..."
            className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            <span>Generated SEO Slug</span>
            <span className="font-mono text-[11px] text-slate-500 lowercase">{slug.length} chars</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex-1 rounded-2xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 px-4 py-3 font-mono text-xs sm:text-sm text-emerald-800 dark:text-emerald-400 break-all select-all">
              {slug || '<empty>'}
            </div>
            <button
              onClick={() => handleCopy(slug, setCopiedSlug)}
              className="inline-flex items-center justify-center gap-1.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-sm"
              title="Copy slug to clipboard"
            >
              {copiedSlug ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Example Presets */}
        <div className="flex items-center gap-2 flex-wrap pt-2 text-xs">
          <span className="text-slate-500 font-medium">Quick examples:</span>
          {['How to Play Classic Snake Online', 'Retro Gaming 1970 vs 1990', 'Time Sprint Mode Guide'].map((ex) => (
            <button
              key={ex}
              onClick={() => setSlugInput(ex)}
              className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/60 px-2.5 py-1 text-[11px] text-slate-700 dark:text-slate-300 hover:border-emerald-500 transition-colors"
            >
              {ex}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 2. TEXT ANALYZER
  if (toolSlug === 'text-analyzer') {
    const metrics = analyzeText(textInput);

    return (
      <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-sm">
        <div>
          <label htmlFor="text-editor" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Text Analysis Editor
          </label>
          <textarea
            id="text-editor"
            rows={5}
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Paste your content here to analyze in real-time..."
            className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors leading-relaxed"
          />
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-4 text-center">
            <div className="flex items-center justify-center text-blue-500 mb-1">
              <FileText className="h-4 w-4" />
            </div>
            <div className="text-xl sm:text-2xl font-black font-mono text-slate-900 dark:text-white">
              {metrics.charCount}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Characters</div>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-4 text-center">
            <div className="flex items-center justify-center text-emerald-500 mb-1">
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="text-xl sm:text-2xl font-black font-mono text-slate-900 dark:text-white">
              {metrics.wordCount}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Total Words</div>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-4 text-center">
            <div className="flex items-center justify-center text-amber-500 mb-1">
              <Clock className="h-4 w-4" />
            </div>
            <div className="text-xl sm:text-2xl font-black font-mono text-slate-900 dark:text-white">
              {metrics.readingTimeMinutes} min
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Read Time (200 wpm)</div>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-4 text-center">
            <div className="flex items-center justify-center text-purple-500 mb-1">
              <Hash className="h-4 w-4" />
            </div>
            <div className="text-sm font-black font-mono text-slate-900 dark:text-white truncate">
              0x{metrics.hash}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">FNV-1a 32-bit Hash</div>
          </div>
        </div>
      </div>
    );
  }

  // 3. HASH GENERATOR
  if (toolSlug === 'hash-generator') {
    const hash = fastHash(hashInput);
    const hex = `0x${hash}`;

    return (
      <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-sm">
        <div>
          <label htmlFor="hash-input" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Input String for 32-Bit FNV-1a Hashing
          </label>
          <input
            id="hash-input"
            type="text"
            value={hashInput}
            onChange={(e) => setHashInput(e.target.value)}
            placeholder="Type any string or key to hash..."
            className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            <span>Computed Checksum (Hexadecimal)</span>
            <span className="font-mono text-[11px] text-slate-500">32-Bit FNV-1a</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex-1 rounded-2xl border border-indigo-500/30 bg-indigo-50/50 dark:bg-indigo-950/20 px-4 py-3 font-mono text-sm sm:text-base font-bold text-indigo-700 dark:text-indigo-400 break-all select-all">
              {hex}
            </div>
            <button
              onClick={() => handleCopy(hex, setCopiedHash)}
              className="inline-flex items-center justify-center gap-1.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-3 text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-sm"
              title="Copy hash to clipboard"
            >
              {copiedHash ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
