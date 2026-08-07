const SOURCES = [
  {
    platform: 'Medium',
    profile: 'https://medium.com/@progresswithpurpose',
    feed: 'https://medium.com/feed/@progresswithpurpose',
  },
  {
    platform: 'Substack',
    profile: 'https://substack.com/@coordinatesmayvary',
    feed: 'https://coordinatesmayvary.substack.com/feed',
  },
];

function decode(value = '') {
  return value
    .replace(/^<!\[CDATA\[|\]\]>$/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

function plainText(value = '') {
  return decode(value)
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tag(block, names) {
  for (const name of names) {
    const match = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, 'i'));
    if (match) return decode(match[1]);
  }
  return '';
}

function linkFrom(block) {
  const direct = tag(block, ['link']);
  if (direct && /^https?:/i.test(plainText(direct))) return plainText(direct);

  const href = block.match(/<link[^>]+href=["']([^"']+)["'][^>]*>/i);
  return href ? decode(href[1]) : '';
}

function normalDate(value) {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString();
}

function parseFeed(xml, source) {
  const blocks = xml.match(/<item\b[\s\S]*?<\/item>|<entry\b[\s\S]*?<\/entry>/gi) || [];

  return blocks.slice(0, 8).map((block, index) => {
    const title = plainText(tag(block, ['title'])) || 'Untitled';
    const description = plainText(tag(block, ['description', 'summary', 'content:encoded', 'content']));
    const date = plainText(tag(block, ['pubDate', 'published', 'updated']));

    return {
      id: `${source.platform}-${index}-${title}`,
      title,
      url: linkFrom(block) || source.profile,
      excerpt: description.slice(0, 240),
      date: normalDate(date),
      platform: source.platform,
      profile: source.profile,
    };
  });
}

async function fetchSource(source) {
  try {
    const response = await fetch(source.feed, {
      next: { revalidate: 3600 },
      headers: { 'User-Agent': 'LeahBuzek.com/1.0' },
    });

    if (!response.ok) return [];
    return parseFeed(await response.text(), source);
  } catch {
    return [];
  }
}

export async function getExternalWriting() {
  const groups = await Promise.all(SOURCES.map(fetchSource));
  return groups
    .flat()
    .filter((post) => post.title.trim().toLowerCase() !== 'coming soon')
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

export { SOURCES };
