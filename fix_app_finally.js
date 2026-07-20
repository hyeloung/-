const fs = require('fs');
let app = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', 'utf8');

const target = `            if (num >= 1 && num <= 16) {
                canvas.classList.add('hidden');
                const targetImg = document.getElementById(\`page\${num}-img\`);
                if (targetImg) {
                    targetImg.classList.remove('hidden');
                    // On mobile (<= 1024px), explicitly set height in pixels instead of CSS vh to prevent zooming issues
                    if (window.innerWidth <= 1024) {
                        targetImg.style.height = window.innerHeight + 'px';
                        targetImg.style.objectFit = 'fill';
                    } else {
                        targetImg.style.height = '100vh';
                        targetImg.style.width = 'auto';
                        targetImg.style.margin = '0 auto';
                        targetImg.style.objectFit = 'contain';
                    }
                }
                wrapper.style.height = 'auto';
                container.style.backgroundColor = '#000';`;

const replacement = `            if (num >= 1 && num <= 16) {
                canvas.classList.add('hidden');
                const targetImg = document.getElementById(\`page\${num}-img\`);
                if (targetImg) {
                    targetImg.classList.remove('hidden');
                    // Reset inline styles
                    targetImg.style.height = '';
                    targetImg.style.width = '';
                    targetImg.style.margin = '';
                    targetImg.style.objectFit = '';
                }
                wrapper.style.height = 'auto';
                container.style.backgroundColor = '#fff';`;

app = app.replace(target, replacement);

fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', app, 'utf8');
