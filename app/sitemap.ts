import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vondera.app';
  const locales = ['en', 'ar'];

  const routes = [
    '',
    '/vmedia',
    '/about',
    '/contact',
    '/blog',
    '/careers',
    '/partners',
    '/developers',
    '/apps',
    '/tutorials',
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '/blog' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : route === '/vmedia' ? 0.9 : 0.8,
      });
    });
  });

  return sitemap;
}
