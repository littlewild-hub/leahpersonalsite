import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export const dynamic = 'force-static';

function readSource(filename) {
  return readFileSync(join(process.cwd(), filename), 'utf8');
}

function extractBody(html) {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

  if (!match) {
    throw new Error('Could not find a <body> element in index.html.');
  }

  return match[1];
}

export default function Home() {
  const body = extractBody(readSource('index.html'));
  const styles = readSource('styles.css');
  const script = readSource('script.js');

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <script dangerouslySetInnerHTML={{ __html: script }} />
    </>
  );
}
