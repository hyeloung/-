const fs = require('fs');
let app = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', 'utf8');

const target = `            if (num === 1 || num === 2 || num === 3 || num === 4 || num === 5 || num === 6 || num === 7 || num === 8 || num === 9 || num === 10 || num === 11 || num === 12 || num === 13 || num === 14 || num === 15 || num === 16) {
                canvas.classList.add('hidden');
                const targetImg = document.getElementById(\`page\${num}-img\`);
                if (targetImg) targetImg.classList.remove('hidden');
                wrapper.style.height = 'auto';
                container.style.backgroundColor = '#fff';`;

const replacement = `            if (num >= 1 && num <= 16) {
                canvas.classList.add('hidden');
                const targetImg = document.getElementById(\`page\${num}-img\`);
                if (targetImg) {
                    targetImg.classList.remove('hidden');
                    if (window.innerWidth <= 768) {
                        targetImg.style.height = window.innerHeight + 'px';
                        targetImg.style.objectFit = 'fill';
                    } else {
                        targetImg.style.height = '';
                        targetImg.style.objectFit = '';
                    }
                }
                wrapper.style.height = 'auto';
                container.style.backgroundColor = '#fff';`;

app = app.replace(target, replacement);

// Bump version in index.html to ensure cache clears
let html = fs.readFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', 'utf8');
html = html.replace('app.js?v=32', 'app.js?v=33');
html = html.replace('style.css?v=32', 'style.css?v=33');
fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\index.html', html, 'utf8');

fs.writeFileSync('C:\\Users\\LG\\Desktop\\PO\\app.js', app, 'utf8');
