'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSnakeGame } from '../hooks/useSnakeGame';
import type { GameState, GameSettings, GameStatistics, Direction, GameMode, Difficulty } from '@project/core';

interface GameContextType {
  gameState: GameState;
  settings: GameSettings;
  statistics: GameStatistics;
  changeDirection: (dir: Direction) => void;
  startGame: () => void;
  togglePause: () => void;
  restartGame: () => void;
  setGameMode: (mode: GameMode) => void;
  setDifficulty: (diff: Difficulty) => void;
  toggleSound: () => void;
  toggleTheme: () => void;
  updateSetting: <K extends keyof GameSettings>(key: K, value: GameSettings[K]) => void;
  resetData: () => void;
  isSettingsOpen: boolean;
  setIsSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameContext = createContext<GameContextType | null>(null);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const snakeGame = useSnakeGame();

  // Apply dark/light class to root element
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    if (snakeGame.settings.theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
  }, [snakeGame.settings.theme]);

  return (
    <GameContext.Provider
      value={{
        ...snakeGame,
        isSettingsOpen,
        setIsSettingsOpen,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export function useGame(): GameContextType {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
