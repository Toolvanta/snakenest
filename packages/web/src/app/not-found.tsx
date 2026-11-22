'use client';

import React from 'react';
import { useGame } from '../context/GameContext';
import { NotFoundPage } from '../components/NotFoundPage';

export default function NotFound() {
  const { settings } = useGame();
  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <NotFoundPage theme={settings.theme} />
    </main>
  );
}
