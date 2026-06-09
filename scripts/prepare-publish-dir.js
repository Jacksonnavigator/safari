import { existsSync, rmSync, mkdirSync, copyFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

function copyDir(src, dest) {
  if (!existsSync(src)) return false;
  if (existsSync(dest)) rmSync(dest, { recursive: true, force: true });
  mkdirSync(dest, { recursive: true });
  for (const entry of readdirSync(src)) {
    const srcPath = join(src, entry);
    const destPath = join(dest, entry);
    if (statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
  return true;
}

const outDirs = [
  'dist/client',
  'dist',
];

const publishDir = 'build';

let copied = false;
for (const d of outDirs) {
  if (existsSync(d)) {
    console.log(`Copying "+d+" -> ${publishDir}`);
    copyDir(d, publishDir);
    copied = true;
    break;
  }
}

if (!copied) {
  console.error('No build output found to publish. Expected one of: ' + outDirs.join(', '));
  process.exit(1);
}

console.log('Publish directory prepared:', publishDir);
