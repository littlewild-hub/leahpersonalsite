const { copyFileSync, mkdirSync } = require('node:fs');
const { join } = require('node:path');

const outputDir = join(process.cwd(), 'dist');
const files = ['index.html', 'styles.css', 'script.js', 'favicon.svg'];

mkdirSync(outputDir, { recursive: true });

for (const file of files) {
  copyFileSync(join(process.cwd(), file), join(outputDir, file));
}

console.log(`Built ${files.length} static files into dist/`);
