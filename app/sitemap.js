import { works } from '../data/catalog-extended';

const baseUrl = 'https://www.leahbuzek.com';

export default function sitemap() {
  const corePages = [
    { url: baseUrl, priority: 1, changeFrequency: 'weekly' },
    { url: `${baseUrl}/work`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/speaking`, priority: 0.85, changeFrequency: 'monthly' },
    { url: `${baseUrl}/organizations`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/writing`, priority: 0.8, changeFrequency: 'daily' },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: 'monthly' },
  ];

  const workPages = works.map((work) => ({
    url: `${baseUrl}/work/${work.slug}`,
    changeFrequency: work.status?.toLowerCase().includes('development') ? 'monthly' : 'yearly',
    priority: ['traces', 'epic', 'continuity-ethics', 'calling-it-what-it-is'].includes(work.slug) ? 0.85 : 0.7,
  }));

  return [...corePages, ...workPages];
}
