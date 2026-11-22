import type { GameMode } from '@project/core';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RegistryItem {
  id: string;
  slug: string;
  category: 'modes' | 'tools';
  categoryName: string;
  name: string;
  shortDesc: string;
  headline: string;
  description: string;
  longDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  canonicalPath: string;
  iconName: string;
  features: string[];
  howToSteps: { step: string; instruction: string }[];
  faqs: FaqItem[];
  relatedSlugs: string[];
  modeId?: GameMode;
}

export interface CategoryInfo {
  slug: 'modes' | 'tools';
  name: string;
  headline: string;
  description: string;
  primaryKeyword: string;
  canonicalPath: string;
}

export const CATEGORIES: Record<'modes' | 'tools', CategoryInfo> = {
  modes: {
    slug: 'modes',
    name: 'Game Modes',
    headline: 'Explore 4 Unique Retro Snake Arcade Modes',
    description:
      'Discover all SnakeNest game modes: Classic Arena, Endless Border-Wrap, 60-Second Time Challenge, and Maze Obstacles. Play free online with high scores and touch controls.',
    primaryKeyword: 'snake game modes',
    canonicalPath: '/modes'
  },
  tools: {
    slug: 'tools',
    name: 'Developer Tools',
    headline: 'Free Client-Side Developer Utilities & Algorithms',
    description:
      'Browser-based, 100% private developer tools powered by the @project/core engine. Generate URL slugs, analyze text word counts, and compute fast 32-bit FNV-1a hashes offline.',
    primaryKeyword: 'developer utilities online',
    canonicalPath: '/tools'
  }
};

export const GAME_MODE_ITEMS: RegistryItem[] = [
  {
    id: 'classic',
    slug: 'classic',
    category: 'modes',
    categoryName: 'Game Modes',
    name: 'Classic Snake Mode',
    shortDesc: 'Walls & Body Collide',
    headline: 'Play Classic Snake Game Online – Original Retro Arcade Arena',
    description:
      'Play the definitive retro Snake experience online for free. Navigate arena walls, collect juicy apples, avoid tail collisions, and climb the local leaderboard.',
    longDescription:
      'Classic Mode brings the authentic 1970s and 1990s retro arcade Snake gameplay directly to your browser. Your snake slithers forward on a high-precision grid. Eating apples expands your length and boosts your score, while striking the perimeter walls or your own coils ends the run. Featuring responsive keyboard direction buffering, on-screen tactile mobile D-Pad, and native Web Audio synthesis.',
    primaryKeyword: 'classic snake game',
    secondaryKeywords: [
      'play classic snake online',
      'retro snake arcade',
      'original snake game',
      'free classic snake'
    ],
    canonicalPath: '/modes/classic',
    iconName: 'ShieldAlert',
    modeId: 'classic',
    features: [
      'Definitive wall-and-body collision physics',
      'Level scaling: speed increases every 100 points',
      'Customizable grid dimensions from 15×15 to 25×25',
      'Instant restart with Enter key or touch button',
      'Razor-sharp HTML5 Canvas rendering scaled to Retina DPI'
    ],
    howToSteps: [
      {
        step: '1. Select Difficulty',
        instruction: 'Pick your speed tier: Easy (6 m/s), Normal (9 m/s), Hard (13 m/s), or Expert (17 m/s).'
      },
      {
        step: '2. Steer with Precision',
        instruction: 'Use Arrow keys or W, A, S, D on desktop, or swipe and tactile D-pad on mobile.'
      },
      {
        step: '3. Collect Apples & Bonus Food',
        instruction: 'Consume red apples (+10 pts), temporary golden star fruit (+25 pts), and rare cosmic gems (+50 pts).'
      },
      {
        step: '4. Avoid Perimeter Walls',
        instruction: 'Maintain arena awareness. Crashing into borders or your own growing body triggers game over.'
      }
    ],
    faqs: [
      {
        question: 'What are the rules of Classic Snake Mode?',
        answer:
          'In Classic Mode, arena walls are solid hazards. Colliding with any boundary wall or your snake’s body causes instant game over. You earn points by collecting food and level up every 100 points.'
      },
      {
        question: 'How do points and multipliers work in Classic Mode?',
        answer:
          'Base points are 10 for normal apples, 25 for golden fruit, and 50 for cosmic gems. Your final points are multiplied by your selected difficulty: Easy (1.0×), Normal (1.25×), Hard (1.5×), and Expert (2.0×).'
      },
      {
        question: 'Can I play Classic Snake on my mobile phone?',
        answer:
          'Yes! SnakeNest includes natural swipe gestures directly on the game board and an on-screen ergonomic tactile D-Pad optimized for single-handed mobile gameplay.'
      }
    ],
    relatedSlugs: ['endless', 'time-challenge', 'obstacles']
  },
  {
    id: 'endless',
    slug: 'endless',
    category: 'modes',
    categoryName: 'Game Modes',
    name: 'Endless Snake Mode',
    shortDesc: 'Wrap-Around Borders',
    headline: 'Play Endless Snake Game Online – Border Wrap & Infinite Arena',
    description:
      'Play Endless Snake with border wrapping. Move off any arena boundary and seamlessly re-enter from the opposite side without dying.',
    longDescription:
      'Endless Mode eliminates perimeter wall fatalities by wrapping coordinate boundaries continuously across the arena. Moving through the top border re-enters from the bottom, while moving through the right border reappears on the left. The only fatal hazard is colliding with your own expanding tail, making it the perfect mode for long marathon runs, strategic coil management, and high-score hunting.',
    primaryKeyword: 'endless snake game',
    secondaryKeywords: [
      'wrap around snake',
      'borderless snake online',
      'infinite snake game',
      'no wall snake'
    ],
    canonicalPath: '/modes/endless',
    iconName: 'Infinity',
    modeId: 'endless',
    features: [
      'Seamless border wrap: continuous arena traversal',
      'Body collision hazards for balanced tactical play',
      'Full difficulty multiplier support up to 2.0×',
      'Audio synthesis without external audio files',
      'Automatic local high-score record preservation'
    ],
    howToSteps: [
      {
        step: '1. Slither Beyond the Border',
        instruction: 'Guide your snake directly through any arena wall to emerge seamlessly on the opposing side.'
      },
      {
        step: '2. Manage Tail Growth',
        instruction: 'As your snake grows longer, leave corridors open when wrapping between edges.'
      },
      {
        step: '3. Collect Bonus Fruits',
        instruction: 'Snag golden fruits and purple gems before their countdown timers expire.'
      },
      {
        step: '4. Set Lifetime Records',
        instruction: 'Reach unprecedented snake lengths without the risk of perimeter wall crashes.'
      }
    ],
    faqs: [
      {
        question: 'How does border wrapping work in Endless Mode?',
        answer:
          'When the snake’s head crosses an edge of the arena, it instantaneously appears at the corresponding coordinate on the opposite border with uninterrupted speed and orientation.'
      },
      {
        question: 'Can you die in Endless Snake Mode?',
        answer:
          'Yes. While wall collisions are disabled, self-collision with your own snake body or tail will still trigger game over.'
      },
      {
        question: 'Is Endless Mode easier than Classic Mode?',
        answer:
          'Early on, Endless Mode is more forgiving because perimeter walls cannot kill you. However, as the snake grows extremely long, avoiding your own looping body across wrap edges becomes a master challenge.'
      }
    ],
    relatedSlugs: ['classic', 'time-challenge', 'obstacles']
  },
  {
    id: 'time-challenge',
    slug: 'time-challenge',
    category: 'modes',
    categoryName: 'Game Modes',
    name: 'Time Challenge Mode',
    shortDesc: '60-Second Countdown',
    headline: 'Time Challenge Snake Game – 60-Second Speed Sprint Arcade',
    description:
      'Race against the clock in 60-second Time Challenge Snake! Eat apples to gain +3 seconds of bonus time and maximize your multiplier score.',
    longDescription:
      'Time Challenge is an adrenaline-packed arcade speed sprint where you start with a 60-second countdown timer. Every food item you devour adds +3 bonus seconds to your clock. To achieve high scores, you must maintain relentless forward momentum, plan shortest-path trajectories to newly spawned apples, and greedily collect bonus gems before time runs out.',
    primaryKeyword: 'time challenge snake',
    secondaryKeywords: [
      '60 second snake game',
      'speedrun snake',
      'time attack snake',
      'timer snake arcade'
    ],
    canonicalPath: '/modes/time-challenge',
    iconName: 'Timer',
    modeId: 'time-challenge',
    features: [
      '60-second initial countdown clock with HUD alert',
      '+3s bonus time rewarded for every food item consumed',
      'Higher spawn rates for golden fruits and cosmic gems',
      'Pulsing time-left HUD alert when clock falls below 10 seconds',
      'Wall and self-collision hazards enforce high-stakes steering'
    ],
    howToSteps: [
      {
        step: '1. Launch Fast',
        instruction: 'Hit Enter or tap Launch immediately. The 60-second timer begins counting down at first move.'
      },
      {
        step: '2. Feed Continuously',
        instruction: 'Each food consumed awards +3 bonus seconds, extending your survival clock.'
      },
      {
        step: '3. Prioritize Rare Food',
        instruction: 'Golden fruit (+25 pts) and cosmic gems (+50 pts) accelerate your score to record levels.'
      },
      {
        step: '4. Survive the Crunch',
        instruction: 'Balance rapid speed against wall precision as time ticks down.'
      }
    ],
    faqs: [
      {
        question: 'What happens when time runs out in Time Challenge?',
        answer:
          'When the countdown clock hits 0 seconds, the game ends immediately due to timeout, committing your final score and stats to local storage.'
      },
      {
        question: 'How do I add more time to the clock?',
        answer:
          'Every normal apple, bonus golden fruit, and cosmic gem you eat adds exactly +3 seconds of bonus time back onto your timer.'
      },
      {
        question: 'Can you die from walls in Time Challenge Mode?',
        answer:
          'Yes. Both perimeter wall collisions and self-collisions trigger instant game over, even if you still have seconds remaining on your timer.'
      }
    ],
    relatedSlugs: ['classic', 'endless', 'obstacles']
  },
  {
    id: 'obstacles',
    slug: 'obstacles',
    category: 'modes',
    categoryName: 'Game Modes',
    name: 'Obstacles Snake Mode',
    shortDesc: 'Static Maze Barriers',
    headline: 'Obstacles Snake Mode Online – Tactical Maze & Barrier Arena',
    description:
      'Navigate tactical barrier blocks and static maze barriers in Obstacles Snake Mode. Plan strategic routes and avoid getting trapped.',
    longDescription:
      'Obstacles Mode transforms the arena into a tactical maze populated by symmetrical static barrier blocks positioned across the four quadrants. The starting center area remains guaranteed safe, while surrounding corridors require precise navigation, tight turns, and spatial anticipation as your snake grows longer.',
    primaryKeyword: 'obstacles snake game',
    secondaryKeywords: [
      'maze snake game',
      'barrier snake arcade',
      'tactical snake online',
      'snake with obstacles'
    ],
    canonicalPath: '/modes/obstacles',
    iconName: 'Boxes',
    modeId: 'obstacles',
    features: [
      'Symmetrical 3-block corner quadrant barriers',
      'Safe central spawning zone prevents unfair starts',
      'Tactical corridor navigation challenging spatial awareness',
      'Full audio synthesis alerts for obstacle collisions',
      'Persistent record tracking across difficulty speeds'
    ],
    howToSteps: [
      {
        step: '1. Scout the Arena',
        instruction: 'Identify the static orange hazard blocks placed strategically in each quadrant.'
      },
      {
        step: '2. Start from Safe Center',
        instruction: 'Your initial snake spawns in the open center zone, safely clear of all barriers.'
      },
      {
        step: '3. Navigate Narrow Corridors',
        instruction: 'Use tight 90-degree turns to navigate around obstacle barriers to reach food items.'
      },
      {
        step: '4. Prevent Trapping Yourself',
        instruction: 'Avoid looping between an obstacle and a wall when your snake length exceeds 10 segments.'
      }
    ],
    faqs: [
      {
        question: 'Do food items spawn inside obstacle blocks?',
        answer:
          'No! The food spawning algorithm strictly filters out all obstacle coordinates, ensuring food only spawns on accessible empty arena cells.'
      },
      {
        question: 'Can obstacle blocks be destroyed?',
        answer:
          'No. Obstacles are permanent static barrier blocks that remain in place throughout your entire run.'
      },
      {
        question: 'Does the snake spawn on obstacles at the start?',
        answer:
          'No. A guaranteed safe zone of 3 cells around the arena center is enforced so your initial snake and first few moves are 100% collision-free.'
      }
    ],
    relatedSlugs: ['classic', 'endless', 'time-challenge']
  }
];

export const TOOL_ITEMS: RegistryItem[] = [
  {
    id: 'slug-generator',
    slug: 'slug-generator',
    category: 'tools',
    categoryName: 'Developer Tools',
    name: 'URL Slug Generator',
    shortDesc: 'SEO Clean URL Slugs',
    headline: 'Free URL Slug Generator Online – Clean, SEO-Friendly Slugs',
    description:
      'Convert titles and text into clean, URL-safe slugs instantly in your browser. Removes special characters, normalizes whitespace, and optimizes for SEO.',
    longDescription:
      'The SnakeNest URL Slug Generator transforms article titles, product names, and arbitrary strings into clean, human-readable, and search-engine-optimized URL slugs. It runs entirely on client-side algorithms from @project/core with zero server latency, zero analytics tracking, and instant one-click clipboard copying.',
    primaryKeyword: 'url slug generator',
    secondaryKeywords: [
      'slug generator online',
      'clean url creator',
      'seo slug tool',
      'slugify text'
    ],
    canonicalPath: '/tools/slug-generator',
    iconName: 'Link2',
    features: [
      'Instant real-time client-side conversion as you type',
      'One-click copy to clipboard with visual confirmation',
      'Strips punctuation, accents, and invalid URI characters',
      'Converts spaces and underscores into clean dashes',
      '100% client-side: zero text leaves your device'
    ],
    howToSteps: [
      {
        step: '1. Enter Your Text',
        instruction: 'Type or paste any article headline, title, or string into the input area.'
      },
      {
        step: '2. Review Generated Slug',
        instruction: 'The normalized, lowercased, hyphen-separated slug updates in real-time.'
      },
      {
        step: '3. Copy Output',
        instruction: 'Click the Copy button to immediately place the formatted slug on your clipboard.'
      }
    ],
    faqs: [
      {
        question: 'What is a URL slug?',
        answer:
          'A URL slug is the human-readable portion of a web address that identifies a specific page. Slugs are lowercase, hyphen-separated, and contain no spaces or special characters for optimal SEO and readability.'
      },
      {
        question: 'Does this slug generator send my text to a server?',
        answer:
          'No! All string transformations are executed locally in your browser memory using pure TypeScript algorithms from @project/core. Nothing is ever sent to a remote server.'
      },
      {
        question: 'Are special characters automatically removed?',
        answer:
          'Yes. The slugify function removes symbols, punctuation, and non-alphanumeric characters while trimming leading and trailing hyphens.'
      }
    ],
    relatedSlugs: ['text-analyzer', 'hash-generator']
  },
  {
    id: 'text-analyzer',
    slug: 'text-analyzer',
    category: 'tools',
    categoryName: 'Developer Tools',
    name: 'Text Analyzer & Word Counter',
    shortDesc: 'Words, Chars & Read Time',
    headline: 'Text Analyzer & Word Counter Online – Instant Writing Metrics',
    description:
      'Analyze word count, character count, and estimated reading time online. Real-time text statistics with 100% privacy and zero latency.',
    longDescription:
      'The SnakeNest Text Analyzer provides essential writing metrics including exact character count, total word count, and estimated reading duration based on the standard 200 words-per-minute benchmark. Ideal for copywriters, bloggers, and developers composing UI labels, meta descriptions, or technical documentation.',
    primaryKeyword: 'text analyzer online',
    secondaryKeywords: [
      'word counter tool',
      'character counter online',
      'reading time calculator',
      'free text metrics'
    ],
    canonicalPath: '/tools/text-analyzer',
    iconName: 'FileText',
    features: [
      'Real-time character and word count calculations',
      'Estimated reading duration in minutes (200 wpm standard)',
      'Built-in 32-bit FNV-1a checksum fingerprinting',
      'Handles multi-line input and irregular whitespace smoothly',
      'Completely offline and privacy-friendly'
    ],
    howToSteps: [
      {
        step: '1. Paste Your Content',
        instruction: 'Paste your draft, essay, or text snippet into the analysis editor.'
      },
      {
        step: '2. Inspect Metrics',
        instruction: 'Review immediate counts for total characters, words, and estimated reading duration.'
      },
      {
        step: '3. Fine-Tune Length',
        instruction: 'Adjust sentences to meet meta description thresholds (140-160 chars) or target word counts.'
      }
    ],
    faqs: [
      {
        question: 'How is reading time calculated?',
        answer:
          'Reading time is calculated assuming an average adult reading speed of 200 words per minute, rounded up to the nearest minute.'
      },
      {
        question: 'Does the character count include spaces?',
        answer:
          'Yes. The total character count includes letters, numbers, punctuation, and spaces to align with standard publishing and SEO meta tag requirements.'
      },
      {
        question: 'Is there a limit on how much text I can analyze?',
        answer:
          'Because the calculation runs entirely client-side in browser memory, you can analyze articles with tens of thousands of words without delays.'
      }
    ],
    relatedSlugs: ['slug-generator', 'hash-generator']
  },
  {
    id: 'hash-generator',
    slug: 'hash-generator',
    category: 'tools',
    categoryName: 'Developer Tools',
    name: 'FNV-1a Hash Generator',
    shortDesc: 'Fast 32-Bit Checksum',
    headline: 'FNV-1a Hash Generator Online – Fast 32-Bit String Checksums',
    description:
      'Compute fast non-cryptographic 32-bit FNV-1a hashes in real-time. Ideal for cache keys, hash tables, and data fingerprinting.',
    longDescription:
      'The SnakeNest FNV-1a Hash Generator calculates fast, non-cryptographic 32-bit Fowler–Noll–Vo hashes directly in your browser. FNV-1a is renowned for high dispersion, minimal collision rates on short strings, and speed, making it the ideal algorithm for cache key generation, hash tables, and client-side data identification.',
    primaryKeyword: 'fnv1a hash generator',
    secondaryKeywords: [
      '32 bit hash generator',
      'string hash online',
      'fnv hash tool',
      'fast checksum calculator'
    ],
    canonicalPath: '/tools/hash-generator',
    iconName: 'Hash',
    features: [
      'Pure 32-bit FNV-1a non-cryptographic algorithm',
      'Real-time output with 8-character hexadecimal formatting',
      'One-click copy to clipboard with toast notification',
      'Direct algorithm export from @project/core',
      'Zero server dependencies: 100% playable offline'
    ],
    howToSteps: [
      {
        step: '1. Enter String',
        instruction: 'Type or paste any text string into the hash input field.'
      },
      {
        step: '2. View Hex Checksum',
        instruction: 'Watch the 32-bit hexadecimal representation calculate in real time.'
      },
      {
        step: '3. Copy Hash',
        instruction: 'Click the Copy button to copy the 0x-prefixed hash string directly.'
      }
    ],
    faqs: [
      {
        question: 'What is FNV-1a?',
        answer:
          'FNV-1a (Fowler–Noll–Vo) is a fast non-cryptographic hash function designed for high dispersion and low collision rates, commonly used in hash tables, database indexing, and cache keys.'
      },
      {
        question: 'Is FNV-1a safe for passwords or cryptographic signatures?',
        answer:
          'No! FNV-1a is intentionally non-cryptographic and optimized for speed and dispersion. It should never be used for password hashing, digital signatures, or sensitive security tokens.'
      },
      {
        question: 'What format does this tool output?',
        answer:
          'The tool outputs standard 32-bit hexadecimal strings padded to 8 characters with a 0x prefix (e.g., 0x811c9dc5).'
      }
    ],
    relatedSlugs: ['slug-generator', 'text-analyzer']
  }
];

export const ALL_ITEMS: RegistryItem[] = [...GAME_MODE_ITEMS, ...TOOL_ITEMS];
export const GAME_MODES: RegistryItem[] = GAME_MODE_ITEMS;
export const DEV_TOOLS: RegistryItem[] = TOOL_ITEMS;

export function getItemBySlug(slug: string): RegistryItem | undefined {
  return ALL_ITEMS.find((item) => item.slug === slug);
}

export function getItemsByCategory(category: 'modes' | 'tools'): RegistryItem[] {
  return ALL_ITEMS.filter((item) => item.category === category);
}

export function getRelatedItems(item: RegistryItem): RegistryItem[] {
  return item.relatedSlugs
    .map((s) => getItemBySlug(s))
    .filter((r): r is RegistryItem => r !== undefined);
}
