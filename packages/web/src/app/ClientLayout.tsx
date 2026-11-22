'use client';

import React from 'react';
import { GameProvider, useGame } from '../context/GameContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SettingsPanel } from '../components/SettingsPanel';

function LayoutShell({ children }: { children: React.ReactNode }) {
  const {
    settings,
    toggleSound,
    toggleTheme,
    isSettingsOpen,
    setIsSettingsOpen,
    updateSetting,
    resetData,
  } = useGame();

  const isDark = settings.theme === 'dark';

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden flex flex-col transition-colors duration-200 selection:bg-emerald-500 selection:text-white ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <Header
        settings={settings}
        onToggleSound={toggleSound}
        onToggleTheme={toggleTheme}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      <div className="flex-1 flex flex-col">{children}</div>

      <SettingsPanel
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onUpdateSetting={updateSetting}
        onResetData={resetData}
      />

      <Footer theme={settings.theme} />
    </div>
  );
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <GameProvider>
      <LayoutShell>{children}</LayoutShell>
    </GameProvider>
  );
}
