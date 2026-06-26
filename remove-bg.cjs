const fs = require('fs');
const PNG = require('pngjs').PNG;

const inputPath = 'src/assets/ChatGPT Image Jun 26, 2026, 02_29_36 PM.png';
const outputPath = 'src/assets/logo-transparent.png';

fs.createReadStream(inputPath)
  .pipe(new PNG())
  .on('parsed', function() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        let idx = (this.width * y + x) << 2;
        
        let r = this.data[idx];
        let g = this.data[idx+1];
        let b = this.data[idx+2];
        
        // Simple threshold to remove white background
        if (r > 240 && g > 240 && b > 240) {
            this.data[idx+3] = 0; // Make transparent
        } else if (r > 200 && g > 200 && b > 200) {
            // Semi-transparent for anti-aliasing edges
            let avg = (r + g + b) / 3;
            let alpha = 255 - ((avg - 200) * (255 / 55));
            this.data[idx+3] = Math.max(0, Math.min(255, alpha));
        }
      }
    }

    this.pack().pipe(fs.createWriteStream(outputPath));
    console.log("Successfully removed background!");
  })
  .on('error', function(err) {
    console.error("Error:", err);
  });
