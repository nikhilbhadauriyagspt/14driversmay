import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');

const CONFIG = {
    'guide': { width: 500, quality: 75, avifQuality: 60 },
    'needdriver': { width: 500, quality: 75, avifQuality: 60 },
    'images': { width: 800, quality: 80, avifQuality: 65 },
    'banner': { width: 1400, quality: 80, avifQuality: 70 },
    'logo': { quality: 90, avifQuality: 80 }
};

const DEFAULT_CONFIG = { quality: 80, avifQuality: 65 };

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

async function processImage(file) {
    const ext = path.extname(file).toLowerCase();
    const relativePath = path.relative(PUBLIC_DIR, file);
    const pathParts = relativePath.split(path.sep);
    const folder = pathParts[0];
    const baseName = path.basename(file, ext);
    
    // Skip already processed versions
    if (baseName.endsWith('_thumb') || ext === '.webp' || ext === '.avif') return;

    const config = CONFIG[folder] || DEFAULT_CONFIG;
    const dirName = path.dirname(file);
    
    const webpPath = path.join(dirName, `${baseName}.webp`);
    const avifPath = path.join(dirName, `${baseName}.avif`);

    console.log(`\nProcessing: ${relativePath}`);

    try {
        let pipeline = sharp(file);
        const metadata = await pipeline.metadata();

        if (config.width && metadata.width > config.width) {
            pipeline = pipeline.resize({ width: config.width, withoutEnlargement: true });
            console.log(`  - Resizing to ${config.width}px`);
        }

        // Convert to WebP
        await pipeline
            .clone()
            .webp({ quality: config.quality, effort: 6 })
            .toFile(webpPath);
        console.log(`  - Generated WebP`);

        // Convert to AVIF
        await pipeline
            .clone()
            .avif({ quality: config.avifQuality, effort: 6 })
            .toFile(avifPath);
        console.log(`  - Generated AVIF`);

        // Optional: Also optimize the original PNG/JPG in place
        if (ext === '.png') {
            const tmpPng = path.join(dirName, `${baseName}_tmp.png`);
            await pipeline
                .clone()
                .png({ palette: true, quality: 80 })
                .toFile(tmpPng);
            fs.renameSync(tmpPng, file);
            console.log(`  - Optimized Original PNG`);
        } else if (ext === '.jpg' || ext === '.jpeg') {
            const tmpJpg = path.join(dirName, `${baseName}_tmp.jpg`);
            await pipeline
                .clone()
                .jpeg({ quality: 80, mozjpeg: true })
                .toFile(tmpJpg);
            fs.renameSync(tmpJpg, file);
            console.log(`  - Optimized Original JPG`);
        }

        // Create thumbnails for specific categories
        if (['guide', 'needdriver'].includes(folder)) {
            const thumbWebp = path.join(dirName, `${baseName}_thumb.webp`);
            const thumbAvif = path.join(dirName, `${baseName}_thumb.avif`);
            
            await sharp(file)
                .resize({ width: 400, withoutEnlargement: true })
                .webp({ quality: 70 })
                .toFile(thumbWebp);
            
            await sharp(file)
                .resize({ width: 400, withoutEnlargement: true })
                .avif({ quality: 55 })
                .toFile(thumbAvif);
            
            console.log(`  - Created Thumbnails (WebP & AVIF)`);
        }
    } catch (err) {
        console.error(`  - Error: ${err.message}`);
    }
}

async function optimize() {
    console.log('--- Starting Image Optimization Tool ---');
    const files = await walk(PUBLIC_DIR);
    const imageExtensions = ['.png', '.jpg', '.jpeg'];

    const targetFiles = files.filter(f => imageExtensions.includes(path.extname(f).toLowerCase()));
    
    console.log(`Found ${targetFiles.length} images to process.`);

    for (const file of targetFiles) {
        await processImage(file);
    }
    
    console.log('\n--- Optimization Complete! ---');
}

optimize().catch(err => {
    console.error('Fatal error:', err);
});

