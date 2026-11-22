'use client';

import React from 'react';
import { useGame } from '../context/GameContext';
import { useKeyboardControls } from '../hooks/useKeyboardControls';
import { GameBoard } from '../components/GameBoard';
import { ScoreBoard } from '../components/ScoreBoard';
import { GameOverlay } from '../components/GameOverlay';
import { GameControls } from '../components/GameControls';
import { GameModeSelector } from '../components/GameModeSelector';
import { DifficultySelector } from '../components/DifficultySelector';
import { HighScorePanel } from '../components/HighScorePanel';
import { Instructions } from '../components/Instructions';
import Link from 'next/link';
import { GAME_MODES, DEV_TOOLS } from '../config/registry';
import { Gamepad2, Wrench, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function HomePage() {
  const {
    gameState,
    settings,
    statistics,
    changeDirection,
    startGame,
    togglePause,
    restartGame,
    setGameMode,
    setDifficulty,
    isSettingsOpen,
  } = useGame();

  // Bind Keyboard Controls
  useKeyboardControls({
    onDirectionChange: changeDirection,
    onTogglePause: togglePause,
    onStartOrRestart: () => {
      if (gameState.status === 'ready' || gameState.status === 'game-over') {
        startGame();
      }
    },
    isEnabled: !isSettingsOpen,
  });

  const isDark = settings.theme === 'dark';

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 sm:space-y-12">
      {/* SEO Main Heading with Generous Breathing Spacing */}
      <div className="text-center space-y-2 pt-2 sm:pt-4">
        <h1
          className={`text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight transition-colors ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Snake Game Online
        </h1>
        <p
          className={`text-xs sm:text-sm max-w-lg mx-auto leading-relaxed transition-colors ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          Navigate the arena, consume glowing fruit, and shatter high-score records across 4 unique battle modes.
        </p>
      </div>

      {/* Unified Game Stage: Side-by-Side on Desktop (Arena + Controls/Selectors), Single-Column on Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
        {/* Left Column: Game Board Arena & Score HUD */}
        <section className="relative flex flex-col items-center gap-5 sm:gap-6 w-full max-w-full">
          {/* Score Board */}
          <ScoreBoard gameState={gameState} settings={settings} />

          {/* Interactive Game Board with Overlay */}
          <div className="relative w-full max-w-[min(100%,460px)] lg:max-w-none">
            <div className="arcade-ambient-glow" />
            <GameBoard
              gameState={gameState}
              settings={settings}
              onDirectionChange={changeDirection}
              onTogglePause={togglePause}
              onStartOrRestart={startGame}
            />
            <GameOverlay
              gameState={gameState}
              settings={settings}
              onStart={startGame}
              onResume={togglePause}
              onRestart={restartGame}
              onOpenModesModal={() => {
                const el = document.getElementById('mode-selector-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>

          {/* Touch D-pad & Action Buttons */}
          <GameControls
            status={gameState.status}
            theme={settings.theme}
            onDirectionChange={changeDirection}
            onTogglePause={togglePause}
            onRestart={restartGame}
          />
        </section>

        {/* Right Column: Mode Selector, Difficulty Selector & Quick Stats */}
        <aside className="w-full space-y-6 sm:space-y-7">
          <section id="mode-selector-section" className="space-y-5">
            <GameModeSelector
              currentMode={settings.gameMode}
              theme={settings.theme}
              onSelectMode={setGameMode}
              disabled={gameState.status === 'playing'}
            />

            <DifficultySelector
              currentDifficulty={settings.difficulty}
              theme={settings.theme}
              onSelectDifficulty={setDifficulty}
              disabled={gameState.status === 'playing'}
            />
          </section>

          {/* Local Leaderboard & High Score Panel */}
          <section id="leaderboard">
            <HighScorePanel statistics={statistics} theme={settings.theme} />
          </section>
        </aside>
      </div>

      {/* Internal Linking & Category Hub Discovery Cards */}
      <section className="space-y-8 pt-4">
        {/* Game Modes Hub Link Section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <h2 className={`text-xl sm:text-2xl font-bold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Arcade Battle Modes
              </h2>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Play dedicated full-screen versions with specialized mechanics and customized rules.
              </p>
            </div>
            <Link
              href="/modes"
              className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                isDark ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-700'
              }`}
            >
              <span>View All 4 Modes</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GAME_MODES.map((mode) => (
              <Link
                key={mode.slug}
                href={`/modes/${mode.slug}`}
                className={`group rounded-2xl border p-4 transition-all duration-200 hover:-translate-y-0.5 ${
                  isDark
                    ? 'border-white/10 bg-slate-900/60 hover:bg-slate-900 hover:border-emerald-500/40'
                    : 'border-slate-200 bg-white hover:border-emerald-400 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                    <Gamepad2 className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-500 font-bold">
                    Play Mode →
                  </span>
                </div>
                <h3 className={`text-sm font-bold font-heading group-hover:text-emerald-500 transition-colors ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {mode.name}
                </h3>
                <p className={`text-xs mt-1 line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {mode.shortDesc}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Developer Tools Hub Link Section */}
        <div className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <h2 className={`text-xl sm:text-2xl font-bold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Developer Utilities & Tools
              </h2>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                100% client-side web tools that run with zero server latency and absolute privacy.
              </p>
            </div>
            <Link
              href="/tools"
              className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
              }`}
            >
              <span>Explore All Tools</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {DEV_TOOLS.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className={`group rounded-2xl border p-4 transition-all duration-200 hover:-translate-y-0.5 ${
                  isDark
                    ? 'border-white/10 bg-slate-900/60 hover:bg-slate-900 hover:border-blue-500/40'
                    : 'border-slate-200 bg-white hover:border-blue-400 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                    <Wrench className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-500 font-bold">
                    Open Utility →
                  </span>
                </div>
                <h3 className={`text-sm font-bold font-heading group-hover:text-blue-500 transition-colors ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {tool.name}
                </h3>
                <p className={`text-xs mt-1 line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {tool.shortDesc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive SEO Content & FAQ below the unified game stage */}
      <section id="how-to-play" className="pt-8 sm:pt-12 border-t border-slate-200/60 dark:border-slate-800/60">
        <Instructions theme={settings.theme} />
      </section>
    </main>
  );
}
