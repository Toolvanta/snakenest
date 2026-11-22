'use client';

import React, { useEffect } from 'react';
import type { GameMode } from '@project/core';
import { useGame } from '../../../context/GameContext';
import { useKeyboardControls } from '../../../hooks/useKeyboardControls';
import { GameBoard } from '../../../components/GameBoard';
import { ScoreBoard } from '../../../components/ScoreBoard';
import { GameOverlay } from '../../../components/GameOverlay';
import { GameControls } from '../../../components/GameControls';
import { DifficultySelector } from '../../../components/DifficultySelector';
import { HighScorePanel } from '../../../components/HighScorePanel';

interface ModeGameArenaProps {
  initialMode: GameMode;
}

export const ModeGameArena: React.FC<ModeGameArenaProps> = ({ initialMode }) => {
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
    isSettingsOpen
  } = useGame();

  // Ensure game mode matches the URL route
  useEffect(() => {
    if (settings.gameMode !== initialMode) {
      setGameMode(initialMode);
    }
  }, [initialMode, settings.gameMode, setGameMode]);

  // Keyboard controls
  useKeyboardControls({
    onDirectionChange: changeDirection,
    onTogglePause: togglePause,
    onStartOrRestart: () => {
      if (gameState.status === 'ready' || gameState.status === 'game-over') {
        startGame();
      }
    },
    isEnabled: !isSettingsOpen
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
      {/* Left Column: Game Board Arena & Score HUD */}
      <section aria-label="Game Board Arena" className="relative flex flex-col items-center gap-5 sm:gap-6 w-full max-w-full">
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

      {/* Right Column: Speed/Difficulty Selector & Local High Score Leaderboard */}
      <aside aria-label="Game Controls and Leaderboard" className="w-full space-y-6 sm:space-y-7">
        <section className="space-y-4">
          <DifficultySelector
            currentDifficulty={settings.difficulty}
            theme={settings.theme}
            onSelectDifficulty={setDifficulty}
            disabled={gameState.status === 'playing'}
          />
        </section>

        <section id="leaderboard">
          <HighScorePanel statistics={statistics} theme={settings.theme} />
        </section>
      </aside>
    </div>
  );
};
