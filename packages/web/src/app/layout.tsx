import type { Metadata, Viewport } from 'next';
import { Montserrat, Poppins } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { ClientLayout } from './ClientLayout';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#090d16',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://snakenest.netlify.app'),
  title: {
    default: 'Snake Game Online – Play Classic Snake Game Free',
    template: '%s | SnakeNest',
  },
  description:
    'Play Snake Game online for free. Enjoy classic Snake gameplay with multiple modes, difficulty levels, high scores, keyboard controls, and mobile touch support.',
  keywords: [
    'snake game',
    'play snake online',
    'retro arcade',
    'classic snake',
    'free snake game',
    'browser game',
    'mobile snake',
    'snakenest',
  ],
  authors: [{ name: 'Shoaib M. Arif', url: 'https://github.com/shoaibmarif' }],
  creator: 'Shoaib M. Arif',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    url: 'https://snakenest.netlify.app/',
    siteName: 'SnakeNest',
    title: 'Snake Game Online – Play Classic Snake Game Free',
    description:
      'Play Snake Game online for free. Enjoy classic Snake gameplay with multiple modes, difficulty levels, high scores, keyboard controls, and mobile touch support.',
    images: [
      {
        url: 'https://snakenest.netlify.app/og-snake-game.png',
        width: 1200,
        height: 630,
        alt: 'Snake Game Online - SnakeNest Arcade Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snake Game Online – Play Classic Snake Game Free',
    description:
      'Play Snake Game online for free. Enjoy classic Snake gameplay with multiple modes, difficulty levels, high scores, keyboard controls, and mobile touch support.',
    images: ['https://snakenest.netlify.app/og-snake-game.png'],
  },
  alternates: {
    canonical: 'https://snakenest.netlify.app/',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://snakenest.netlify.app/#website',
      url: 'https://snakenest.netlify.app/',
      name: 'SnakeNest',
      alternateName: 'Snake Game Online',
      description: 'Play classic Snake Game online for free with multiple modes, high scores, and mobile touch support.',
      inLanguage: 'en',
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://snakenest.netlify.app/#webapp',
      name: 'Snake Game Online',
      alternateName: 'SnakeNest',
      url: 'https://snakenest.netlify.app/',
      applicationCategory: 'GameApplication',
      operatingSystem: 'Any modern web browser',
      browserRequirements: 'Requires HTML5 Canvas and Web Audio API support',
      description: 'A high-performance modern web edition of classic retro Snake featuring 4 game modes, synthesized audio, and touch controls.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      author: {
        '@type': 'Person',
        name: 'Shoaib M. Arif',
        url: 'https://github.com/shoaibmarif',
      },
    },
    {
      '@type': 'VideoGame',
      '@id': 'https://snakenest.netlify.app/#game',
      name: 'Snake Game Online',
      description: 'Play the classic retro Snake Game in your browser. Grow your snake, collect apples, avoid walls and obstacles, and beat your high scores.',
      genre: ['Arcade', 'Retro', 'Casual'],
      playMode: 'SinglePlayer',
      applicationCategory: 'Game',
      operatingSystem: 'Any modern web browser',
      inLanguage: 'en',
      image: 'https://snakenest.netlify.app/og-snake-game.png',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://snakenest.netlify.app/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I control the snake on desktop and mobile?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'On desktop, use the Arrow keys or W, A, S, D to steer. Use the Spacebar to pause or resume, and Enter to start or restart. On mobile and touch devices, use either the on-screen tactile D-pad or swipe directly in any direction on the game board.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the differences between the game modes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Classic Mode ends if you hit the arena walls or your own tail. Endless Mode enables border wrapping so you seamlessly re-enter from the opposite side. Time Challenge gives you a 60-second timer where each food eaten rewards +3 bonus seconds. Obstacles Mode places static barrier blocks across the board.',
          },
        },
        {
          '@type': 'Question',
          name: 'How are points and score multipliers calculated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Normal red apples award 10 base points. Bonus golden fruits award 25 points. Special purple cosmic gems award 50 points. Difficulty multipliers scale your points: Easy (1.0×), Normal (1.25×), Hard (1.5×), and Expert (2.0×).',
          },
        },
        {
          '@type': 'Question',
          name: 'Does this game store my personal data or require an account?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No! Snake Game is 100% client-side and privacy-friendly. All personal bests, high scores, and preferences are stored exclusively on your device via browser LocalStorage. No server, database, or account is ever required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I play this Snake Game completely offline?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Once loaded, the game relies entirely on client-side HTML5 Canvas and native Web Audio API synthesis without external API dependencies, allowing full offline play.',
          },
        },
      ],
    },
  ],
};

const themeScript = `
  try {
    var stored = localStorage.getItem('snake-game-settings-v1');
    if (stored) {
      var parsed = JSON.parse(stored);
      if (parsed.theme === 'light') {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    }
  } catch (e) {}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchema),
          }}
        />
        {/* Google Tag Manager (lazy loaded for optimal LCP / INP performance) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E9KYVZDRWT"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E9KYVZDRWT');
          `}
        </Script>
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} font-body min-h-screen antialiased selection:bg-emerald-500 selection:text-white`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
