import { works } from '../data/catalog';

const baseUrl = 'https://leahbuzek.com';

export default function sitemap() {
  const now = new Date();

  const corePages = [
    { url: baseUrl, priority: 1, changeFrequency: 'weekly' },
    { url: `${baseUrl}/work`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/writing`, priority: 0.8, changeFrequency: 'daily' },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: 'monthly' },
  ].map((page) => ({ ...page, lastModified: now }));

  const workPages = works.map((work) => ({
    url: `${baseUrl}/work/${work.slug}`,
    lastModified: now,
    changeFrequency: work.status?.toLowerCase().includes('development') ? 'monthly' : 'yearly',
    priority: ['traces', 'epic', 'continuity-ethics', 'calling-it-what-it-is'].includes(work.slug) ? 0.85 : 0.7,
  }));

  return [...corePages, ...workPages];
}
