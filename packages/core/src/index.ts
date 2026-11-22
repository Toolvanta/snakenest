export * from './models/types';
export * from './algorithms/formatter';

// Game Engine Exports
export * from './game/types';
export * from './game/constants';
export * from './game/collision';
export * from './game/food';
export * from './game/scoring';
export * from './game/gameModes';
export * from './game/gameEngine';

export const CORE_VERSION = '1.0.0';

export function createDefaultWorkspace(name = 'Modern Monorepo'): import('./models/types').WorkspaceMetadata {
  return {
    id: 'ws_' + Math.random().toString(36).substring(2, 9),
    name,
    version: CORE_VERSION,
    createdAt: Date.now(),
    environment: 'development'
  };
}
