import type { Metadata } from 'next';
import { PrivacyPolicyClient } from './PrivacyPolicyClient';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'SnakeNest privacy policy: 100% client-side, zero personal data tracking, private local-storage high score persistence, and offline Web Audio architecture.',
  alternates: {
    canonical: 'https://snakenest.netlify.app/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <PrivacyPolicyClient />
    </main>
  );
}
