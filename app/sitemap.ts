import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hdung7903.id.vn';

  // Define site routes
  const routes = [
    '',
    '/projects/tram-hoc',
    '/projects/tea-craft',
    '/projects/erp-template',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
