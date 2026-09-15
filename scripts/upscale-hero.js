const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const images = [
  'hero-bg.jpg',
  'hero-slide2.jpg',
  'hero-slide3.jpg',
  'hero-slide4.jpg',
  'hero-slide5.jpg',
  'hero-slide6.jpg',
  'hero-slide7.jpg',
];

async function run() {
  for (const imgName of images) {
    const srcPath = path.join(publicDir, imgName);
    const tempPath = path.join(publicDir, 'temp-' + imgName);

    console.log(`Processing ${imgName} to 4K UHD (3840x2144)...`);
    await sharp(srcPath)
      .resize(3840, 2144, {
        kernel: sharp.kernel.lanczos3,
        fit: 'cover',
        position: 'center',
      })
      .sharpen({ sigma: 1.1, m1: 1.0, m2: 2.0 })
      .jpeg({
        quality: 98,
        chromaSubsampling: '4:4:4',
        mozjpeg: true,
      })
      .toFile(tempPath);

    fs.unlinkSync(srcPath);
    fs.renameSync(tempPath, srcPath);

    const stats = fs.statSync(srcPath);
    console.log(`  ✓ Done ${imgName}: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);
  }

  // Clean up any test file
  const testFile = path.join(publicDir, 'hero-bg-4k.jpg');
  if (fs.existsSync(testFile)) fs.unlinkSync(testFile);

  console.log('All 7 hero images upscaled to 4K UHD successfully!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
