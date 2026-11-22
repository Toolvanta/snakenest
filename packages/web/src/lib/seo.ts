import type { Metadata } from 'next';
import type { RegistryItem, CategoryInfo } from '../config/registry';

export const SITE_CONFIG = {
  name: 'SnakeNest',
  siteUrl: 'https://snakenest.netlify.app',
  defaultTitle: 'Snake Game Online – Play Classic Snake Game Free',
  defaultDescription:
    'Play Snake Game online for free. Enjoy classic retro arcade gameplay with 4 modes, 4 difficulty tiers, local high scores, keyboard controls, and touch support.',
  ogImage: 'https://snakenest.netlify.app/og-snake-game.png',
  author: 'Shoaib M. Arif',
  authorUrl: 'https://github.com/shoaibmarif',
  twitterHandle: '@shoaibmarif',
  locale: 'en_US'
};

export interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  noindex?: boolean;
}

export function buildPageMetadata(options: PageMetadataOptions): Metadata {
  const { title, description, path, keywords = [], ogImage = SITE_CONFIG.ogImage, noindex = false } = options;
  const canonicalUrl = `${SITE_CONFIG.siteUrl}${path.startsWith('/') ? path : `/${path}`}`;

  return {
    title,
    description,
    keywords: [
      ...keywords,
      'snake game',
      'play snake online',
      'retro arcade',
      'snakenest'
    ],
    authors: [{ name: SITE_CONFIG.author, url: SITE_CONFIG.authorUrl }],
    creator: SITE_CONFIG.author,
    publisher: SITE_CONFIG.name,
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
          'max-video-preview': -1
        },
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      title,
      description,
      locale: SITE_CONFIG.locale,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - SnakeNest Preview`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  };
}

export function buildItemMetadata(item: RegistryItem): Metadata {
  return buildPageMetadata({
    title: item.name,
    description: item.description,
    path: item.canonicalPath,
    keywords: [item.primaryKeyword, ...item.secondaryKeywords]
  });
}

export function buildCategoryMetadata(category: CategoryInfo): Metadata {
  return buildPageMetadata({
    title: `${category.name} – Free Online Arcade & Tools`,
    description: category.description,
    path: category.canonicalPath,
    keywords: [category.primaryKeyword, category.name.toLowerCase()]
  });
}

export interface BreadcrumbCrumb {
  name: string;
  url: string;
}

export function buildBreadcrumbsJsonLd(crumbs: BreadcrumbCrumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url.startsWith('http') ? crumb.url : `${SITE_CONFIG.siteUrl}${crumb.url}`
    }))
  };
}

export function buildItemJsonLd(item: RegistryItem) {
  const canonicalUrl = `${SITE_CONFIG.siteUrl}${item.canonicalPath}`;

  const breadcrumbs = buildBreadcrumbsJsonLd([
    { name: 'Home', url: '/' },
    { name: item.categoryName, url: `/${item.category}` },
    { name: item.name, url: item.canonicalPath }
  ]);

  const specificSchema =
    item.category === 'modes'
      ? {
          '@context': 'https://schema.org',
          '@type': 'VideoGame',
          '@id': `${canonicalUrl}#game`,
          name: item.name,
          headline: item.headline,
          description: item.longDescription,
          url: canonicalUrl,
          image: SITE_CONFIG.ogImage,
          genre: ['Arcade', 'Retro', 'Action', 'Casual'],
          playMode: 'SinglePlayer',
          applicationCategory: 'Game',
          operatingSystem: 'Any modern web browser',
          inLanguage: 'en',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          },
          author: {
            '@type': 'Person',
            name: SITE_CONFIG.author,
            url: SITE_CONFIG.authorUrl
          }
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          '@id': `${canonicalUrl}#webapp`,
          name: item.name,
          headline: item.headline,
          description: item.longDescription,
          url: canonicalUrl,
          image: SITE_CONFIG.ogImage,
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Any modern web browser',
          browserRequirements: 'Requires modern JavaScript support',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          },
          author: {
            '@type': 'Person',
            name: SITE_CONFIG.author,
            url: SITE_CONFIG.authorUrl
          }
        };

  const faqSchema =
    item.faqs && item.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          '@id': `${canonicalUrl}#faq`,
          mainEntity: item.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          }))
        }
      : null;

  return [breadcrumbs, specificSchema, ...(faqSchema ? [faqSchema] : [])];
}

export function buildCategoryJsonLd(category: CategoryInfo, items: RegistryItem[]) {
  const canonicalUrl = `${SITE_CONFIG.siteUrl}${category.canonicalPath}`;

  const breadcrumbs = buildBreadcrumbsJsonLd([
    { name: 'Home', url: '/' },
    { name: category.name, url: category.canonicalPath }
  ]);

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: category.name,
    description: category.description,
    url: canonicalUrl,
    numberOfItems: items.length,
    itemListElement: items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      description: it.shortDesc,
      url: `${SITE_CONFIG.siteUrl}${it.canonicalPath}`
    }))
  };

  return [breadcrumbs, itemList];
}
