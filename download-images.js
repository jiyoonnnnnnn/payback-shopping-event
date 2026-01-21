// 이미지 다운로드 스크립트
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  { url: 'http://localhost:3845/assets/2f7e8fa57c5b5b00a77e3e0ae1fef4afb541b8c2.png', name: 'main-image.png' },
  { url: 'http://localhost:3845/assets/596e3d41bec2da477b7202d678cf9d5ed5598f35.png', name: 'online-shopping.png' },
  { url: 'http://localhost:3845/assets/8e3950092ef59ff5f52bc306eb28f87de3a26234.png', name: 'trophy.png' },
  { url: 'http://localhost:3845/assets/8f1840c535ba65c40fe9c58dac566c30aabab6b9.png', name: 'reward-gift.png' },
  { url: 'http://localhost:3845/assets/ec16a4de6cf280f3f73e4932dade68328d5c17db.svg', name: 'ellipse-6085.svg' },
  { url: 'http://localhost:3845/assets/9b13b4209b14c5ec0a8e4148d7eca4d89fd80121.svg', name: 'ellipse-6087.svg' },
  { url: 'http://localhost:3845/assets/5daa3aa2e55d5989f396c8529d2b7d365f472e13.svg', name: 'line.svg' },
  { url: 'http://localhost:3845/assets/cfbd307dae354faf973331e1edb38d6ab5512791.svg', name: 'conts.svg' },
  { url: 'http://localhost:3845/assets/b30fb91b37df4957078ca55bee65f63be6c124a7.svg', name: 'conts1.svg' },
  { url: 'http://localhost:3845/assets/a16c7feb6d5a9fa4d84d09a4ba5241a272b7f271.svg', name: 'conts2.svg' },
];

const imagesDir = path.join(__dirname, 'public', 'images');

// 디렉토리 생성
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${path.basename(filepath)}`);
          resolve();
        });
      } else {
        fs.unlink(filepath, () => {});
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('이미지 다운로드를 시작합니다...\n');
  
  for (const image of images) {
    const filepath = path.join(imagesDir, image.name);
    try {
      await downloadImage(image.url, filepath);
    } catch (error) {
      console.error(`✗ Failed: ${image.name} - ${error.message}`);
    }
  }
  
  console.log('\n다운로드 완료!');
}

downloadAll();
