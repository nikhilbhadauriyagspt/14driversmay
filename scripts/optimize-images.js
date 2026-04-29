import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');

const CONFIG = {
    'guide': { width: 500, quality: 75 },
    'needdriver': { width: 500, quality: 75 },
    'images': { width: 600, quality: 75 },
    'banner': { width: 1200, quality: 80 }
};

async function walk(dir) {
    let files = [];
    if (!fs.existsSync(dir)) return files;
    const list = fs.readdirSync(dir);
    for (const file of list) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            files = files.concat(await walk(filePath));
        } else {
            files.push(filePath);
        }
    }
    return files;
}

async function optimize() {
    console.log('Starting image optimization...');
    const files = await walk(PUBLIC_DIR);
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp'];

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if (imageExtensions.includes(ext)) {
            const relativePath = path.relative(PUBLIC_DIR, file);
            const pathParts = relativePath.split(path.sep);
            const folder = pathParts[0];
            const baseName = path.basename(file, ext);
            
            // Skip already processed thumbnails
            if (baseName.endsWith('_thumb')) continue;

            const config = CONFIG[folder] || { quality: 80 };
            const webpPath = path.join(PUBLIC_DIR, path.dirname(relativePath), `${baseName}.webp`);

            console.log(`Processing: ${relativePath}`);

            try {
                let pipeline = sharp(file);
                const metadata = await pipeline.metadata();

                if (config.width && metadata.width > config.width) {
                    pipeline = pipeline.resize({ width: config.width, withoutEnlargement: true });
                    console.log(`  - Resizing from ${metadata.width}px to ${config.width}px`);
                }

                const isWebP = ext === '.webp';
                const tempPath = webpPath + '.tmp';
                const outputPath = isWebP ? tempPath : webpPath;

                await pipeline
                    .webp({ quality: config.quality || 80, effort: 6 })
                    .toFile(outputPath);
                
                if (isWebP) {
                    fs.renameSync(tempPath, webpPath);
                }

                console.log(`  - Optimized WebP: ${webpPath}`);

                // Create thumbnails for specific categories
                if (['guide', 'needdriver'].includes(folder)) {
                    const thumbPath = path.join(PUBLIC_DIR, path.dirname(relativePath), `${baseName}_thumb.webp`);
                    await sharp(file)
                        .resize({ width: 400, withoutEnlargement: true })
                        .webp({ quality: 70, effort: 6 })
                        .toFile(thumbPath);
                    console.log(`  - Created Thumbnail: ${thumbPath}`);
                }
            } catch (err) {
                console.error(`  - Error processing ${relativePath}: ${err.message}`);
            }
        }
    }
}

optimize().then(() => {
    console.log('Optimization complete!');
}).catch(err => {
    console.error('Fatal error during optimization:', err);
});
