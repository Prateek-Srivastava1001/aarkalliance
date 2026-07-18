/**
 * Optimize images for the website.
 *
 * Drop your original photos (JPG / JPEG / PNG) anywhere under /public/images,
 * then run:   npm run optimize:images
 *
 * Every raster image is resized and re-encoded to compact WebP (the original
 * JPG/PNG is removed). Then point the matching `image` field in
 * src/content/*.json at the new ".webp" file (same name).
 *
 * Images already in WebP are left untouched.
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";

const ROOT = "public/images";
// Max width by location — hero is wide, cards are small.
const widthFor = (rel) => (rel.includes("/") ? 900 : 1600);
const RASTER = /\.(jpe?g|png)$/i;

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    return e.isDirectory() ? walk(full) : [full];
  });
}

const files = walk(ROOT).filter((f) => RASTER.test(f));
if (!files.length) {
  console.log("No JPG/PNG images to optimize (everything is already WebP).");
  process.exit(0);
}

let saved = 0;
for (const src of files) {
  const rel = path.relative(ROOT, src);
  const out = src.replace(RASTER, ".webp");
  const before = fs.statSync(src).size;
  await sharp(src)
    .resize({ width: widthFor(rel), withoutEnlargement: true })
    .webp({ quality: 72 })
    .toFile(out);
  fs.unlinkSync(src);
  const after = fs.statSync(out).size;
  saved += before - after;
  console.log(
    `${rel}  ${(before / 1024) | 0}KB -> ${path.basename(out)} ${(after / 1024) | 0}KB`
  );
}
console.log(`\nDone. Saved ~${(saved / 1024) | 0}KB. Remember to set the .webp path in src/content/*.json.`);
