'use client';

import React from 'react';
import { useGame } from '../../context/GameContext';
import { PrivacyPolicy } from '../../components/PrivacyPolicy';

export function PrivacyPolicyClient() {
  const { settings } = useGame();
  return <PrivacyPolicy theme={settings.theme} />;
}
