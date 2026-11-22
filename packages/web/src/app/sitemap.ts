import type { MetadataRoute } from 'next';
import { ALL_ITEMS, CATEGORIES } from '../config/registry';
import { SITE_CONFIG } from '../lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().split('T')[0];

  // 1. Core Pages
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_CONFIG.siteUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0
    },
    {
      url: `${SITE_CONFIG.siteUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5
    }
  ];

  // 2. Category Hub Pages
  const categoryRoutes: MetadataRoute.Sitemap = Object.values(CATEGORIES).map((cat) => ({
    url: `${SITE_CONFIG.siteUrl}${cat.canonicalPath}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9
  }));

  // 3. Individual Mode and Tool Pages
  const itemRoutes: MetadataRoute.Sitemap = ALL_ITEMS.map((item) => ({
    url: `${SITE_CONFIG.siteUrl}${item.canonicalPath}`,
    lastModified: currentDate,
    changeFrequency: item.category === 'modes' ? 'weekly' : 'monthly',
    priority: item.category === 'modes' ? 0.9 : 0.8
  }));

  return [...coreRoutes, ...categoryRoutes, ...itemRoutes];
}
